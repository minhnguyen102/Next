import { FormatDate } from "./_lib/format-date"

export default function Home() {
    return (
        <>
            {FormatDate("10/2/2004")}
            <h1>Home page</h1>
        </>
    )
}