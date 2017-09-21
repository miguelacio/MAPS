import {
    StackNavigator,
  } from 'react-navigation';

  import MapMarker from './MapMarker';
  import App from './App';
  
  export const UserStack = StackNavigator({
	ScreenMap: 
	{
		screen: MapMarker,
		navigationOptions:
		{
			title: "Map",
			header:null
		},
	},
	ScreenHome: 
	{
		screen: App,
		navigationOptions:
		{
			title: "Home",
			headerLeft:null
		},
	},
});