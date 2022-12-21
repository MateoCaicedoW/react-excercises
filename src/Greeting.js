export function Greeting() {
    const uset ={
        name: "Mateo",
        lastName: "Caicedo"
    }

    return <h1>
        Hello {uset.name} {uset.lastName}
    </h1>
}

export function UserCard(){
    return <div>
        <Greeting />
        <p>Some text</p>
    </div>
}
