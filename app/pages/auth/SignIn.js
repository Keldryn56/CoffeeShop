import { useForm } from "react-hook-form";
import { View, Text, TouchableOpacity } from 'react-native';
import { Btn, Input } from '../../features/auth/components';
import { useAuthContext } from '../../features/auth/hooks/useAuthContext';
import { emailField, passwordField } from "../../utils/formRules";

export default SignIn = ({navigation}) => {

    const {control, handleSubmit, watch, formState: { errors }} = useForm({mode: "onSubmit", reValidateMode: "onSubmit"})
    const {signIn, sending} = useAuthContext()
    
    const onSubmit = (data) => {
        signIn(data.email, data.password)
    }
    
    return(
        <View style={{rowGap: 20}} className="flex-1 justify-center p-[20]">
            <Input autoCapitalize="none" placeholder="Email" errors={errors.email} control={control} rules={emailField} name="email" />
            <Input placeholder="Mot de passe" errors={errors.password} secureTextEntry={true} control={control} rules={passwordField} name="password" />
            <Btn name="Envoyer" onSubmit={handleSubmit(onSubmit)} sending={sending} />
            <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                <Text className="text-center">Pas de compte? <Text>Inscrivez vous</Text></Text>
            </TouchableOpacity>
        </View>
    )
}
