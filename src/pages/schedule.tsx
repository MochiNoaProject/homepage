import { Page } from "../parts/Page";
import { css } from "@emotion/core";
import { getCalenderURL } from "../helpers/calendar";
import { isSmartphone } from "../helpers/device";
import React from "react";

const Schedule: React.FC = () => {
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
        <Page>
            <div>
                <div
                    css={css`
                        display: flex;
                        flex-flow: column;
                        align-items: center;
                        width: 100%;
                        max-width: 960px;
                        padding: 10px;
                        margin: 70px auto;
                        text-align: center;
                        background-color: rgba(255, 255, 255, 0.6);
                        border-radius: 10px;
                    `}
                >
                    <h3>予定表</h3>
                    <iframe
                        width={calenderWidth}
                        height="600px"
                        src={calenderURL}
                        css={css`
                            max-width: 800px;
                            margin-bottom: 20px;
                        `}
                    />
                </div>
            </div>
        </Page>
    );
};

export default Schedule;
