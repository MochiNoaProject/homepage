import { css } from "@emotion/core";
import React from "react";

export const YoutubeBox: React.FC<React.HTMLProps<HTMLIFrameElement>> = ({
    ...props
}) => {
    return (
        <iframe
            css={css`
                width: 100%;
                max-width: 600px;
                border: none;
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
            title="望月のあ/MochizukiNoa"
            width="560"
            height="315"
            data-frameborder="0"
            data-allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            data-allowfullscreen
            className="lazy"
            {...props}
        />
    );
};
