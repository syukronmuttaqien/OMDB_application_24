import { StyleSheet, View } from "react-native";

interface Props {
  orientation: "horizontal" | "vertical";
  amount: number;
}

export const Spacing = ({ orientation, amount }: Props) => {
  const styles = StyleSheet.create({
    x: {
      width: amount,
    },
    y: {
      height: amount,
    },
  });

  if (orientation === "horizontal") {
    return <View style={styles.x} />;
  }

  return <View style={styles.y} />;
};
