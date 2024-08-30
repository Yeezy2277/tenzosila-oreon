import React, {useEffect} from 'react';
import {Dimensions, Image, StyleSheet} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {LoadingBgSvg} from "../shared/svg/LoadingBgSvg";
import {MainLogoWrapper} from "../shared/svg/MainLogoWrapper";
import {MainLogoSvg} from "../shared/svg/MainLogoSvg";
import {LoadingCircleSvg} from "../shared/svg/LoadingCircleSvg";
import loadingCircle from "../mock/images/loadingCircle.png";
import {useDispatch} from "react-redux";
import {setAuth} from "../redux/slices/authSlice";

const {width, height} = Dimensions.get("screen");

const LoadingScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(setAuth(true));
        }, 3000)
    }, []);
    return (
        <LinearGradient colors={['#7DC1FF', '#76DBE0', '#DFFFEE']} locations={[0.0909, 0.4893, 0.9962]} start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}} style={styles.container}>
            <LoadingBgSvg style={styles.loadingBg}/>
            <MainLogoWrapper style={styles.logoWrapper}/>
            <MainLogoSvg color={"black"}/>
            <Image source={loadingCircle}/>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    },
    loadingBg: {
        position: "absolute",
        width: "120%",
        left: "3%",
        top: "17%",
    }
});

export {LoadingScreen};
