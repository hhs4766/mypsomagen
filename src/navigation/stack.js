import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Top from '../components/top';
import Home from '../components/home';
import Profile from '../components/profile';
import Product from '../components/product';

const screens = {
	Home:{
		screen:Home
	},
	Profile:{
		screen:Profile
	},
	Product:{
		screen:Product
	}
}

const stacks = createStackNavigator(screens);

export default createAppContainer(stacks)