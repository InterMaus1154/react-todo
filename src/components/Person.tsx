import  { FC, useState, ChangeEvent } from "react";


interface Props{
    first_name: string;
    last_name?: string;
    age: number;
    place_of_birth?: string;
}



export let Person : FC<Props> = ({first_name, last_name, age, place_of_birth}) => {

    const [name, setName] = useState<string | null>();
    
    let handleChange = (event: ChangeEvent<HTMLInputElement>) : void =>{
        setName(event.target.value);
    };

    return(
        <>
            <input placeholder="Name" onChange={handleChange}/>
            {name}
        </>
    );
}