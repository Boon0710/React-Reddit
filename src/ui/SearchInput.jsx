import { IoIosSearch } from "react-icons/io";
function SearchInput() {
    return (
        <div className={`flex flex-grow mr-2 items-center`}>
          <div className="relative flex items-center w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <IoIosSearch className="h-5 w-5 text-gray-400 mb-0.5" />
            </div>
            <input
              type="text"
              placeholder="Search Reddit"
              className="block w-full pl-10 p-2.5 text-sm border border-gray-300 rounded-md bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-96 rounded-full"
            />
          </div>
        </div>
      );
}

export default SearchInput
