// components/JapanMap.tsx
"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";

function draw(svgRef: React.RefObject<SVGSVGElement>, japan: any) {
  if (!svgRef.current) return;

  // Create an SVG element and append it to the container div
  const svg = d3.select(svgRef.current);

  const geojson = topojson.feature(japan, japan.objects.japan);
  const newjson = {
    type: geojson.type,
    features: geojson.features,
  };

  const projection = d3.geoMercator().fitSize([960, 600], newjson);
  const path = d3.geoPath().projection(projection);

  function handleMouseover(e: any, d: any) {
    let pixelArea = path.area(d);
    let bounds = path.bounds(d);
    let centroid = path.centroid(d);
    let measure = path.measure(d);

    d3.select("#content .info").text(
      d.properties.nam +
        " (path.area = " +
        pixelArea.toFixed(1) +
        " path.measure = " +
        measure.toFixed(1) +
        ")"
    );

    d3.select("#content .centroid")
      .style("display", "inline")
      .attr("transform", "translate(" + centroid + ")");

    // d3.select("#content .bounding-box rect")
    //   .attr("x", bounds[0][0])
    //   .attr("y", bounds[0][1])
    //   .attr("width", bounds[1][0] - bounds[0][0])
    //   .attr("height", bounds[1][1] - bounds[0][1]);

    console.log(d.properties.nam);
  }

  //   svg
  //     .append("path")
  //     .attr("stroke-width", 0.5)
  //     .attr("d", path(topojson.feature(japan, japan.objects.country)));

  //   svg.append();

  const u = svg
    .select(".map")
    .selectAll("path")
    .data(geojson.features);

  console.log(geojson);

  u.enter()
    .append("path")
    .attr("class", "tract")
    .attr("stroke", "black")
    .attr("stroke-width", 0.5)
    .attr("d", path)
    .on("mouseover", handleMouseover);

}

const JapanMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    d3.json(
      "https://raw.githubusercontent.com/dataofjapan/land/master/japan.topojson"
    )
      .then((japan: any) => {
        if (svgRef.current && !isMounted.current) {
          draw(svgRef, japan);
        }

        isMounted.current = true;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }, []);

  return (
    <div id="content">
      <div className="info">Hover over a country</div>
      <svg ref={svgRef} width="960px" height="600px">
        <g className="map"></g>
        <g className="bounding-box">
          <rect></rect>
        </g>
        <g className="centroid">
          <circle r="2"></circle>
        </g>
      </svg>
    </div>
  );
};

export default JapanMap;
