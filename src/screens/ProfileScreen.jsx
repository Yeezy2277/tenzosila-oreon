import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {COLORS} from "../constants/colors";
import {PTSansCaption_400Regular, PTSansCaption_700Bold, useFonts} from "@expo-google-fonts/pt-sans-caption";
import {Button} from "../shared/Button";
import CheckboxSvg from "../shared/svg/CheckboxSvg";
import {EditSvg} from "../shared/svg/EditSvg";
import {BottomSheetFlatList, BottomSheetModal, BottomSheetView} from "@gorhom/bottom-sheet";
import mockCamera from "../mock/images/cameraMock.png";
import {ArrowSvg} from "../shared/svg/ArrowSvg";
import {Input} from "../shared/Input";
import Modal from "react-native-modal";
import {ModalCrossSvg} from "../shared/svg/ModalCrossSvg";
import {CalendarSvg} from "../shared/svg/CalendarSvg";
import {EyeSvg} from "../shared/svg/EyeSvg";
import {ListSvg} from "../shared/svg/ListSvg";
import {useHeaderHeight} from "@react-navigation/elements";

const {width, height} = Dimensions.get("screen");

const ProfileScreen = () => {
    let [fontsLoaded] = useFonts({
        PTSansCaption_400Regular,
        PTSansCaption_700Bold,
    });

    const headerHeight = useHeaderHeight();

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const [modalMode, setModalMode] = useState("edit");

    const changeModalMode = (mode) => {
        setModalMode(mode);
    }

    const openModal = (mode) => {
        changeModalMode(mode);
        handlePresentModalPress();
    }

    const bottomSheetModalRef = useRef(null);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    // variables
    const snapPoints = useMemo(() => [height - headerHeight / 2], []);

    return (
        <FlatList showsVerticalScrollIndicator={false} scrollEnabled={false} data={["1"]} style={styles.container}
                  renderItem={({}) => {
                      return <View style={styles.wrapper}>
                          <Text style={styles.title}>Подключенные весы</Text>
                          <View style={styles.camBlock}>
                              <View style={styles.camLine}>
                                  <View style={styles.camUnderLine}>
                                      <CheckboxSvg checked={true}/>
                                      <Text style={styles.camText}>ВЕСТА-СЛ-80-18-Ц зав.№ 01/24</Text>
                                  </View>
                                  <TouchableOpacity onPress={() => openModal("edit")}>
                                      <EditSvg/>
                                  </TouchableOpacity>
                              </View>
                              <View style={styles.camLine}>
                                  <View style={styles.camFooter}>
                                      <Text style={styles.camFooterText}>Истекает срок поверки</Text>
                                      <Text style={styles.camFooterText}>21.02.2025</Text>
                                  </View>
                              </View>
                          </View>
                          <View style={styles.camBlock}>
                              <View style={styles.camLine}>
                                  <View style={styles.camUnderLine}>
                                      <CheckboxSvg checked={false}/>
                                      <Text style={styles.camText}>ВЕСТА-СЛ-80-18-Ц зав.№ 01/24</Text>
                                  </View>
                                  <TouchableOpacity onPress={() => openModal("edit")}>
                                      <EditSvg/>
                                  </TouchableOpacity>
                              </View>
                              <View style={styles.camLine}>
                                  <View style={styles.camFooterInactive}>
                                      <Text style={styles.camFooterTextInactive}>Дата поверки</Text>
                                      <Text style={styles.camFooterTextGray}>21.02.2025</Text>
                                  </View>
                              </View>
                          </View>
                          <BottomSheetModal
                              keyboardBlurBehavior="restore"
                              ref={bottomSheetModalRef}
                              index={0}
                              snapPoints={snapPoints}
                              onChange={handleSheetChanges}
                          >
                              <BottomSheetFlatList showsVerticalScrollIndicator={false} data={["1"]}
                                        renderItem={() => {
                                            return <BottomSheetView style={styles.modalContainer}>
                                                <Text
                                                    style={[styles.modalTitle, {alignSelf: "flex-start"}]}>{modalMode === "create" ? "Добавление новых весов" : "Изменить данные о весах"}</Text>
                                                <Input style={{marginTop: height * 0.05}} textColor={"#000000"}
                                                       borderColor={"rgba(1,1,1,0.6)"}
                                                       placeholder={"Название весов"}/>
                                                <Input SvgImage={CalendarSvg} style={{marginTop: height * 0.02}}
                                                       textColor={"#000000"} borderColor={"rgba(1,1,1,0.6)"}
                                                       placeholder={"Дата поверки"}/>
                                                <Input style={{marginTop: height * 0.02}} textColor={"#000000"}
                                                       borderColor={"rgba(1,1,1,0.6)"} placeholder={"IP адрес"}/>
                                                <Input style={{marginTop: height * 0.02}} textColor={"#000000"}
                                                       borderColor={"rgba(1,1,1,0.6)"} placeholder={"Порт"}/>
                                                <Input SvgImage={modalMode === "create" ? null : EditSvg}
                                                       style={{marginTop: height * 0.02}} textColor={"#000000"}
                                                       borderColor={"rgba(1,1,1,0.6)"} placeholder={"Имя"}/>
                                                <Input SvgImage={EyeSvg} style={{marginTop: height * 0.02}}
                                                       textColor={"#000000"} borderColor={"rgba(1,1,1,0.6)"}
                                                       placeholder={"Пароль"}/>
                                                <Input SvgImage={ListSvg} style={{marginTop: height * 0.02}}
                                                       textColor={"#000000"} borderColor={"rgba(1,1,1,0.6)"}
                                                       placeholder={"Количество камер"}/>
                                                <Button style={{marginTop: height * 0.08625}} type={"filled"}
                                                        text={modalMode === "create" ? "Добавить новые весы" : "Сохранить"}/>
                                                {modalMode === "edit" &&
                                                    <Button onPress={toggleModal} style={{marginTop: height * 0.01}}
                                                            type={"outline"}
                                                            text={"Удалить весы"}/>}
                                            </BottomSheetView>
                                        }}/>
                          </BottomSheetModal>
                          <View style={{flex: 1}}>
                              <Button title="Show modal" onPress={toggleModal}/>
                              <Modal backdropColor="rgba(44, 83, 105, 0.8)" isVisible={isModalVisible}>
                                  <TouchableOpacity onPress={toggleModal} style={styles.modalCross}>
                                      <ModalCrossSvg/>
                                  </TouchableOpacity>
                                  <View style={styles.modalConfirm}>
                                      <Text style={styles.modalConfirmTitle}>Вы действительно хотите удалить
                                          весы?</Text>
                                      <Text style={styles.modalConfirmSubtitle}>ВЕСТА-СЛ-80-18-Ц зав.№ 01/24</Text>
                                      <Button onPress={toggleModal}
                                              style={{marginTop: height * 0.0475}} type={"filled"} text={"Нет"}/>
                                      <Button onPress={toggleModal} style={{marginTop: height * 0.01}} type={"outline"}
                                              text={"Да"}/>
                                      <Button title="Hide modal" onPress={toggleModal}/>
                                  </View>
                              </Modal>
                          </View>
                          <Button onPress={() => openModal("create")} type={"filled"} text={"Добавить новые весы"}/>
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
    camBlock: {
        marginTop: height * 0.01,
        // width,
        height: height * 0.11,
        borderRadius: 16,
        backgroundColor: COLORS.surface,
        padding: width * 0.044
    },
    wrapper: {
        height: height * 0.75,
        position: "relative",
        flex: 1,
    },
    camUnderLine: {
        flexDirection: "row",
        alignItems: "center",
        gap: width * 0.02
    },
    modalConfirm: {
        height: height * 0.33,
        borderRadius: 16,
        backgroundColor: COLORS.surface,
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.014,
        marginTop: height * 0.02
    },
    modalCross: {
        flexDirection: "row",
        justifyContent: "flex-end",
        // position: "absolute",
    },
    modalConfirmTitle: {
        marginTop: height * 0.02125,
        fontSize: width * 0.06,
        textAlign: "center",
        fontFamily: 'PTSansCaption_700Bold',
    },
    modalConfirmSubtitle: {
        fontSize: width * 0.04,
        textAlign: "center",
        fontFamily: 'PTSansCaption_400Regular',
        marginTop: height * 0.01,
    },
    camFooter: {
        // width,
        flex: 1,
        flexDirection: "row",
        gap: width * 0.01,
        backgroundColor: COLORS.primary,
        // height: height * 0.025,
        borderRadius: 5,
        paddingHorizontal: width * 0.02,
        paddingVertical: height * 0.002,
        marginTop: height * 0.02,
        // justifyContent: "center",
        // alignItems: "center",
    },
    camFooterInactive: {
        // width,
        flex: 1,
        flexDirection: "row",
        gap: width * 0.01,
        backgroundColor: COLORS.background,
        paddingVertical: height * 0.002,
        borderRadius: 5,
        paddingHorizontal: width * 0.02,
        marginTop: height * 0.02,
        // justifyContent: "center",
        // alignItems: "center",
    },
    camFooterText: {
        color: COLORS.surface,
        fontSize: width * 0.036,
        fontFamily: 'PTSansCaption_400Regular',
    },
    camFooterTextInactive: {
        color: COLORS.onSurface,
        fontSize: width * 0.036,
        fontFamily: 'PTSansCaption_400Regular',
    },
    camFooterTextGray: {
        color: COLORS.outlineVariant,
        fontSize: width * 0.036,
        fontFamily: 'PTSansCaption_400Regular',
    },
    camLine: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    camText: {
        fontSize: width * 0.04,
        fontFamily: 'PTSansCaption_700Bold',
    },
    commonText: {
        fontFamily: 'PTSansCaption_400Regular',
    },
    title: {
        marginTop: height * 0.035,
        fontSize: width * 0.05,
        fontFamily: 'PTSansCaption_700Bold',
    },
    dateTimeCam: {
        width: "40%",
        height: "12%",
        color: "white",
        background: "rgba(0,0,0,0.4)"
    },
    modalContainer: {
        paddingHorizontal: width * 0.04,
        alignItems: "center",
        flex: 1,
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
        marginTop: height * 0.115
    },
    modalLine: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: width * 0.04,
        marginTop: height * 0.022,
        width,
        background: "black",
    },
    modalImages: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
    },
    modalImagesBlock: {
        width: width * 0.12,
        borderBottomColor: COLORS.primary,
        paddingBottom: 8,
        borderBottomWidth: 2.7,
        alignItems: "center",
        gap: 8
    },
    modalImagesMiniature: {
        width: width * 0.133,
        height: width * 0.133,
    }
})

export default ProfileScreen;
