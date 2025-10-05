import React, { use } from "react";
import CardIcon from "../../assets/Vector.png";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  // const data = use(bookPromise);
  // console.log(data);
  // console.log(singleBook)
  const { bookName, author, image,category,rating,tags,bookId } = singleBook;

  return (
   <Link to={`/bookDetails/${bookId}`}>
    <div className="card bg-base-100  shadow-sm p-6 border border-[#13131326]">
      <figure className="px-[96px] py-[32px] bg-[#f3f3f3] rounded-[16px] mb-[14px]">
        <img src={image} className="w-[134px] h-[166px] " alt="Books image" />
      </figure>

      <div className="flex justify-center gap-14 mb-4">
        {
tags.map(tag => <button className="btn btn-ghost text-[16px] font-medium text-[#23BE0A]">{tag}</button>)
        }
      </div>

      <p className="text-2xl font-bold mb-4">{bookName}</p>
      <p className="text-[16px] font-medium text-[#131313cc] mb-5">
        By : {author}
      </p>
      <div className="border-1 border-dashed text-[#13131326] mb-5"></div>
      <div className="flex justify-between">
        <p className="text-[16px] font-medium text-[#131313cc]">{category}</p>
        <div className="flex gap-2">
          <span className="text-[16px] font-medium text-[#131313cc]">{rating}</span>
          <img src={CardIcon} className="w-[24px] h-[24px]" alt="" />
        </div>
      </div>
    </div>
   </Link>
  );
};

export default Book;
