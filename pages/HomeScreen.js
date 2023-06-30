// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';
import { useContext } from 'react';
import themeContext from '../config/ThemeContext';


const HomeScreen = ({ navigation }) => {
  const theme = useContext(themeContext)
  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor:"white" }, {backgroundColor: theme.background}]}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-evenly',

          }}>
          <Text
            style={[{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,


            }, {color: theme.color}]}>
            Daily Challenges
          </Text>

          <TouchableOpacity
            style={[styles.button, {backgroundColor:theme.button}]}
            onPress={
              () => navigation.navigate('Details')
            }>
            <Text style={{color: 'white'}}>Havana BeachClub | Plastic fles | 8X</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor:theme.button}]}
            onPress={
              () => navigation.navigate('Details')
            }>
            <Text style={{color: '#fff'}}>BeachClub Strand | Plastic fles | 4X</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor:theme.button}]}
            onPress={
              () => navigation.navigate('Details')
            }>
            <Text style={{color: '#fff'}}>Zuid Zuid West | Plastic fles | 6X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#147EFB',
    padding: 10,
    width: 300,
    marginTop: 16,
    borderRadius: 20,

  },
});
export default HomeScreen;