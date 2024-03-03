import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import { Container } from "react-bootstrap";
import styles from "@/styles/App.module.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <Head>
        <title key="title">News</title>
      </Head>
      <Container className={styles.pageContainer}>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}
