import { StyleSheet } from "react-native"
import { colors } from "../../../../styles/color"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray700,
    alignItems: 'center',
    justifyContent: 'center',
    height: 160,
    marginTop: 50,
    flexDirection: 'row',
  },
  title: {
    fontSize: 48,
    fontWeight: '800',
  }
})