import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { AddTodo } from "./src/AddTodo";
import { Navbar } from "./src/Navbar";
import { Todo } from "./src/Todo";

export default function App() {
  // [] = todos, по умолчанию пустой
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title,
    // };
    // setTodos(todos.concat([newTodo]))
    // setTodos((prevTodos) => {
    //   return [...prevTodos, newTodo];
    // });
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title,
      },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View style={{ flex: 1 }}>
      <Navbar title="TODO APP!" />
      <View style={styles.container}>
        <AddTodo title="Add" onSubmit={addTodo} currentTodos={todos} />

        <FlatList
          style={{ flex: 1 }}
          keyExtractor={(item) => item.id.toString()}
          data={todos}
          renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
        />
        {/* {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
