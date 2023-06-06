import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SettingsPage = () => {
  const renderGeneralSettings = () => {
    return (
      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.categoryItem}>
          <MaterialCommunityIcons name="bell-outline" size={24} style={styles.icon} />
          <Text style={styles.categoryText}>Notificaties</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <MaterialCommunityIcons name="shield-lock-outline" size={24} style={styles.icon} />
          <Text style={styles.categoryText}>Beveiliging</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <MaterialCommunityIcons name="shield-account-outline" size={24} style={styles.icon} />
          <Text style={styles.categoryText}>Privacy</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderOtherSettings = () => {
    return (
      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.categoryItem}>
          <MaterialCommunityIcons name="information-outline" size={24} style={styles.icon} />
          <Text style={styles.categoryText}>Over ons</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <MaterialCommunityIcons name="shield-lock-outline" size={24} style={styles.icon} />
          <Text style={styles.categoryText}>Privacy beleid</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.searchButton}>
          <MaterialCommunityIcons name="magnify" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>Algemeen</Text>
      {renderGeneralSettings()}
      <Text style={styles.heading}>Overig</Text>
      {renderOtherSettings()}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    width: '90%',
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  searchButton: {
    backgroundColor: '#333',
    padding: 8,
    borderRadius: 8,
  },
  searchIcon: {
    color: '#fff',
  },
  settingsContainer: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'left',
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 8,
    width: '90%', 
  },
  icon: {
    marginRight: 16,
    color: '#333',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
  },
};

export default SettingsPage;
