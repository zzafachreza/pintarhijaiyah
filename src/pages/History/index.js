import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
    SafeAreaView,
    RefreshControl,
    Image,
    TouchableOpacity,
} from 'react-native';
import { storeData, getData, apiURL } from '../../utils/localStorage';
import axios from 'axios';
import { colors } from '../../utils/colors';
import { windowWidth, fonts } from '../../utils/fonts';

const wait = timeout => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
};
export default function ({ navigation, route }) {
    const [refreshing, setRefreshing] = React.useState(false);
    const [data, setData] = useState([]);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getDataBarang();
        wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        getDataBarang();
    }, []);

    const getDataBarang = () => {
        getData('user').then(res => {
            axios
                .post(apiURL + 'data.php', {
                    id_user: res.id,
                })
                .then(x => {
                    console.log(x.data);
                    setData(x.data);
                });
        });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{
                padding: 10,
                margin: 10,
                backgroundColor: 'white',
                elevation: 1,
            }}>
            <View style={{ flexDirection: 'row', padding: 10 }}>
                <Text
                    style={{
                        flex: 1,
                        fontSize: windowWidth / 30,
                        color: colors.primary,
                        fontFamily: fonts.secondary[600],
                    }}>
                    KUIS LEVEL {item.level}
                </Text>
                <Text
                    style={{
                        fontSize: windowWidth / 30,
                        color: colors.black,
                        fontFamily: fonts.secondary[600],
                    }}>
                    {item.tanggal} Pukul {item.jam}
                </Text>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    padding: 10,
                    borderTopWidth: 1,
                    borderTopColor: colors.tertiary,
                }}>

                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, borderWidth: 1, borderColor: colors.primary, borderRadius: 10, }}>
                    <Text
                        style={{
                            fontSize: windowWidth / 30,
                            textAlign: 'center',
                            backgroundColor: colors.primary,
                            color: colors.white,
                            paddingHorizontal: 10,
                        }}>
                        SKOR
                    </Text>
                    <Text
                        style={{
                            fontSize: windowWidth / 10,
                            textAlign: 'center',
                            color: colors.black,
                            fontFamily: fonts.secondary[600]
                        }}>
                        {item.skor}
                    </Text>
                </View>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',

                        flex: 1,
                    }}>

                    <Text
                        style={{
                            fontSize: windowWidth / 30,
                            textAlign: 'center',
                            backgroundColor: item.status == 'GAGAL' ? colors.danger : colors.success,
                            padding: 10,
                            borderRadius: 10,
                            color: colors.white,
                            fontFamily: fonts.secondary[600]
                        }}>
                        {item.status}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={[colors.primary]}
                />
            }
            style={{
                padding: 10,
            }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({});