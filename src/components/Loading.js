import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress'
import { theme } from '../themes'

const Loading = () => {
    return (
        <View style={styles.container}>
            <Progress.CircleSnail thickness={12} size={160} color={theme.text} />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})