import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
  <main className={""}>
    <nav className={"flex justify-between font-bold  p-4"}>
      <Link href={"/"}>
        <h1 className={"text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500  to-purple-900"}>NexaRay</h1>
      </Link>
      <ul><li className={"bg-gray-50 rounded-xl text-black p-2 cursor-pointer"}>Contact Us</li></ul>
    </nav>
  </main>
  )
}
