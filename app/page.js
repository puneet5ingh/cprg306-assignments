import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen p-2">
            <div>
                <h3>CPRG 306 Assignment</h3>
                <ul>
                    <li>
                        <Link href="./week-2">week 2 </Link>
                    </li>
                </ul>
            </div>
        </main>
    );
}