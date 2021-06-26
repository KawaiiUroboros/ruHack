import React from "react";
import { Text, View, Image, Dimensions, TouchableOpacity, Linking } from "react-native";
import { CardItemT } from "../types";
import styles, {
  LIKE_ACTIONS,
} from "../assets/styles";
import { Ionicons } from "@expo/vector-icons";

const CardItem = ({
  description,
  hasActions,
  hasVariant,
  image,
  name,
  url,
}: CardItemT) => {
  // Custom styling
  const fullWidth = Dimensions.get("window").width;

  const imageStyle = [
    {
      borderRadius: 8,
      width: hasVariant ? fullWidth / 2 - 30 : fullWidth - 80,
      height: hasVariant ? 170 : 350,
      margin: hasVariant ? 0 : 20,
    },
  ];

  const nameStyle = [
    {
      paddingTop: hasVariant ? 10 : 15,
      paddingBottom: hasVariant ? 5 : 7,
      color: "#363636",
      fontSize: hasVariant ? 15 : 30,
    },
  ];

  return (
    <View style={styles.containerCardItem}>
      <Image source={image} style={imageStyle} />

      <Text style={nameStyle}>{name}</Text>

      {description && (
        <Text style={styles.descriptionCardItem}>{description}</Text>
      )}

      {hasActions && (
        <View style={styles.actionsCardItem}>
          <TouchableOpacity style={styles.button} onPress={() => {
            if (url) {
              Linking.canOpenURL(url ?? "").then(supported => {
                if (supported) {
                  Linking.openURL(url);
                }
              });
            }
          }}>
            <View style={styles.viewButton}>
              <Text>Explore</Text>
              <Ionicons name="globe" size={25} color={LIKE_ACTIONS} />
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CardItem;
