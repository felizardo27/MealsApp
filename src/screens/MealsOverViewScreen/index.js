import { FlatList, StyleSheet, View } from "react-native";
import { MEALS, CATEGORIES } from "../../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../../components/MealsList";
import MealItem from "../../components/MealsList/MealItem";

export default function MealsOverViewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

   useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    }); 
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
