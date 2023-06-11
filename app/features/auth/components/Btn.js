import cx from 'classnames';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import colors from '../../../../tailwind-extend';

export default Btn = ({onSubmit, name, sending, ...props}) => {

    const classes = cx('rounded py-inpY px-inpX bg-second h-[45]', sending == true ? 'opacity-80' : null) 

    return (
        <TouchableOpacity disabled={sending} className={classes} onPress={onSubmit}>
            {!sending ? <Text className="text-center text-prim font-medium text-base">{name}</Text> : <ActivityIndicator color={colors.prim} size="small" />}
        </TouchableOpacity>
    )
} 