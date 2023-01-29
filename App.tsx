import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import FormikSample from './sample/FormikSample'
import { ToDoProvider } from './store/todoContext'
import TodoList from './screens/TodoList'
import AddTodo from './screens/AddTodo'

const App = () => {
  return (
    <SafeAreaView>
        <ToDoProvider>
          <AddTodo/>
          <TodoList/>
        </ToDoProvider>
    </SafeAreaView>
  )
}

export default App