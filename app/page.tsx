"use client";

import PrefectureMap from "@/components/PrefectureMap";
import { useState } from "react";

const Index = () => {
  const [zoom, setZoom] = useState(1);

  return (
    <>
      <button
        className="p-1 text-black rounded m-2 bg-gray-200"
        onClick={() => setZoom(zoom + 1)}
      >
        zoom in
      </button>
      <button
        className="p-1 text-black rounded m-2 bg-gray-200"
        onClick={() => setZoom(zoom - 0.1)}
      >
        zoom out
      </button>
      <div className="">
        <PrefectureMap></PrefectureMap>
      </div>
    </>
  );
};

export default Index;
