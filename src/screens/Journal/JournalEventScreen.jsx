import React, {useCallback, useMemo, useRef} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Dimensions, FlatList, ImageBackground} from "react-native";
import {COLORS} from "../../constants/colors";
import {JournalListItemSvg} from "../../shared/svg/JournalListItemSvg";
import {journalStates} from "../../mock/journal/journalStates";
import {BottomSheetFlatList, BottomSheetModal, BottomSheetView} from "@gorhom/bottom-sheet";
import mockCamera from "../../mock/images/cameraMock.png";
import {useHeaderHeight} from "@react-navigation/elements";

const {width, height} = Dimensions.get("screen");

const JournalEventScreen = ({type}) => {
    const bottomSheetModalRef = useRef(null);
    const headerHeight = useHeaderHeight();
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    // variables
    const snapPoints = useMemo(() => [height - headerHeight / 2], []);
    return (
        <>
            <TouchableOpacity onPress={handlePresentModalPress} style={[{backgroundColor: journalStates[type].color}, styles.listItem]}>
                <View style={styles.listItemLine}>
                    <Text style={styles.listItemText}>20.02.2024 / 15:19</Text>
                    <View style={styles.listItemLine}>
                        <Text style={styles.listItemText}>-1200кг</Text>
                        <JournalListItemSvg color={"rgba(0,0,0,0.5)"}/>
                    </View>
                </View>
                <Text style={styles.titleText}>{journalStates[type].title}</Text>
            </TouchableOpacity>
            <BottomSheetModal
                keyboardBlurBehavior="restore"
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <BottomSheetFlatList data={["1"]} renderItem={({}) => {
                    return <>
                        <BottomSheetView>
                            <Text style={[styles.modalTitle, {alignSelf: "flex-start"}]}>Детали события</Text>
                            <Text style={[styles.title, {marginTop: "2%", alignSelf: "flex-start"}]}>20.02.2024 /
                                15:19</Text>
                        </BottomSheetView>
                        <BottomSheetView style={[{marginTop: height * 0.025}, styles.infoLine]}>
                            <BottomSheetView style={[{width: width * 0.91, backgroundColor: journalStates[type].color}, styles.infoBlock]}>
                                <Text style={styles.listItemText}>Событие</Text>
                                <Text style={styles.infoBlockSubtitle}>{journalStates[type].title}</Text>
                            </BottomSheetView>
                        </BottomSheetView>
                        <BottomSheetView style={[{marginTop: height * 0.01}, styles.infoLine]}>
                            <BottomSheetView style={[{width: width * 0.91, backgroundColor: COLORS.background}, styles.infoBlock]}>
                                <Text style={styles.listItemText}>Весы</Text>
                                <Text style={styles.infoBlockSubtitle}>ВЕСТА-СЛ-80-18-Ц зав.№ 01/24</Text>
                            </BottomSheetView>
                        </BottomSheetView>
                        <BottomSheetView style={[{marginTop: height * 0.01}, styles.infoLine]}>
                            <BottomSheetView style={[{width: width * 0.91, backgroundColor: COLORS.background}, styles.infoBlock]}>
                                <Text style={styles.listItemText}>Результат</Text>
                                <Text style={styles.infoBlockSubtitle}>1</Text>
                            </BottomSheetView>
                        </BottomSheetView>
                        <TouchableOpacity style={{marginTop: height * 0.01}} onPress={handlePresentModalPress}>
                        <ImageBackground style={styles.camera} source={mockCamera}>
                            <View style={styles.camDateBlock}>
                                <Text style={styles.camDateTitle}>18-01-2024  13:30:14</Text>
                            </View>
                            <View style={styles.camNameBlock}>
                                <Text style={styles.camNameTitle}>Камера 1</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                        <TouchableOpacity style={{marginTop: height * 0.01}} onPress={handlePresentModalPress}>
                        <ImageBackground style={styles.camera} source={mockCamera}>
                            <View style={styles.camDateBlock}>
                                <Text style={styles.camDateTitle}>18-01-2024  13:30:14</Text>
                            </View>
                            <View style={styles.camNameBlock}>
                                <Text style={styles.camNameTitle}>Камера 2</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                        <TouchableOpacity style={{marginTop: height * 0.01}} onPress={handlePresentModalPress}>
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
                }} showsVerticalScrollIndicator={false} style={styles.modalContainer}>
                </BottomSheetFlatList>
            </BottomSheetModal>
        </>
    );
};

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        height: height * 0.075,
        borderRadius: 8,
        paddingHorizontal: width * 0.02,
        paddingVertical: height * 0.017,
        marginTop: height * 0.0075,
        // alignItems: "center",
        justifyContent: "space-between",
    },
    titleText: {
        fontSize: width * 0.036,
        fontFamily: 'PTSansCaption_400Regular',
    },
    listItemLine: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: width * 0.017
    },
    modalContainer: {
        paddingHorizontal: width * 0.04,
        // alignItems: "center",
        flex: 1,
    },
    infoBlock: {
        height: height * 0.09,
        // backgroundColor: COLORS.background,
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
    modalTitle: {
        fontFamily: 'PTSansCaption_700Bold',
        fontSize: width * 0.06,
    },
    listItemText: {
        fontSize: width * 0.04,
        fontFamily: 'PTSansCaption_400Regular',
    },
})

export {JournalEventScreen};
