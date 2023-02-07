import React from "react";
import { Input } from "antd";

const { Search } = Input;

function MintTokenInput() {
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
				// onSearch={onSearch}
			/>
		</div>
	);
}

export default MintTokenInput;
