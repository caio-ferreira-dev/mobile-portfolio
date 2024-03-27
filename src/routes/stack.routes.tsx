import { createStackNavigator } from '@react-navigation/stack' 
import Home from '../screens/Home'
import Skills from '../screens/Skills'
const { Navigator, Screen } = createStackNavigator()

export default function StackRoutes() {
    return (
        <Navigator>
            <Screen 
                name='home' 
                component={Home} 
                options={{
                    headerShown: false,
                }}
            />
            <Screen 
                name='skills' 
                component={Skills} 
                options={{
                    title: 'Skills',
                    headerStyle: {
                        backgroundColor: '#333333'
                    },
                    headerTintColor: '#FFFFFF'
                }}
            />
        </Navigator>
    )
}