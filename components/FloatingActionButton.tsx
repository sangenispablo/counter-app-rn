import { View, Text, Pressable, StyleSheet } from "react-native";

interface Props {
  label: string;
  position?: "left" | "right";
  // metodos
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FloatingActionButton({
  label,
  onPress,
  onLongPress,
  position = "right",
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.floatinButton,
        position == "right" ? styles.positionRight : styles.positionLeft,
        pressed ? { opacity: 0.5 } : { opacity: 1 },
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatinButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#65558F",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4,
  },
  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  },
});
