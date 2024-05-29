import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen p-2">
            <div>
               <h1>CPRG 306 Assignment</h1>
                <ul>
                    
                    <li>   <Link href="./week-2">week 2 - Assignment</Link> </li>
                   
                     <li>   <Link href="./week-3">week 3 - Assignemnt </Link> </li>
                    
                </ul>
                
            </div>
        </main>
    );
}