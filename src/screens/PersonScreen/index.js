import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation, useRoute } from '@react-navigation/native'
import MoviesList from '../../components/MovieList'
import styles from './styles'
import Loading from '../../components/Loading'
import { fallbackPersonImage, fetchPersonDetails, fetchPersonMovies, image342 } from '../../api/moviedb'

const PersonScreen = () => {
    const { params: item } = useRoute()
    const navigation = useNavigation()
    const [isFavourite, toggleFavourite] = useState(false)
    const [personMovies, setPersonMovies] = useState([])
    const [person, setPerson] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPersonDetails(item.id)
        getPersonMovies(item.id)
        setLoading(false)
    }, [])

    const getPersonDetails = async id => {
        const data = await fetchPersonDetails(id)
        if (data) setPerson(data)
    }

    const getPersonMovies = async id => {
        const data = await fetchPersonMovies(id)
        if (data && data.cast) setPersonMovies(data.cast)
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
                    <HeartIcon size={35} color={isFavourite ? 'red' : 'white'} />
                </TouchableOpacity>
            </SafeAreaView>
            {loading ? (
                <Loading />
            ) : (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.content}>
                    <View style={styles.imgWrapper}>
                        <Image
                            // source={require('../../../assets/images/castImage2.png')}
                            source={{ uri: image342(person?.profile_path) || fallbackPersonImage }}
                            style={styles.img} />
                    </View>
                    <Text style={styles.name}>{person?.name}</Text>
                    <Text style={styles.address}>{person?.place_of_birth}</Text>
                    <View style={styles.info}>
                        <View style={styles.borderRight}>
                            <Text style={styles.title}>Gender</Text>
                            <Text style={styles.desc}>
                                {person?.gender == 1 ? 'Female' : 'Male'}
                            </Text>
                        </View>
                        <View style={styles.borderRight}>
                            <Text style={styles.title}>Birthday</Text>
                            <Text style={styles.desc}>{person?.birthday}</Text>
                        </View>
                        <View style={styles.borderRight}>
                            <Text style={styles.title}>Known for</Text>
                            <Text style={styles.desc}>{person?.known_for_department}</Text>
                        </View>
                        <View>
                            <Text style={styles.title}>Popularity</Text>
                            <Text style={styles.desc}>{person?.popularity?.toFixed(2)} %</Text>
                        </View>
                    </View>
                    <Text style={styles.bio}>Biography</Text>
                    <Text style={styles.bioDetail}>
                        {person?.biography || 'N/A'}
                    </Text>
                    <MoviesList title={'Movies'} hideSeeAll={true} data={personMovies} />
                </ScrollView>
            )}
        </View>
    )
}

export default PersonScreen