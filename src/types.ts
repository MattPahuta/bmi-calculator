export type Unit = "metric" | "imperial";

export interface InfoItem {
  icon: string;
  title: string;
  description: string;
}

export type Classification = "underweight" | "healthy" | "overweight" | "obese";

export interface Range {
  min: number;
  max: number; 
}

export interface BmiInfo {
  bmi: number;
  classification: Classification;
  range: Range;
}

