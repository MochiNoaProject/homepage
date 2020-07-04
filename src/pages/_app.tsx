import "./style.css";
import * as React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>望月のあ Official Site</title>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <meta name="description" content="望月のあ Official Site" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <link
                    rel="apple-touch-icon"
                    href="/img/icons/apple-touch-icon.png"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
