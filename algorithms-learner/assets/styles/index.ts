import { StyleSheet, Dimensions } from "react-native";

export const PRIMARY_COLOR = "#7444C0";
export const WHITE = "#FFFFFF";
export const GRAY = "#757E90";
export const DARK_GRAY = "#363636";
export const BLACK = "#000000";

export const LIKE_ACTIONS = "#B644B2";

export const DIMENSION_WIDTH = Dimensions.get("window").width;
export const DIMENSION_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({

  containerCardItem: {
    backgroundColor: WHITE,
    borderRadius: 8,
    alignItems: "center",
    margin: 10,
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 },
  },
  descriptionCardItem: {
    color: GRAY,
    textAlign: "center",
  },
  actionsCardItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 30,
  },
  button: {
    width: 100,
    height: 60,
    borderRadius: 30,
    backgroundColor: WHITE,
    marginHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    elevation: 1,
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowColor: DARK_GRAY,
    shadowOffset: { height: 10, width: 0 },
  },
  viewButton: {
    width: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },

  bg: {
    flex: 1,
    resizeMode: "cover",
    width: DIMENSION_WIDTH,
    height: DIMENSION_HEIGHT,
  },
  top: {
    paddingTop: 50,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    paddingBottom: 10,
    fontSize: 22,
    color: DARK_GRAY
  },

  // Learn
  learnScreen: {
    marginTop: 50,
    marginHorizontal: 10,
  },

  // Favourites
  favouritesScreen: {
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 10,
  },

  // Tab Bar
  tabButtonText: {
    textTransform: "uppercase",
  },
  iconMenu: {
    alignItems: "center",
  },
});
