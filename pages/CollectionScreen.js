import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CollectedAmount = ({ amount }) => {
  return (
    <View style={styles.collectedAmountContainer}>
      <MaterialIcons name="euro" size={24} color="#ffffff" />
      <Text style={styles.collectedAmountText}>{amount}</Text>
    </View>
  );
};

const Item = ({ title, price }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemPrice}>€{price}</Text>
    </View>
  );
};

const Page = () => {
  const collectedAmount = 1234.56; // Replace with your actual collected amount
  const items = [
    { title: 'Item 1', price: 10 },
    { title: 'Item 2', price: 20 },
    { title: 'Item 3', price: 30 },
    // Add more items as needed
  ];

  return (
    <View style={styles.container}>
      <CollectedAmount amount={collectedAmount} />
      {items.map((item, index) => (
        <Item key={index} title={item.title} price={item.price} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  collectedAmountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
  },
  collectedAmountText: {
    color: '#ffffff',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
  },
});

export default Page;
