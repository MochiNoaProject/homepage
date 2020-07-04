import { css } from "@emotion/core";
import { isBrowser } from "../helpers/window";
import React from "react";

export const Avator: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const isDarkMode =
        isBrowser &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    return isDarkMode ? (
        <div
            {...props}
            css={css`
                position: relative;
                &::before {
                    position: fixed;
                    z-index: -1;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    content: "";
                    background-image: url("/img/お姉さんの姿.png");
                    background-repeat: no-repeat;
                    background-position: left top;
                    background-size: contain;
                    @media (max-width: 1440px) {
                        background-image: url("/img/お姉さんの姿-small.png");
                    }
                    @media (max-width: 600px) {
                        background-position: center top;
                    }
                    @media (max-width: 480px) {
                        background-image: url("/img/お姉さんの姿-xsmall.png");
                    }
                }
            `}
        />
    ) : (
        <div
            {...props}
            css={css`
                position: relative;
                &::before {
                    position: fixed;
                    z-index: -1;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    content: "";
                    background-image: url("/img/ういんく.png");
                    background-repeat: no-repeat;
                    background-position: left top;
                    background-size: contain;
                    @media (max-width: 1440px) {
                        background-image: url("/img/ういんく-small.png");
                    }
                    @media (max-width: 600px) {
                        background-position: center top;
                    }
                    @media (max-width: 480px) {
                        background-image: url("/img/ういんく-xsmall.png");
                    }
                }
            `}
        />
    );
};
