import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDb';
import Book from '../Book/Book';
const ReadList = () => {

    const [readList, setReadList] = useState([])
    const data = useLoaderData();

    useEffect(()=>{
const storedBookData = getStoredBook();
const convertedStoredBooks =storedBookData.map(id => parseInt(id))
const myReadList = data.filter(book=>convertedStoredBooks.includes(book.bookId));
setReadList(myReadList)
    },[])
    return (
        <div>
           <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <h2>Book i read {readList.length}</h2>
      {
        readList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>My wishlist</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;