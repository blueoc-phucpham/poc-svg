"use client";

import * as d3 from "d3";
import React, { useEffect, useRef, useState } from "react";
import * as topojson from "topojson-client";
import { Topology } from "topojson-specification";
import {
  Geometry,
  GeoJsonObject,
  FeatureCollection,
  GeoJsonProperties,
} from "geojson";
import { Prefecture } from "@/types/components";
import { prefectureColumns, prefectures } from "@/utils/prefectures";

interface MunicipalitieProp {
  id: number;
  name_jp: string;
  type: string;
  prefecture: Prefecture;
}

interface Feature<G extends Geometry | null = Geometry> extends GeoJsonObject {
  type: "Feature";
  geometry: G;
  properties: MunicipalitieProp;
}

interface MapProps {
  selectedIds: number[];
}

const MunicipalitieMap = ({ id }: MapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [selectedId, setSelectedId] = useState(0);
  const [geoData, setGeoData] = useState<Topology>();

  useEffect(() => {
    const fetchTopologies = async () => {
      const data = (await d3.json("municipalities.topojson")) as Topology;
      setGeoData(data);
    };

    fetchTopologies();
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (geoData && container) {

      const svg = d3.select("#municipalitie-map-svg");
        svg.selectAll("path").remove()


      const json = topojson.feature(geoData, geoData.objects.municipalities);
      const geojson = json as FeatureCollection<Geometry, MunicipalitieProp>;

      const selectedMunicipalities = {
        ...geojson,
        features: geojson.features.filter(
          (m) => m.properties.prefecture.id === id
        ),
      };

      console.log(selectedMunicipalities);

      const projection = d3
        .geoMercator()
        .rotate([90, -15])
        .fitSize(
          [container.clientWidth, container.clientHeight],
          selectedMunicipalities
        );
      const path = d3.geoPath().projection(projection);
      const features = selectedMunicipalities.features as Feature[];

      const onMouseOver = (event: MouseEvent, data: Feature) => {
        setSelectedId(data.properties.id);
      };

      const onMouseOut = () => {
        setSelectedId(0);
      };

      svg
        .selectAll(".tract")
        .data(features)
        .enter()
        .append("path")
        .attr("id", (d) => "municipalitie-" + String(d.properties.id))
        .attr("class", "tract")
        .attr("stroke", "black")
        .attr("stroke-width", 0.5)
        .attr("d", path)
        .attr("fill", "#cccccc")
        .on("mouseover", onMouseOver);
    }
  }, [geoData, id]);

  useEffect(() => {
    d3.selectAll("#municipalitie-map-svg .tract").attr("fill", "#cccccc");
    const pathElement = d3.select(`#municipalitie-${selectedId}`);
    pathElement.attr("fill", "#8EC1E2");
  }, [selectedId]);

  return (
    <div
      className="relative bg-slate-300 rounded-md pb-[50%]"
      ref={containerRef}
    >
      <svg id="municipalitie-map-svg" className="w-full h-full absolute" />
    </div>
  );
};

export default MunicipalitieMap;
