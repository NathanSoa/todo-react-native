import { View, Text } from "react-native";
import { styles } from "./styles";
import { colors } from "../../../../styles/color"

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={{
        ...styles.title,
        color: colors.blue
      }}>
        to
      </Text>
      <Text style={{
        ...styles.title,
        color: colors.purple
      }}>
        do
      </Text>
    </View>
  )
}