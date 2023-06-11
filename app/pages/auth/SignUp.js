import { useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from 'react-native';
import { Btn, Input, Logo } from '../../features/auth/components';
import { useAuthContext } from '../../features/auth/hooks/useAuthContext';
import { emailField, mandatoryField, passwordField } from "../../utils/formRules";

export default SignUp = ({navigation}) => {

    const {control, handleSubmit, formState: { errors }} = useForm({mode: "onSubmit", reValidateMode: "onSubmit"})
    const {signup} = useAuthContext()
    const onSubmit = (data) => {
        signup(data.username, data.email, data.password)
    }
    
    return(
        <View style={{rowGap: 30}} className="flex-1 justify-center p-[20] bg-prim">
            <Logo />
            <Input placeholder="Pseudo" errors={errors.username} control={control} rules={mandatoryField} name="username" />
            <Input autoCapitalize="none" placeholder="Email" errors={errors.email} control={control} rules={emailField} name="email" />
            <Input placeholder="Mot de passe" errors={errors.password} secureTextEntry={true} control={control} rules={passwordField} name="password" />
            <Input placeholder="Confirmation" errors={errors.passwordConfirm} secureTextEntry={true} control={control} rules={{
                ...passwordField, 
                validate: (val) => {
                    return val == watch('password') || 'Les mots de passe ne correspondent pas'
                }
            }} name="passwordConfirm" />
            <Btn name="Envoyer" onSubmit={handleSubmit(onSubmit)} />
            <TouchableOpacity onPress={() => navigation.navigate('signin')}>
                <Text className="text-center text-sm text-second">Déjà un compte? <Text className="underline">Connectez vous</Text></Text>
            </TouchableOpacity>
        </View>
    )
}
