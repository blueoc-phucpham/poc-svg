

export interface Prefecture {
  id: number;
  name_en: string;
  name_jp: string;
  municipalities: Municipalitie[]
}

export enum MunicipalitieType {
    Capital = "Capital",
    City = "City",
    County = "County",
    SpecialWard = "SpecialWard",
    Subprefecture = "Subprefecture",
    Town = "Town",
    Village = "Village",
    Waterbody = "Waterbody",
}

export interface Municipalitie {
    id:         number;
    name_jp:    string;
    name_en: string;
    type:       string;
}

export interface PrefectureMapColumn {
  name: string;
  positions: string[];
  style: React.CSSProperties;
}