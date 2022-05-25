import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { dataHijaiyah } from '../../utils/localStorage'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import Sound from 'react-native-sound';

export default function Belajar() {

    console.log(dataHijaiyah);

    var whoosh = new Sound(require('../../assets/1.mp3'), Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

        // Play the sound with an onEnd callback

    });


    const __renderItem = ({ item }) => {
        return (

            <TouchableOpacity onPress={() => {
                whoosh.play((success) => {
                    if (success) {
                        console.log('successfully finished playing');
                    } else {
                        console.log('playback failed due to audio decoding errors');
                    }
                });
            }} style={{
                flex: 1,
                height: windowHeight / 8,
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <Image source={item.image} style={{

                    width: 70,
                    height: 70
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
                }}>{item.lafal}</Text>
            </TouchableOpacity>
        )
    }






    return (
        <SafeAreaView style={{
            padding: 10,
            flex: 1
        }}>

            <FlatList showsVerticalScrollIndicator={false} numColumns={5} data={dataHijaiyah} renderItem={__renderItem} />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})