import { FaRegCommentAlt } from "react-icons/fa";
function CommentButton() {
    return (
        <div className="flex items-center space-x-2 bg-gray-200 p-2 rounded-full">
            <button >
                <FaRegCommentAlt />
            </button>
            <span>0</span>
        </div>
    )
}

export default CommentButton
