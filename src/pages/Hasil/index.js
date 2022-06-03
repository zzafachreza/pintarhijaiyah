import axios from 'axios';
import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Image,
    Animated,
} from 'react-native';
import { MyGap } from '../../components';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { apiURL, getData } from '../../utils/localStorage';


export default function Hasil({ navigation, route }) {

    const top = new Animated.Value(0.3);

    const animasi = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(top, {
                    toValue: 1,
                    duration: 800,
                }),
                Animated.timing(top, {
                    toValue: 200,
                    duration: 800,
                }),
            ]),
            {
                iterations: 1,
            },
        ).start();
    };



    useEffect(() => {
        animasi();
        axios.post(apiURL + 'add.php', {
            fid_user: user.id,
            level: level,
            skor: total,
            status: total >= 7 ? 'LULUS' : 'GAGAL'
        }).then(res => {
            console.warn('response server', res.data);
        })

    }, [])
    const user = route.params.user;
    const jawaban = route.params.jawaban;
    const level = route.params.level;
    console.warn(jawaban[1])

    let total = 0;

    for (let i = 1; i <= 10; i++) {
        total += parseInt(route.params.jawaban[i]);

    }
    console.warn('total', total);







    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.white,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Animated.Image
                source={total >= 7 ? require('../../assets/lulus.png') : require('../../assets/gagal.png')}
                style={
                    {
                        width: top,
                        height: top,
                        aspectRatio: 1,
                        resizeMode: "contain"
                    }

                }
            />
            <Text style={{
                marginTop: 10,
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20
            }}>SKOR KAMU DI LEVEL {level}</Text>
            <Text style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 5
            }}>{total}</Text>

            <MyGap jarak={10} />


        </View >
    );
}

const styles = StyleSheet.create({});
