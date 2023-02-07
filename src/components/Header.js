import React, { useState } from "react";
import { Button, notification } from "antd";
import Web3 from "web3";
import contractABI from "../contracts/contractABI.json";

function Header() {
	const [web3, setWeb3] = useState(null);
	const GöerliNetworkId = 5;
	const contractAddress = "0x927dfb9e957526e4d40448d6d05a39ea39a2ee6b";
	const address = "0xDeb19111505bD8B0435842B0A629D8B30079cd49";
	const connectWallet = async () => {
		if (window.ethereum) {
			const newWeb3 = new Web3(window.ethereum);
			const contractInstance = new newWeb3.eth.Contract(
				contractABI,
				contractAddress
			);
			const tokenContract = await contractInstance.methods;
			var decimal = await tokenContract.decimals().call();
			var balance = await tokenContract.balanceOf(address).call();
			var adjustedBalance = balance / Math.pow(10, decimal);
			var tokenName = await tokenContract.name().call();
			var tokenSymbol = await tokenContract.symbol().call();
			console.log(decimal, balance, adjustedBalance, tokenName, tokenSymbol);
			console.log(adjustedBalance + " " + tokenSymbol + " (" + tokenName + ")");
			const networkId = await newWeb3.eth.net.getId();
			if (networkId === GöerliNetworkId) {
				setWeb3(newWeb3);
				notification.success({
					message: "You are successfully connected.",
				});
			} else {
				notification.error({ message: `Please switch to Goerli Network` });
			}
		} else {
			notification.error({ message: `Please install Metamask` });
		}
	};
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
				<Button onClick={connectWallet}>Connect Wallet</Button>
			</span>
		</div>
	);
}

export default Header;
