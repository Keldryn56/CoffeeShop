import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import cx from 'classnames';

export default Btn = ({onSubmit, name, sending, ...props}) => {

    const classes = cx('bg-prim rounded py-btnY px-btnX',sending==true && 'opacity-80') 

    return (
        <TouchableOpacity disabled={sending} className={classes} onPress={onSubmit}>
            {!sending ? <Text className="text-white text-center">{name}</Text> : <ActivityIndicator size="small" />}
        </TouchableOpacity>
    )
} 