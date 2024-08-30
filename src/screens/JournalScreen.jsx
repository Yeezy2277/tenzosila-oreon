import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {COLORS} from "../constants/colors";
import {PTSansCaption_400Regular, PTSansCaption_700Bold, useFonts} from "@expo-google-fonts/pt-sans-caption";
import {useDispatch, useSelector} from "react-redux";
import {updateCategory} from "../redux/slices/journalSlice";
import {JournalWeightScreen} from "./Journal/JournalWeightScreen";
import {JournalEventScreen} from "./Journal/JournalEventScreen";
import {ArrowSvg} from "../shared/svg/ArrowSvg";
import {ArrowToSvg} from "../shared/svg/ArrowToSvg";

const {width, height} = Dimensions.get("screen");

const JournalScreen = () => {
    let [fontsLoaded] = useFonts({
        PTSansCaption_400Regular,
        PTSansCaption_700Bold,
    });
    const [chosenCategory, setChosenCategory] = useState("weights")
    const [isSubmitted, setIsSubmitted] = useState(false);
    const changeSubmitMode = () => {
        setIsSubmitted(prevState => !prevState);
    }
    const categories = useSelector(state => state.journal.categories);
    const currentCategory = useSelector(state => state.journal.currentCategory);
    const dispatch = useDispatch();
    const arrayMock = [...Array(100).keys()].map(i => i + 1);
    return (
        <View style={styles.container}>
            <View style={styles.categories}>
                {categories.map(category => {
                    return <TouchableOpacity onPress={() => !category.isActive && dispatch(updateCategory(category.id))}
                                             key={category.id}
                                             style={category.isActive ? styles.categoryButtonActive : styles.categoryButton}>
                        <Text
                            style={category.isActive ? styles.categoryButtonTitleActive : styles.categoryButtonTitle}>{category.title}</Text>
                    </TouchableOpacity>
                })}
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>ВЕСТА-СЛ-80-18-Ц зав.№ 01/24</Text>
                <TouchableOpacity>
                    <ArrowToSvg/>
                </TouchableOpacity>
            </View>
            <FlatList showsVerticalScrollIndicator={false} style={styles.list} data={arrayMock} renderItem={({item}) => {
                return currentCategory === "Взвешивания" ? <JournalWeightScreen key={item}/> : <JournalEventScreen type={Math.floor(Math.random() * 4)} key={item}/>
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEF7FF",
        paddingHorizontal: width * 0.044,
    },
    categories: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: height * 0.015,
    },
    categoryButton: {
        justifyContent: "center",
        alignItems: "center",
        width: width * 0.46,
        height: height * 0.05,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.5)",
    },
    categoryButtonTitle: {
        fontSize: width * 0.04,
        fontFamily: 'PTSansCaption_400Regular',
        color: "rgba(0,0,0,0.5)",
    },
    categoryButtonActive: {
        justifyContent: "center",
        alignItems: "center",
        width: width * 0.46,
        height: height * 0.05,
        borderBottomWidth: 3,
        borderBottomColor: COLORS.primary,
    },
    title: {
        fontSize: width * 0.05,
        fontFamily: 'PTSansCaption_700Bold',
    },
    titleContainer: {
        marginTop: height * 0.035,
        flexDirection: "row",
        gap: width * 0.03,
        alignItems: "center",
    },
    categoryButtonTitleActive: {
        fontSize: width * 0.04,
        fontFamily: 'PTSansCaption_400Regular',
        color: COLORS.primary,
    },
    list: {
        marginVertical: height * 0.0125
    },
    wrapper: {
        height: height * 0.78,
        position: "relative",
        flex: 1,
    },
})

export {JournalScreen};
