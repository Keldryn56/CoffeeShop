import { Image } from 'react-native'

export default Logo = (props) => (
    <Image 
        source={require('../../../assets/logo-transparent.png')}
        resizeMode = 'contain'
        className="w-full h-[200] self-center"
    />
)