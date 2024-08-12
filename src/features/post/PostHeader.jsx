/* eslint-disable react/prop-types */
import React from 'react';

function PostHeader({ subreddit, username, timestamp }){
  return (
    <div className="flex items-center space-x-2 text-xl text-gray-500">
      <span className="font-bold text-black">r/{subreddit}</span>
      <span>•</span>
      <span>Posted by u/{username}</span>
      <span>•</span>
      <span>{timestamp}</span>
    </div>
  );
}

export default PostHeader;

