import { View, Text, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import Loading from '../../components/Loading'
import styles from './styles'

const SearchScreen = () => {
    const navigation = useNavigation()
    const [result, setResult] = useState([1, 2, 3, 4])
    const [loading, setLoading] = useState(false)
    let movieName = 'Hello world and my name is Nghia, by the way.'

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TextInput
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
                                            <Image source={require('../../../assets/images/moviePoster2.png')}
                                                style={styles.img} />
                                            <Text style={styles.name}>
                                                {movieName.length > 22 ? movieName.slice(0, 22) + '...' : movieName}
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