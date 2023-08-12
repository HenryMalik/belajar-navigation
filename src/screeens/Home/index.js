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
          {`
        Lorem ipsum dolor sit amet consectetur. Lacus quis eleifend a porttitor id arcu curabitur nisi. Quis in ut facilisi neque arcu nullam neque. Aenean commodo sit viverra dui ipsum faucibus id. Faucibus pellentesque tincidunt dis sagittis aliquam faucibus. Mattis diam urna id adipiscing proin commodo 

        montes. Donec in id quam id semper enim. Urna maecenas fringilla id luctus morbi sit aliquam. Lorem arcu eu ultrices ullamcorper tortor arcu id. Neque dui enim amet dictum ligula non id dolor viverra. Nisl viverra commodo auctor neque ac ut odio 
        
        ullamcorper. Pretium vel adipiscing non amet pharetra cursus consequat mauris sit. Turpis commodo egestas lorem placerat eget sed convallis malesuada tortor. Natoque risus diam nulla aliquet mauris sed scelerisque. Leo fringilla posuere non risus volutpat
        
        Lorem ipsum dolor sit amet consectetur. Lacus quis eleifend a porttitor id arcu curabitur nisi. Quis in ut facilisi neque arcu nullam neque. Aenean commodo sit viverra dui ipsum faucibus id. Faucibus pellentesque tincidunt dis sagittis aliquam faucibus. Mattis diam urna id adipiscing proin commodo 

        montes. Donec in id quam id semper enim. Urna maecenas fringilla id luctus morbi sit aliquam. Lorem arcu eu ultrices ullamcorper tortor arcu id. Neque dui enim amet dictum ligula non id dolor viverra. Nisl viverra commodo auctor neque ac ut odio 
        
        ullamcorper. Pretium vel adipiscing non amet pharetra cursus consequat mauris sit. Turpis commodo egestas lorem placerat eget sed convallis malesuada tortor. Natoque risus diam nulla aliquet mauris sed scelerisque. Leo fringilla posuere non risus volutpat
        
        `}
        </Text>
      </ScrollView>
    </View>
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
});
