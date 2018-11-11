import React ,{Component} from 'react';
import {
    Text,
    Button,
    View,
    StyleSheet,
} from 'react-native'

type props = {};

export default class Tab5 extends Component<props> {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigation} = this.props;
        return (
            <View
                style={styles.container}
            >
                <Text>this is Tab5</Text>
            </View>
        )

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
