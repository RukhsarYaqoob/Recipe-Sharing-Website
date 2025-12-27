import React from 'react'
const RatingStar = ({rating}) => {
  const totalStars = 5;

  return (
    <div className="flex  items-center gap-2">
      <div className="flex text-2xl text-yellow-500 ">
        {[...Array(totalStars)].map((_, i) => (
          <span key={i}>
            {i < Math.floor(rating) ? "★" : "☆"}
          </span>
        ))}
      </div>
      <span className=" text-gray-600">{rating}</span>
    </div>
  );
}

export default RatingStar