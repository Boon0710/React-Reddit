import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

function PostItem() {
  return (
    <div className="max-w-2xl mx-auto my-4 bg-white border border-gray-300 rounded-lg shadow-sm">
      <div className="p-4">
        <PostHeader />
        <PostContent />
        <PostFooter />
      </div>
    </div>
  );
}

export default PostItem;
