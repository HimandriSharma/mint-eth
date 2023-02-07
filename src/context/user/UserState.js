import { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
	const [userInfo, setUserInfo] = useState(null);
	const updateUserInfo = (information) => {
		setUserInfo(information);
	};

	return (
		<UserContext.Provider value={{ state: userInfo, updateUserInfo }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserState;
