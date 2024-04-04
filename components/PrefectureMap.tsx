"use client";

import * as d3 from "d3";
import React, { useEffect, useRef, useState } from "react";
import * as topojson from "topojson-client";
import { Topology } from "topojson-specification";
import { Geometry, GeoJsonObject, FeatureCollection } from "geojson";
import { Prefecture } from "@/types/components";
import { prefectureColumns, prefectures } from "@/utils/prefectures";

interface Feature<G extends Geometry | null = Geometry> extends GeoJsonObject {
  type: "Feature";
  geometry: G;
  properties: {
    nam: string;
    nam_ja: string;
    id: number;
  };
}

interface MapProps {
  selectedId: number;

  onSelected: (id: number) => void;
}

const PrefectureMap = ({ selectedId, onSelected }: MapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [geoData, setGeoData] = useState<Topology>();

  useEffect(() => {
    const fetchTopologies = async () => {
      const data = (await d3.json("prefectures.topojson.bak")) as Topology;
      setGeoData(data);
    };

    fetchTopologies();
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (geoData && container) {
      const svg = d3.select("#japan-map-svg");
      const json = topojson.feature(geoData, geoData.objects.prefectures);
      const geojson = json as FeatureCollection;
      const projection = d3
        .geoMercator()
        .rotate([90, -15])
        .fitSize([container.clientWidth, container.clientHeight], geojson);
      const path = d3.geoPath().projection(projection);
      const features = geojson.features as Feature[];

      svg
        .selectAll(".tract")
        .data(features)
        .enter()
        .append("path")
        .attr("id", (d) => "prefecture-" + String(d.properties.id))
        .attr("class", "tract")
        .attr("stroke", "black")
        .attr("stroke-width", 0.5)
        .attr("d", path)
        .attr("fill", "#cccccc");
    }
  }, [geoData]);

  useEffect(() => {
    d3.selectAll("#japan-map-svg .tract").attr("fill", "#cccccc");
    const pathElement = d3.select(`#prefecture-${selectedId}`);
    pathElement.attr("fill", "#8EC1E2");
  }, [selectedId]);

  const onMouseOver = (prefecture: Prefecture) => {
    // onSelected(prefecture.id);
  };

  const onMouseOut = () => {
    // onSelected(0);
  };

  return (
    <div
      className="relative bg-slate-300 rounded-md pb-[50%]"
      ref={containerRef}
    >
      {prefectureColumns.map((column, index) => (
        <div
          key={index}
          className="absolute z-10 flex flex-col gap-2"
          style={column.style}
        >
          {prefectures
            .filter((item) => column.positions.includes(item.name_en))
            .map((item) => (
              <button
                key={item.id}
                onMouseOver={() => onMouseOver(item)}
                onMouseOut={() => onMouseOut()}
                onClick={() => onSelected(item.id)}
                className="text-sm flex cursor-pointer text-slate-900 rounded shadow bg-gray-50 hover:bg-gray-200 px-2 py-1"
              >
                <span className="m-auto">{item.name_en}</span>
              </button>
            ))}
        </div>
      ))}
      <svg id="japan-map-svg" className="w-full h-full absolute" />
    </div>
  );
};

export default PrefectureMap;
