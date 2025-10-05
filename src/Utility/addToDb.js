const getStoredBook = () =>{
    const storedBookSTR = localStorage.getItem("readList");
    if(storedBookSTR){
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else{
        return [];
    }
}

const addToStoredDB = (id) =>{
const storedBookData =getStoredBook();
if(storedBookData.includes(id)){
    alert("Already exist");
}
else{
    storedBookData.push(id);
    console.log(storedBookData);
}
}
