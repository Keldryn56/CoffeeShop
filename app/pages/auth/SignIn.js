import { useForm } from "react-hook-form";
import { Text, View } from 'react-native';
import { Btn, Input } from '../../features/auth/components'
import { useAuthContext } from '../../features/auth/hooks/useAuthContext';
import { emailField, passwordField } from "../../utils/formRules"; 

export default SignIn = () => {

    const {control, handleSubmit, watch, formState: { errors }} = useForm({mode: "onSubmit", reValidateMode: "onSubmit"})
    const {signIn} = useAuthContext()
    const onSubmit = (data) => {
        //console.log(data)
    }
    
    return(
        <View className="flex-1 justify-center p-10">
            <Input placeholder="Email" errors={errors.email} control={control} rules={emailField} name="email" />
            <Input placeholder="Mot de passe" errors={errors.password} secureTextEntry={true} control={control} rules={passwordField} name="password" />
            <Btn name="Envoyer" onSubmit={handleSubmit(onSubmit)} />
        </View>
    )
}
