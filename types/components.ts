

export interface Prefecture {
  id: number;
  name_en: string;
  name_jp: string;
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
    type:       MunicipalitieType;
    prepecture: Prefecture;
}

export interface PrefectureMapColumn {
  name: string;
  positions: string[];
  style: React.CSSProperties;
}