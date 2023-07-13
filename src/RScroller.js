/* eslint-disable no-undef */
import { useEffect } from "react";
import "https://rawcdn.githack.com/flackr/scroll-timeline/3063e156535f3ab1ffc8a4000ffdd3290232c121/dist/scroll-timeline.js";
export default function RScroller() {
  useEffect(() => {
    var winHeight = $(window).innerHeight();
    $(document).ready(function () {});

    window.addEventListener("resize", function (event) {
      //$(".panel").height($(window).innerHeight());
    });
    $(window).on("scroll", function () {
      $(".panelCon").css("bottom", $(window).scrollTop() * -1);
    });
  }, []);
  return (
    <div className="portfolio">
      <div className="block-50">
        <div className="gutter">
          <div
            className="cover-img"
            style={{
              backgroundImage: `url("https://source.unsplash.com/erondu")`,
            }}
          ></div>
        </div>
        <div className="gutter">
          <div
            className="cover-img"
            style={{
              backgroundImage: `url("https://source.unsplash.com/erondu")`,
            }}
          ></div>
        </div>
        <div className="gutter">
          <div
            className="cover-img"
            style={{
              backgroundImage: `url("https://source.unsplash.com/erondu")`,
            }}
          ></div>
        </div>
        <div className="gutter">
          <div
            className="cover-img"
            style={{
              backgroundImage: `url("https://source.unsplash.com/erondu")`,
            }}
          ></div>
        </div>
        <div className="gutter">
          <div
            className="cover-img"
            style={{
              backgroundImage: `url("https://source.unsplash.com/user/erondu")`,
            }}
          ></div>
        </div>
      </div>
      <div className="block-50">
        <div className="panelCon">
          <div className="gutter">
            <div
              className="cover-img panel"
              style={{
                backgroundImage: `url("https://source.unsplash.com/user/erondu")`,
              }}
            ></div>
          </div>
          <div className="gutter">
            <div
              className="cover-img panel"
              style={{
                backgroundImage: `url("https://source.unsplash.com/erondu")`,
              }}
            ></div>
          </div>
          <div className="gutter">
            <div
              className="cover-img panel"
              style={{
                backgroundImage: `url("https://source.unsplash.com/erondu")`,
              }}
            ></div>
          </div>
          <div className="gutter">
            <div
              className="cover-img panel"
              style={{
                backgroundImage: `url("https://source.unsplash.com/erondu")`,
              }}
            ></div>
          </div>
          <div className="gutter">
            <div
              className="cover-img panel"
              style={{
                backgroundImage: `url("https://source.unsplash.com/erondu")`,
              }}
            ></div>
          </div>
        </div>
      </div>{" "}
      <div className="block-50">
        <div className="gutter">
          <div
            className="cover-img"
            style={{
              backgroundImage: `url("https://source.unsplash.com/erondu")`,
            }}
          ></div>
        </div>
        <div className="gutter">
          <div
            className="cover-img"
            style={{
              backgroundImage: `url("https://source.unsplash.com/erondu")`,
            }}
          ></div>
        </div>
        <div className="gutter">
          <div
            className="cover-img"
            style={{
              backgroundImage: `url("https://source.unsplash.com/erondu")`,
            }}
          ></div>
        </div>
        <div className="gutter">
          <div
            className="cover-img"
            style={{
              backgroundImage: `url("https://source.unsplash.com/erondu")`,
            }}
          ></div>
        </div>
        <div className="gutter">
          <div
            className="cover-img"
            style={{
              backgroundImage: `url("https://source.unsplash.com/user/erondu")`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
