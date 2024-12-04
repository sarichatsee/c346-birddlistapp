import React, { useState } from "react";
import { View, Text, TextInput, Picker, Button, StyleSheet } from "react-native";
import birdData from "./birdData.js";

const AddBird = ({ navigation }) => {
  const [name, setName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [family, setFamily] = useState("");
  const [status, setStatus] = useState("native");

  const handleAddBird = () => {
    // Find the family to add the bird under
    const familyIndex = birdData.findIndex((f) => f.family === family);
    if (familyIndex > -1) {
      birdData[familyIndex].data.push({
        id: birdData[familyIndex].data.length + 1,
        name,
        scientificName,
        status,
      });
    } else {
      // Create a new family if it doesn't exist
      birdData.push({
        family,
        data: [
          {
            id: 1,
            name,
            scientificName,
            status,
          },
        ],
      });
    }

    alert("Bird added successfully!");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Bird Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Scientific Name</Text>
      <TextInput style={styles.input} value={scientificName} onChangeText={setScientificName} />

      <Text style={styles.label}>Family</Text>
      <TextInput style={styles.input} value={family} onChangeText={setFamily} />

      <Text style={styles.label}>Status</Text>
      <Picker selectedValue={status} onValueChange={setStatus}>
        <Picker.Item label="Native" value="native" />
        <Picker.Item label="Invasive" value="invasive" />
      </Picker>

      <Button title="Add Bird" onPress={handleAddBird} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
  },
});

export default AddBird;
