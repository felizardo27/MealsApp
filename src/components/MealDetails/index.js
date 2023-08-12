import { Text } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export default function MealDetails({ duration, complexity, affordability, style, textStyle }) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailText, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailText, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailText, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailText: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
