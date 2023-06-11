import { AuthProvider } from "./app/features/auth/context/AuthContext";
import MainApp from "./app/index";
import colors from './tailwind-extend';

export default App = () => {
	return (
		<AuthProvider>
			<MainApp />
		</AuthProvider>
	);
};
