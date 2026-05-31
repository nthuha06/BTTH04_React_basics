import { useState } from "react";

function GoodCounter() {
    console.log("🔄 Component render!");

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>✅ Counter dùng useState</h2>

            <p>
                Bộ đếm: {count}
            </p>

            <button onClick={handleClick}>
                Tăng (+1)
            </button>
        </div>
    );
}

export default GoodCounter;