import { Dimensions, StyleSheet } from 'react-native'
import { theme } from '../../themes'

var { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
        paddingBottom: 20
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
    content: {
        marginHorizontal: 20,
        marginTop: 100,
    },
    imgWrapper: {
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 260,
        width: 260,
        height: 260,
        elevation: 40,
        shadowColor: '#f5f5f5',
        overflow: 'hidden',
    },
    img: {
        alignSelf: 'center',
        width: width * 0.74,
        height: height * 0.43,
        objectFit: 'cover'
    },
    name: {
        marginTop: 20,
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 700
    },
    address: {
        color: '#666',
        textAlign: 'center',
        fontSize: 16,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: theme.gradient,
        borderRadius: 20,
        padding: 10,
        marginVertical: 20
    },
    borderRight: {
        borderRightWidth: 2,
        borderColor: '#666',
        paddingRight: 10
    },
    title: {
        color: 'white',
        fontWeight: 700,
        textAlign: 'center'
    },
    desc: {
        color: '#666',
        textAlign: 'center'
    },
    bio: {
        color: 'white',
        fontSize: 18,
    },
    bioDetail: {
        color: '#666',
        marginTop: 10
    }
})

export default styles