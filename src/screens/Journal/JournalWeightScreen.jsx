import React, {useCallback, useMemo, useRef} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Dimensions, FlatList, ImageBackground} from "react-native";
import {COLORS} from "../../constants/colors";
import {JournalListItemSvg} from "../../shared/svg/JournalListItemSvg";
import {BottomSheetFlatList, BottomSheetModal, BottomSheetView} from "@gorhom/bottom-sheet";
import {Input} from "../../shared/Input";
import {Button} from "../../shared/Button";
import mockCamera from "../../mock/images/cameraMock.png";
import {useHeaderHeight} from "@react-navigation/elements";

const {width, height} = Dimensions.get("screen");

const JournalWeightScreen = () => {
    const bottomSheetModalRef = useRef(null);
    const headerHeight = useHeaderHeight();
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    // variables
    const snapPoints = useMemo(() => ["92%"], []);
    return (
        <>
            <TouchableOpacity onPress={handlePresentModalPress} style={styles.listItem}>
                <Text>20.02.2024 / 15:19</Text>
                <Text>B123HP123</Text>
                <View style={styles.listItemLine}>
                    <Text>1200кг</Text>
                    <JournalListItemSvg/>
                </View>
            </TouchableOpacity>
            <BottomSheetModal
                keyboardBlurBehavior="restore"
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <BottomSheetFlatList showsVerticalScrollIndicator={false} data={["1"]} renderItem={({}) => {
                    return <>
                        <BottomSheetView>
                            <Text style={[styles.modalTitle, {alignSelf: "flex-start"}]}>Детали взвешивания</Text>
                            <Text style={[styles.title, {marginTop: "2%", alignSelf: "flex-start"}]}>20.02.2024 /
                                15:19</Text>
                        </BottomSheetView>
                        <BottomSheetView style={[{marginTop: height * 0.025}, styles.infoLine]}>
                            <BottomSheetView style={[{width: width * 0.45}, styles.infoBlock]}>
                                <Text style={styles.listItemText}>Марка ТС</Text>
                                <Text style={styles.infoBlockSubtitle}>МАЗ</Text>
                            </BottomSheetView>
                            <BottomSheetView style={[{width: width * 0.45}, styles.infoBlock]}>
                                <Text style={styles.listItemText}>Номер ТС</Text>
                                <Text style={styles.infoBlockSubtitle}>B123HP136</Text>
                            </BottomSheetView>
                        </BottomSheetView>
                        <BottomSheetView style={[{marginTop: height * 0.01}, styles.infoLine]}>
                            <BottomSheetView style={[{width: width * 0.45}, styles.infoBlock]}>
                                <Text style={styles.listItemText}>Номер прицепа</Text>
                                <Text style={styles.infoBlockSubtitle}>ВА1-000201</Text>
                            </BottomSheetView>
                            <BottomSheetView style={[{width: width * 0.45}, styles.infoBlock]}>
                                <Text style={styles.listItemText}>Документ</Text>
                                <Text style={styles.infoBlockSubtitle}>000031</Text>
                            </BottomSheetView>
                        </BottomSheetView>
                        <BottomSheetView style={[{marginTop: height * 0.025}, styles.infoLine]}>
                            <BottomSheetView style={[{width: width * 0.295}, styles.infoBlock]}>
                                <Text style={styles.listItemText}>Брутто</Text>
                                <Text style={styles.infoBlockSubtitle}>3910 кг</Text>
                            </BottomSheetView>
                            <BottomSheetView style={[{width: width * 0.295}, styles.infoBlock]}>
                                <Text style={styles.listItemText}>Тара</Text>
                                <Text style={styles.infoBlockSubtitle}>0</Text>
                            </BottomSheetView>
                            <BottomSheetView style={[{width: width * 0.295}, styles.infoBlock]}>
                                <Text style={styles.listItemText}>Нетто</Text>
                                <Text style={styles.infoBlockSubtitle}>0</Text>
                            </BottomSheetView>
                        </BottomSheetView>
                        <BottomSheetView style={[{marginTop: height * 0.008}, styles.infoLine]}>
                            <BottomSheetView style={[{width: width * 0.91}, styles.infoBlock]}>
                                <Text style={styles.listItemText}>Груз</Text>
                                <Text style={styles.infoBlockSubtitle}>Пшеница</Text>
                            </BottomSheetView>
                        </BottomSheetView>
                        <Text style={styles.weightingText}>Взвешивание:</Text>
                        <Text style={styles.automaticallyText}>Автоматически по событию</Text>
                        <TouchableOpacity style={{marginTop: height * 0.025}} onPress={handlePresentModalPress}>
                            <ImageBackground style={styles.camera} source={mockCamera}>
                                <View style={styles.camDateBlock}>
                                    <Text style={styles.camDateTitle}>18-01-2024  13:30:14</Text>
                                </View>
                                <View style={styles.camNameBlock}>
                                    <Text style={styles.camNameTitle}>Камера 1</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginTop: height * 0.025}} onPress={handlePresentModalPress}>
                            <ImageBackground style={styles.camera} source={mockCamera}>
                                <View style={styles.camDateBlock}>
                                    <Text style={styles.camDateTitle}>18-01-2024  13:30:14</Text>
                                </View>
                                <View style={styles.camNameBlock}>
                                    <Text style={styles.camNameTitle}>Камера 2</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginTop: height * 0.025}} onPress={handlePresentModalPress}>
                            <ImageBackground style={styles.camera} source={mockCamera}>
                                <View style={styles.camDateBlock}>
                                    <Text style={styles.camDateTitle}>18-01-2024  13:30:14</Text>
                                </View>
                                <View style={styles.camNameBlock}>
                                    <Text style={styles.camNameTitle}>Камера 3</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </>
                }} style={styles.modalContainer}>
                </BottomSheetFlatList>
            </BottomSheetModal>
        </>
    );
};

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: COLORS.surface,
        height: height * 0.06,
        borderRadius: 8,
        paddingHorizontal: width * 0.02,
        paddingVertical: height * 0.0175,
        marginTop: height * 0.0075,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    listItemLine: {
        flexDirection: "row",
        alignItems: "center",
        gap: width * 0.017
    },
    modalContainer: {
        paddingHorizontal: width * 0.04,
        paddingBottom: height * 0.01,
        // alignItems: "center",
        flex: 1,
    },
    camera: {
        // width: width * 0.9,
        height: height * 0.22,
        background: "yellow",
        position: "relative",
    },
    camNameBlock: {
        position: "absolute",
        left: width * 0.02,
        bottom: height * 0.01,
        width: width * 0.2,
        height: height * 0.03,
        backgroundColor: COLORS.surface,
        paddingVertical: height * 0.005,
        paddingHorizontal: width * 0.022,
        borderRadius: 8,
    },
    camDateBlock: {
        position: "absolute",
        left: width * 0.02,
        top: height * 0.007,
        width: width * 0.36,
        height: height * 0.025,
        backgroundColor: "rgba(0,0,0,0.4)",
        paddingVertical: height * 0.005,
        paddingHorizontal: width * 0.022,
        borderRadius: 100,
    },
    camNameTitle: {
        fontSize: width * 0.033,
        fontFamily: 'PTSansCaption_400Regular',
    },
    camDateTitle: {
        fontSize: width * 0.031,
        fontFamily: 'PTSansCaption_400Regular',
        color: COLORS.surface,
    },
    dateTimeCam: {
        width: "40%",
        height: "12%",
        color: "white",
        background: "rgba(0,0,0,0.4)"
    },
    infoBlock: {
        height: height * 0.09,
        backgroundColor: COLORS.background,
        borderRadius: 8,
        // boxSizing: "border-box",
        // justifyContent: "space-between",
        gap: height * 0.02,
        paddingTop: width * 0.022,
        paddingHorizontal: width * 0.044,
    },
    infoLine: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: width * 0.01
    },
    infoBlockSubtitle: {
        fontSize: width * 0.04,
        fontFamily: 'PTSansCaption_700Bold',
    },
    title: {
        marginTop: height * 0.035,
        fontSize: width * 0.05,
        fontFamily: 'PTSansCaption_700Bold',
    },
    weightingText: {
        marginTop: height * 0.025,
        fontSize: width * 0.04,
        fontFamily: 'PTSansCaption_400Regular',
    },
    automaticallyText: {
        marginTop: height * 0.001,
        fontSize: width * 0.04,
        fontFamily: 'PTSansCaption_700Bold',
    },
    modalTitle: {
        fontFamily: 'PTSansCaption_700Bold',
        fontSize: width * 0.06,
    },
    listItemText: {
        fontSize: width * 0.04,
        fontFamily: 'PTSansCaption_400Regular',
    },
})

export {JournalWeightScreen};
