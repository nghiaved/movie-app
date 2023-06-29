import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { theme } from '../themes'
import { useNavigation } from '@react-navigation/native'
import { fallbackMoviePoster, image185 } from '../api/moviedb'

var { width, height } = Dimensions.get('window')

const MovieList = ({ title, data, hideSeeAll }) => {
    let movieName = 'Hello world and my name is Nghia, by the way.'

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {!hideSeeAll && <TouchableOpacity>
                    <Text style={styles.btn}>See All</Text>
                </TouchableOpacity>}
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ columnGap: 20 }}>
                {data.map((item, index) => {
                    return (
                        <TouchableWithoutFeedback
                            key={index}
                            onPress={() => navigation.push('Movie', item)}>
                            <View>
                                <Image
                                    // source={require('../../assets/images/moviePoster2.png')}
                                    source={{ uri: image185(item.poster_path) || fallbackMoviePoster }}
                                    style={styles.img} />
                                <Text style={styles.name}>
                                    {item.title.length > 14 ? item.title.slice(0, 14) + '...' : item.title}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default MovieList

const styles = StyleSheet.create({
    container: {

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 20,
        marginVertical: 20,
        marginHorizontal: 10
    },
    btn: {
        color: theme.text,
        fontSize: 16
    },
    img: {
        width: width * 0.33,
        height: height * 0.22,
        objectFit: 'contain',
        borderRadius: 20
    },
    name: {
        color: 'white'
    }
})