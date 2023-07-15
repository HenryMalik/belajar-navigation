import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const Index = () => {
  const { params } = useRoute();
  return (
    <View>
      <Text>Selamat Datang, {params.name} </Text>
    </View>
  );
};

export default Index;
