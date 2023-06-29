import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { StatusBar } from 'expo-status-bar'
import styles from './styles'
import TrendingMovies from '../../components/TrendingMovies'
import MovieList from '../../components/MovieList'
import { useNavigation } from '@react-navigation/native'
import Loading from '../../components/Loading'
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from '../../api/moviedb'

const HomeScreen = () => {
    const [trending, setTrending] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [topRated, setTopRated] = useState([])
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()

    useEffect(() => {
        getTrendingMovies()
        getUpcomingMovies()
        getTopRatedMovies()
        setLoading(false)
    }, [])

    const getTrendingMovies = async () => {
        const data = await fetchTrendingMovies()
        if (data && data.results) setTrending(data.results)
    }

    const getUpcomingMovies = async () => {
        const data = await fetchUpcomingMovies()
        if (data && data.results) setUpcoming(data.results)
    }

    const getTopRatedMovies = async () => {
        const data = await fetchTopRatedMovies()
        if (data && data.results) setTopRated(data.results)
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <StatusBar style='light' />
                <View style={styles.header}>
                    <Bars3CenterLeftIcon size='30' strokeWidth='2' color='white' />
                    <Text style={styles.headerTitle}>M<Text style={styles.headerSubTitle}>ovies</Text></Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <MagnifyingGlassIcon size='30' strokeWidth='2' color='white' />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            {loading ? (
                <Loading />
            ) : (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 10 }}>
                    {trending.length > 0 && <TrendingMovies data={trending} />}
                    {upcoming.length > 0 && <MovieList title='Upcoming' data={upcoming} />}
                    {topRated.length > 0 && <MovieList title='Top Rated' data={topRated} />}
                </ScrollView>
            )}
        </View>
    )
}

export default HomeScreen