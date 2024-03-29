import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export default function EmptyList() {
  return (
    <View style={styles.emptyContainer}>
      <Image 
        source={require('../../../../../../assets/clipboard.png')}
      />
      <Text style={styles.mainText}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}