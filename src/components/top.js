import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Top extends React.Component{
	render(){
		/*
		const persistenceKey = "persistenceKey";
		const loadNavigationState = async () => {
			const jsonString = await AsyncStorage.getItem(persistenceKey)
			return JSON.parse(jsonString)
		}
		*/
		//console.log(loadNavigationState)
		// console.log(this)
		return(
			<View>
				<TouchableHighlight>
					<Text onPress={()=>this.props.navigation.navigate("Profile")}>Profile</Text>
				</TouchableHighlight>
				<TouchableHighlight>
					<Text onPress={()=>this.props.navigation.navigate("Product")}>Product</Text>
				</TouchableHighlight>
			</View>
		);
	}
}
