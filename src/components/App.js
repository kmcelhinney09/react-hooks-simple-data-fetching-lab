import React, { useState, useEffect } from "react";

function App() {
    const [dogImage, setDogImage] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)
    const [newDog, setNewDog] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(data => {
                setDogImage(data.message);
                setIsLoaded(true);
            })
    }, [newDog])

    function handleClick() {
        console.log(newDog)
        setNewDog((newDog)=> setNewDog(!newDog))
    }

    if (!isLoaded) return <p>Loading your Dog...</p>

    return (
        <div>
            <div>
                <button onClick={handleClick}>Click Me For New Dog</button>
            </div>
            <img src={dogImage} alt="A Random Dog" />
        </div>

    )
}

export default App