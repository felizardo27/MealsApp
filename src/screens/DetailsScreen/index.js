import { useRoute } from "@react-navigation/native";
import { Text } from "react-native";

export default function DetailsScreen() {
  const { mealId } = useRoute().params;
  return (
    <Text>Details Screen id: {mealId}</Text>
  );
}