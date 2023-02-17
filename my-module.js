import axios from "axios";
   axios ("https://jsonplaceholder.typicode.com/posts").then((data) =>
        console.log(data)
   );

const getCommennts = () => {
    return new Promise ((resolve , reject) => {
        console.log("comments");
    });
};   
   getCommennts().then(()=> 
    console.log("bitti"));
     

