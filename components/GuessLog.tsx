import { Text, View, StyleSheet, FlatList } from 'react-native'
import Colors from 'constants/colors'

interface GuessLogProps {
    guesses:number[],
}

function GuessNumber({index, total}:{index:number, total:number}) {
    return total - index;
}

function GuessLog({guesses} : GuessLogProps) {
    return  <FlatList
        data={guesses}
        renderItem={(itemData) => 
            <View style={styles.numberContainer}>
                <Text style={styles.numberTitle}>{`Guess #${GuessNumber({index: itemData.index, total: guesses.length})}`}</Text>
                <Text style={styles.numberValue}>{itemData.item}</Text>
            </View>
        }
        keyExtractor={(item) => item.toString()}
    />

}

const styles = StyleSheet.create({
    numberContainer: {
        flexDirection: 'row',
        gap:10,
        backgroundColor:Colors.primary1,
        padding:8,
        borderRadius:8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    numberTitle: {
        color: 'white',
        textAlign: 'center'
    },
    numberValue: {
        color: 'white',
        fontSize:20,
        textAlign: 'center'
    },
})

export default GuessLog