import Image from "next/image";
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';


export default function Home() {

    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const svg = d3.select(svgRef.current)
        .append('svg')
        .attr('width', 500)
        .attr('height', 300)
    }, [])



  return (
    <div>
      <h2>Bar Chart</h2>
      <div>
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
}
