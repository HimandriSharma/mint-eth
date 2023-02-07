import React, { useContext, useState } from "react";
import { Input } from "antd";
import Web3 from "web3";
import UserContext from "../context/user/UserContext";
import contractABI from "../contracts/contractABI.json";

const { Search } = Input;

function MintTokenInput() {
	const user = useContext(UserContext);

	// const [inputAddress, setInputAddress] = useState("");
	const handleMintingToken = async (value) => {
		if (window.ethereum) {
			const newWeb3 = new Web3(window.ethereum);
			console.log(value);
			const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
			const contractInstance = new newWeb3.eth.Contract(
				contractABI,
				contractAddress
			);
			const tokenContract = await contractInstance.methods;
			console.log(tokenContract);
			var mint = await tokenContract.mint(value, 800000).send({
				from: "0xDeb19111505bD8B0435842B0A629D8B30079cd49",
				gasPrice: "20000000000",
			});
			var decimal = await tokenContract.decimals().call();
			var balance = await tokenContract.balanceOf(value).call();
			var adjustedBalance = balance / Math.pow(10, decimal);
			console.log("here"+adjustedBalance);
		}
	};
	return (
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
				onSearch={handleMintingToken}
			/>
		</div>
	);
}

export default MintTokenInput;
