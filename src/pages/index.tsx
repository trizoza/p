import Head from "next/head";
import { Inter } from "@next/font/google";
import { AboutMe } from "@/components/AboutMe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Peter Trizuliak's space</title>
        <meta name="description" content="Peter Trizuliak's space" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <main className="h-full align-middle">
        <AboutMe />
      </main>
    </>
  );
}
