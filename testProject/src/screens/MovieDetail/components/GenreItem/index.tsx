import { View } from "react-native";
import { styles } from "./styles";
import { Text } from "../../../../components";
import Colors from "../../../../theme/colors";

interface Props {
  text: string;
}

export const GenreItem = ({ text }: Props) => {
  return (
    <View style={styles.container}>
      <Text color={Colors.textPrimary} size={12}>
        {text}
      </Text>
    </View>
  );
};
