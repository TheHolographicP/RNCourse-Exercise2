import { useState } from 'react';
import { TextInput, Text, View, StyleSheet, Alert} from 'react-native';
import PrimaryButton from 'components/PrimaryButton'
import Colors from 'constants/colors'


interface StartGameScreenProps {
    callOnSubmit:(validNumber: number ) => void
}

function StartGameScreen({callOnSubmit} : StartGameScreenProps) {
    const [numberInputText, setNumberInputText] = useState('')

    function inputHandler(enteredText: string): void {
        if (/^[0-9]*$/.test(enteredText))
            setNumberInputText(enteredText)
    }

    function handleReset(){
        setNumberInputText('')
    }

    function handleSubmit(){
        const chosenNumber = parseInt(numberInputText)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99  ) {
            Alert.alert(
                'Invalid number!',
                'Number must be an integer greater than 0 and less than 100',
                [{text: 'Ok', style: 'destructive', onPress: handleReset}]
            )
            return;
        }
        callOnSubmit(chosenNumber)

    }

    return (
        <View style={{flex:1}}>
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
                    <PrimaryButton callOnPress={handleSubmit} displayText='Confirm' style={styles.button}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        gap:10,
        backgroundColor:Colors.primary3,
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
        borderColor: Colors.primary1,
        color: 'white',
        fontSize:30,
        textAlign: 'center'
    },
});

export default StartGameScreen;