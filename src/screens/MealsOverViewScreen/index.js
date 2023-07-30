import { StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../../data/dummy-data';

export default function MealsOverViewScreen({ route }) {
  const { categoryId } = route.params;

  return (
    <View style={styles.container}>
      <Text>Meals OverView Screen - {categoryId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
});
