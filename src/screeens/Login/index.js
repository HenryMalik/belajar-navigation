import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Index = () => {
  const [username, setusername] = useState("");
  const navigation = useNavigation();
  const Login = () => {
    //your funciton here
    navigation.navigate("Home", {
      name: username,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="username"
        value={username}
        onChangeText={setusername}
      />
      <TextInput style={styles.input} placeholder="password" secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={Login}>
        <Text style={styles.text}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderColor: "gray",
    fontSize: 20,
    width: 150,
    textAlign: "center",
  },
  button: {
    backgroundColor: "black",
    width: 150,
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default Index;
