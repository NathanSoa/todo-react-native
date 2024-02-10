import { StyleSheet } from "react-native"
import { colors } from "../../../../styles/color"

export const styles = StyleSheet.create({
  statusCountContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  countBackground: {
    backgroundColor: colors.gray400,
    width: 32,
    height: 20,
    borderRadius: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    color: colors.gray200,
    fontWeight: 'bold',
  }
})