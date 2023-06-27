import { Dimensions, StyleSheet } from 'react-native'
import { theme } from '../../themes'

var { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.gradient,
        paddingBottom: 10,
    },
    header: {
        position: 'absolute',
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        width: '100%',
        zIndex: 1
    },
    iconWrapper: {
        backgroundColor: theme.text,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    img: {
        width,
        height: height * 0.55,
        objectFit: 'cover',
    },
    linear: {
        position: 'absolute',
        width,
        height: height * 0.4,
        bottom: 0,
    },
    content: {
        marginTop: -(height * 0.09),
        marginHorizontal: 20,
    },
    name: {
        color: 'white',
        fontSize: 24,
        fontWeight: 700,
        textAlign: 'center'
    },
    intro: {
        color: '#666',
        textAlign: 'center',
        marginTop: 10
    },
    desc: {
        marginTop: 10,
        color: '#666'
    }
})

export default styles