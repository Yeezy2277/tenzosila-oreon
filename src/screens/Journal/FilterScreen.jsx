import React, {useState} from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from "react-native";
import {COLORS} from "../../constants/colors";
import {Input} from "../../shared/Input";
import {Button} from "../../shared/Button";
import {CalendarList, LocaleConfig} from 'react-native-calendars';
import {CalendarSvg} from "../../shared/svg/CalendarSvg";
import {ListSvg} from "../../shared/svg/ListSvg";
import {FindSvg} from "../../shared/svg/FindSvg";

const {width, height} = Dimensions.get("screen");

LocaleConfig.locales['fr'] = {
    monthNames: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    today: "Aujourd'hui"
};

LocaleConfig.defaultLocale = 'fr';

const FilterScreen = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    return (
        <FlatList showsVerticalScrollIndicator={false} data={["1"]} style={styles.container} renderItem={({}) => {
            return <View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Дата</Text>
                    <View style={styles.inputWrapper}>
                        <Input SvgImage={CalendarSvg} style={{marginTop: height * 0.01}} heightInput={height * 0.06} widthInput={width * 0.44}
                               textColor={"#000000"} borderColor={"rgba(1,1,1,0.6)"} placeholder={"от"}/>
                        <Input SvgImage={CalendarSvg} style={{marginTop: height * 0.01}} heightInput={height * 0.06} widthInput={width * 0.44}
                               textColor={"#000000"} borderColor={"rgba(1,1,1,0.6)"} placeholder={"до"}/>
                    </View>
                    <Text style={styles.title}>Время</Text>
                    <View style={styles.inputWrapper}>
                        <Input SvgImage={ListSvg} style={{marginTop: height * 0.01}} heightInput={height * 0.06} widthInput={width * 0.44}
                               textColor={"#000000"} borderColor={"rgba(1,1,1,0.6)"} placeholder={"от"}/>
                        <Input SvgImage={ListSvg} style={{marginTop: height * 0.01}} heightInput={height * 0.06} widthInput={width * 0.44}
                               textColor={"#000000"} borderColor={"rgba(1,1,1,0.6)"} placeholder={"до"}/>
                    </View>
                    <Text style={styles.title}>Госномер ТС</Text>
                    <View style={styles.inputWrapper}>
                        <Input SvgImage={FindSvg} style={{marginTop: height * 0.01}} heightInput={height * 0.06} widthInput={width * 0.91}
                               textColor={"#000000"} borderColor={"rgba(1,1,1,0.6)"} placeholder={"Введите номер ТС"}/>
                    </View>
                    <Text style={styles.title}>Масса</Text>
                    <View style={styles.inputWrapper}>
                        <Input style={{marginTop: height * 0.01}} heightInput={height * 0.06} widthInput={width * 0.44}
                               textColor={"#000000"} borderColor={"rgba(1,1,1,0.6)"} placeholder={"от"}/>
                        <Input style={{marginTop: height * 0.01}} heightInput={height * 0.06} widthInput={width * 0.44}
                               textColor={"#000000"} borderColor={"rgba(1,1,1,0.6)"} placeholder={"до"}/>
                    </View>
                </View>
                {/*<CalendarList*/}
                {/*    style={{width}}*/}
                {/*    onDayPress={onDayPress}*/}
                {/*    current={selectedDate}*/}
                {/*    markedDates={{*/}
                {/*        [selectedDate]: {*/}
                {/*            selected: true,*/}
                {/*            selectedColor: '#70C5C9',*/}
                {/*            selectedTextColor: '#fff',*/}
                {/*        },*/}
                {/*    }}*/}
                {/*    theme={{*/}
                {/*        calendarBackground: 'transparent',*/}
                {/*        textSectionTitleColor: 'transparent',*/}
                {/*        textSectionTitleDisabledColor: '#d9e1e8',*/}
                {/*        dayTextColor: '#2d4150',*/}
                {/*        textDisabledColor: '#d9e1e8',*/}
                {/*        monthTextColor: '#70C5C9',*/}
                {/*        textMonthFontSize: 16,*/}
                {/*        textMonthFontWeight: 'bold',*/}
                {/*        textDayHeaderFontSize: 12,*/}
                {/*        textDayHeaderFontWeight: '300',*/}
                {/*        textDayFontFamily: 'PTSansCaption_400Regular',*/}
                {/*        textDayFontSize: width * 0.04,*/}
                {/*        selectedDayBackgroundColor: '#70C5C9',*/}
                {/*        'stylesheet.day.basic': { // Target the day styles*/}
                {/*            base: {*/}
                {/*                width: width * 0.13,*/}
                {/*                height: width * 0.13,*/}
                {/*                justifyContent: "center",*/}
                {/*                alignItems: "center",*/}
                {/*                borderRadius: 5,*/}
                {/*                marginRight: width * 0.08,*/}
                {/*            }*/}
                {/*        },*/}
                {/*        'stylesheet.calendar.header': {*/}
                {/*            week: {*/}
                {/*                marginTop: 5,*/}
                {/*                flexDirection: 'row',*/}
                {/*                justifyContent: 'space-around'*/}
                {/*            },*/}
                {/*            monthText: {*/}
                {/*                fontSize: width * 0.05,*/}
                {/*                fontFamily: 'PTSansCaption_700Bold',*/}
                {/*                marginTop: -5,*/}
                {/*                position: "absolute",*/}
                {/*                left: -width * 0.03,*/}
                {/*                // top: -height * 0.01,*/}
                {/*                // backgroundColor: "#000000",*/}
                {/*                color: '#000000'*/}
                {/*            },*/}
                {/*        }*/}
                {/*    }}*/}
                {/*/>*/}
                <Button style={{marginTop: height * 0.02}} type={"filled"} text={"Применить"}/>
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
    title: {
        marginTop: height * 0.02,
        fontSize: width * 0.05,
        fontFamily: 'PTSansCaption_700Bold',
    },
    titleWrapper: {
        marginTop: height * 0.02,
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    wrapper: {
        height: height * 0.78,
        position: "relative",
        flex: 1,
    },
})

export {FilterScreen};
