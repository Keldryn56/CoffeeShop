import cx from 'classnames';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import colors from '../../../../tailwind-extend';

export default Btn = ({onSubmit, name, sending, ...props}) => {

    const classes = cx('rounded py-inpY px-inpX bg-accv', sending ?? 'opacity-80') 

    return (
        <TouchableOpacity disabled={sending} className={classes} onPress={onSubmit}>
            {!sending ? <Text className="text-center text-second font-medium text-base">{name}</Text> : <ActivityIndicator color={colors.second} size="small" />}
        </TouchableOpacity>
    )
} 