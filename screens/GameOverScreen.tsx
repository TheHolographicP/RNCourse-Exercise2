import { View, Text, Image, StyleSheet } from 'react-native'
import PrimaryButton from 'components/PrimaryButton'
import Colors from 'constants/colors'
import AppTitle from 'components/AppTitle';
import ScreenTitle from 'components/ScreenTitle';

function GameOverScreen() {
    return <View style={{flex:1}}>
            <AppTitle/>
            <View style={styles.contentContainer}>
                <ScreenTitle>Game Over</ScreenTitle>
                <View style={styles.imageContainer}>
                    <Image source={require('assets/success.png')} style={styles.image}/>
                </View>
            
                <View style={styles.inputContainer}>
                    <Text style={styles.endText}>
                        Your phone needed
                        <Text style={styles.highlight}> 10 </Text>
                        rounds to guess the number
                        <Text style={styles.highlight}> 42 </Text>
                    </Text>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton displayText='Start New Game' callOnPress={() => {}} style={styles.button}/>
                    </View>
                </View>
            </View>
        </View>
}

export default GameOverScreen

const styles = StyleSheet.create({
    contentContainer: {
        flex:1,
        flexDirection: 'column',
        gap:10,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    inputContainer: {
        flexDirection: 'column',
        gap:10,
        backgroundColor:Colors.primary3,
        padding:8,
        borderRadius:8,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        gap:10,
        marginTop: 6
    },
    button:{
        marginTop: 6,
        flex:1
    },
    targetInput:{
        borderWidth: 1,
        borderRadius: 6,
        padding:7,
        borderColor: Colors.primary1,
        color: 'white',
        fontSize:30,
        textAlign: 'center',
    },
    imageContainer: {
        overflow: 'hidden',
        borderRadius: 100,
        width: 200,
        height: 200,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.primary1,
        borderWidth: 10,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    endText: {
        textAlign: 'center',
        fontSize: 18,
    },
    highlight: {
        fontWeight: 'bold',
        color: Colors.primary2,
    }
});