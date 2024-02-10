import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

type Props = {
  text: string
  isCompleted: boolean
  onToggle: VoidFunction
  onRemove: VoidFunction
}

export default function Todo( { text, isCompleted, onToggle, onRemove }: Props) {
  let textStyle = styles.todoText
  let toggleStyle = styles.toggleTodo

  if (isCompleted) {
    textStyle = {
      ...textStyle,
      ...styles.todoTextCompleted
    }
    toggleStyle = {
      ...toggleStyle,
      ...styles.toggleTodoCompleted
    }
  }

  return (
    <View style={styles.todoContainer}>
      <TouchableOpacity style={toggleStyle} onPress={onToggle}>
        {
          isCompleted && 
          <Image
            source={require('../../../../../../assets/check.png')}
          />
        }
      </TouchableOpacity>
      <Text style={textStyle}>{text}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Image
          source={require('../../../../../../assets/trash.png')}
        />
      </TouchableOpacity>
    </ View>
  )
}