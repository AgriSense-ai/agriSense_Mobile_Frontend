import { Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
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
          ? "text-base"
          : type === "title"
          ? "text-2xl font-bold"
          : type === "defaultSemiBold"
          ? "text-base font-semibold"
          : type === "subtitle"
          ? "text-lg font-bold"
          : type === "link"
          ? "text-base text-primary underline"
          : ""
      }
      {...rest}
    />
  );
}
