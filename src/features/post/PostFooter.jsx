import CommentButton from "./CommentButton"
import VoteButton from "./VoteButton"


function PostFooter() {
    return (
        <div className="flex items-center space-x-4 p-2 bg-white border-t border-gray-200">
            <VoteButton />
            <CommentButton />
        </div>
    )
}

export default PostFooter
