import React, {useCallback, useMemo, useRef, useState, useEffect} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {COLORS} from "../constants/colors";
import {PTSansCaption_400Regular, PTSansCaption_700Bold, useFonts} from "@expo-google-fonts/pt-sans-caption";
import {Button} from "../shared/Button";
import CheckboxSvg from "../shared/svg/CheckboxSvg";
import {EditSvg} from "../shared/svg/EditSvg";
import {BottomSheetModal, BottomSheetView} from "@gorhom/bottom-sheet";
import mockCamera from "../mock/images/cameraMock.png";
import {ArrowSvg} from "../shared/svg/ArrowSvg";
import {Input} from "../shared/Input";
import {SubmitSvg} from "../shared/svg/SubmitSvg";
import {PinFileSvg} from "../shared/svg/PinFileSvg";
import {CalendarSvg} from "../shared/svg/CalendarSvg";
import {ListSvg} from "../shared/svg/ListSvg";

const {width, height} = Dimensions.get("screen");

const ServiceScreen = () => {
    let [fontsLoaded] = useFonts({
        PTSansCaption_400Regular,
        PTSansCaption_700Bold,
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerTitle: isSubmitted ? 'Заявка принята!' : 'Техподдержка'
        });
    }, [isSubmitted, navigation]);

    const changeSubmitMode = () => {
        setIsSubmitted(prevState => !prevState);
    }

    return (
        <FlatList showsVerticalScrollIndicator={false} data={["1"]} style={styles.container} renderItem={({}) => {
            return <View style={styles.wrapper}>
                <View style={styles.supportBlock}>
                    <Text
                        style={styles.supportBlockText}>{isSubmitted ? "Скоро наш сотрудник свяжется с вами" : "Оставьте заявку, мы свяжемся с вами"}</Text>
                </View>
                {isSubmitted ?
                    <View style={{marginTop: height * 0.04}}>
                        <SubmitSvg/>
                    </View> :
                    <>
                        <Input SvgImage={ListSvg} style={{marginTop: height * 0.02}} textColor={"#000000"} borderColor={"rgba(1,1,1,0.6)"}
                               placeholder={"Тема"}/>
                        <Input style={{marginTop: height * 0.02}} textColor={"#000000"} borderColor={"rgba(1,1,1,0.6)"}
                               placeholder={"E-mail"}/>
                        <Input isMiddle={false} heightInput={height * 0.125} style={{marginTop: height * 0.02}} textColor={"#000000"}
                               borderColor={"rgba(1,1,1,0.6)"} placeholder={"Сообщение"}/>
                        <TouchableOpacity style={styles.pinFile}>
                            <PinFileSvg/>
                            <Text style={styles.pinFileText}>Прикрепить файл</Text>
                        </TouchableOpacity>
                    </>}
                <Button onPress={changeSubmitMode}
                        style={{position: "absolute", bottom: 1}} type={"filled"}
                        text={isSubmitted ? "Далее" : "Отправить"}/>
            </View>
        }}/>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEF7FF",
        paddingHorizontal: width * 0.044,
    },
    pinFile: {
        marginTop: height * 0.0125,
        flexDirection: "row",
        gap: width * 0.01
    },
    pinFileText: {
        fontSize: width * 0.036,
        fontFamily: 'PTSansCaption_400Regular',
    },
    supportBlock: {
        backgroundColor: COLORS.surface,
        borderRadius: 8,
        marginTop: height * 0.04,
        padding: width * 0.04,
    },
    supportBlockText: {
        fontSize: width * 0.04,
        fontFamily: 'PTSansCaption_400Regular',
    },
    wrapper: {
        height: height * 0.75,
        position: "relative",
        flex: 1,
    },
})

export default ServiceScreen;
