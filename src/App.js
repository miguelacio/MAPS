import React, { Component } from 'react';
import { Text } from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

class App extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Go to maps!</Text>
                <Button
                    onPress={() => navigate('Map')}
                    title="MAP"
                />
            </View>
        );
    }
}

export default App;