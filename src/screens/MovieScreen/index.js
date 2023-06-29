import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { LinearGradient } from 'expo-linear-gradient'
import Cast from '../../components/Cast'
import MovieList from '../../components/MovieList'
import Loading from '../../components/Loading'
import styles from './styles'
import { theme } from '../../themes'
import { fallbackMoviePoster, fetchMovieCredits, fetchMovieDetails, fetchSimilarMovies, image500 } from '../../api/moviedb'

const MovieScreen = () => {
    const { params: item } = useRoute()
    const [isFavourite, toggleFavourite] = useState(false)
    const [cast, setCast] = useState([])
    const [similarMovies, setSimilarMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [movie, setMovie] = useState({})
    const navigation = useNavigation()

    useEffect(() => {
        setLoading(true)
        getMovieDetails(item.id)
        getMovieCredits(item.id)
        getSimilarMovies(item.id)
    }, [item])

    const getMovieDetails = async (id) => {
        const data = await fetchMovieDetails(id)
        if (data) setMovie(data)
        setLoading(false)
    }

    const getMovieCredits = async (id) => {
        const data = await fetchMovieCredits(id)
        if (data && data.cast) setCast(data.cast)
        setLoading(false)
    }

    const getSimilarMovies = async (id) => {
        const data = await fetchSimilarMovies(id)
        if (data && data.results) setSimilarMovies(data.results)
        setLoading(false)
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.iconWrapper}>
                    <ChevronLeftIcon size={28} strokeWidth={2.5} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                    <HeartIcon size={35} color={isFavourite ? theme.text : 'white'} />
                </TouchableOpacity>
            </SafeAreaView>
            {loading ? (
                <Loading />
            ) : (
                <ScrollView>
                    <View>
                        <Image
                            // source={require('../../../assets/images/moviePoster2.png')}
                            source={{ uri: image500(movie?.poster_path) || fallbackMoviePoster }}
                            style={styles.img} />
                        <LinearGradient
                            colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
                            style={styles.linear}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1 }} />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.name}>{movie?.title}</Text>
                        {movie?.id ? (
                            <Text style={styles.intro}>{movie?.status} • {movie?.release_date?.split('-')[0]} • {movie?.runtime} min</Text>
                        ) : null}
                        <Text style={styles.intro}>
                            {movie?.genres?.map((genre, index) => {
                                let showDot = index + 1 != movie.genres.length
                                return (
                                    <Text key={index}>{genre?.name} {showDot ? '•' : null} </Text>
                                )
                            })}
                        </Text>
                        <Text style={styles.desc}>
                            {movie?.overview}
                        </Text>
                        <Cast cast={cast} navigation={navigation} />
                        <MovieList title='Similar Movies' hideSeeAll={true} data={similarMovies} />
                    </View>
                </ScrollView>
            )}
        </View>
    )
}

export default MovieScreen