import axios from "axios";

 async function getData(userId) {
    const {data : users} = await axios (`https://jsonplaceholder.typicode.com/users/${userId}`);

    const { data: post} = await axios (`https://jsonplaceholder.typicode.com/posts/${userId}`);

    return { users, post}
}
export default getData;