import React, {useState} from "react";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {FaRegSun} from "react-icons/fa";

interface IProps {
    setTheme: React.Dispatch<React.SetStateAction<boolean>>;
    theme: boolean
}

const ThemeSwitcher = ({setTheme, theme}: IProps) => {

    return (
        <div>
            <div
                onClick={() => setTheme((prevState: boolean) => !prevState)}
            >
                {theme ? <BsFillMoonStarsFill/> : <FaRegSun/>}
            </div>
        </div>
    );
};

export {ThemeSwitcher};