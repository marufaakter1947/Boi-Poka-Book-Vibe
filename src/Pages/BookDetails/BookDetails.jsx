import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Utility/addToDb";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const BookDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  // console.log(singleBook);
  // console.log(data);
  const {
    bookName,
    image,
    author,
    category,
    review,
    tags,
    totalPages,
    yearOfPublishing,
    publisher,
    rating,
  } = singleBook;

  

  const handleMarkAsRead = (id) =>{
  
    // store data in localstorage in array or collection if already exist show alert and not exist then push in the collection of  array.

    MySwal.fire({
 title: "Good job!",
  text: "You added this book!",
  icon: "success"
})
addToStoredDB(id);
  }
  return (
    <div className="mt-13 mb-20 flex  gap-12">
      <div className="w-1/2 bg-[#13131326] p-18 rounded-[16px]">
        <img className="w-[425px] h-[565px]" src={image} alt="" />
      </div>
      <div className="w-1/2">
        <h1 className="text-[40px] font-bold mb-4">{bookName}</h1>
        <p className="text-xl font-medium text-[#131313cc] mb-4">
          By : {author}
        </p>
        <div className="border-1 border-[#13131326] mb-4"></div>
        <p className="text-xl font-medium text-[#131313cc] mb-4">{category}</p>
        <div className="border-1 border-[#13131326] mb-4"></div>
        <p className="mb-4">
          <span className="font-bold">Review : </span>
          {review}
        </p>
        <div className="flex items-center  gap-14 mb-4">
          <h1 className="font-bold text-[16px]">Tag</h1>

          {tags.map((tag) => (
            <button className="btn btn-ghost text-[16px] font-medium text-[#23BE0A]">
              #{tag}
            </button>
          ))}
        </div>

        <div className="border-1 border-[#13131326] mb-4"></div>
       <div className="mb-6">
         <div className="flex gap-[65px] mb-4">
            <h1 className=" text-[16px] text-[#131313b3]">Number of Pages:</h1>
            <h2 className="text-[16px] font-medium">{totalPages}</h2>
        </div>
        <div className="flex  gap-[120px] mb-4">
            <h1 className=" text-[16px] text-[#131313b3]">Publisher:</h1>
            <h2 className="text-[16px] font-medium">{publisher}</h2>
        </div>
        <div className="flex gap-[59px] mb-4">
            <h1 className=" text-[16px] text-[#131313b3]">Year of Publishing:</h1>
            <h2 className="text-[16px] font-medium">{yearOfPublishing}</h2>
        </div>
        <div className="flex gap-[142px] mb-4">
            <h1 className=" text-[16px] text-[#131313b3]">Rating:</h1>
            <h2 className="text-[16px] font-medium">{rating}</h2>
        </div>
       </div>
       <div>
        <button onClick={() =>handleMarkAsRead(id)} className="btn mr-4">Mark as Read</button>
        <button className="btn bg-[#50b1c9] text-white">Add To Wishlist</button>
       </div>
      </div>
    </div>
  );
};

export default BookDetails;
