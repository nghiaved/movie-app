import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Cast = ({ cast, navigation }) => {
    let personName = 'John Wick'
    let characterName = 'John Wick'
    return (
        <View>
            <Text style={styles.title}>Top Cast</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.list}>
                {
                    cast && cast.map((person, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.item}
                                onPress={() => navigation.navigate('Person', person)}>
                                <Image
                                    source={require('../../assets/images/castImage1.png')}
                                    style={styles.img} />
                                <Text style={styles.person}>
                                    {personName.length > 10 ? personName.slice(0, 10) + '...' : personName}
                                </Text>
                                <Text style={styles.character}>
                                    {characterName.length > 10 ? characterName.slice(0, 10) + '...' : characterName}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Cast

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 20,
        marginTop: 20,
        marginHorizontal: 10
    },
    list: {
        columnGap: 20,
        marginVertical: 20
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 60,
        height: 80,
        objectFit: 'cover',
        borderRadius: 30,
        borderColor: '#666',
        borderWidth: 2
    },
    person: {
        color: 'white'
    },
    character: {
        color: '#666'
    }
})