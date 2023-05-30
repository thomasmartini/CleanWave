import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const CollectedPage = () => {
  const collectedItems = [
    { title: 'Item 1', price: 10 },
    { title: 'Item 2', price: 20 },
    { title: 'Item 3', price: 15 },
  ];

  const notVerifiedItems = [
    { title: 'Item 4', price: 5 },
    { title: 'Item 5', price: 12 },
    { title: 'Item 6', price: 8 },
  ];

  const totalCollected = collectedItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Total Collected: €{totalCollected}</Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Collected</Text>
          {collectedItems.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>€{item.price}</Text>
            </View>
          ))}
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Not yet verified</Text>
          {notVerifiedItems.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>€{item.price}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0782F9',
  },
  listContainer: {
    marginBottom: 20,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginBottom: 10,
  },
  itemTitle: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
  },
  itemPrice: {
    fontSize: 16,
    color: '#888888',
  },
});

export default CollectedPage;
