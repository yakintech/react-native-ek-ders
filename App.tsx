import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import FormikSample from './sample/FormikSample'
import { ToDoProvider } from './store/todoContext'
import TodoList from './screens/TodoList'
import AddTodo from './screens/AddTodo'
import axios from 'axios'

const App = () => {


  useEffect(() => {

    const controller = new AbortController();

    axios.get('https://northwind.vercel.app/api/products', {
      signal: controller.signal
    }).then(function (response) {
      //...
    });

    let interval = setInterval(() => {
      //get data
    }, 1000)

    


    return () => {
      controller.abort();
      clearInterval(interval);
    }
  }, [])



  return (
    <SafeAreaView>
      <ToDoProvider>
        <AddTodo />
        <TodoList />
      </ToDoProvider>
    </SafeAreaView>
  )
}

export default App