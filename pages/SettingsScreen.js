// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';


const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>

          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'left',
              marginBottom: 16,
            }}>
            Algemeen
          </Text>

          <TouchableOpacity  style={styles.button}>
            <Text>Notificaties</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.button}>
            <Text>Beveiliging</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.button}>
            <Text>Privacy</Text>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'left',
              marginBottom: 16,
              
            }}>
            Overig
          </Text>
          
          <TouchableOpacity  style={styles.button}>
            <Text>Over ons</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.button}>
            <Text>Privacy beleid</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
    
  },
});

export default ProfileScreen;
