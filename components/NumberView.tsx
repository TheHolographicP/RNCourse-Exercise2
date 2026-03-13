import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import Colors from 'constants/colors'

interface NumberViewProps {
    value:number,
    isLoading:boolean,
    title:string
}

function NumberView({value, isLoading, title} : NumberViewProps) {
    
    var valueDisplay = isLoading ? <ActivityIndicator size='large'/> : <Text style={styles.numberValue}>{value}</Text>

    return  <View style={styles.numberContainer}>
        <Text style={styles.numberTitle}>{title}</Text>
        {valueDisplay}
    </View>

}

const styles = StyleSheet.create({
    numberContainer: {
        flexDirection: 'column',
        gap:10,
        backgroundColor:Colors.primary1,
        padding:8,
        borderRadius:8,
        aspectRatio: 1
    },
    numberTitle: {
        color: 'white',
        textAlign: 'center'
    },
    numberValue: {
        color: 'white',
        fontSize:30,
        textAlign: 'center'
    },
})

export default NumberView