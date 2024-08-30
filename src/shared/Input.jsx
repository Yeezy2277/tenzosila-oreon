import React, {useEffect, useRef, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, Dimensions, View, TextInput, Animated} from "react-native";
import {COLORS} from "../constants/colors";
import {CalendarSvg} from "./svg/CalendarSvg";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const Input = ({isMiddle = true, SvgImage, value, style, text, onChange, errorText, placeholder, borderColor, textColor, img, heightInput, widthInput}) => {
    const [isActive, setIsActive] = useState(false);
    const inputRef = useRef(null);
    const fadeAnim = useRef(new Animated.Value(1)).current; // Initial opacity is set to 1

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500, // Adjust duration as needed
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500, // Adjust duration as needed
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        if (isActive) {
            fadeIn(); // Fade in when active
        } else {
            fadeOut(); // Fade out when inactive
        }
    }, [isActive]);
    return (
        <View style={[{width: widthInput || "100%"}]}>
            <View style={[style, styles.wrapper, {borderColor: errorText ? "#FD10AC" : borderColor ? borderColor : "rgba(255, 255, 255, 0.6)", height: heightInput || height * 0.056, width: widthInput || "100%"}]}>
                <TextInput placeholderTextColor={textColor || "rgba(255, 255, 255, 0.6)"} ref={inputRef} onBlur={() => setIsActive(false)} onFocus={() => setIsActive(true)} style={[styles.input, {color: errorText ? "#FD10AC" : textColor ? textColor : "white", height: isMiddle ? "100%" : "auto", paddingTop: isMiddle ? 0 : height * 0.0175}]} value={value} placeholder={placeholder}/>
                {/*{isActive &&  <Animated.View style={[styles.textBlock, { opacity: fadeAnim}]}>*/}
                {/*    <Text style={{color: errorText ? "#FD10AC" : "black"}}>grthrth</Text>*/}
                {/*</Animated.View>}*/}
                {SvgImage && <TouchableOpacity style={{position: "absolute", top: height * 0.0175, right: width * 0.04}}>
                    <SvgImage/>
                </TouchableOpacity>}
            </View>
            {errorText && <Text style={styles.errorText}>{errorText}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: "flex-start",
        // height: height * 0.056,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.6)",
        position: "relative",
    },
    textBlock: {
        position: "absolute",
        top: "-22%",
        left: "4%",
        backgroundColor: "transparent"
    },
    input: {
        borderColor: "rgba(255, 255, 255, 0.6)",
        paddingHorizontal: width * 0.04,
        // backgroundColor: "black",
        // height: "100%",
        // justifyContent: "center",
        // alignItems: "center",
        paddingTop: height * 0.0175,
        width: "90%",
        textAlignVertical: "center",
    },
    errorText: {
        color: "#FD10AC",
        paddingHorizontal: "4%"
    }
})

export {Input};
