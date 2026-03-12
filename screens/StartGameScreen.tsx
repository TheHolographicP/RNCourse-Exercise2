import { useState } from 'react';
import { TextInput, Text, View, StyleSheet} from 'react-native';
import PrimaryButton from 'components/PrimaryButton'


function StartGameScreen() {
    const [numberInputText, setNumberInputText] = useState('')

    function inputHandler(enteredText: string): void {
        if (/^[0-9]*$/.test(enteredText))
            setNumberInputText(enteredText)
    }

    function handleReset(){
        setNumberInputText('')
    }

    function handleSubmit(){

    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.targetInput}
                value={numberInputText}
                onSubmitEditing={handleSubmit}
                onChangeText={inputHandler}
                maxLength={2}
                keyboardType='number-pad'
                
            />
        
            <PrimaryButton callOnPress={handleReset} displayText='Reset' style={styles.button}/>
            <PrimaryButton callOnPress={handleReset} displayText='Confirm' style={styles.button}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        paddingTop:50,
        paddingHorizontal:16,
        flexDirection: 'row',
        alignItems: 'stretch',
        gap:10
    },
    button:{
        flex:1
    },
    targetInput:{
        flex:1,
        borderWidth: 1,
        borderRadius: 6,
        padding:7,
        borderColor: '#E1F4CB',
        color: 'white'
    },
});

export default StartGameScreen;