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

const MovieScreen = () => {
    let movieName = 'Hello world and my name is Nghia, by the way.'
    const { params: item } = useRoute()
    const [isFavourite, toggleFavourite] = useState(false)
    const [cast, setCast] = useState([1, 2, 3, 4, 5])
    const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5])
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()
    useEffect(() => {

    }, [item])

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
                            source={require('../../../assets/images/moviePoster2.png')}
                            style={styles.img} />
                        <LinearGradient
                            colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
                            style={styles.linear}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1 }} />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.name}>{movieName}</Text>
                        <Text style={styles.intro}>Release • 2020 • 170 min</Text>
                        <Text style={styles.intro}>Action • Thril • Comedy</Text>
                        <Text style={styles.desc}>
                            FlowParserMixin.parseSubscript (D:\App\Expo\movie\node_modules\@babel\parser\lib\index.js:10932:19)
                            at FlowParserMixin.parseSubscript (D:\App\Expo\movie\node_modules\@babel\parser\lib\index.js:5900:18)
                            at FlowParserMixin.parseSubscripts (D:\App\Expo\movie\node_modules\@babel\parser\lib\index.js:10903:19)
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