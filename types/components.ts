

export interface Prefecture {
  id: number;
  name_en: string;
  name_jp: string;
}

export interface PrefectureMapColumn {
  name: string;
  positions: string[];
  style: React.CSSProperties;
}