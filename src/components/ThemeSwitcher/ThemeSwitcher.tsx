import React from "react";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {FaSun} from "react-icons/fa";

interface IProps {
    setTheme: React.Dispatch<React.SetStateAction<boolean>>;
    theme: boolean
}

const ThemeSwitcher = ({setTheme, theme}: IProps) => {

    return (
        <div>
            <div onClick={() => setTheme((prevState: boolean) => !prevState)}>
                {theme ? <BsFillMoonStarsFill/> : <FaSun style={{color:"yellow", fontSize:25}}/>}
            </div>
        </div>
    );
};

export {ThemeSwitcher};