import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import MoviesList from '../../components/MovieList'
import styles from './styles'

const PersonScreen = () => {
    const navigation = useNavigation()
    const [isFavourite, toggleFavourite] = useState(false)
    const [personMovies, setPersonMovies] = useState([1, 2, 3, 4, 5])

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
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}>
                <View style={styles.imgWrapper}>
                    <Image
                        source={require('../../../assets/images/castImage2.png')}
                        style={styles.img} />
                </View>
                <Text style={styles.name}>Keanu Reeves</Text>
                <Text style={styles.address}>London, United Kingdom</Text>
                <View style={styles.info}>
                    <View style={styles.borderRight}>
                        <Text style={styles.title}>Gender</Text>
                        <Text style={styles.desc}>Male</Text>
                    </View>
                    <View style={styles.borderRight}>
                        <Text style={styles.title}>Birthday</Text>
                        <Text style={styles.desc}>1964-09-02</Text>
                    </View>
                    <View style={styles.borderRight}>
                        <Text style={styles.title}>Known for</Text>
                        <Text style={styles.desc}>Acting</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>Popularity</Text>
                        <Text style={styles.desc}>64.23</Text>
                    </View>
                </View>
                <Text style={styles.bio}>Biography</Text>
                <Text style={styles.bioDetail}>
                    in ThemeProvider
                    in NavigationContainerInner (created by AppNavigation)
                    in AppNavigation (created by App)
                    in App (created by withDevTools(App))
                    in withDevTools(App)
                    in RCTView (created by View)
                    in View (created by AppContainer)
                    in RCTView (created by View)
                    in View (created by AppContainer)
                    in ThemeProvider
                    in NavigationContainerInner (created by AppNavigation)
                    in AppNavigation (created by App)
                    in App (created by withDevTools(App))
                    in withDevTools(App)
                    in RCTView (created by View)
                    in View (created by AppContainer)
                    in RCTView (created by View)
                    in View (created by AppContainer)
                </Text>
                <MoviesList title={'Movies'} hideSeeAll={true} data={personMovies} />
            </ScrollView>
        </View>
    )
}

export default PersonScreen