import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Dimensions, TouchableOpacity, Text, Alert, TouchableHighlight } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import RetroMapStyles from '../MapStyles/RetroMapStyles.json';
let { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 24.8090650;
const LONGITUDE = -107.3940120;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.005;

class MapMarkerCallout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 24.8090650,
        longitude: -107.3940120,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      },
      markers: [
        {
          coordinate: {
            latitude: LATITUDE + SPACE,
            longitude: LONGITUDE + SPACE,
          },
        },
        {
          coordinate: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
          },
        },
        {
          coordinate: {
            latitude: LATITUDE + SPACE,
            longitude: LONGITUDE - SPACE,
          },
        },
      ],
    };
  }

  onPress() {
    Alert.alert(
      'Presionaste el pin',
      'mensaje mensaje',
      [
        {text: 'Boton 1', onPress: () => console.log('Boton 1 pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    )
  }

  render() {
    const { region, markers } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={region}
        >
          <MapView.Marker
            ref={ref => { this.marker1 = ref; }}
            coordinate={markers[0].coordinate}
            title="Hola, está es la vista de nativa de mapas(título)"
            description="Subtitulo"
            
          >
          <MapView.Callout style={styles.plainView}/>
          </MapView.Marker>
          <MapView.Marker
            coordinate={markers[1].coordinate}>
            <MapView.Callout style={styles.plainView}>
              <View>
                <Text>esta es una etiqueta View</Text>
              </View>
            </MapView.Callout>
          </MapView.Marker>
          <MapView.Marker
            coordinate={markers[2].coordinate}
          >
          </MapView.Marker>
        </MapView>
        <View style={styles.buttonContainer}>
          <View style={styles.bubble}>
            <Text>Presiona los pines</Text>
          </View>
        </View>
      </View>
    );
  }
}

MapMarkerCallout.propTypes = {
  provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
  customView: {
    width: 140,
    height: 100,
  },
  plainView: {
    width: 60,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
});
export default MapMarkerCallout;