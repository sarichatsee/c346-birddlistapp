import React from "react";
import { View, Text, Button, SectionList, StyleSheet } from "react-native";
import birdData from "./birdData.js";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Add New Bird" onPress={() => navigation.navigate("AddBird")} />
      <SectionList
        sections={birdData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>
              {item.scientificName} ({item.status})
            </Text>
          </View>
        )}
        renderSectionHeader={({ section: { family } }) => (
          <Text style={styles.header}>{family}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#f8f8f8",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
  },
});

export default Home;
