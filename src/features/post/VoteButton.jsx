import React, { useState } from 'react';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import { TiArrowUpOutline, TiArrowDownOutline } from "react-icons/ti";

function VoteButton(){
  const [voteCount, setVoteCount] = useState(0);
  const [userVote, setUserVote] = useState(null); // null: no vote, 'up': upvoted, 'down': downvoted

  const handleUpvote = () => {
    if (userVote === 'up') {
      setVoteCount(voteCount - 1);
      setUserVote(null);
    } else {
      if (userVote === 'down') {
        setVoteCount(voteCount + 2);
      } else {
        setVoteCount(voteCount + 1);
      }
      setUserVote('up');
    }
  };

  const handleDownvote = () => {
    if (userVote === 'down') {
      setVoteCount(voteCount + 1);
      setUserVote(null);
    } else {
      if (userVote === 'up') {
        setVoteCount(voteCount - 2);
      } else {
        setVoteCount(voteCount - 1);
      }
      setUserVote('down');
    }
  };

  return (
    <div className="flex items-center space-x-2 bg-gray-200 p-2 rounded-full">
      <button onClick={handleUpvote} className="focus:outline-none">
        <TiArrowUpOutline className={`w-6 h-6 ${userVote === 'up' ? 'text-blue-500' : 'text-gray-500 hover:text-gray-700'}`} />
      </button>
      <span className="text-gray-700">{voteCount}</span>
      <button onClick={handleDownvote} className="focus:outline-none">
        <TiArrowDownOutline className={`w-6 h-6 ${userVote === 'down' ? 'text-red-500' : 'text-gray-500 hover:text-gray-700'}`} />
      </button>
    </div>
  );
}

export default VoteButton;
