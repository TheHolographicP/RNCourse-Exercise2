import { useState } from 'react'
import { StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from 'screens/StartGameScreen'
import GameScreen from 'screens/GameScreen';
import GameOverScreen from 'screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();
  const [gameIsOver, setGameIsOver] = useState(true)

  function selectedNumberHandler(choice:number) {
    setUserNumber(choice)
    setGameIsOver(true)
  }

  function victoryHandler() {
    setGameIsOver(true)
  }
  
  let screen = <StartGameScreen callOnSubmit={selectedNumberHandler}/>
  
  if (gameIsOver && (userNumber != null)) {
    screen = <GameOverScreen/>
  } else if (userNumber) {
    screen = <GameScreen chosenNumber={userNumber} onVictory={victoryHandler}/>
  }


  return (
    
      <LinearGradient style={styles.rootScreen} colors={['#EF8354','#4F5D75']}>
        <ImageBackground
          source={require('assets/background.png')}
          resizeMode='cover'
          style={styles.imageBkg}
          imageStyle={{opacity:0.15}}
        >
          <SafeAreaView style={styles.rootScreen} >
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
  },
  imageBkg: {
    flex:1,
  }
});
