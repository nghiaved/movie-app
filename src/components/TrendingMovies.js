import { StyleSheet, Text, TouchableWithoutFeedback, View, Image, Dimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'
import { image500 } from '../api/moviedb'

var { width, height } = Dimensions.get('window')

const TrendingMovies = ({ data }) => {
    const navigation = useNavigation()
    const handleClick = (item) => {
        navigation.navigate('Movie', item)
    }

    return (
        <View>
            <Text style={styles.title}>Trending</Text>
            <Carousel
                data={data}
                renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick} />}
                firstItem={1}
                inactiveSlideOpacity={0.6}
                sliderWidth={width}
                itemWidth={width * 0.62}
                slideStyle={styles.carousel} />
        </View>
    )
}

export default TrendingMovies

const MovieCard = ({ item, handleClick }) => {
    return (
        <TouchableWithoutFeedback onPress={() => handleClick(item)}>
            <Image
                // source={require('../../assets/images/moviePoster1.png')}
                source={{ uri: image500(item.poster_path) }}
                style={styles.img} />
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 20,
        marginBottom: 20,
        marginHorizontal: 10
    },
    carousel: {
        display: 'flex',
        alignItems: 'center'
    },
    img: {
        width: width * 0.6,
        height: height * 0.4,
        objectFit: 'contain',
        borderRadius: 20
    }
})