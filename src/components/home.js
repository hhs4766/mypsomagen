import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';
import mapStateToProps from '../reducers/mapStateToProps';

class Home extends React.Component{
	login = async()=>{
		const result = await this.props.screenProps.call(this.props.urlroot, "account/session", "POST", {id:"hhs4766@gmail.com", password:"Qwe123!@#"})
		console.log(result)
	}
	render(){
		return(
			<View>
				<TouchableHighlight >
					<Text onPress={()=>this.props.navigation.navigate("Profile")}>Go To Profile Page</Text>
				</TouchableHighlight>
				<TouchableHighlight>
					<Text onPress={()=>this.props.navigation.navigate("Product")}>Go to Product Page</Text>
				</TouchableHighlight>
				<TouchableHighlight>
					<Text onPress={()=>this.login()}>Login</Text>
				</TouchableHighlight>
			</View>
		);
	}
}
export default connect(mapStateToProps)(Home);