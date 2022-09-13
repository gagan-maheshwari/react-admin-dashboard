import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState =
{
	chat: false,
	cart: false,
	userProfile: false,
	notification: false
};

export const ContextProvider = ({ children }) =>
{
	const [menuActive, setMenuActive] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);

	const [screenSize, setScreenSize] = useState(undefined);

	const handleClick = (elementClicked) =>
	{
		setIsClicked({ ...initialState, [elementClicked]: true });
	};

	return (
		<StateContext.Provider
			value={{ menuActive, setMenuActive, isClicked, setIsClicked, handleClick, screenSize, setScreenSize }}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
