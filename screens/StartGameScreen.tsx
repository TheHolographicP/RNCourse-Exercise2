import { TextInput, Text, View, StyleSheet} from 'react-native';
import PrimaryButton from 'components/PrimaryButton'


function StartGameScreen() {

    function handleReset(){

    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.targetInput}/>
            <View style={styles.buttonGroup}>
                <PrimaryButton callOnPress={handleReset} displayText='Reset' style={styles.button}/>
                <PrimaryButton callOnPress={handleReset} displayText='Confirm' style={styles.button}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        gap:10,
        paddingTop:50,
        paddingHorizontal:16,
        alignItems: 'stretch'
    },
    buttonGroup:{
        flexDirection: 'row',
        alignItems: 'stretch',
        gap:10
    },
    button:{
        flex:1
    },
    targetInput:{
        borderWidth: 1,
        borderRadius: 6,
        padding:7,
        borderColor: '#E1F4CB',
        color: 'white'
    },
});

export default StartGameScreen;