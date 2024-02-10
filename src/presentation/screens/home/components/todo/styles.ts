import { StyleSheet } from "react-native";
import { colors } from "../../../../styles/color";

export const styles = StyleSheet.create({
  todoContainer:{
    backgroundColor: colors.gray500,
    padding: 20,
    borderRadius: 10,
    borderColor: colors.gray400,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  toggleTodo: {
    height: 24,
    width: 24,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: colors.blue
  },
  toggleTodoCompleted: {
    backgroundColor: colors.purpleDark,
    borderColor: colors.purpleDark,
    justifyContent: 'center',
    alignItems: 'center'
  },
  todoText: {
    fontSize: 18,
    color: colors.gray100,
    flex: 1,
    marginLeft: 16 
  },
  todoTextCompleted: {
    textDecorationLine: 'line-through',
    color: colors.gray300
  }
})