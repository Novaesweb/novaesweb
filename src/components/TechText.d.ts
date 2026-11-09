import type { ComponentType, CSSProperties } from "react";

declare const TechText: ComponentType<{
  text: string;
  fontWeight?: number;
  fontSize?: number;
  intro?: string;
  introDuration?: number;
  reveal?: string;
  specks?: number;
  accentColor?: string;
  clickKick?: boolean;
  draggable?: boolean;
  selection?: boolean;
  sweep?: boolean;
  guides?: boolean;
  labels?: boolean;
  className?: string;
  style?: CSSProperties;
}>;
export default TechText;
