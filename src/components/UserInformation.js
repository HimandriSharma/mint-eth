import React, { useContext } from "react";
import UserContext from "../context/user/UserContext";

function UserInformation() {
	const user = useContext(UserContext);
	return (
		<div
			style={{
				position: "relative",
				top: "10rem",
				display: "flex",
				flexDirection: "column",
				marginLeft: "3rem",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<h2>Token Name:</h2>
				<div style={{ fontSize: "1.4rem", marginLeft: "1rem" }}>{user?.state?.tokenName}</div>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<h2>Token Symbol:</h2>
				<div style={{ fontSize: "1.4rem", marginLeft: "1rem" }}>{user?.state?.tokenSymbol}</div>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<h2>User Balance:</h2>
				<div style={{ fontSize: "1.4rem", marginLeft: "1rem" }}>{user?.state?.balance}</div>
			</div>
		</div>
	);
}

export default UserInformation;
