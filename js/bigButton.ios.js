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
                <Text style={styles.reds}>BIGbutton</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    reds:{
        color:'red',
    }
})
module.exports= bigButton;
