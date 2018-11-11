import React ,{Component} from 'react';
import {
    Text,
    Button,
    View,
    StyleSheet, Image,
} from 'react-native'
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
class Tab3 extends Component<Props> {
    static navigationOptions = ()=> {
        // const params = navigation.state.params || {};

        return{
            headerTitle: <LogoTitle />,
            headerLeft: (
                <Button
                    // onPress={() => navigation.navigate('MyModal')}
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
                <Text>this is tab3</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffaa',
    }
})

export default Tab3 = createStackNavigator(
    {
        Home:{
            screen:Tab3
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
