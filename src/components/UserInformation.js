import React from "react";

function UserInformation() {
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
				<div style={{ fontSize: "1.4rem", marginLeft: "1rem" }}>Token Name</div>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<h2>Token Symbol:</h2>
				<div style={{ fontSize: "1.4rem", marginLeft: "1rem" }}>ETK</div>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<h2>User Balance:</h2>
				<div style={{ fontSize: "1.4rem", marginLeft: "1rem" }}>$$</div>
			</div>
		</div>
	);
}

export default UserInformation;
