import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import {createBottomTabNavigator, createStackNavigator, createTabNavigator} from 'react-navigation'; // 1.0.0-beta.27
import Ionicons from "react-native-vector-icons/Ionicons";

// view
import Tab1 from './view/TabBottom1';
import Tab2 from './view/TabBottom2'
import Tab3 from './view/TabBottom3'
import Tab4 from './view/TabBottom4'
import Tab5 from './view/TabBottom5'

//底部导航
const AppTabNavigators = createBottomTabNavigator(
    {
        Tab1:{
            screen:Tab1
        },
        Tab2:{
            screen:Tab2
        },
        Tab3:{
            screen:Tab3
        },
        Tab4:{
            screen:Tab4
        },
        Tab5:{
            screen:Tab5
        }
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case 'Tab1':
                        iconName = "ios-home";
                        break;
                    case 'Tab2':
                        iconName = "ios-options";
                        break;
                    case 'Tab3':
                        iconName = "ios-star";
                        break;
                    case 'Tab4':
                        iconName = "ios-photos";
                        break;
                    case 'Tab5':
                        iconName = "ios-contact";
                        break;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            },
        }),
        // tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        animationEnabled: false,
        swipeEnabled: false,
    }
    )

export const RootStack = AppTabNavigators;

