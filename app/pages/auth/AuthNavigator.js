import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignIn from "./SignIn"
import SignUp from "./SignUp"

const Stack = createNativeStackNavigator()

export default AuthNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="signin" component={SignIn} />
            <Stack.Screen name="signup" component={SignUp} />
        </Stack.Navigator>
    </NavigationContainer>
)