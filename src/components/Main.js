import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import { Footer } from "./Footer";
import { Links } from "./Links";
import { Headline } from "./Headline";
const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.description}>
        <Headline title={props.title} page={props.page}>
          <code className={styles.code}>pages/{props.page}.js</code>
        </Headline>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <Links />
      <Footer />
    </main>
  );
}
