import "antd/dist/antd.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className="px-16 py-[4vh] tb:px-6">
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp;
