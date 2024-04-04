"use client";

import MunicipalitieMap from "@/components/MunicipalitieMap";
import PrefectureMap from "@/components/PrefectureMap";
import SearchDetails from "@/components/SearchDetails";
import { useState } from "react";

const Index = () => {
    const [selectedId, setSelectedId] = useState(1);

  return (
    <>
      <div className="flex flex-col gap-1 w-screen">
        <SearchDetails></SearchDetails>
      </div>
    </>
  );
};

export default Index;
