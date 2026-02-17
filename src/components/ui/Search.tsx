
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="relative w-full max-w-[690px]">
      <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
      <input
        type="text"
        placeholder="What are you craving for today?"
        className="w-full h-[54px] pl-14 pr-4 rounded-lg bg-white text-lg text-[#1F2937] font-semibold outline-none placeholder:text-[#1F2937]"
      />
    </div>
  );
};

export default Search;