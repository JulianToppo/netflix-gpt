import React from "react";

const MovieReview = ({ review }) => {
  return (
    <div className="p-3 border border-2 shadow-md">
      <div className="flex-col">
        <div className="flex">
          <p className="p-6  bg-pink-300 rounded-full self-center"></p>
          <div className="flex-col  p-4 space-y-2">
            {" "}
            <p className="font-semibold"> A review by:{review.author}</p>
            <div className="flex items-center">
                <p className="flex p-3 bg-blue-400  rounded-full  text-center inline">
             
              {review.author_details.rating}   
            </p><p >Written by :{review.author} on </p>
            </div>
            
          </div>
        </div>
      </div>
      <div>
        <p>{review.content}</p>
      </div>
    </div>
  );
};

export default MovieReview;
