import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';

const ToggleButton = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: '#C4C4C4', true: '#1AB65C' }}
                thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
};

export default ToggleButton;

const styles = StyleSheet.create({
    container: {
        marginLeft: 155,
    },
})
