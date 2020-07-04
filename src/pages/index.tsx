import { Avator } from "../components/Avator";
import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { Page } from "../parts/Page";
import { YoutubeBox } from "../components/YoutubeBox";
import { css } from "@emotion/core";
import React from "react";

const LinkIconWrapper: React.FC<React.HTMLProps<HTMLAnchorElement>> = (
    props
) => {
    return (
        <a
            {...props}
            rel="noopener noreferrer"
            target="_blank"
            css={css`
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 4rem;
                height: 4rem;
                font-size: 3rem;
                line-height: 1em;
                background-color: #fefefe;
                border-radius: 50%;
                box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
                    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
                    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
                transition: box-shadow 0.25s;
                &:hover {
                    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
                        0px 5px 8px 0px rgba(0, 0, 0, 0.14),
                        0px 1px 14px 0px rgba(0, 0, 0, 0.12);
                }
            `}
        />
    );
};

const Home: React.FC = () => {
    return (
        <Page>
            <div
                css={css`
                    display: grid;
                    grid-template-columns: minmax(300px, 400px) 1fr;
                    gap: 3rem;
                    @media (max-width: 900px) {
                        grid-template-columns: minmax(250px, 300px) 1fr;
                        gap: 1rem;
                    }
                    @media (max-width: 600px) {
                        grid-template-rows: 50vh 1fr;
                        grid-template-columns: 1fr;
                    }
                `}
            >
                <Avator
                    css={css`
                        min-width: 300px;
                        max-width: 600px;
                    `}
                />
                <div
                    css={css`
                        display: grid;
                        grid-template-rows: min-content 315px;
                        gap: 3rem;
                    `}
                >
                    <section
                        css={css`
                            padding: 0px 2ch 2ch;
                            background-color: rgba(255, 255, 255, 0.5);
                            border-radius: 32px;
                            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
                                0px 1px 1px 0px rgba(0, 0, 0, 0.14),
                                0px 2px 1px -1px rgba(0, 0, 0, 0.12);
                            @media (max-width: 600px) {
                                background-color: rgba(255, 255, 255, 0.7);
                            }
                        `}
                    >
                        <h2>望月のあ</h2>
                        <details>
                            <summary>基本情報</summary>
                            <table>
                                <tbody>
                                    {[
                                        ["性別", "女性"],
                                        ["年齢", "ひみつ(成人済み)"],
                                        ["誕生日", "3月27日"],
                                        ["身長", "158cm"],
                                        ["血液型", "B型"],
                                        ["キャラクターデザイン", "望月のあ"],
                                        ["Live2Dモデリング", "望月のあ"],
                                    ].map((row, i) => {
                                        return (
                                            <tr key={i}>
                                                {row.map((cell, j) => {
                                                    return (
                                                        <td key={`${i}-${j}`}>
                                                            {cell}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </details>
                        <details>
                            <summary>概要</summary>
                            <p>
                                <time dateTime="2019/12/27">
                                    2019年12月27日
                                </time>
                                、イラストや歌をたくさんの人に知ってもらう目的でTwitterの運用を始める。イラストの勉強をする中でLive2Dを学び、
                                自らが生みの親になる形で
                                <time dateTime="2020/01/29">2020年1月29日</time>
                                に個人勢のバーチャルYouTuberとしての活動を開始した。
                            </p>
                            <p>
                                主な活動はYouTubeでの配信。配信のジャンルは歌、ASMR、ゲームなど。
                            </p>
                        </details>
                        <details>
                            <summary>容姿</summary>
                            <p>
                                金髪でハーフツインテールに結った髪に緑色の瞳が特徴。
                                デビュー時は制服姿でバーチャル女子高生受肉という表現を使っていたが、配信でお酒が飲めないことに気づき新衣装を制作した。
                            </p>
                            <p>
                                <del>体調の悪い日以外はお酒を飲んでます！</del>
                                <br />
                                アルコールアレルギーを発症し、現在はお酒が飲めない。
                            </p>
                        </details>
                        <details>
                            <summary>経歴やできること</summary>
                            <ul>
                                {[
                                    "１０年以上の歌のレッスンを続け、ライブへの出演やイベントMCなどの経験がある",
                                    "救急法資格の元講師",
                                    "高校生のころから子ども向けのイラストを描いている",
                                    "２Dモデリング",
                                    "保育園でのアルバイト",
                                    "やぎ鳴き声真似。(迫真)",
                                    "タスマニアデビル鳴き声真似。(有料)",
                                    "漢検２級。(漢字よわよわ)",
                                    "英検３級。(英語もよわよわ)",
                                    "中身が美少女(重要)",
                                    "幼少期はお嬢様",
                                ].map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </details>
                    </section>
                    <YoutubeBox src="https://www.youtube.com/embed/VPXeQdzbyhc" />
                    <div
                        css={css`
                            display: grid;
                            grid-template-rows: repeat(1, 4rem);
                            grid-template-columns: repeat(4, 4rem);
                            gap: 1rem;
                        `}
                    >
                        {[
                            {
                                href:
                                    "https://www.youtube.com/channel/UCQZqwa5cnLN8HNpZyr3Z6vQ",
                                color: "#c4302b",
                                title: "Youtube",
                                Icon: FaYoutube,
                            },
                            {
                                href: "https://twitter.com/_noach",
                                color: "#1DA1F2",
                                title: "Twitter",
                                Icon: FaTwitter,
                            },
                            {
                                href:
                                    "https://github.com/MochiNoaProject/homepage",
                                color: "#171515",
                                title: "Github",
                                Icon: FaGithub,
                            },
                            {
                                href: "https://marshmallow-qa.com/_noach",
                                color: "",
                                title: "マシュマロ",
                                Icon: () => (
                                    <img
                                        src="/img/marshmallow.svg"
                                        css={css`
                                            width: 1em;
                                            height: auto;
                                        `}
                                    />
                                ),
                            },
                        ].map(({ Icon, color, href, title }) => {
                            return (
                                <LinkIconWrapper
                                    href={href}
                                    title={title}
                                    key={title}
                                >
                                    <Icon color={color} />
                                </LinkIconWrapper>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default Home;
