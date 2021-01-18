import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default class Profile extends React.Component{
	
	render(){
		return(
			<View>
				<TouchableHighlight>
					<Text onPress={()=>this.props.navigation.navigate("Product")}>here is Profile</Text>
				</TouchableHighlight>
			</View>
		);
	}
}