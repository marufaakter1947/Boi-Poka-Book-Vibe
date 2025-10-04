import React, { use } from "react";
import CardIcon from "../../assets/Vector.png";

const Book = ({ singleBook }) => {
  // const data = use(bookPromise);
  // console.log(data);
  // console.log(singleBook)
  const { bookName, author, image } = singleBook;

  return (
    <div className="card bg-base-100 w-96 shadow-sm p-6">
      <figure className="px-[96px] py-[32px] bg-[#f3f3f3] rounded-[16px] mb-[14px]">
        <img src={image} className="w-[134px] h-[166px] " alt="Books image" />
      </figure>

      <div className="flex justify-between mb-4">
        <a className="btn btn-ghost text-[16px] font-medium text-[#23BE0A]">
          Young Adult
        </a>
        <a className="btn btn-ghost text-[16px] font-medium text-[#23BE0A]">
          Identity
        </a>
      </div>

      <p className="text-2xl font-bold">The Catcher in the Rye</p>
      <p className="text-[16px] font-medium text-[#131313cc] mb-8">
        By : Awlad Hossain
      </p>
      <div className="flex justify-between">
        <p className="text-[16px] font-medium text-[#131313cc]">Fiction</p>
        <div className="flex gap-2">
          <span className="text-[16px] font-medium text-[#131313cc]">5.00</span>
          <img src={CardIcon} className="w-[24px] h-[24px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Book;
