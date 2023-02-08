import React, { useContext } from "react";
import UserContext from "../context/user/UserContext";
import "../App.css";

function UserInformation() {
	const user = useContext(UserContext);
	return (
		<div className="user-info-main-div">
			<div className="flex-display-row">
				<h2>Token Name:</h2>
				<div className="user-info-val">{user?.state?.tokenName}</div>
			</div>
			<div className="flex-display-row">
				<h2>Token Symbol:</h2>
				<div className="user-info-val">{user?.state?.tokenSymbol}</div>
			</div>
			<div className="flex-display-row">
				<h2>User Balance:</h2>
				<div className="user-info-val">{user?.state?.balance}</div>
			</div>
		</div>
	);
}

export default UserInformation;
