import { Alert, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getData, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

export default function Home({ navigation }) {
  const isFocused = useIsFocused();
  const [user, setUser] = useState({});


  useEffect(() => {
    if (isFocused) {

      getData('user').then(res => {
        setUser(res);
      })

    }
  }, [isFocused]);


  const DataKategori = ({
    icon,
    nama,
    nama2,
    onPress,
    warna = colors.primary,
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: warna,
          padding: 5,
          borderRadius: 10,
          width: windowWidth / 2.5,
          height: windowHeight / 5,
          elevation: 5,
          justifyContent: 'center',
        }}>
        <View>
          <Icon
            type="ionicon"
            name={icon}
            color={colors.white}
            size={windowWidth / 5}
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              color: colors.white,
              fontSize: windowWidth / 30,
              textAlign: 'center',
              // marginHorizontal: 10,
            }}>
            {nama}
          </Text>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              color: colors.white,
              fontSize: windowWidth / 35,
              textAlign: 'center',
              // marginHorizontal: 10,
            }}>
            {nama2}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };



  return (
    <SafeAreaView style={{
      flex: 1,
    }}>

      <View style={{
        backgroundColor: colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 20,
      }}>
        <Text style={{
          fontFamily: fonts.secondary[600],
          fontSize: 13,
          color: colors.white
        }}>Selamat datang, {user.nama}</Text>

        <View style={{
          flexDirection: 'row'
        }}>

          <View style={{
            flex: 2
          }}>
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: 25,
              color: colors.white
            }}>Pintar Hijaiyah</Text>

          </View>

          <TouchableOpacity onPress={() => {
            storeData('user', null);

            navigation.replace('Login');
          }} style={{

            flexDirection: 'row',
            padding: 10,
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Icon type="ionicon" name="log-out-outline" size={windowWidth / 25} color={colors.white} />
            <Text style={{
              fontFamily: fonts.secondary[600],
              fontSize: windowWidth / 25,
              left: 5,
              color: colors.white
            }}>Keluar</Text>
          </TouchableOpacity>

        </View>

      </View>

      {/* dasahboar kotak2 */}
      <Image source={require('../../assets/logo.png')} style={{
        width: 200,
        height: 200,
        alignSelf: 'center'
      }} />

      <View style={{
        justifyContent: 'center'
      }}>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <DataKategori
            warna={colors.primary}
            onPress={() => navigation.navigate('Belajar')}
            icon="book-outline"
            nama="BELAJAR"
            nama2="Yuk belajar hiyajiyah"
          />
          <DataKategori
            warna={colors.primary}
            onPress={() => navigation.navigate('Kuis')}
            icon="pencil-outline"
            nama="KUIS"
            nama2="Kuis Menarik loh"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <DataKategori
            warna={colors.primary}
            onPress={() => navigation.navigate('Lagu')}
            icon="musical-notes-outline"
            nama="MUSIK"
            nama2="Dengarkan suaranya yuk"
          />
          <DataKategori
            warna={colors.primary}
            onPress={() => navigation.navigate('History')}
            icon="file-tray-stacked-outline"
            nama="HISTORY"
            nama2="Riwayat aktifitas kamu"
          />
        </View>
      </View>









    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  judul: {
    fontFamily: fonts.secondary[600]
  }
})