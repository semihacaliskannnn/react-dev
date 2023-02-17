import axios from "axios";



const getUsers = (users_id) =>{
    return new Promise(async (resolve,reject) =>{
        const {data} = await axios("https://jsonplaceholder.typicode.com/users/1"+users_id);

        resolve(data);
    });
};


const getPost = (post_id) =>{
    return new Promise(async (resolve,reject) =>{
        const {data} = await axios("https://jsonplaceholder.typicode.com/posts?userId=1"+post_id);

        resolve(data);
    });
};


(async () =>{
    const Users=await getUsers(1);
    const posts=await getPost(1);

    console.log(Users);
    console.log(posts);
})();
