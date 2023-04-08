import Image from "next/image"
import Link from "next/link"
import { NextPage } from "next/types"
import { useEffect } from "react"

import { invoke } from "@tauri-apps/api/tauri"

const Home: NextPage = () => {
  useEffect(() => {
    invoke("greet", { name: "World" }).then(console.log).catch(console.error)
  }, [])

  return (
    <>
      <main className="container min-w-full min-h-screen flex flex-col items-center justify-center gap-8">
        <p>Start Recommendation</p>
        {/* <p>Put password to start recommendation</p> */}

        <Link href="/recsys">
          <div className="transition w-fit h-fit p-4 rounded-xl dark:shadow-lg dark:bg-gray-700 dark:shadow-gray-700 hover:scale-110 duration-300">
            <Image
              src="/worksmate-logo.webp"
              alt="WorksMate Logo"
              width={300}
              height={44}
              priority
            />
          </div>
        </Link>

        <p>By Sungdon Kim (2B3E)</p>
      </main>
    </>
  )
}

export default Home
