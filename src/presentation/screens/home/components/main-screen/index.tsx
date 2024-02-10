import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ReactNode } from "react";

export default function MainScreen({ children }: { children: ReactNode}) {
  return (
    <View style={styles.screen}>
      <View style={styles.screenAlign}>
        {children}
      </View>
    </View>
  )
}