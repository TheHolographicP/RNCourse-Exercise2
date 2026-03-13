import { View, Text, Pressable, StyleSheet, GestureResponderEvent } from "react-native";
import { StyleProp, ViewStyle } from "react-native";
import Colors from 'constants/colors'

interface PrimaryButtonProps {
    displayText: string,
    callOnPress: (event: GestureResponderEvent) => void,
    style?: StyleProp<ViewStyle>;
}

function PrimaryButton({displayText, callOnPress, style}: PrimaryButtonProps) {
    return <View style={style}>
        <Pressable onPress={callOnPress} style={({pressed}) => pressed ? styles.addGoalButtonPressed : styles.addGoalButton}>
            <Text style={styles.text}>{displayText}</Text>
        </Pressable>
    </View>
}


const styles = StyleSheet.create({
    addGoalButton: {
        backgroundColor:Colors.primary1,
        borderRadius: 6,
        padding: 8,
        
    },
    addGoalButtonPressed: {
        backgroundColor:"#373b50",
        borderRadius: 6,
        padding: 8
    },
    text: {
        alignSelf: 'center',
        color: 'white'
    }
});

export default PrimaryButton;