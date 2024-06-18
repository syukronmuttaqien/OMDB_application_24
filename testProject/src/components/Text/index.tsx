import {
  Text as BaseText,
  StyleProp,
  StyleSheet,
  TextProps,
  TextStyle,
} from "react-native";
import { styles } from "./styles";

interface Props extends TextProps {
  size?: number;
  variant?: "bold" | "regular" | "semi-bold";
  italic?: boolean;
  underline?: boolean;
  color?: string;
}

const getFontWeight = (variant: "bold" | "regular" | "semi-bold") => {
  if (variant === "semi-bold") {
    return "600";
  }

  if (variant === "bold") {
    return "bold";
  }

  return "400";
};

export const Text = (props: Props) => {
  const {
    size = 12,
    variant = "regular",
    italic = false,
    underline = false,
    color = "black",
  } = props;
  const styleApplied: StyleProp<TextStyle> = [];

  // Base Style
  styleApplied.push({
    fontSize: size,
    fontWeight: getFontWeight(variant),
    color,
  });

  if (italic) {
    styleApplied.push(styles.italic);
  }

  if (underline) {
    styleApplied.push(styles.underline);
    styleApplied.push({
      textDecorationColor: color,
    });
  }

  return <BaseText style={styleApplied} {...props} />;
};
