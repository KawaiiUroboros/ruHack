import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import { CardItem } from "../components";
import algorithms from "../data/data";
import styles from "../assets/styles";

const Favourites = () => (
  <ImageBackground
    source={require("../assets/images/bg.png")}
    style={styles.bg}
  >
    <View style={styles.favouritesScreen}>
      <View style={styles.top}>
        <Text style={styles.title}>Favourites</Text>
      </View>

      <FlatList
        numColumns={2}
        data={algorithms}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <CardItem
              image={item.image}
              name={item.name}
              hasVariant
            />
          </TouchableOpacity>
        )}
      />
    </View>
  </ImageBackground>
);

export default Favourites;
