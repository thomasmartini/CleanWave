// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

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
        padding: 20,
    },
    coverImage: {
        height: 200,
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