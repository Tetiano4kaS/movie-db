import {useEffect, useState} from "react";

interface IProps {
    search: string
    setSearch: (value: string) => void
    setGenresIds: (value:string)=>void
}

const Search = (props: IProps) => {
    const {search, setSearch, setGenresIds} = props;
    const [inputValue, setInputValue] = useState<string>(search);


    useEffect(() => {
        const timer = setTimeout(() => {
            setSearch(inputValue);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [inputValue, setSearch]);

    const handleInputChange = (value: string): void => {
        setInputValue(value);
        setGenresIds("")
    }
    return (
        <div>
            <input placeholder={'Search...'} value={inputValue}
                   onChange={event => handleInputChange(event.target.value)}/>
        </div>
    );
};

export {Search};