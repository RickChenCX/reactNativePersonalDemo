import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native"

type props = {};

class bigButton extends Component<props> {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Text style={styles.blues}>BIGbutton</Text>
            </View>
        )
    }
}
const  styles = StyleSheet.create({
    blues:{
        color:'blue',
    }
})
module.exports= bigButton;

