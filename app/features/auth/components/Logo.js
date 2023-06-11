import { Image } from 'react-native'

export default Logo = (props) => (
    <Image 
        source={require('../../../assets/logo-transparent.png')}
        resizeMode = 'contain'
        className="w-full h-[150] self-center mb-[30]"
    />
)