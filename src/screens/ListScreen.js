import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 27 },
    { name: "Friend #2", age: 33 },
    { name: "Friend #3", age: 54 },
    { name: "Friend #4", age: 18 },
    { name: "Friend #5", age: 22 },
    { name: "Friend #6", age: 46 },
    { name: "Friend #7", age: 34 },
    { name: "Friend #8", age: 21 },
    { name: "Friend #9", age: 19 },
    { name: "Friend #10", age: 20 },
  ];
  return (
    <FlatList
      // horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default ListScreen;
