/**
 * Componente para definir colores de la app, dimensiones, tama;os de texto, paddings, etc.
 */

import {
  Dimensions,
  Platform
} from "react-native";

/* Dimensions ============================================ */

export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width,
  buttonWidth: Dimensions.get("window").width - 80
};

/* Colors ============================================ */

export const colors = {

  colorPrimaryDark: "#8E54E9",
  colorPrimary: "#8E54E9",
  colorAccent: "#4776e6",
  colorSecondary: "#4776e6",
  backgroundGrayColor: "#fafafa",

  primaryTextD: "rgba(0, 0, 0, .87)",
  secondaryTextD: "rgba(0, 0, 0, .54)",
  disableTextD: "rgba(0, 0, 0, .38)",
  dividersD: "rgba(0, 0, 0, .12)",

  primaryTextL: "rgba(255, 255, 255, 1.0)",
  secondaryTextL: "rgba(255, 255, 255, .7)",
  disableTextL: "rgba(255, 255, 255, .5)",
  dividersL: "rgba(255, 255, 255, .2)",

  activeIconD: "rgba(0, 0, 0, .54)",
  inactiveIconD: "rgba(0, 0, 0, .38)",

  activeIconL: "rgba(255, 255, 255, 1.0)",
  inactiveIconL: "rgba(255, 255, 255, .5)"

};

/* Paddings ============================================ */

export const padding = {
  sm: 8,
  sm1: 12,
  lg: 16,
  lg1: 24,
  xl: 32,
  xl2: 64
};

/* Fonts ============================================ */

export const fonts = {
  caption: 12,
  button: 14,
  body2: 14,
  subHeading: 16,
  title: 20,
  headline: 24,
  display1: 34,
  display2: 45,
  display3: 56,
  display4: 67,
  light: 112,
  ...Platform.select({
    ios: {
      system: "System",
      secondary: "",
      app: "BebasNeue"
    },
    android: {
      system: "Roboto",
      secondary: "",
      app: "BebasNeue"
    }
  })
};
