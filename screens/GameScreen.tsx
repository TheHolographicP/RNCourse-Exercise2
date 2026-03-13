import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native'

import NumberView from 'components/NumberView';

interface GameScreenProps {
    chosenNumber:number
}



function GameScreen({chosenNumber}:GameScreenProps) {
    const [currentGuess, setCurrentGuess] = useState(0)
    const [guessLoading, setGuessLoading] = useState(true)
    
    useEffect(() => {
        generateGuess(1, 100, chosenNumber);
    }, [chosenNumber]);

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

    return (
    <View>
        <View>
            <View style={styles.numberDisplayContainer}>
                <NumberView value={chosenNumber} isLoading={false} title={'Chosen Number'}/>
                <NumberView value={currentGuess} isLoading={guessLoading} title={'Current Guess'}/>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    numberDisplayContainer: {
        backgroundColor:'#BFC0C0',
        padding:8,
        margin: 8,
        borderRadius:8,
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