import { Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "small";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      className={
        color + type === "default"
          ? "text-base text-primary-200"
          : type === "title"
          ? "text-2xl font-bold text-primary-200"
          : type === "defaultSemiBold"
          ? "text-base font-semibold text-primary-300"
          : type === "subtitle"
          ? "text-lg font-bold"
          : type === "link"
          ? "text-base text-primary underline"
          : type === "small"
          ? "text-sm text-primary-400 p-1"
          : ""
      }
      {...rest}
    />
  );
}
