import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Logo from "../../assets/icon.jpeg";
const Index = () => {
  const { params } = useRoute();
  const nav = useNavigation();
  const Next = () => {
    nav.navigate("Page");
  };
  return (
    <View>
      <View style={styles.header_container}>
        <TouchableOpacity
          onPress={() => {
            nav.goBack();
          }}
        >
          <Icon size={25} name="arrow-left" />
        </TouchableOpacity>
        <Text style={styles.header_text}>Maybank Commentary</Text>
        <Icon size={25} name="share-variant-outline" />
      </View>
      <ScrollView>
        <Text style={styles.title}>
          (LEFORM MK, CP: MYR0.225, Not Rated)Second contract win post it’s
          Listing; Steel Exposure
        </Text>

        <View style={styles.row_container}>
          <Image style={styles.image} source={Logo} />
          <View>
            <Text style={[styles.gray_text, { marginBottom: 4 }]}>
              MIB SECURITIES (HK) RETAIL RESEARCH
            </Text>
            <Text style={styles.gray_text}>
              03 May, 08:00 . Maybank Commentary
            </Text>
          </View>
        </View>

        <Text style={styles.content_text}>
          { }
        </Text>
        <View >
          <TouchableOpacity style={styles.button}>
            <Text>Lorem ipsum</Text>
            <Icon size={25} name="arrow-right" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View >
  );
};

export default Index;

const styles = StyleSheet.create({
  header_container: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderColor: "#eaeaeaaa",
  },
  header_text: {
    fontSize: 20,
    fontWeight: "600",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20,
    color: "#161616",
    margin: 16,
  },
  image: {
    height: 24,
    width: 24,
    marginRight: 10,
  },
  row_container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 2,
    borderColor: "#eaeaeaaa",
  },
  gray_text: {
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 13,
    color: "#8d8d8d",
  },
  content_text: {
    fontSize: 14,
    color: "#5a5a5a",
    fontWeight: "500",
    lineHeight: 21,
    padding: 16,
    marginBottom: 50,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContentContent: "center",
    width: "25%",
    height: "50%",
    backgroundColor: "gray",
    borderTopWidth: 2,
    borderColor: "#eaeaeaaa"
  }
});
