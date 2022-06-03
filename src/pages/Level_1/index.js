import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { dataHijaiyah, dataLagu, dataSambung, datasambungSuara, dataSuara, getData } from '../../utils/localStorage'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import Sound from 'react-native-sound';
import { MyButton, MyGap } from '../../components';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
export default function Level_1({ navigation, route }) {



    const [jawaban, setJawaban] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0
    });

    const [pilih, setPilih] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0
    });

    const kirimJawaban = () => {
        console.warn(jawaban);

        navigation.replace('Hasil', {
            jawaban: jawaban,
            level: 1,
            user: user
        })
    }




    const user = route.params;
    const MySoal = ({ no, tanya, a, b, c, d }) => {
        return (
            <View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 20
                    }}>{no}. </Text>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 20
                    }}>Mana Huruf <Text style={{ color: colors.primary }}>{dataHijaiyah[tanya].lafal}</Text> ?</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5, }}>

                    <TouchableOpacity onPress={() => {
                        setJawaban({
                            ...jawaban,
                            [no]: a == tanya ? 1 : 0
                        })

                        setPilih({
                            ...pilih,
                            [no]: a
                        })
                    }} style={pilih[no] == a ? styles.cek : styles.bulat}>
                        <Image source={dataHijaiyah[a].image} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setJawaban({
                            ...jawaban,
                            [no]: b == tanya ? 1 : 0
                        })
                        setPilih({
                            ...pilih,
                            [no]: b
                        })
                    }} style={pilih[no] == b ? styles.cek : styles.bulat}>
                        <Image source={dataHijaiyah[b].image} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setJawaban({
                            ...jawaban,
                            [no]: c == tanya ? 1 : 0
                        })
                        setPilih({
                            ...pilih,
                            [no]: c
                        })
                    }} style={pilih[no] == c ? styles.cek : styles.bulat}>
                        <Image source={dataHijaiyah[c].image} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setJawaban({
                            ...jawaban,
                            [no]: d == tanya ? 1 : 0
                        })
                        setPilih({
                            ...pilih,
                            [no]: d
                        })
                    }} style={pilih[no] == d ? styles.cek : styles.bulat}>
                        <Image source={dataHijaiyah[d].image} />
                    </TouchableOpacity>

                </View>
            </View >

        )
    }

    return (
        <SafeAreaView style={{
            padding: 10,
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <MySoal no={1} tanya={3} a={1} b={2} c={5} d={3} />

                <MySoal no={2} tanya={5} a={5} b={4} c={15} d={13} />

                <MySoal no={3} tanya={6} a={11} b={24} c={3} d={6} />

                <MySoal no={4} tanya={7} a={17} b={7} c={25} d={4} />

                <MySoal no={5} tanya={16} a={15} b={16} c={25} d={23} />

                <MySoal no={6} tanya={27} a={5} b={2} c={3} d={27} />

                <MySoal no={7} tanya={25} a={9} b={8} c={1} d={25} />

                <MySoal no={8} tanya={17} a={17} b={13} c={28} d={5} />

                <MySoal no={9} tanya={10} a={3} b={10} c={6} d={14} />

                <MySoal no={10} tanya={8} a={12} b={8} c={6} d={9} />
                <MyGap jarak={10} />
                <MyButton onPress={kirimJawaban} title="Lihat Skor Saya" warna={colors.primary} Icons="ribbon-outline" />
            </ScrollView>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bulat: {
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.primary
    },
    cek: {
        padding: 10,
        // borderWidth: 2,
        borderRadius: 10,
        backgroundColor: colors.primary
    }
})