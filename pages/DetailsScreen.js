import MapView from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Marker } from "react-native-maps";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Image
  } from 'react-native';

  
  const BeachClub = {
    latitude: 51.98866299707557,
    longitude: 4.1074257216358525,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };


const MapScreen = () => {
    return (
   <View style={styles.container}>
       <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            
              
            }}></Text>
     <MapView
       style={styles.map}
       region={{
        latitude: BeachClub.latitude,
        longitude: BeachClub.longitude,
        latitudeDelta: BeachClub.latitudeDelta,
        longitudeDelta: BeachClub.longitudeDelta,
       }}
     >
      <Marker coordinate={BeachClub}><Image source={require('./Images/pngwing.png')} style={{height: 50, width:21.5  }} /></Marker>
     </MapView>
     <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: -125
            }}>
            Havana BeachClub | Plastic fles | 8X
          </Text>
   </View>
    );
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
   
export default MapScreen