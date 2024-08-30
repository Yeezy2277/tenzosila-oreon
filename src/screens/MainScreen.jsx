import React, {useRef, useMemo, useCallback, useState, useEffect} from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
    Image,
    BackHandler
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import mockCamera from "../mock/images/cameraMock.png";
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider, useBottomSheetModal,
} from '@gorhom/bottom-sheet';

const {width, height} = Dimensions.get("screen");

import {
    useFonts,
    PTSansCaption_400Regular,
    PTSansCaption_700Bold,
} from '@expo-google-fonts/pt-sans-caption';
import {RefreshSvg} from "./RefreshSvg";
import {ArrowSvg} from "../shared/svg/ArrowSvg";
import {COLORS} from "../constants/colors";
import {ResizeSvg} from "../shared/svg/ResizeSvg";
import * as SplashScreen from 'expo-splash-screen';
import { useHeaderHeight } from '@react-navigation/elements';
import {WeightCircleSvg} from "../shared/svg/WeightCircleSvg";

const MainScreen = () => {
    let [fontsLoaded, fontError] = useFonts({
        PTSansCaption_400Regular,
        PTSansCaption_700Bold,
    });

    const { dismiss } = useBottomSheetModal()
    const [currentCamera, setCurrentCamera] = useState(1);

    useEffect(() => {
        const handleBackButton = () => {
            return dismiss()
        }

        BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
        };
    }, []);

    const headerHeight = useHeaderHeight();
    const bottomSheetModalRef = useRef(null);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    const [activeTab, setActiveTab] = useState("ТАРА")

    // variables
    const snapPoints = useMemo(() => [height - headerHeight / 2], []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <FlatList onLayout={onLayoutRootView} showsVerticalScrollIndicator={false} style={styles.container} data={["0"]} renderItem={({}) => {
            return <View>
                <LinearGradient colors={['rgba(125,193,255,1)', 'rgba(118,219,224,1)', 'rgba(223,255,238,1)']}
                                start={{x: 0, y: 0}} // Start at the top-left
                                end={{x: 0, y: 1}} style={styles.weightInfo}>
                    <View style={styles.weightTitle}>
                        <WeightCircleSvg/>
                        <Text style={[styles.commonText]}>Прием данных</Text>
                    </View>
                    <View style={styles.weightInfoCenter}>
                        <View/>
                        <Text style={styles.weightInfoTitle}>5885 кг</Text>
                        <TouchableOpacity style={{marginTop: "2%", marginRight: "8%"}}>
                            <RefreshSvg/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.weightButtons}>
                        <TouchableOpacity onPress={() => setActiveTab("ТАРА")} style={[{opacity: activeTab === "ТАРА" ? 1 : 0.5}, styles.weightButton]}>
                            <Text style={styles.commonText}>ТАРА</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setActiveTab("НУЛЬ")} style={[{opacity: activeTab === "НУЛЬ" ? 1 : 0.5}, styles.weightButton]}>
                            <Text style={styles.commonText}>НУЛЬ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setActiveTab("СТАБ")} style={[{opacity: activeTab === "СТАБ" ? 1 : 0.5}, styles.weightButton]}>
                            <Text style={styles.commonText}>СТАБ</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
                <Text style={styles.title}>Активные камеры</Text>
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
                            <Text style={styles.camNameTitle}>Камера 1</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={0}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                >
                    <BottomSheetView style={styles.modalContainer}>
                        <Text style={[styles.modalTitle, {alignSelf: "flex-start"}]}>Камера №1</Text>
                        <Text style={[styles.title, {marginTop: "2%", alignSelf: "flex-start"}]}>20.02.2024 / 15:19</Text>
                        <ImageBackground style={styles.modalImage} source={mockCamera}>
                            <TouchableOpacity style={styles.modalImageResize}>
                                <ResizeSvg/>
                            </TouchableOpacity>
                        </ImageBackground>
                        <BottomSheetView style={styles.modalLine}>
                            <TouchableOpacity style={styles.modalArrow}>
                                <ArrowSvg width={width * 0.07}/>
                            </TouchableOpacity>
                            <BottomSheetView style={styles.modalImages}>
                                <TouchableOpacity onPress={() => setCurrentCamera(1)} style={[{ borderBottomColor: currentCamera === 1 ? COLORS.primary : COLORS.onPrimary}, styles.modalImagesBlock]}>
                                    <Image style={styles.modalImagesMiniature} source={mockCamera}/>
                                    <Text>1</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setCurrentCamera(2)} style={[{ borderBottomColor: currentCamera === 2 ? COLORS.primary : COLORS.onPrimary}, styles.modalImagesBlock]}>
                                    <Image style={styles.modalImagesMiniature} source={mockCamera}/>
                                    <Text>2</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setCurrentCamera(3)} style={[{ borderBottomColor: currentCamera === 3 ? COLORS.primary : COLORS.onPrimary}, styles.modalImagesBlock]}>
                                    <Image style={styles.modalImagesMiniature} source={mockCamera}/>
                                    <Text>3</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setCurrentCamera(4)} style={[{ borderBottomColor: currentCamera === 4 ? COLORS.primary : COLORS.onPrimary}, styles.modalImagesBlock]}>
                                    <Image style={styles.modalImagesMiniature} source={mockCamera}/>
                                    <Text>4</Text>
                                </TouchableOpacity>
                            </BottomSheetView>
                            <TouchableOpacity style={styles.modalArrow}>
                                <ArrowSvg width={width * 0.07} position={"right"}/>
                            </TouchableOpacity>
                        </BottomSheetView>
                    </BottomSheetView>
                </BottomSheetModal>
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
    main: {
        flex: 1,
    },
    weightInfo: {
        height: height * 0.16,
        marginTop: height * 0.035,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    weightInfoCenter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
    },
    weightButtons: {
        position: "absolute",
        flexDirection: "row",
        bottom: height * 0.00875,
        left: width * 0.022,
        gap: width * 0.01,
    },
    weightButton: {
        backgroundColor: "white",
        borderRadius: 100,
        height: height * 0.03,
        paddingHorizontal: "8%",
        alignItems: "center",
        justifyContent: "center"
    },
    commonText: {
        fontFamily: 'PTSansCaption_400Regular',
    },
    weightTitle: {
        flexDirection: "row",
        alignItems: "center",
        gap: width * 0.01,
        position: "absolute",
        top: height * 0.005,
        left: width * 0.022
    },
    weightInfoTitle: {
        fontSize: width * 0.11,
        fontFamily: 'PTSansCaption_700Bold',
        textAlign: "center",
        marginLeft: "15%"
    },
    title: {
        marginTop: height * 0.035,
        fontSize: width * 0.05,
        fontFamily: 'PTSansCaption_700Bold',
    },
    camera: {
        // width: width * 0.9,
        height: height * 0.22,
        backgroundColor: "yellow",
        position: "relative",
    },
    camNameBlock: {
        position: "absolute",
        left: width * 0.02,
        bottom: height * 0.01,
        backgroundColor: COLORS.surface,
        paddingVertical: height * 0.005,
        paddingHorizontal: width * 0.022,
        borderRadius: 8,
    },
    camDateBlock: {
        position: "absolute",
        left: width * 0.02,
        top: height * 0.007,
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
        backgroundColor: "rgba(0,0,0,0.4)"
    },
    modalContainer: {
        paddingHorizontal: width * 0.04,
        alignItems: "center",
    },
    modalTitle: {
        fontFamily: 'PTSansCaption_700Bold',
        fontSize: width * 0.06,
    },
    modalImage: {
        width,
        height: width,
        alignItems: "center",
        justifyContent: "center",
        marginTop: height * 0.115,
        position: "relative"
    },
    modalLine: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingHorizontal: width * 0.04,
        marginTop: height * 0.022,
        width,
        backgroundColor: "white",
    },
    modalImages: {
        flexDirection: "row",
        gap: width * 0.04,
        alignItems: "center",
    },
    modalArrow: {
        marginTop: height * 0.012
    },
    modalImageResize: {
        position: "absolute",
        right: width * 0.042,
        bottom: height * 0.02,
    },
    modalImagesBlock: {
        width: width * 0.12,
        borderBottomWidth: 2.7,
        paddingBottom: 8,
        alignItems: "center",
        gap: 8
    },
    modalImagesMiniature: {
        width: width * 0.133,
        height: width * 0.133,
    }
})

export {MainScreen};
