"use client";

import { useCallback, useState } from "react";
import PrefectureMap from "./PrefectureMap";
import SearchForm from "./SearchForm";

const SearchDetails = () => {
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  const onPerfectureSelected = (id: number) => {
    if (selectedIds.has(id)) {
      selectedIds.delete(id);
    } else {
      selectedIds.add(id);
    }

    setSelectedIds(new Set(selectedIds));
  };

  return (
    <div className="flex flex-col bg-slate-300">
      <PrefectureMap
        selectedIds={selectedIds}
        onPerfectureSelected={onPerfectureSelected}
      ></PrefectureMap>
      <SearchForm
        selectedIds={selectedIds}
        onPerfectureSelected={onPerfectureSelected}
      ></SearchForm>
    </div>
  );
};

export default SearchDetails;
