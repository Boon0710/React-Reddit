/* eslint-disable react/prop-types */


function PostContent({ title, body }){
  return (
    <div className="bg-white p-4 border border-gray-200 rounded-md">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">Something Something</h2>
      <p className="text-gray-700">lorem ipsum something something</p>
    </div>
  );
}

export default PostContent;