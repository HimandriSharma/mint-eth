import "./App.css";
import UserState from "./context/user/UserState";
import HomePage from "./pages/HomePage";

function App() {
	return (
		<UserState>
			<HomePage />
		</UserState>
	);
}

export default App;
