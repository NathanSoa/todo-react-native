import { Alert, FlatList, Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { colors } from "../../styles/color";
import Header from "./components/header";
import MainScreen from "./components/main-screen";
import StatusCount from "./components/status-count";
import EmptyList from "./components/empty-list";
import { useTodo } from "../../../hooks/useTodo";
import Todo from "./components/todo";
import { useState } from "react";

export default function Home() {
  const { todos, toggleTodo, addTodo, removeTodo, countCompleted, countTotal } = useTodo()
  const [newTodo, setNewTodo] = useState('')

  const handleAdd = () => {
    if(!newTodo) return

    if(todos.find(todo => todo.title.toLowerCase() === newTodo.toLowerCase())) return Alert.alert('Essa tarefa já existe!')

    const message = `A tarefa "${newTodo}" foi adicionada!`
    Alert.alert(message)

    addTodo(newTodo)
    setNewTodo('')
  }

  const handleToggle = (title: string, isCompleted: boolean) => {
    const message = isCompleted ? `A tarefa "${title}" foi marcada como não concluída!` : `A tarefa "${title}" foi marcada como concluída!`
    Alert.alert(message)
    toggleTodo(title)
  }

  const handleRemove = (title: string) => {
    Alert.alert(`A tarefa "${title}" foi removida!`)
    removeTodo(title)
  }

  return (
    <>
      <Header />
      <MainScreen>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={colors.gray300}
            style={styles.input}
            value={newTodo}
            onChangeText={setNewTodo}
          />
          <TouchableOpacity style={styles.button} onPress={handleAdd}>
            <Image
              source={require('../../../../assets/plus.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.statusBar}>
          <StatusCount label="Criadas" color={colors.blue} data={countTotal()} />
          <StatusCount label="Concluídas" color={colors.purple} data={countCompleted()} />
        </View>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <Todo 
              text={item.title} 
              isCompleted={item.completed} 
              onToggle={() => handleToggle(item.title, item.completed)}
              onRemove={() => handleRemove(item.title)}
            />
          )}
          keyExtractor={item => item.title}
          ListEmptyComponent={<EmptyList />}
        />
      </MainScreen>
    </>
  )
}