import { Button, Card, Input } from "antd";
import React from "react";
import "../App.css";

const { Search } = Input;

function HomePage() {
	return (
		<div>
			<div
				style={{
					position: "absolute",
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
			<div
				style={{
					position: "relative",
					top: "10rem",
					width: "100%",
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
					<div style={{ fontSize: "1.4rem", marginLeft: "1rem" }}>
						Token Name
					</div>
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
			<div
				style={{
					position: "relative",
					top: "15rem",
					width: "50%",
                    marginLeft: "3rem",
				}}
			>
				<Search
					placeholder="input user address"
					allowClear
					enterButton="Mint Tokens"
					size="large"
					// onSearch={onSearch}
				/>
			</div>
		</div>
	);
}

export default HomePage;
