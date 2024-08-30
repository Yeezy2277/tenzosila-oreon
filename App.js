import {StatusBar} from 'expo-status-bar';
import {Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button} from "./src/shared/Button";
import {Input} from "./src/shared/Input";
import {useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {LoginScreen} from "./src/screens/LoginScreen";
import {createStackNavigator} from '@react-navigation/stack';
import {LoadingScreen} from "./src/screens/LoadingScreen";
import {Provider, useSelector} from 'react-redux'
import {store} from "./src/redux/store";
import {MainScreen} from "./src/screens/MainScreen";
import {CameraIconSvg} from "./src/shared/svg/icons/CameraIconSvg";
import {ProfileIconSvg} from "./src/shared/svg/icons/ProfileIconSvg";
import {ServiceIconSvg} from "./src/shared/svg/icons/ServiceIconSvg";
import {JournalIconSvg} from "./src/shared/svg/icons/JournalIconSvg";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import ProfileScreen from "./src/screens/ProfileScreen";
import {PTSansCaption_400Regular, PTSansCaption_700Bold, useFonts} from "@expo-google-fonts/pt-sans-caption";
import ServiceScreen from "./src/screens/ServiceScreen";
import {FilterSvg} from "./src/shared/svg/FilterSvg";
import {JournalScreen} from "./src/screens/JournalScreen";
import {JournalScreenRoot} from "./src/screens/Journal/JournalScreenRoot";
import {ArrowToSvg} from "./src/shared/svg/ArrowToSvg";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const {width, height} = Dimensions.get("screen");

const CustomMainHeader = () => {
    return (
        <SafeAreaView style={styles.headerContainer}>
            <Text style={styles.headerTitle}>ВЕСТА-СЛ-80-18-Ц зав.№ 01/24</Text>
            <TouchableOpacity onPress={() => alert('Button pressed!')} style={styles.headerButton}>
                <ArrowToSvg/>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const Navigator = () => {
    let [fontsLoaded] = useFonts({
        PTSansCaption_400Regular,
        PTSansCaption_700Bold,
    });
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    return isAuth ? (
        <Tab.Navigator>
            <Tab.Screen options={{
                tabBarLabel: "Весы",
                title: "ВЕСТА-СЛ-80-18-Ц зав.№ 01/24 ",
                tabBarInactiveTintColor: "#000000",
                tabBarActiveTintColor: "#70C5C9",
                tabBarIcon: ({focused}) => <CameraIconSvg isFocused={focused}/>,
                headerStyle: {
                    backgroundColor: "#EEF7FF"
                },
                header: () => <CustomMainHeader/>,
                headerTitleAlign: "left",
                headerTitleStyle: {
                    textAlign: "left",
                    fontFamily: "PTSansCaption_700Bold",
                    fontSize: width * 0.05
                },
            }} name="Камера" component={MainScreen}/>
            <Tab.Screen options={{
                headerTitleAlign: "left",
                headerTitleStyle: {
                    textAlign: "left",
                    fontFamily: "PTSansCaption_700Bold",
                    fontSize: width * 0.06
                },
                tabBarLabel: "Журнал",
                tabBarInactiveTintColor: "#000000",
                tabBarActiveTintColor: "#70C5C9",
                headerShown: false,
                tabBarIcon: ({focused}) => <JournalIconSvg isFocused={focused}/>,
                headerStyle: {
                    backgroundColor: "#EEF7FF"
                },
            }} name="Journal" component={JournalScreenRoot}/>
            <Tab.Screen options={{
                tabBarLabel: "Сервис",
                title: "Техподдержка",
                headerTitleAlign: "left",
                headerTitleStyle: {
                    textAlign: "left",
                    fontFamily: "PTSansCaption_700Bold",
                    fontSize: width * 0.06
                },
                tabBarInactiveTintColor: "#000000",
                tabBarActiveTintColor: "#70C5C9",
                tabBarIcon: ({focused}) => <ServiceIconSvg isFocused={focused}/>,
                headerStyle: {
                    backgroundColor: "#EEF7FF"
                }
            }} name="Сервис" component={ServiceScreen}/>
            <Tab.Screen options={{
                tabBarLabel: "Профиль",
                title: "Профиль пользователя",
                tabBarInactiveTintColor: "#000000",
                tabBarActiveTintColor: "#70C5C9",
                tabBarIcon: ({focused}) => <ProfileIconSvg isFocused={focused}/>,
                headerStyle: {
                    backgroundColor: "#EEF7FF"
                },
                headerTitleAlign: "left",
                headerTitleStyle: {
                    textAlign: "left",
                    fontFamily: "PTSansCaption_700Bold",
                    fontSize: width * 0.06
                },
            }} name="Профиль" component={ProfileScreen}/>
        </Tab.Navigator>
    ) : <Stack.Navigator>
        <Stack.Screen options={{
            headerShown: false,
            tabBarVisible: false,
        }} name="Login" component={LoginScreen}/>
        <Stack.Screen options={{
            headerShown: false,
        }} name="Loading" component={LoadingScreen}/>
        {/*<Stack.Screen name="Details" component={DetailsScreen} />*/}
    </Stack.Navigator>;
};

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
                <Provider store={store}>
                    <NavigationContainer>
                        <Navigator/>
                    </NavigationContainer>
                </Provider>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        fontFamily: 'PTSansCaption_700Bold',
        fontSize: width * 0.05,
        marginTop: height * 0.02,
        paddingLeft: width * 0.044,
        color: '#000',
        flex: 1,
    },
    headerButton: {
        marginTop: height * 0.02,
        marginRight: width * 0.1,
    },
});
