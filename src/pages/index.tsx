import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Create Next Template</title>
        <meta name="description" content="Basic Next.js starter template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="card-title">DaisyUI/Tailwind/Next.js Template</h2>
          <p>Now it&apos;s time to get busy...</p>
        </div>
      </div>
    </div>
  )
}

export default Home
