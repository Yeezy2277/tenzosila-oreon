import React from 'react';
import {View, StyleSheet, SafeAreaView, Dimensions, FlatList} from "react-native";
import {COLORS} from "../constants/colors";
import {MainLogoSvg} from "../shared/svg/MainLogoSvg";
import {MainLogoWrapper} from "../shared/svg/MainLogoWrapper";
import {Button} from "../shared/Button";
import {Input} from "../shared/Input";
import {useSelector} from "react-redux";
import {EyeSvg} from "../shared/svg/EyeSvg";
import {ListSvg} from "../shared/svg/ListSvg";

const {width, height} = Dimensions.get("screen");

const LoginScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList showsVerticalScrollIndicator={false} contentContainerStyle={{height: "100%", justifyContent: "space-between"}} data={["0"]} renderItem={({}) => {
                return <View style={styles.wrapper}>
                    <View style={styles.logos}>
                        <MainLogoWrapper style={styles.logoWrapper}/>
                        <MainLogoSvg style={styles.logo}/>
                    </View>
                    <View style={styles.inputWrapper}>
                        <Input placeholder={"IP адрес"} text={"IP Adress"}/>
                        <Input placeholder={"Порт"} text={"IP Adress"}/>
                        <Input placeholder={"Имя"} text={"IP Adress"}/>
                        <Input SvgImage={EyeSvg} placeholder={"Пароль"} text={"IP Adress"}/>
                        <Input SvgImage={ListSvg} placeholder={"Количество камер"} text={"IP Adress"}/>
                    </View>
                    <Button onPress={() => navigation.navigate("Loading")} type={"filled"} text={"Войти"}/>
                </View>
            }}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: height * 0.03125
    },
    wrapper: {
        width: "100%",
        height: "100%",
        paddingHorizontal: width * 0.044,
        justifyContent: 'space-between',
    },
    logos: {
        alignItems: "center",
    },
    inputWrapper: {
        width: "100%",
        gap: height * 0.02
    },
    logoWrapper: {
        marginTop: height * 0.07
    },
    logo: {
        marginTop: height * 0.0325
    }
})

export {LoginScreen};
