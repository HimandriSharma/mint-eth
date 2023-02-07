import React from "react";
import "../App.css";
import Header from "../components/Header";
import MintTokenInput from "../components/MintTokenInput";
import UserInformation from "../components/UserInformation";

function HomePage() {
	return (
		<div>
			<Header />
			<UserInformation />
			<MintTokenInput />
		</div>
	);
}

export default HomePage;
