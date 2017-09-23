import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Home extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        // console.warn( awanta);
        return (
            <View>
                <Text>Go to maps!</Text>
                <Button
                    onPress={() => navigate('ScreenMap')}
                    title="MAP"
                />
            </View>
        );
    }
}

export default Home;