import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const Home: FunctionalComponent = () => {
    const isDarkMode =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    return (
        <div class={style.home}>
            <head>
                <meta
                    name="description"
                    content="望月のあ Official Site"
                ></meta>
            </head>
            <div class={style.main}>
                <p class={style.topLogo}>
                    <img src="assets/logo.png" alt="Logo" />
                </p>
                <h2>Youtube</h2>
                <p>
                    <a href="https://www.youtube.com/channel/UCQZqwa5cnLN8HNpZyr3Z6vQ">
                        https://www.youtube.com/channel/UCQZqwa5cnLN8HNpZyr3Z6vQ
                    </a>
                </p>
                <h2>Twitter</h2>
                <p>
                    <a href="https://twitter.com/_noach">
                        https://twitter.com/_noach
                    </a>
                </p>
                <h2>GitHub</h2>
                <p>
                    <a href="https://github.com/MochiNoaProject/homepage">
                        https://github.com/MochiNoaProject/homepage
                    </a>
                </p>
                <h2>FANBOX</h2>
                <p>
                    <a href="https://www.pixiv.net/fanbox/creator/49400494">
                        https://www.pixiv.net/fanbox/creator/49400494
                    </a>
                </p>
                <h2>もちのあちゃんのおみせ</h2>
                <p>
                    <a href="https://mochinoa.booth.pm/">
                        https://mochinoa.booth.pm/
                    </a>
                </p>
                <h2>マシュマロ</h2>
                <p>
                    <a href="https://marshmallow-qa.com/_noach">
                        https://marshmallow-qa.com/_noach
                    </a>
                </p>
                <div class={style.youtubeBox}>
                    <h3>動画</h3>
                    <iframe
                        title="望月のあ/MochizukiNoa"
                        width="560"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/iLH-gW7Iu30?start=2604"
                        data-frameborder="0"
                        data-allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        data-allowfullscreen
                        class="lazy"
                    ></iframe>
                    <p>
                        <a
                            rel="preconnect"
                            href="https://www.youtube.com/channel/UCQZqwa5cnLN8HNpZyr3Z6vQ"
                        >
                            More Videos
                        </a>
                    </p>
                </div>
            </div>
            <div class={style.back}>
                {isDarkMode && (
                    <picture>
                        <source
                            srcSet="/assets/お姉さんの姿-xsmall.png"
                            alt="wink"
                            media="(max-width: 480px)"
                        />
                        <source
                            srcSet="/assets/お姉さんの姿-small.png"
                            alt="wink"
                            media="(max-width: 1440px)"
                        />
                        <img src="/assets/お姉さんの姿.png" alt="wink" />
                    </picture>
                )}
                {!isDarkMode && (
                    <picture>
                        <source
                            srcSet="/assets/ういんく-xsmall.png"
                            alt="wink"
                            media="(max-width: 480px)"
                        />
                        <source
                            srcSet="/assets/ういんく-small.png"
                            alt="wink"
                            media="(max-width: 1440px)"
                        />
                        <img src="/assets/ういんく.png" alt="wink" />
                    </picture>
                )}
            </div>
        </div>
    );
};

export default Home;
