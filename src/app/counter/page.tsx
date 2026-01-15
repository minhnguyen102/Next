import { Metadata } from "next"
import Counter from "./counter"

export const metadata: Metadata = {
    title: "Counter Page",
    authors: [{name: "Minh nguyen"}]
}

export default function CounterPage() {
    return (
        <div>
            <Counter />
        </div>
    )
}