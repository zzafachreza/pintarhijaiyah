import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { dataHijaiyah, dataSambung, datasambungSuara, dataSuara } from '../../utils/localStorage'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import Sound from 'react-native-sound';
import { MyButton, MyGap } from '../../components';

export default function BelajarSambung() {

    // console.log(dataHijaiyah);



    const __play = (x) => {

        console.log(dataSuara);

        var whoosh = new Sound(datasambungSuara[x].key, Sound.MAIN_BUNDLE, (error) => {
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


                if (item.id > 0) {
                    __play(item.id - 1)
                }

            }} style={{

                backgroundColor: colors.primary,
                marginVertical: 2,
                padding: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <Image source={item.image} style={{

                    width: '98%',
                    height: 45,
                }} />



            </TouchableOpacity>
        )
    }






    return (
        <SafeAreaView style={{
            padding: 10,
            flex: 1
        }}>

            <FlatList showsVerticalScrollIndicator={false} numColumns={1} data={dataSambung} renderItem={__renderItem} />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})