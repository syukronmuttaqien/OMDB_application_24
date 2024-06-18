import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";
import Colors from "../../../../theme/colors";

export const NextPageLoading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={Colors.primary} />
    </View>
  );
};
