import { useState } from 'react'
import { StyleSheet, ImageBackground } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from 'screens/StartGameScreen'
import GameScreen from 'screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();

  function selectedNumberHandler(choice:number) {
    setUserNumber(choice)
  }
  
  let screen = <StartGameScreen callOnSubmit={selectedNumberHandler}/>
  if (userNumber) {
    screen = <GameScreen/>
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={['#EF8354','#4F5D75']}>
      <ImageBackground
        source={require('assets/background.png')}
        resizeMode='cover'
        style={styles.imageBkg}
        imageStyle={{opacity:0.15}}
      >
        
      {screen}


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
    paddingTop:50,
    paddingHorizontal:16,
  }
});
