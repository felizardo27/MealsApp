import MealsList from "../../components/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../../store/context/favorites-context";
import { MEALS } from "../../data/dummy-data";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";

export default function FavoritesScreen() {
  const { ids } = useContext(FavoritesContext);
  const favoritesMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (favoritesMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorites meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoritesMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  }
});
