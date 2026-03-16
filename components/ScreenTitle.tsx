import { Text, View, StyleSheet } from 'react-native'
import Colors from 'constants/colors'

interface TitleProps {
    children: React.ReactNode
}

function ScreenTitle({children} : TitleProps) {
    
    return  <View style={styles.titleContainer}>
        <Text style={styles.title}>{children}</Text>
    </View>

}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'column',
        gap:10,
        backgroundColor:Colors.primary1,
        padding:8,
        borderRadius:8,
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize:20,
    }
})

export default ScreenTitle