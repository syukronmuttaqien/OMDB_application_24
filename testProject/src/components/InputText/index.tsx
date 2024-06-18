import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

interface Props extends TextInputProps {}

export const InputText = (props: Props) => {
  return <TextInput style={styles.inputContainer} {...props} />;
};
