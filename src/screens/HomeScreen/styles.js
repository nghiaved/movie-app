import { StyleSheet } from 'react-native'
import { theme } from '../../themes'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
        paddingHorizontal: 20,
        paddingBottom: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 600,
        color: theme.text
    },
    headerSubTitle: {
        color: 'white'
    }
})

export default styles