import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Dimensions} from "react-native";
import {COLORS} from "../constants/colors";

const height = Dimensions.get("screen").height;
const Button = ({type, text, onPress, style}) => {
    return (
       <TouchableOpacity onPress={onPress} style={[style, styles[type]]}>
           <Text style={styles[`text${type}`]}>{text}</Text>
       </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    outline: {
        flex: 1,
        borderRadius: 8,
        width: "100%",
        justifyContent: "center",
        height: height * 0.056,
    },
    filled: {
        width: "100%",
        height: height * 0.056,
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        borderRadius: 8,
    },
    textoutline: {
        color: "#808080",
        textAlign: "center",
        fontWeight: "700",
        fontSize: 14,
    },
    textfilled: {
        color: COLORS.onPrimary,
        textAlign: "center",
        fontWeight: "700",
        fontSize: 14,
    }
})

export {Button};
