import { Image, Text, View } from "react-native"
import { styles } from "./ProfileStyles"
import ProfilePicture from "../../../assets/profile-pic.png"

type ProfileProps = {
    isHome: Boolean
}

export default function Profile( { isHome }: ProfileProps) {
    return(
        <View style={styles.container}>
           <Image style={[styles.profilePic, isHome ? {} : styles.littlePic]} source={ProfilePicture} />
           <Text style={styles.name}>Caio Ferreira</Text>
        </View>
    )
}