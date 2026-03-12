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
        <View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.targetInput}
                    value={numberInputText}
                    onSubmitEditing={handleSubmit}
                    onChangeText={inputHandler}
                    maxLength={2}
                    keyboardType='number-pad'
                    
                />
                <View style={styles.buttonContainer}>
                    <PrimaryButton callOnPress={handleReset} displayText='Reset' style={styles.button}/>
                    <PrimaryButton callOnPress={handleReset} displayText='Confirm' style={styles.button}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        gap:10,
        backgroundColor:'#BFC0C0',
        padding:8,
        borderRadius:8
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        gap:10,
    },
    button:{
        flex:1
    },
    targetInput:{
        borderWidth: 1,
        borderRadius: 6,
        padding:7,
        borderColor: '#2D3142',
        color: 'white',
        fontSize:30,
        textAlign: 'center'
    },
});

export default StartGameScreen;