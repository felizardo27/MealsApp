import { Text } from "react-native";
import { View } from "react-native";

export default function MealItem({ title }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
