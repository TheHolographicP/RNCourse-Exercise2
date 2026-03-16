import { useState } from 'react'
import { StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from 'screens/StartGameScreen'
import GameScreen from 'screens/GameScreen';
import GameOverScreen from 'screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0)

  function selectedNumberHandler(choice:number) {
    setUserNumber(choice)
    setGameIsOver(false)
  }

  function handleGameOver(rounds:number) {
    setGameIsOver(true)
    setGuessRounds(rounds)
  }

  function startNewGameHandler() {
    setUserNumber(undefined)
  }
  
  let screen = <StartGameScreen callOnSubmit={selectedNumberHandler}/>
  
  if (gameIsOver && (userNumber != null)) {
    screen = <GameOverScreen guessRequired={guessRounds} numberSelected={userNumber} callStartNewGame={startNewGameHandler}/>
  } else if (userNumber) {
    screen = <GameScreen chosenNumber={userNumber} onVictory={handleGameOver}/>
  }


  return (
    <SafeAreaProvider>
      <LinearGradient style={styles.rootScreen} colors={['#EF8354','#4F5D75']}>
        <ImageBackground
          source={require('assets/background.png')}
          resizeMode='cover'
          style={styles.imageBkg}
          imageStyle={{opacity:0.15}}
        >
          <SafeAreaView style={styles.screensContainer} >
            {screen}
          </SafeAreaView> 
        </ImageBackground>
      </LinearGradient>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
  },
  screensContainer: {
    flex:1,
    padding:8
  },
  imageBkg: {
    flex:1,
  }
});
