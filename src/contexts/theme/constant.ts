import { alpha as muiAlpha } from "@mui/material/styles";

export const HTML_FONT_SIZE = 16;
export const pxToRem = (value: number) => {
  return `${value / HTML_FONT_SIZE}rem`;
};
export const alpha = (color: any, opacity: number): string => {
  return muiAlpha(color, opacity);
};
