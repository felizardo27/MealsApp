import { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, Text, ScrollView, Button } from "react-native";
import { MEALS } from "../../data/dummy-data";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import MealDetails from "../../components/MealDetails";
import Subtitle from "../../components/MealDetail/Subtitle";
import List from "../../components/MealDetail/List";
import IconButton from "../../components/IconButton";

export default function DetailsScreen() {
  const { mealId } = useRoute().params;
  const selectMeal = MEALS.find((meal) => meal.id === mealId);
  const { setOptions } = useNavigation();

  function headerButtonPressHandler() {
    console.log("press");
  }

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="#FFF"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [useNavigation(), headerButtonPressHandler]);

  return (
    <ScrollView style={styles.root}>
      <Image source={{ uri: selectMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectMeal.title}</Text>
      <MealDetails
        duration={selectMeal.duration}
        complexity={selectMeal.complexity}
        affordability={selectMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#fff",
  },
  detailText: {
    color: "#fff",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
