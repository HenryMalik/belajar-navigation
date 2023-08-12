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
      <View style={styles.login}>
        <TextInput
          style={styles.input}
          placeholder="username"
          value={username}
          onChangeText={setusername}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={Login}>
          <Text style={styles.text}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C7E3F0",
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
    backgroundColor: "white",
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
  login: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "72%",
    height: "25%",
    borderWidth: 2,
    borderColor: "skyblue",
    borderRadius: 15,
  },
});

export default Index;
