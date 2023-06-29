import { View, Text, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { debounce } from 'lodash'
import Loading from '../../components/Loading'
import { fallbackMoviePoster, image185, searchMovies } from '../../api/moviedb'
import styles from './styles'

const SearchScreen = () => {
    const navigation = useNavigation()
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)

    const handleSearch = (value) => {
        if (value && value.length > 2) {
            setLoading(true)
            searchMovies({
                query: value,
                include_adult: 'false',
                language: 'en-US',
                page: '1'
            }).then(data => {
                setLoading(false)
                if (data && data.results) setResult(data.results)
            })
        } else {
            setLoading(false)
            setResult([])
        }
    }

    const handleTextDebounce = useCallback(debounce(handleSearch, 400), [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TextInput
                    onChangeText={handleTextDebounce}
                    placeholder='Search Movie'
                    placeholderTextColor={'lightgray'}
                    style={styles.input} />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.iconWrapper}>
                    <XMarkIcon size='25' color='white' />
                </TouchableOpacity>
            </View>
            {loading ? (
                <Loading />
            ) :
                result.length > 0 ? (
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        <Text style={styles.title}>Result ({result.length})</Text>
                        <View style={styles.list}>
                            {result.map((item, index) => {
                                return (
                                    <TouchableWithoutFeedback
                                        key={index}
                                        onPress={() => navigation.push('Movie', item)}>
                                        <View>
                                            <Image
                                                // source={require('../../../assets/images/moviePoster2.png')}
                                                source={{ uri: image185(item?.poster_path) || fallbackMoviePoster }}
                                                style={styles.img} />
                                            <Text style={styles.name}>
                                                {item?.title.length > 22 ? item?.title.slice(0, 22) + '...' : item?.title}
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                )
                            })}
                        </View>
                    </ScrollView>
                ) : (
                    <View>
                        <Image source={require('../../../assets/images/movieTime.png')}
                            style={styles.empty} />
                    </View>
                )
            }
        </SafeAreaView >
    )
}

export default SearchScreen