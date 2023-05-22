import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../database/firebase'


const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})
=======
import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import UploadImage from './uploadImage';

const backgroundPicture = require('./Images/backgroundImage.png');
const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                // afbeelding moet 900x400 zijn
                source={backgroundPicture}
                style={styles.coverImage}
            />
            <View style={styles.avatarContainer}>
                <UploadImage/>
                <Text style={[styles.name, styles.textWithShadow]}>Jan Smit</Text>
            </View>
            <View style={styles.content}>
                <Text style={[styles.rank, styles.textWithShadow]}>Rang nummer #3</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoLabel}>Email:</Text>
                    <Text style={styles.infoValue}>student@hr.nl</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoLabel}>Location:</Text>
                    <Text style={styles.infoValue}>Rotterdam, Zuid-Holland</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoLabel}>Bio:</Text>
                    <Text style={styles.infoValue}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
                        magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio
                        quis feugiat facilisis.</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoLabel}>Verzameld afval:</Text>
                    <Text style={styles.infoValue}>5kg</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoLabel}>Daily Challenges:</Text>
                    <Text style={styles.infoValue}>5/5 voltooid</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 0,
        paddingRight: 20,
        paddingLeft: 20
    },
    coverImage: {
        height: 220,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        paddingBottom: 0,
        color: 'white'
    },
    rank: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'black',
        alignItems: 'center',
        alignSelf: "center"
    },
    content: {
        marginTop: 20,
    },
    infoContainer: {
        marginTop: 20,
    },
    infoLabel: {
        fontWeight: 'bold',
    },
    infoValue: {
        marginTop: 5,
    },
});
export default ProfileScreen;

