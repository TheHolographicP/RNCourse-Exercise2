import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native'

import NumberView from 'components/NumberView';
import PrimaryButton from 'components/PrimaryButton'
import ScreenTitle from 'components/ScreenTitle';
import AppTitle from 'components/AppTitle';


interface GameScreenProps {
    chosenNumber:number,
    onVictory: ()=> void
}



function GameScreen({chosenNumber, onVictory}:GameScreenProps) {
    const [currentGuess, setCurrentGuess] = useState(0)
    const [guessLoading, setGuessLoading] = useState(true)
    const [guessRange, setGuessRange] = useState({min:1,max:100})


    useEffect(() => {
        generateGuess(guessRange.min, guessRange.max, chosenNumber);
    }, [chosenNumber]);

    useEffect(() => {
        if (currentGuess === chosenNumber) {
            console.log('victory')
            onVictory()
        }
    }, [currentGuess, chosenNumber, onVictory])

    async function generateGuess(min:number,max:number,exclude:number) {
        setGuessLoading(true)
        let randomNum: number;
        do {
        randomNum = Math.floor(Math.random() * (max - min) + min);
        } while (randomNum === exclude);

        await new Promise((resolve) => setTimeout(resolve, 1000));
        setGuessLoading(false);
        setCurrentGuess(randomNum);
    }

    async function nextGuessHandler(higher:boolean) {

        if (higher && currentGuess > chosenNumber) {
            Alert.alert("Incorrect","The current guess is not greater than the chosen number")
            return;
        }
        if (!higher && currentGuess < chosenNumber) {
            Alert.alert("Incorrect","The current guess is not lesser than the chosen number")
            return;
        }


        let newMin = guessRange.min
        let newMax = guessRange.max

        if (higher) {
            newMin = currentGuess+1
        } else {
            newMax = currentGuess
        }
        setGuessRange({min: newMin, max: newMax});       
        await generateGuess(newMin, newMax, currentGuess)
    }

    return (
    <View style={{flex:1}}>
        <AppTitle/>
        <View style={styles.contentContainer}>
            <View style={styles.headerWrapper}>
                <ScreenTitle>Opponent's Guess</ScreenTitle>
                <View style={styles.numberDisplayContainer}>
                    <NumberView value={chosenNumber} isLoading={false} title={'Chosen Number'}/>
                    <NumberView value={currentGuess} isLoading={guessLoading} title={'Current Guess'}/>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton callOnPress={() => nextGuessHandler(true)} displayText='Higher' style={styles.button}/>
                    <PrimaryButton callOnPress={() => nextGuessHandler(false)} displayText='Lower' style={styles.button}/>
                </View>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex:1,
        flexDirection: 'column',
        gap:10,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    
    headerWrapper:{
        backgroundColor:'#BFC0C0',
        padding:8,
        borderRadius:8,
        gap: 10,
    },
    
    numberDisplayContainer: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'stretch',
        justifyContent: 'center'
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

export default GameScreen;