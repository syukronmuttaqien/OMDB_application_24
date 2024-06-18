import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./styles";
import Colors from "../../theme/colors";

interface Props {
  text: string;
}

export const Loading = ({ text = "Loading..." }: Props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={Colors.primary} size={"large"} />
      <Text>{text}</Text>
    </View>
  );
};
