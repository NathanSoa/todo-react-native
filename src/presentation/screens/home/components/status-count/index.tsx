import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
  label: 'Concluídas' | 'Criadas',
  color: string,
  data: number
}

export default function StatusCount({ label, color, data }: Props) {
  return (
    <View style={styles.statusCountContainer}>
      <Text style={{
        ...styles.statusText,
        color
      }}>
        {label}
      </Text>
      <View style={styles.countBackground}>
        <Text style={styles.countText}>{data}</Text>
      </View>
    </ View>
  )
}