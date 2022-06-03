import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { dataHijaiyah, dataLagu, dataSambung, datasambungSuara, dataSuara, getData } from '../../utils/localStorage'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import Sound from 'react-native-sound';
import { MyButton, MyGap } from '../../components';
import { Icon } from 'react-native-elements';

export default function Kuis({ navigation }) {

    // console.log(dataHijaiyah);
    const [item, setItem] = useState({});
    useEffect(() => {
        getData('user').then(x => {
            setItem(x);
        })
    }, [])






    return (
        <SafeAreaView style={{
            padding: 10,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>

            <TouchableOpacity onPress={() => navigation.navigate('Level_1', item)} style={styles.kotak}>

                <View style={{
                    flex: 1,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 15,
                        color: colors.black
                    }}>LEVEL 1</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('Play', item)} style={styles.kotak}>

                <View style={{
                    flex: 1,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 15,
                        color: colors.black
                    }}>LEVEL 2</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Play', item)} style={styles.kotak}>

                <View style={{
                    flex: 1,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 15,
                        color: colors.black
                    }}>LEVEL 3</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Play', item)} style={styles.kotak}>

                <View style={{
                    flex: 1,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 15,
                        color: colors.black
                    }}>LEVEL 4</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Play', item)} style={styles.kotak}>

                <View style={{
                    flex: 1,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 15,
                        color: colors.black
                    }}>LEVEL 5</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Play', item)} style={styles.kotak}>

                <View style={{
                    flex: 1,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 15,
                        color: colors.black
                    }}>LEVEL 6</Text>
                </View>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    kotak: {

        backgroundColor: colors.white,
        padding: 15,
        borderBottomWidth: 2,
        height: windowHeight / 8.5,
        elevation: 2,
        borderBottomColor: colors.primary,
        marginVertical: 5,

        flexDirection: 'row'

    }

})