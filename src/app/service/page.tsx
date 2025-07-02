import { ServiceCard } from "@/components/service/serviceCard";
import SearchBar from "@/components/ui/SearchBar";
import { SearchProvider } from "@/context/SearchContext";

export default function index() {
    return (
        <SearchProvider>
            <SearchBar />
            <ServiceCard />
        </SearchProvider>
    )
}