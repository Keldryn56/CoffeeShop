import { useState } from "react";
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../../tailwind-extend'

export default useVisible = (props) => {
    const [visible, setVisible] = useState(false)
    const handleVisible = () => setVisible(prev => !prev)

    const Eye = () => (
        <TouchableOpacity hitSlop={15} className="mr-[10] self-center" onPress={handleVisible}>
            <Icon name={visible ? 'eye' : 'eye-slash'} size={20} color={colors.accv} />
        </TouchableOpacity>
    )
    
    return {
        visible,
        Eye
    }
}