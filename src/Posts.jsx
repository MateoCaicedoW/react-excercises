import { Button } from "./Button";
// import { DiAndroid } from "react-icons/di";

async function getPosts(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (response.status === 200) {
            const posts = response.json()
            return posts;        
        }
    
    } catch (error) {
        if (error.response) {
            const { data, status } = error.response;
            console.log(data, status);
        }
    }

    
}


const users = [
    {
        id: 1,
        name: "John",
        email: "jhona",
    },
    {
        id: 2,
        name: "Jane",
        email: "jane@gmail.com",
    },
    {
        id: 3,
        name: "Bob",
        email: "bob@gmail.com",
    },
]

export const Posts = () => {

    return(
        <div>
            <h1>Users</h1>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                )
            })}
        </div>
    )

}


