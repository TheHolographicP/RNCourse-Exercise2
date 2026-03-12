import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from 'screens/StartGameScreen'
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient style={styles.rootScreen} colors={['#EF8354','#4F5D75']}>
      <ImageBackground
        source={require('assets/background.png')}
        resizeMode='cover'
        style={styles.imageBkg}
        imageStyle={{opacity:0.15}}
      >
        <StartGameScreen/>
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
