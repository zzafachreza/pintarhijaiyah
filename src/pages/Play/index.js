import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { dataHijaiyah, dataLagu, dataSambung, datasambungSuara, dataSuara } from '../../utils/localStorage'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import Sound from 'react-native-sound';
import { MyButton, MyGap } from '../../components';
import { Icon } from 'react-native-elements';

export default function Play({ route }) {

    var whoosh = new Sound(route.params.key, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }


    });

    const [isPlay, setIsPlay] = useState(false);


    const item = route.params;
    console.warn(item)
    return (
        <SafeAreaView style={{
            flex: 1
        }}>

            <View style={{
                flex: 1,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: windowWidth / 20,
                }}>{item.judul}</Text>

            </View>
            <View style={{
                padding: 10
            }}>

                <MyButton onPress={() => {
                    whoosh.play();

                }} Icons='play' warna={colors.primary} />
                <MyGap jarak={10} />
                <MyButton onPress={() => {
                    whoosh.pause();
                }} Icons='pause' warna={colors.primary} />
                <MyGap jarak={10} />
                <MyButton onPress={() => {
                    whoosh.stop();
                }} Icons='stop' warna={colors.primary} />
            </View>

        </SafeAreaView >

    )
}

const styles = StyleSheet.create({})