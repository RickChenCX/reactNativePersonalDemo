import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Button, Image,
} from 'react-native';
import {createStackNavigator} from "react-navigation";

const props = {};
// 首页center图标
class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('../../src/static/images/spiro.png')}
                style={{ width: 30, height: 30 }}
            />
        );
    }
}
class Tab1 extends Component<Props> {
    static navigationOptions = ()=> {
        // const params = navigation.state.params || {};

        return{
            headerTitle: <LogoTitle />,
            headerLeft: (
                <Button
                    onPress={() => navigation.navigate('MyModal')}
                    title="DrawerNav"
                    color="#fff"
                />
            ),
            headerRight: (
                <Button  title="rightButton"  color={'#fff'} />
            ),
        }

    };
    render() {
        const {navigation} =this.props;
        return (
            <SafeAreaView style={styles.container}>
                <Button
                    title="go to TabNav"
                    onPress={()=>navigation.navigate('TabNav')}
                />

                <Text/>

                <Button
                    title="go to DrawerNav"
                    onPress={()=>navigation.navigate('DrawerNav')}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e5fffd',
    }
});


export default Tab1 = createStackNavigator(
    {
        Home:{
            screen:Tab1
        },

    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);
