import { View } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../../../../theme/colors";
import { Spacing, Text } from "../../../../components";

interface Props {
  visible: boolean;
  state: "empty" | "not-found";
}

export const EmptyPlaceholder = ({ state, visible = true }: Props) => {
  const iconName = state === "empty" ? "search" : "question";
  const caption =
    state === "empty"
      ? "You can start search movie title."
      : "Movies you search not found.";

  if (!visible) {
    return null;
  }

  return (
    <View style={styles.placeholderContainer}>
      <Icon name={iconName} size={80} color={Colors.primary} />
      <Spacing orientation="vertical" amount={12} />
      <Text size={16}>{caption}</Text>
    </View>
  );
};
