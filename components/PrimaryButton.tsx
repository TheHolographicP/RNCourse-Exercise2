import { View, Text, Pressable, StyleSheet, GestureResponderEvent } from "react-native";

interface PrimaryButtonProps {
    displayText: string,
    callOnPress: (event: GestureResponderEvent) => void
}

function PrimaryButton({displayText, callOnPress}: PrimaryButtonProps) {
    return <View>
        <Pressable onPress={callOnPress} style={({pressed}) => pressed ? styles.addGoalButtonPressed : styles.addGoalButton}>
            <Text>{displayText}</Text>
        </Pressable>
    </View>
}


const styles = StyleSheet.create({
    addGoalButton: {
        backgroundColor:"#F1BF98",
        borderRadius: 6,
        padding: 8
    },
    addGoalButtonPressed: {
        backgroundColor:"#b18d72",
        borderRadius: 6,
        padding: 8
    }
});

export default PrimaryButton;