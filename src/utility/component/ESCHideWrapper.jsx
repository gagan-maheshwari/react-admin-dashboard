import { useEffect } from "react";
import { useStateContext } from "../../contexts/ContextProvider";

const ESCHideWrapper = (props) =>
{
    const { setThemeSettings, setIsClicked } = useStateContext();
    const { component } = props;

    const closeOnClick = () =>
    {
        if (component === "settings")
        {
            setThemeSettings(false);
        }
        else
        {
            setIsClicked(component);
        }
    };

    const handleEscapeKey = (event) =>
    {
        if (event.code === "Escape") 
        {
            if (component === "settings")
            {
                setThemeSettings(false);
            }
            else
            {
                setIsClicked(component);
            }
        }
    };

    useEffect(() =>
    {
        document.addEventListener("keydown", handleEscapeKey);

        return () =>
        {
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <div className="bg-half-transparent w-full h-screen fixed nav-item top-0 right-0" onClick={closeOnClick}></div>
            {props.children}
        </>
    );
};

export default ESCHideWrapper;
