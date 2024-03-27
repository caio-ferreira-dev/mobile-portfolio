import { Pressable, Text, View, Linking } from "react-native"
import { styles } from "./ContactStyles"
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Contact() {

    function openLink(url: string) {
        Linking.openURL(url)
    }

    return(
       <View style={styles.container}>
            <Pressable onPress={() => openLink('https://www.linkedin.com/in/caio-ferreira-2002/')}>
                <Text style={styles.text}><MaterialCommunityIcons name="linkedin" size={24} color="white" /> LinkedIn</Text>
            </Pressable>
            <Pressable onPress={() => openLink('https://github.com/caio-ferreira-dev')}>
                <Text style={styles.text}><MaterialCommunityIcons name="github" size={24} color="white" /> GitHub</Text>
            </Pressable>
       </View>
    )
}