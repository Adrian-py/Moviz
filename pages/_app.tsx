import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className="px-x">
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp;
