import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { dataHijaiyah, dataSuara } from '../../utils/localStorage'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import Sound from 'react-native-sound';
import { MyButton, MyGap } from '../../components';

export default function Belajar({ navigation }) {

    // console.log(dataHijaiyah);



    const __play = (x) => {

        console.log(dataSuara);

        var whoosh = new Sound(dataSuara[x].key, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            whoosh.play((success) => {
                if (success) {
                    console.log('successfully finished playing');
                } else {
                    console.log('playback failed due to audio decoding errors');
                }
            });
        });
    }


    const __renderItem = ({ item, index }) => {
        return (

            <TouchableOpacity onPress={() => {


                __play(item.id - 1)

            }} style={{
                flex: 1,
                height: windowHeight / 9,
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <Image source={item.image} style={{

                    width: 60,
                    height: 60
                }} />
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    padding: 5,
                    borderRadius: 5,

                    color: colors.white,
                    marginTop: 5,
                    backgroundColor: colors.primary,
                    width: '100%',
                    textAlign: 'center'
                }}>{item.lafal}  </Text>
            </TouchableOpacity>
        )
    }






    return (
        <SafeAreaView style={{
            padding: 10,
            flex: 1
        }}>

            <FlatList showsVerticalScrollIndicator={false} numColumns={5} data={dataHijaiyah} renderItem={__renderItem} />
            <MyButton onPress={() => navigation.navigate('BelajarSambung')} title="Sambung Huruf" warna={colors.primary} Icons='analytics' />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})