import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router";
function RightContent() {
    const navigate = useNavigate();
    return (
      <div className="flex space-x-4 items-center">
        <button className="flex items-center p-2 rounded-full hover:bg-gray-200 transition duration-200">
          <IoChatbubbleEllipsesOutline className="text-xl" />
        </button>
        <button className="flex items-center p-2 rounded-full hover:bg-gray-200 transition duration-200" onClick={() => navigate("/create-post")}>
          <BiPlus className="text-xl mr-1" />
          <span className="text-sm">Create</span>
        </button>
        <button className="flex items-center p-2 rounded-full hover:bg-gray-200 transition duration-200">
          <span className="text-sm">User</span>
        </button>
      </div>
    );
  }
export default RightContent
