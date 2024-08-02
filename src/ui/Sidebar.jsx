import { AiFillHome } from "react-icons/ai";
import MainNav from "./MainNav";
function Sidebar() {
    return (
        <aside className="bg-gray-50 p-8 pr-6 border-r border-gray-200 row-span-full flex flex-col gap-8">
            <MainNav />
        </aside>
    )
}

export default Sidebar
