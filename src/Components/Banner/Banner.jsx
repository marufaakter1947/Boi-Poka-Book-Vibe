import React from 'react';
import BannerImg from "../../assets/Banner-Book.png"

const Banner = () => {
    return (
        <div className='flex justify-between items-center gap-14 px-[120px] py-[80px] mt-[48px] mb-[100px] rounded-3xl bg-[#1313130d]'>
            <div>
                <h1 className='text-[56px] font-bold mb-10'>Books to freshen up your bookshelf</h1>
                <button className='btn bg-[#23BE0A] text-white'>View The List</button>
            </div>
            <div>
                <img src={BannerImg} className='w-[368px] h-[394px]' alt="" />
            </div>
        </div>
    );
};

export default Banner;