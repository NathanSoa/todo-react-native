import { StyleSheet } from "react-native"
import { colors } from "../../styles/color"

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 8,
    marginTop: -30,
  },
  input: {
    backgroundColor: colors.gray500,
    borderColor: colors.gray700,
    height: 60,
    padding: 16,
    flex: 1,
    borderRadius: 8,
    color: colors.gray100,
  },
  button: {
    height: 60,
    width: 60,
    backgroundColor: colors.blueDark,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingBottom: 16,
    borderBottomColor: colors.gray400,
    borderBottomWidth: 1,
    marginBottom: 16,
  }
})