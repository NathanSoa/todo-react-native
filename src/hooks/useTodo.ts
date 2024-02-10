import { useState } from "react"

type Todo = {
  title: string
  completed: boolean
}

export const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      title: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
      completed: false
    },
    {
      title: 'Estudar React Native',
      completed: true
    }
  ])

  const addTodo = (todo: string) => {
    setTodos(prev => [...prev, { title: todo, completed: false }])
  }

  const removeTodo = (todo: string) => {
    setTodos(prev => prev.filter(item => item.title !== todo))
  }

  const toggleTodo = (todo: string) => {
    setTodos(prev =>
      prev.map(item =>
        item.title === todo ? { ...item, completed: !item.completed } : item
      )
    )
  }
  
  const countCompleted = () => todos.filter(todo => todo.completed).length

  const countTotal = () => todos.length

  return { todos, addTodo, removeTodo, toggleTodo, countCompleted, countTotal }
}