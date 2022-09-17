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
	const [currentColor, setCurrentColor] = useState("blue");
	const [currentMode, setCurrentMode] = useState("Light");
	const [themeSettings, setThemeSettings] = useState(false);

	const setColor = (color) =>
	{
		setCurrentColor(color);
		localStorage.setItem("colorMode", color);

		setThemeSettings(false);
	};

	const setMode = (e) =>
	{
		setCurrentMode(e.target.value);
		localStorage.setItem("themeMode", e.target.value);

		setThemeSettings(false);
	};

	const handleClick = (elementClicked) =>
	{
		setIsClicked({ ...initialState, [elementClicked]: true });
	};

	return (
		<StateContext.Provider
			value={
				{
					menuActive,
					setMenuActive,
					isClicked,
					setIsClicked,
					handleClick,
					screenSize,
					setScreenSize,
					currentColor,
					currentMode,
					themeSettings,
					setThemeSettings,
					setColor,
					setMode
				}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
