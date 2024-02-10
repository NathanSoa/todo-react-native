import { StyleSheet } from "react-native";
import { colors } from "../../../../styles/color";

export const styles = StyleSheet.create({
  emptyContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    color: colors.gray300,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 16
  },
  text: {
    color: colors.gray300,
  }
})