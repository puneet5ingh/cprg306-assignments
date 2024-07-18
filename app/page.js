import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6">
    <h1 className="text-5xl font-extrabold mb-10 drop-shadow-lg">Assignments</h1>
    <ul className="space-y-4 text-center">
      <li>
        <Link href="/week-2" className="block py-2 px-4 text-xl font-semibold bg-white text-blue-500 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
          Week 2
        </Link>
      </li>
      <li>
        <Link href="/week-3" className="block py-2 px-4 text-xl font-semibold bg-white text-blue-500 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
          Week 3
        </Link>
      </li>
      <li>
        <Link href="/week-4" className="block py-2 px-4 text-xl font-semibold bg-white text-blue-500 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
          Week 4
        </Link>
      </li>
      <li>
        <Link href="/week-5" className="block py-2 px-4 text-xl font-semibold bg-white text-blue-500 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
          Week 5
        </Link>
      </li>
      <li>
        <Link href="/week-6" className="block py-2 px-4 text-xl font-semibold bg-white text-blue-500 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
          Week 6
        </Link>
      </li>
      <li>
        <Link href="/week-7" className="block py-2 px-4 text-xl font-semibold bg-white text-blue-500 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
          Week 7
        </Link>
      </li>
      <li>
        <Link href="/week-8" className="block py-2 px-4 text-xl font-semibold bg-white text-blue-500 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
          Week 8
        </Link>
      </li>
      <li>
        <Link href="/week-10\week-8" className="block py-2 px-4 text-xl font-semibold bg-white text-blue-500 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
          Week 10
        </Link>
      </li>
    </ul>
   </div>
  );S
}
 
