export type Unit = "metric" | "imperial";

export interface InfoItem {
  icon: string;
  title: string;
  description: string;
}

type Classification = "underweight" | "healthy weight" | "overweight" | "obese";
type Range = {
  min: number;
  max: number; 
}

export interface BmiInfo {
  bmi: number;
  classification: Classification;
  range: Range;
}
