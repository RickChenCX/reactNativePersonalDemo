import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
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
class Tab5 extends Component<Props> {
    static navigationOptions = ()=> {
        // const params = navigation.state.params || {};

        return{
            headerTitle: <LogoTitle />,
            headerLeft: (
                <Button
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
            <View style={styles.container}>

                <Text>this is tab5</Text>


            </View>
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


export default Tab5 = createStackNavigator(
    {
        Home:{
            screen:Tab5
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
