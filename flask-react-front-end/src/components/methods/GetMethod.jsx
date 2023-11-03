import { useEffect, useState } from "react";

function GetMethodRender() {
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5000/api/items/");
                if (!response.ok) throw new Error("Data is not fetch");

                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error({ "ERROR": error })
            };
        };

        fetchItems();
    }, [])

    return (
        <>
            <h1>Greetings from Get Request</h1>
            <h3>These are the items from the useState:</h3>
            <ul>
                {
                    items.map((item, idx) => {
                        return <li key={idx}>{ item?.name }</li>
                    })
                }
            </ul>
        </>
    );
}

export default GetMethodRender;