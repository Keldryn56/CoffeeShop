import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignIn from "../pages/auth/SignIn"
import SignUp from "../pages/auth/SignUp"

const Stack = createNativeStackNavigator()

export default AuthNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="signin" component={SignIn} />
            <Stack.Screen name="signup" component={SignUp} />
        </Stack.Navigator>
    </NavigationContainer>
)