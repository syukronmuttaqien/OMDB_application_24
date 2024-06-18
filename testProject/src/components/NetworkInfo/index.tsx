import { View } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../../theme/colors";
import { Spacing } from "../Spacing";
import { Text } from "../Text";

interface Props {
  visible: boolean;
}

export const NetworkInfo = ({ visible }: Props) => {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Icon name="exclamation-circle" size={80} color={Colors.primary} />
      <Spacing orientation="vertical" amount={16} />
      <Text>No internet connection, Please reconnect.</Text>
    </View>
  );
};
