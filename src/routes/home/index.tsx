import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";
import LinkButton from "../../components/link_button";
import { getCalenderURL } from "../../helpers/calendar";
import { isSmartphone } from "../../helpers/device";
import { isBrowser } from "../../helpers/window";

const Home: FunctionalComponent = () => {
    const isDarkMode =
        isBrowser &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    const smartphone = isSmartphone();
    const calenderWidth = smartphone ? "300px" : "800px";
    const calenderURL = getCalenderURL(
        "https://calendar.google.com/calendar/b/1/embed",
        {
            src: "hp1cjinb4dhjh7pk3k6ln7138g@group.calendar.google.com",
            height: 600,
            showTitle: false,
            showNav: false,
            showPrint: false,
            showTabs: false,
            showCalendars: false,
            showTz: false,
            showDate: false,
            weekStart: 1,
            timezone: "Asia/Tokyo",
            mode: smartphone ? "AGENDA" : "WEEK",
        }
    );
    return (
        <div class={style.home}>
            <div class={style.main}>
                <p class={style.topLogo}>
                    <img src="assets/logo.png" alt="Logo" />
                </p>
                <div class={style.links}>
                    <LinkButton
                        href="https://www.youtube.com/channel/UCQZqwa5cnLN8HNpZyr3Z6vQ"
                        color="#FFBA00"
                    >
                        YouTube
                    </LinkButton>
                    <LinkButton
                        href="https://twitter.com/_noach"
                        color="#FFBA00"
                    >
                        Twitter
                    </LinkButton>
                    <LinkButton
                        href="https://github.com/MochiNoaProject/homepage"
                        color="#FFBA00"
                    >
                        GitHub
                    </LinkButton>
                    <LinkButton
                        href="https://mochizukinoa.fanbox.cc/"
                        color="#FFBA00"
                    >
                        FANBOX
                    </LinkButton>
                    <LinkButton
                        href="https://mochinoa.booth.pm/"
                        color="#FFBA00"
                    >
                        もちのあちゃんのおみせ
                    </LinkButton>
                    <LinkButton
                        href="https://marshmallow-qa.com/_noach"
                        color="#FFBA00"
                    >
                        マシュマロ
                    </LinkButton>
                </div>
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
                <div class={style.calenderBox}>
                    <h3>予定表</h3>
                    <iframe
                        width={calenderWidth}
                        height="600px"
                        src={calenderURL}
                    ></iframe>
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
