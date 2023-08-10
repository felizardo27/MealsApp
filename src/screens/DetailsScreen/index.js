import { useRoute } from "@react-navigation/native";
import { Image, Text } from "react-native";
import { MEALS } from "../../data/dummy-data";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import MealDetails from "../../components/MealDetails";

export default function DetailsScreen() {
  const { mealId } = useRoute().params;

  const selectMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: selectMeal.imageUrl }} style={styles.image} />
      <Text>{selectMeal.title}</Text>
      <MealDetails
        duration={selectMeal.duration}
        complexity={selectMeal.complexity}
        affordability={selectMeal.affordability}
      />
      <Text>Ingredients</Text>
      {selectMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectMeal.steps.map((steps) => (
        <Text key={steps}>{steps}</Text>
      ))}
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
});
