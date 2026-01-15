'use client'
import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h1> {counter} </h1>
            <button
                onClick={() => setCounter(pre => pre + 1)}
            >
                Increase
            </button>
            <button
                onClick={() => setCounter(pre => pre - 1)}
            >
                Decrease
            </button>
        </div>
    )
}