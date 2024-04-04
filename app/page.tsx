"use client";

import MunicipalitieMap from "@/components/MunicipalitieMap";
import PrefectureMap from "@/components/PrefectureMap";
import { useState } from "react";

const Index = () => {
    const [selectedId, setSelectedId] = useState(1);

  return (
    <>
      <div className="flex flex-col gap-1 w-screen">
        <PrefectureMap selectedId={selectedId} onSelected={(id) => setSelectedId(id)}></PrefectureMap>
        <MunicipalitieMap id={selectedId}></MunicipalitieMap>
      </div>
    </>
  );
};

export default Index;
