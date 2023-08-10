import { Text } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export default function MealDetails({ duration, complexity, affordability }) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailText}>{duration}m</Text>
      <Text style={styles.detailText}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailText}>{affordability.toUpperCase()}</Text>
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
