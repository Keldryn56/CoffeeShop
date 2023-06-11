import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "./app/features/auth/context/AuthContext";
import MainApp from "./app/index";

export default App = () => {
	return (
		<AuthProvider>
            <StatusBar />
			<MainApp />
		</AuthProvider>
	);
};
