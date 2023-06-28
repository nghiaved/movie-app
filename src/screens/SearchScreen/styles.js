import { Dimensions, StyleSheet } from 'react-native'
import { theme } from '../../themes'

var { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#f5f5f5',
        borderWidth: 1,
        borderRadius: 30,
    },
    input: {
        flex: 1,
        marginLeft: 20,
        fontSize: 16
    },
    iconWrapper: {
        backgroundColor: '#666',
        borderRadius: 30,
        padding: 10,
        margin: 5
    },
    title: {
        color: 'white',
        marginTop: 20,
        fontWeight: 600,
        fontSize: 16
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    img: {
        width: width * 0.43,
        height: height * 0.3,
        borderRadius: 30,
        marginTop: 20
    },
    name: {
        color: 'white',
        marginTop: 10
    },
    empty: {
        alignSelf: 'center',
        width: width * 0.8,
        height: width * 0.8
    }
})

export default styles