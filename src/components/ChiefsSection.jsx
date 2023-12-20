import ChiefPage from "./ChiefPage"
import { useState, useEffect } from "react"

export default function ChiefSection(){
    const [chiefs, setChiefs] = useState([]);

    useEffect(() => {
        async function fetchChiefs() {
            const response = await fetch('http://localhost:5000/chiefs');
            const data = await response.json();
            setChiefs(data);
        }
        fetchChiefs();
    }, []);
    

    if (!chiefs.length) return <div>Loading chiefs...</div>;

    return (
        <section className="chiefs-section">
            <h2>Featured Chefs</h2>
            <div className="chiefs-grid">
                {chiefs.map((chief, index) => <ChiefPage key={index} chief={chief} />)}
            </div>
        </section>
    )
}
