import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { StatusBar } from 'expo-status-bar'
import styles from './styles'
import TrendingMovies from '../../components/TrendingMovies'
import MovieList from '../../components/MovieList'
import { useNavigation } from '@react-navigation/native'
import Loading from '../../components/Loading'

const HomeScreen = () => {
    const [trending, setTrending] = useState([1, 2, 3, 4, 5])
    const [upcoming, setUpcoming] = useState([1, 2, 3, 4, 5])
    const [topRated, setTopRated] = useState([1, 2, 3, 4, 5])
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()

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
                    <TrendingMovies data={trending} />
                    <MovieList title='Upcoming' data={upcoming} />
                    <MovieList title='Top Rated' data={topRated} />
                </ScrollView>
            )}
        </View>
    )
}

export default HomeScreen