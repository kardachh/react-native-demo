import React, { useState } from "react";
import { TextInput, Button, View, StyleSheet, Alert } from "react-native";

export const AddTodo = (props) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      props.onSubmit(value);
      setValue("");
    } else {
      //error
      Alert.alert("Enter task name first");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Enter task name..."
        // T9
        autoCorrect={false}
        // // Заглавные
        autoCapitalize="none"
        // тип клавиатуры
        // keyboardType="numeric"
      />
      <Button title={props.title} onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderColor: "green",
  },
});
