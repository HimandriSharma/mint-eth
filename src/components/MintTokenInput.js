import React, { useContext, useState } from "react";
import { Input, notification } from "antd";
import Web3 from "web3";
import UserContext from "../context/user/UserContext";
import contractABI from "../contracts/contractABI.json";

const { Search } = Input;

function MintTokenInput() {
	const user = useContext(UserContext);
	const [loading, setLoading] = useState(false);
	const validAddress = new RegExp(/^0x[a-fA-F0-9]{40}$/g);
	const handleMintingToken = async (value) => {
		if (validAddress.test(value) && user?.state?.address) {
			const newWeb3 = new Web3(window.ethereum);
			const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
			const contractInstance = new newWeb3.eth.Contract(
				contractABI,
				contractAddress
			);
			const tokenContract = await contractInstance.methods;
			setLoading(true);
			tokenContract
				.mint(value, 800000)
				.send({
					from: user.state.address,
					gasPrice: "20000000000",
				})
				.then(async () => {
					if (user.state.address === value) {
						var decimal = await tokenContract.decimals().call();
						var balance = await tokenContract
							.balanceOf(user.state.address)
							.call();
						var adjustedBalance = balance / Math.pow(10, decimal);
						user.updateUserInfo({ ...user.state, balance: adjustedBalance });
					}
					setLoading(false);
					notification.success({
						message: "Minting Token Successfully completed.",
					});
				})
				.catch(() => {
					setLoading(false);
					notification.error({
						message: `Error occured!`,
					});
				});
		} else {
			notification.error({
				message: `Either wallet not connected or receiver Address invalid.`,
			});
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
				placeholder="Input receiver address"
				enterButton="Mint Tokens"
				size="large"
				onSearch={handleMintingToken}
				loading={loading}
			/>
		</div>
	);
}

export default MintTokenInput;
