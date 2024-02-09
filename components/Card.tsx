"use client";

import React from "react";

export const Card = async () => {
	const [state, setState] = React.useState(0);
	return (
		<div>
			Card
			<button onClick={() => setState(state + 1)}>{state} clicked</button>
		</div>
	);
};
