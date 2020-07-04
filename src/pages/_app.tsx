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
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/img/icons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/img/icons/favicon-16x16.png"
                />
                <link rel="manifest" href="/manifest.json" />
                <link rel="shortcut icon" href="/img/favicon.ico" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@_noach" />
                <meta name="twitter:title" content="望月のあ Official Site" />
                <meta
                    name="twitter:image"
                    content="https://mochinoa.now.sh/img/ogp.png"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
