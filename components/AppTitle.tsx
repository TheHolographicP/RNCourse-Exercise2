import { Text, View, StyleSheet } from 'react-native'
import Colors from 'constants/colors'

function Title() {
    
    return  <View style={styles.titleContainer}>
        <Text style={styles.title}>Guess My Number Game</Text>
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
        fontSize:30,
    }
})

export default Title