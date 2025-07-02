"use client"
import { useContext, useState, createContext } from "react";

type searchContextType = {
    keyword: string,
    setKeyword: (value: string) => void;
}
const SearchContext = createContext<searchContextType>({
    keyword: "",
    setKeyword: () => { }
})

export function SearchProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    const [keyword, setKeyword] = useState("")
    return (
        <SearchContext.Provider value={{ keyword, setKeyword }} >
            {children}
        </SearchContext.Provider >
    )
}

export function useSearch() {
    return useContext(SearchContext);
}