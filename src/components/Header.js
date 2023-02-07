import React from "react";
import { Button } from "antd";

function Header() {
	return (
		<div
			style={{
				position: "fixed",
				height: "4rem",
				width: "100%",
				backgroundColor: "blue",
			}}
		>
			<span
				style={{
					position: "absolute",
					right: "0",
					top: "0",
					padding: "1rem",
				}}
			>
				<Button>Connect Wallet</Button>
			</span>
		</div>
	);
}

export default Header;
