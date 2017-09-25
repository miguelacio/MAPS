import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Home extends Component {
    static navigationOptions = {
        title: '<i> Los mapas </i>',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Button
                    onPress={() => navigate('ScreenMap')}
                    title="Mapa con pines"/>
                    <Button
                    onPress={() => navigate('ScreenMapMarkerCallout')}
                    title="Callout de pines"/>
            </View>
        );
    }
}

export default Home;