import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {FilterScreen} from "./FilterScreen";
import {ModalCrossSvg} from "../../shared/svg/ModalCrossSvg";
import {Dimensions, TouchableOpacity, View} from "react-native";
import {FilterSvg} from "../../shared/svg/FilterSvg";
import {JournalScreen} from "../JournalScreen";

const Stack = createStackNavigator();
const {width, height} = Dimensions.get("screen");

const JournalScreenRoot = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={{
            headerLeft: () => null,
        }}>
            <Stack.Screen
                options={{
                    title: "Журнал",
                    tabBarInactiveTintColor: "#000000",
                    tabBarActiveTintColor: "#70C5C9",
                    headerBackTitleVisible: false,
                    headerStyle: {
                        backgroundColor: "#EEF7FF"
                    },
                    headerRight: () => <TouchableOpacity onPress={() => navigation.navigate("Фильтр")} style={{marginRight: width * 0.04}}>
                        <FilterSvg/>
                    </TouchableOpacity>,
                    headerTitleAlign: "left",
                    headerTitleStyle: {
                        textAlign: "left",
                        fontFamily: "PTSansCaption_700Bold",
                        fontSize: width * 0.05
                    },
                }}
                name="Журнал"
                component={JournalScreen}
            />
            <Stack.Screen
                options={{
                    title: "Фильтр",
                    tabBarInactiveTintColor: "#000000",
                    tabBarActiveTintColor: "#70C5C9",
                    headerStyle: {
                        backgroundColor: "#EEF7FF"
                    },
                    headerRight: () => <TouchableOpacity onPress={() => navigation.navigate("Журнал")} style={{marginRight: width * 0.04}}>
                        <ModalCrossSvg color={"#000000"}/>
                    </TouchableOpacity>,
                    headerTitleAlign: "left",
                    headerTitleStyle: {
                        textAlign: "left",
                        fontFamily: "PTSansCaption_700Bold",
                        fontSize: width * 0.05
                    },
                }}
                name="Фильтр"
                component={FilterScreen}
            />
        </Stack.Navigator>
    );
};

export {JournalScreenRoot};
