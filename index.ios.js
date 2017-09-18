import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import RetroMapStyles from './MapStyles/RetroMapStyles.json';
let { width, height } = Dimensions.get('window');

export default class MAPS extends Component {
  constructor() {
    super();

  }
  getInitialState() {
    return {
    };
  }


  render() {
    return (
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 24.8090650,
          longitude: -107.3940120,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}

      />
    );
  }

}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  }
});
AppRegistry.registerComponent('MAPS', () => MAPS);