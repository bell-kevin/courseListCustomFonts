import React from 'react';
import { View, StyleSheet, FlatList, StatusBar, Text } from 'react-native';
import CourseCard from './Card/CourseCard';
import { useFonts } from 'expo-font';

const courses = [
  { id: 'SDEV1022', name: 'HTML CSS Basics', description: 'Learn the basics of HTML and CSS for web development.' },
  { id: 'SDEV1023', name: 'JavaScript Fundamentals', description: 'Introduction to JavaScript programming language.' },
  { id: 'SDEV1024', name: 'React Native', description: 'Building native mobile apps with React.' },
  { id: 'SDEV1025', name: 'Database Systems', description: 'Design and implementation of database systems.' },
  { id: 'SDEV1026', name: 'Software Engineering', description: 'Methods and practices for software development projects.' },
];

const App = () => {
  const [fontsLoaded] = useFonts({
    'custom-font-1': require('./assets/fonts/OpenSans-Bold.ttf'),
    'custom-font-2': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  const renderItem = ({ item }) => (
    <CourseCard id={item.id} name={item.name} description={item.description} />
  );

  if (!fontsLoaded) {
    return null; // Return empty view or loading screen while fonts are being loaded
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#F5F5F5" />
      <Text style={{ fontFamily: 'custom-font-1', fontSize: 25, textAlign: 'center' }}>Course Listing</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  itemSeparator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
});

export default App;
