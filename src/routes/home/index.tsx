import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const Home: FunctionalComponent = () => {
    const isDarkMode =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    return (
        <div class={style.home}>
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
                <h2>Github</h2>
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
                        width="560"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/iLH-gW7Iu30?start=2604"
                        data-frameborder="0"
                        data-allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        data-allowfullscreen
                    ></iframe>
                    <p>
                        <a href="https://www.youtube.com/channel/UCQZqwa5cnLN8HNpZyr3Z6vQ">
                            More
                        </a>
                    </p>
                </div>
            </div>
            <div class={style.back}>
                {isDarkMode && (
                    <img src="/assets/お姉さんの姿.png" alt="wink" />
                )}
                {!isDarkMode && <img src="/assets/ういんく.png" alt="wink" />}
            </div>
        </div>
    );
};

export default Home;
