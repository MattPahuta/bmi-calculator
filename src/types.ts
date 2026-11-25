export type Unit = "metric" | "imperial";

export interface InfoItem {
  icon: string;
  title: string;
  description: string;
}

export interface BmiResult {
  bmi: number;
  classification: string;
  range: string;
}