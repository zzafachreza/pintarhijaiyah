import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { dataHijaiyah, dataLagu, dataSambung, datasambungSuara, dataSuara } from '../../utils/localStorage'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import Sound from 'react-native-sound';
import { MyButton, MyGap } from '../../components';
import { Icon } from 'react-native-elements';

export default function Lagu({ navigation }) {

    // console.log(dataHijaiyah);

    const [pilih, setPilih] = useState(0);

    const __play = (x) => {

        console.log(dataSuara);

        var whoosh = new Sound(dataLagu[x].key, Sound.MAIN_BUNDLE, (error) => {
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



    const __stop = (x) => {

        var whoosh = new Sound(dataLagu[x].key, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            whoosh.stop((success) => {
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

            <TouchableOpacity onPress={() => navigation.navigate('Play', item)} style={{

                backgroundColor: colors.white,
                padding: 15,
                borderBottomWidth: 2,
                elevation: 2,
                borderBottomColor: colors.primary,
                marginVertical: 5,

                flexDirection: 'row'
            }}>

                <View style={{
                    flex: 1,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 15,
                        color: colors.black
                    }}>{item.judul}</Text>
                </View>




            </TouchableOpacity>
        )
    }






    return (
        <SafeAreaView style={{
            padding: 10,
            flex: 1
        }}>

            <FlatList showsVerticalScrollIndicator={false} numColumns={1} data={dataLagu} renderItem={__renderItem} />



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})