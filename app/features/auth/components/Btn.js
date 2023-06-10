import { Button } from 'react-native'

export default Btn = ({onSubmit, name, ...props}) => (
    <Button {...props} title={name} onPress={onSubmit} />
) 