import { DefaultTheme } from "@react-navigation/native";
import { colors } from "../config/colors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.loginBkColor,
    background: colors.white,
  },
};
