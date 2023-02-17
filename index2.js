import axios from "axios";

const getUsers = () => {
    return new Promise(async (resolve,reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users");
        resolve( data );
    });
} ; 

const getPost = (post_id) => {
    return new Promise(async (resolve,reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts"+ post_id);
        resolve( data );

    });
};

(async () => {
    const Users = await getUsers();
    const Post =await getPost(1);
    console.log(Users);
    console.log(Post);
})();