'use client'
import { Search } from "lucide-react"
import { useSearch } from "@/context/SearchContext"

function SearchBar() {
    const { keyword, setKeyword } = useSearch();

    return (
        <div className="sticky top-5 z-20 backdrop-blur-md ">

            <div className="relative">
                <span
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                    aria-hidden="true"
                >
                    <Search />
                </span>
                <input
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}

                    type="text"
                    placeholder="Search..."
                    className="w-full border border-black/70 p-2 rounded-md my-4 pl-10 outline-none dark:border-slate-400"
                />
            </div>
        </div>

    )
}

export default SearchBar