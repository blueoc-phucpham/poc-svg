// components/JapanMap.tsx
"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";

function draw(containerRef: React.RefObject<HTMLDivElement>, japan: any) {
  if (!containerRef.current) return;

  // Create an SVG element and append it to the container div
  const svg = d3
    .select(containerRef.current)
    .append("svg")
    .attr("width", 960)
    .attr("height", 600);

  const geojson = topojson.feature(japan, japan.objects.japan);
  const projection = d3.geoMercator().fitSize([960, 600], geojson);
  const path = d3.geoPath().projection(projection);

  function handleMouseover(e: any, d: any) {
    let pixelArea = path.area(d);
    let bounds = path.bounds(d);
    let centroid = path.centroid(d);
    let measure = path.measure(d);

    d3.select("#content .info").text(
      d.properties.name +
        " (path.area = " +
        pixelArea.toFixed(1) +
        " path.measure = " +
        measure.toFixed(1) +
        ")"
    );

    d3.select("#content .bounding-box rect")
      .attr("x", bounds[0][0])
      .attr("y", bounds[0][1])
      .attr("width", bounds[1][0] - bounds[0][0])
      .attr("height", bounds[1][1] - bounds[0][1]);

    d3.select("#content .centroid")
      .style("display", "inline")
      .attr("transform", "translate(" + centroid + ")");

    console.log(d.properties.nam);
  }

//   svg
//     .append("path")
//     .attr("stroke-width", 0.5)
//     .attr("d", path(topojson.feature(japan, japan.objects.country)));

//   svg.append();

  const u = svg
    .append("g")
    .attr("class", "map")
    .selectAll("path")
    .data(geojson.features);

  console.log(geojson);

  u.enter()
    .append("path")
    .attr("class", "tract")
    .attr("d", path)
    .on("mouseover", handleMouseover);

  // Append the style for hover effects
  svg.append("style").text(`
      .tract {fill: #eee;}
      .tract:hover {fill: orange;}
      .tract-border {
        fill: none;
        stroke: #777;
        pointer-events: none;
      }
      .country {
        fill: none;
        stroke: black;
        stroke-width: 0.1;
      }
    `);
}

const JapanMap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    d3.json("https://raw.githubusercontent.com/dataofjapan/land/master/japan.topojson")
      .then((japan: any) => {
        if (containerRef.current) {
          draw(containerRef, japan);
        }
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }, []);

  return <div ref={containerRef} />;
};

export default JapanMap;
