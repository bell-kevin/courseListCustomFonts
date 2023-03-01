import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CourseCard = ({ id, name, description }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.courseTitle}>{id}: {name}</Text>
      <Text style={styles.courseDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'ivory',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  courseTitle: {
    fontFamily: 'custom-font-1',
    fontSize: 20,
  },
  courseDescription: {
    fontFamily: 'custom-font-2',
    fontSize: 16,
  },
});

export default CourseCard;
