import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import RetroMapStyles from '../MapStyles/RetroMapStyles.json';
let { width, height } = Dimensions.get('window');
let id = 0;

function randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


class MapMarker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: 24.8090650,
                longitude: -107.3940120,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
            },
            markers: [],
        };
    }

    onRegionChange(region) {
        this.setState({ region });
    }
    onMapPress(e) {
        console.log(e.nativeEvent);
        this.setState({
            markers: [
                ...this.state.markers,
                {
                    coordinate: e.nativeEvent.coordinate,
                    key: id++,
                    color: randomColor(),
                },
            ],
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.container}
                    initialRegion={this.state.region}
                    onRegionChange={region => this.onRegionChange(region)}
                    onPress={(e) => this.onMapPress(e)}
                    showsUserLocation={true}
                >
                    {this.state.markers.map(marker => (
                        <MapView.Marker
                            key={marker.key}
                            coordinate={marker.coordinate}
                            pinColor={marker.color}
                        />
                    ))}

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={() => this.setState({ markers: [] })}
                            style={styles.bubble}
                        >
                        </TouchableOpacity>
                    </View>
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
    buttonContainer: {

        marginVertical: 20,
        backgroundColor: 'transparent',
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    }
});
export default MapMarker;