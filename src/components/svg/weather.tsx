import * as React from "react";
import { cn } from "@/lib/utils";

interface SvgProps {
  className?: string;
  isAnimate?: boolean;
}

const SvgComponent: React.FC<SvgProps> = ({ className = "", isAnimate = false }) => {
  return (
    <svg className={cn("animated", className)} id="freepik_stories-weather" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <style>{`@keyframes floating-weather{0%,to{opacity:1;transform:translateY(0)}50%{transform:translateY(${isAnimate ? -10 : 0}px)}}svg#freepik_stories-weather:not(.animated) .animable{opacity:0}`}</style>
      <g
        id="freepik--Floor--inject-63"
        className="animable"
        style={{
          transformOrigin: "250px 357.44px",
        }}
      >
        <ellipse
          id="freepik--floor--inject-63"
          cx={250}
          cy={357.44}
          rx={239.42}
          ry={125.97}
          style={{
            transformOrigin: "250px 357.44px",
          }}
          className="animable"
          fill="#0c0a09"
        />
      </g>
      <g
        id="freepik--Shadows--inject-63"
        className="animable"
        style={{
          transformOrigin: "239.249px 334.696px",
        }}
      >
        <ellipse
          id="freepik--Shadow--inject-63"
          cx={366.74}
          cy={383.11}
          rx={70.72}
          ry={40.83}
          style={{
            transformOrigin: "366.74px 383.11px",
          }}
          className="animable"
          fill="#27272a"
        />
        <path
          id="freepik--shadow--inject-63"
          d="M42 388.37l4 2.33a5.06 5.06 0 004.61 0L292.58 251c1.27-.74 1.27-1.93 0-2.66l-4-2.34a5.15 5.15 0 00-4.62 0L42 385.71a1.4 1.4 0 000 2.66z"
          style={{
            transformOrigin: "167.285px 318.354px",
          }}
          className="animable"
          fill="#27272a"
        />
      </g>
      <g
        id="freepik--Plants--inject-63"
        className="animable"
        style={{
          transformOrigin: "420.052px 334.049px",
        }}
      >
        <g
          id="freepik--plants--inject-63"
          className="animable"
          style={{
            transformOrigin: "420.052px 334.049px",
          }}
        >
          <path
            d="M398.29 347.2s.15-17.62 5.44-31.85 14.59-24.42 24.68-27.47 20.78 7.34 11.2 16.22S412 323.83 408.26 350z"
            style={{
              transformOrigin: "420.819px 318.668px",
            }}
            id="el34jnonnhjhv"
            className="animable"
            fill="#22c55e"
          />
          <path
            d="M398.29 347.2s.15-17.62 5.44-31.85 14.59-24.42 24.68-27.47 20.78 7.34 11.2 16.22S412 323.83 408.26 350z"
            style={{
              transformOrigin: "420.819px 318.668px",
            }}
            className="animable"
            opacity={0.15}
            id="elw7q0smktv6q"
          />
          <path
            d="M402.48 344.53a.24.24 0 01-.12 0 .59.59 0 01-.5-.66c4.17-30.43 22.55-47.37 31.68-52.08a.59.59 0 01.54 1c-8.95 4.61-27 21.25-31.06 51.2a.58.58 0 01-.54.54z"
            style={{
              transformOrigin: "418.058px 318.157px",
            }}
            id="el5dcpzvnecd9"
            className="animable"
            fill="#fff"
          />
          <path
            d="M397.46 364.09a20.66 20.66 0 00-.54-7.14c-.58-2.49-2.08-4.87-2.2-7.46a8.39 8.39 0 012.68-5.84c1.52-1.45 3.53-2.46 4.56-4.3s.82-4.18 1.32-6.28a9.16 9.16 0 0110.78-6.88c2.17.45 4.1 1.66 6.09 2.64a10.58 10.58 0 006.49 1.26 46 46 0 017.41-.78c4.23 0 9.56 1.44 11 5.92a5.42 5.42 0 01.11 3.42l-.05.14c-1.23 3-5.09 3.65-7.58 5.14-.68.4-1.81 1-2.07 1.81s.45 1.94.8 2.71c.91 2 2.21 3.84 2.33 6.06.17 3.17-2.48 6.23-5.15 7.58a17 17 0 01-8.38 1.45c-1.43-.06-3-.18-4.15.64a4.47 4.47 0 00-1.64 3.2c-.16 1.23 0 2.48-.16 3.71a10.93 10.93 0 01-6.83 8.83 12.93 12.93 0 01-9.46-.11 9.39 9.39 0 01-5.09-6.57 33.41 33.41 0 01-.27-9.15z"
            style={{
              transformOrigin: "420.052px 353.381px",
            }}
            id="elwnube8v7ja9"
            className="animable"
            fill="#22c55e"
          />
          <path
            d="M398.48 371.34a.47.47 0 01-.4-.53c4.1-29.27 33.47-37 40.52-37.35a.47.47 0 01.49.45.46.46 0 01-.44.49c-6.9.34-35.62 7.91-39.64 36.54a.47.47 0 01-.53.4z"
            style={{
              transformOrigin: "418.583px 352.402px",
            }}
            id="ela8ftgosnah"
            className="animable"
            fill="#fff"
          />
          <path
            d="M429.91 352.93a.52.52 0 01-.26-.1 25 25 0 00-21-3.25.48.48 0 01-.58-.33.47.47 0 01.33-.58 26 26 0 0121.86 3.42.47.47 0 01.07.66.49.49 0 01-.42.18z"
            style={{
              transformOrigin: "419.243px 350.279px",
            }}
            id="el8hppldfm7h6"
            className="animable"
            fill="#fff"
          />
        </g>
      </g>
      <g
        id="freepik--Clouds--inject-63"
        className="animable"
        style={{
          transformOrigin: "96.641px 90.4843px",
        }}
      >
        <g
          id="freepik--clouds--inject-63"
          className="animable"
          style={{
            transformOrigin: "96.641px 90.4843px",
          }}
        >
          <path
            d="M93.93 77.67l-3.44 2v-9.23c0-9.55-5-13-11.24-9.5A24.53 24.53 0 0067 81.17l-.09 1.76c-1.32-1-3.1-1.12-5.11 0-7 3.65-8.45 10.2-8.81 17.1v.79l-5.78 3.34c-3 1.67-5.57 6.63-5.8 11.18s2 7.19 5 5.52l46.74-27c3-1.67 5.57-6.39 5.81-10.93S96.9 76 93.93 77.67z"
            style={{
              transformOrigin: "70.1855px 90.4843px",
            }}
            id="elmrg2rwk1khi"
            className="animable"
            fill="#27272a"
          />
          <path
            d="M149.15 91.32l-6.62 3.82c.05-.39.09-.86.11-1.24l.13-2.54c.23-4.53-2-6.84-4.93-5.17a9.73 9.73 0 00-3.27 3.42c-.18-5.79-3.3-8.58-7.39-6.28-4.43 2.49-8.29 10-8.64 16.76v3.7a36.77 36.77 0 00.23 4.64l-5.5 3.17c-1.64.93-3.07 3.63-3.2 6.14s1.09 4 2.73 3.12l35.88-20.71a7.69 7.69 0 003.2-6c.12-2.47-1.09-3.76-2.73-2.83z"
            style={{
              transformOrigin: "130.974px 101.82px",
            }}
            id="elsz0oh4jsec"
            className="animable"
            fill="#27272a"
          />
        </g>
      </g>
      <g
        id="freepik--Screen--inject-63"
        className="animable"
        style={{
          transformOrigin: "165.93px 202.934px",
          animation: "1.5s Infinite linear floating-weather",
          animationDelay: "0s",
        }}
      >
        <g
          id="freepik--Weather--inject-63"
          className="animable"
          style={{
            transformOrigin: "165.93px 202.934px",
          }}
        >
          <path
            d="M36.66 195.29v154a7.59 7.59 0 00.7 3.23 4.61 4.61 0 00.82 1.24 4 4 0 001 .85c.11.07 7.6 4.37 7.82 4.51a3.89 3.89 0 01-.81-.6 5 5 0 01-1.08-1.52 9.18 9.18 0 01-.64-3.09V199.73a12.25 12.25 0 011.58-5.6l-7.79-4.5a12.43 12.43 0 00-1.6 5.66z"
            style={{
              transformOrigin: "41.8299px 274.375px",
            }}
            className="animable"
            fill="#22c55e"
            opacity={0.9}
            id="eli0vegne59zi"
          />
          <path
            d="M36.66 195.29v154a7.59 7.59 0 00.7 3.23 4.61 4.61 0 00.82 1.24 4 4 0 001 .85c.11.07 7.6 4.37 7.82 4.51a3.89 3.89 0 01-.81-.6 5 5 0 01-1.08-1.52 9.18 9.18 0 01-.64-3.09V199.73a12.25 12.25 0 011.58-5.6l-7.79-4.5a12.43 12.43 0 00-1.6 5.66z"
            style={{
              transformOrigin: "41.8299px 274.375px",
            }}
            className="animable"
            fill="#22c55e"
            opacity={0.9}
            id="ellc36b0zcw7a"
          />
          <path
            d="M295.2 55.07v155.62a13.49 13.49 0 01-6.13 10.6L50.59 359a3.91 3.91 0 01-2 .58 3.56 3.56 0 01-.79-.1 2.28 2.28 0 01-.52-.18l-.32-.18-.36-.24a2.43 2.43 0 01-.34-.3 4.83 4.83 0 01-1.15-1.58 7.68 7.68 0 01-.64-3.09V199.73a13.57 13.57 0 016.12-10.6L289.07 51.54a4.44 4.44 0 014.12-.53 2.31 2.31 0 01.52.31 1.9 1.9 0 01.4.4 1 1 0 01.18.22 1.07 1.07 0 01.2.32 2.79 2.79 0 01.37.78 2.13 2.13 0 01.14.54.13.13 0 010 .12 2.72 2.72 0 01.1.57c.08.28.1.54.1.8z"
            style={{
              transformOrigin: "169.835px 205.154px",
            }}
            id="elgxi9mdszkh6"
            className="animable"
            fill="#22c55e"
          />
          <g
            style={{
              transformOrigin: "169.835px 205.154px",
            }}
            className="animable"
            opacity={0.7}
            id="elb9xopu7jmqs"
          >
            <path
              d="M295.2 55.07v155.62a13.49 13.49 0 01-6.13 10.6L50.59 359a3.91 3.91 0 01-2 .58 3.56 3.56 0 01-.79-.1 2.28 2.28 0 01-.52-.18l-.32-.18-.36-.24a2.43 2.43 0 01-.34-.3 4.83 4.83 0 01-1.15-1.58 7.68 7.68 0 01-.64-3.09V199.73a13.57 13.57 0 016.12-10.6L289.07 51.54a4.44 4.44 0 014.12-.53 2.31 2.31 0 01.52.31 1.9 1.9 0 01.4.4 1 1 0 01.18.22 1.07 1.07 0 01.2.32 2.79 2.79 0 01.37.78 2.13 2.13 0 01.14.54.13.13 0 010 .12 2.72 2.72 0 01.1.57c.08.28.1.54.1.8z"
              style={{
                transformOrigin: "169.835px 205.154px",
              }}
              id="eliqt6bouvq2"
              className="animable"
              fill="#fff"
            />
          </g>
          <path
            d="M285.7 46.76c-1.13-.69-2.69-.67-4.44.36L42.76 184.71a10.62 10.62 0 00-1.28.9l-.19.18a13.32 13.32 0 00-1 1l-.08.1a14.7 14.7 0 00-1.94 2.76l7.79 4.5a14.86 14.86 0 011.94-2.8.52.52 0 01.1-.11 11.77 11.77 0 011-1c.07-.06.13-.13.21-.19a10 10 0 011.28-.91l238.48-137.6a4.44 4.44 0 014.12-.53c-1.31-.68-6.39-3.59-7.49-4.25z"
            style={{
              transformOrigin: "165.73px 120.219px",
            }}
            id="el6w8wncsajmk"
            className="animable"
            fill="#22c55e"
          />
          <g
            style={{
              transformOrigin: "165.73px 120.219px",
            }}
            className="animable"
            opacity={0.8}
            id="elbz1unmgft1e"
          >
            <path
              d="M285.7 46.76c-1.13-.69-2.69-.67-4.44.36L42.76 184.71a10.62 10.62 0 00-1.28.9l-.19.18a13.32 13.32 0 00-1 1l-.08.1a14.7 14.7 0 00-1.94 2.76l7.79 4.5a14.86 14.86 0 011.94-2.8.52.52 0 01.1-.11 11.77 11.77 0 011-1c.07-.06.13-.13.21-.19a10 10 0 011.28-.91l238.48-137.6a4.44 4.44 0 014.12-.53c-1.31-.68-6.39-3.59-7.49-4.25z"
              style={{
                transformOrigin: "165.73px 120.219px",
              }}
              id="ell35roau2wl"
              className="animable"
              fill="#fff"
            />
          </g>
          <path
            style={{
              transformOrigin: "38.26px 189.63px",
            }}
            className="animable"
            fill="#22c55e"
            opacity={0.2}
            id="el0ekx2clhjgu"
            d="M38.26 189.63L38.26 189.63 38.26 189.63 38.26 189.63z"
          />
          <path
            d="M59.63 195a2.67 2.67 0 00-2.69.25 8.82 8.82 0 00-3.56 4.8 5.56 5.56 0 00-.36 2v.61c0 2.07 2.31 4.86 3.39 5.85a.16.16 0 00.08.06.53.53 0 00.76-.21c.93-1.91 3.64-7.66 3.64-9.88v-.61a3.1 3.1 0 00-1.26-2.87zm-4.22 6.61v-.12a2.13 2.13 0 010-.37 4 4 0 011.75-3.12 1.66 1.66 0 01.33-.16 1.34 1.34 0 01.27-.07c.71-.12 1.21.36 1.21 1.27a4 4 0 01-1.81 3.14c-.84.51-1.55.25-1.75-.54z"
            style={{
              transformOrigin: "56.9654px 201.701px",
            }}
            id="ell5efk8x987"
            className="animable"
            fill="#455a64"
          />
          <path
            d="M64.79 195.66c0 1 .78 1.44 1.75.88l16.19-9.35a3.72 3.72 0 001.75-2.9c0-1-.78-1.44-1.75-.89l-16.19 9.35a3.75 3.75 0 00-1.75 2.91z"
            style={{
              transformOrigin: "74.635px 189.973px",
            }}
            className="animable"
            fill="#22c55e"
            opacity={0.8}
            id="elbk1vb5xo5dk"
          />
          <path
            d="M64.79 195.66c0 1 .78 1.44 1.75.88l16.19-9.35a3.72 3.72 0 001.75-2.9c0-1-.78-1.44-1.75-.89l-16.19 9.35a3.75 3.75 0 00-1.75 2.91z"
            style={{
              transformOrigin: "74.635px 189.973px",
            }}
            className="animable"
            opacity={0.2}
            id="elsbw9tla1l1"
          />
          <path
            d="M65.84 200.13l12.36-7.2c.58-.33 1-.1 1 .53a2.23 2.23 0 01-1 1.74l-12.36 7.2c-.58.34-1 .1-1-.53a2.23 2.23 0 011-1.74z"
            style={{
              transformOrigin: "72.02px 197.667px",
            }}
            id="el8lind0b65r7"
            className="animable"
            fill="#22c55e"
          />
          <path
            d="M136.05 245.1l-2.45 1.37v-5.83c0-4.29-3.43-5.31-7.15-3.15a15 15 0 00-6.73 11.69v.82a3.64 3.64 0 00-3.13.49 10.78 10.78 0 00-4.84 8.41v.36l-3.43 2a7.11 7.11 0 00-3.19 5.54c0 2 1.43 2.86 3.19 1.83l27.73-16.12a7.06 7.06 0 003.2-5.54c0-2.07-1.43-2.89-3.2-1.87z"
            style={{
              transformOrigin: "122.19px 252.73px",
            }}
            id="eljp0mvvaupc9"
            className="animable"
            fill="#fafafa"
          />
          <path
            d="M121.57 240.33a15.41 15.41 0 00-3 8.29 5.08 5.08 0 00-2.71.78 11.11 11.11 0 00-4.22 4.87c-1.88-.26-3.12-1.93-3.12-4.66a14.56 14.56 0 016.64-11.41c3.15-1.81 5.76-.83 6.41 2.13z"
            style={{
              transformOrigin: "115.045px 245.78px",
            }}
            id="elu52ursl6cx"
            className="animable"
            fill="#ffbda7"
          />
          <text transform="matrix(.65 -.38 0 1 56.75 256.7)" fontSize="51.52437973022461px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700}>
            {"24\xB0C"}
          </text>
          <path
            d="M53 268.22a.54.54 0 01-.27-1l90.84-52.44a.52.52 0 01.72.2.52.52 0 01-.19.72l-90.86 52.45a.48.48 0 01-.24.07z"
            style={{
              transformOrigin: "98.4183px 241.464px",
            }}
            id="elrqd72cn44je"
            className="animable"
            fill="#22c55e"
          />
          <text transform="matrix(.65 -.38 0 1 78.98 267.7)" fontSize="8.518819808959961px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700} letterSpacing=".04998124852367109em">
            {"27\xB0C"}
          </text>
          <text transform="matrix(.65 -.38 0 1 78.98 282.68)" fontSize="8.518819808959961px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700} letterSpacing=".04998124852367109em">
            {"11\xB0C"}
          </text>
          <text transform="matrix(.65 -.38 0 1 80.42 300.62)" fontSize="9.225509643554688px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700} letterSpacing=".049963364389525027em">
            {"75%"}
          </text>
          <text transform="matrix(.65 -.38 0 1 112.46 282.06)" fontSize="9.225509643554688px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700} letterSpacing=".049963364389525027em">
            {"15 km/h"}
          </text>
          <text transform="matrix(.65 -.38 0 1 61.68 277.69)" fontSize="8.518819808959961px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700} letterSpacing=".050134096378483525em">
            {"MAX"}
          </text>
          <text transform="matrix(.65 -.38 0 1 61.68 292.67)" fontSize="8.518819808959961px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700} letterSpacing=".050134096378483525em">
            {"MIN"}
          </text>
          <path
            d="M74.37 299.9l-1 .56v-2.4c0-1.77-1.41-2.19-3-1.3a6.18 6.18 0 00-2.77 4.82v.32a1.51 1.51 0 00-1.29.21 4.43 4.43 0 00-2 3.46v.15l-1.42.82a2.92 2.92 0 00-1.31 2.28c0 .84.59 1.18 1.31.76l11.43-6.64a2.93 2.93 0 001.31-2.29c.05-.83-.53-1.17-1.26-.75z"
            style={{
              transformOrigin: "68.6065px 303.034px",
            }}
            id="el1w0atzuxhxe"
            className="animable"
            fill="#22c55e"
          />
          <path
            d="M65.6 311.77a.3.3 0 00.4 0 1.4 1.4 0 00.54-.86 1.27 1.27 0 00.06-.39v-.12a2.77 2.77 0 00-.52-1.27.06.06 0 00-.11 0 8.18 8.18 0 00-.55 1.88v.13a.89.89 0 00.18.63z"
            style={{
              transformOrigin: "66.0078px 310.47px",
            }}
            id="el9vmhc5lu0cn"
            className="animable"
            fill="#22c55e"
          />
          <path
            d="M69.15 309.72a.33.33 0 00.41 0 1.37 1.37 0 00.54-.86 1.24 1.24 0 00.05-.38v-.13a2.93 2.93 0 00-.51-1.27.07.07 0 00-.12 0A7.9 7.9 0 0069 309v.12a.81.81 0 00.15.6z"
            style={{
              transformOrigin: "69.5708px 308.419px",
            }}
            id="elw1kkjfj0rwm"
            className="animable"
            fill="#22c55e"
          />
          <path
            d="M72.69 307.67a.33.33 0 00.41 0 1.42 1.42 0 00.53-.86 1.37 1.37 0 00.06-.39v-.12a2.92 2.92 0 00-.51-1.28h-.11a8 8 0 00-.55 1.88v.12a.86.86 0 00.17.65z"
            style={{
              transformOrigin: "73.1005px 306.381px",
            }}
            id="eleik2sfesya4"
            className="animable"
            fill="#22c55e"
          />
          <g
            style={{
              transformOrigin: "68.6065px 304.077px",
            }}
            className="animable"
            opacity={0.1}
            id="el4e3p0w9novj"
          >
            <path
              d="M74.37 299.9l-1 .56v-2.4c0-1.77-1.41-2.19-3-1.3a6.18 6.18 0 00-2.77 4.82v.32a1.51 1.51 0 00-1.29.21 4.43 4.43 0 00-2 3.46v.15l-1.42.82a2.92 2.92 0 00-1.31 2.28c0 .84.59 1.18 1.31.76l11.43-6.64a2.93 2.93 0 001.31-2.29c.05-.83-.53-1.17-1.26-.75z"
              id="elag63aoa1otn"
              className="animable"
              style={{
                transformOrigin: "68.6065px 303.034px",
              }}
            />
            <path
              d="M65.6 311.77a.3.3 0 00.4 0 1.4 1.4 0 00.54-.86 1.27 1.27 0 00.06-.39v-.12a2.77 2.77 0 00-.52-1.27.06.06 0 00-.11 0 8.18 8.18 0 00-.55 1.88v.13a.89.89 0 00.18.63z"
              id="el3j9gvt6cfj1"
              className="animable"
              style={{
                transformOrigin: "66.0078px 310.47px",
              }}
            />
            <path
              d="M69.15 309.72a.33.33 0 00.41 0 1.37 1.37 0 00.54-.86 1.24 1.24 0 00.05-.38v-.13a2.93 2.93 0 00-.51-1.27.07.07 0 00-.12 0A7.9 7.9 0 0069 309v.12a.81.81 0 00.15.6z"
              id="elhzcah01a91a"
              className="animable"
              style={{
                transformOrigin: "69.5708px 308.419px",
              }}
            />
            <path
              d="M72.69 307.67a.33.33 0 00.41 0 1.42 1.42 0 00.53-.86 1.37 1.37 0 00.06-.39v-.12a2.92 2.92 0 00-.51-1.28h-.11a8 8 0 00-.55 1.88v.12a.86.86 0 00.17.65z"
              id="eloxruvbhlldq"
              className="animable"
              style={{
                transformOrigin: "73.1005px 306.381px",
              }}
            />
          </g>
          <path
            d="M102.18 288.46a2.29 2.29 0 01-1.13-.29 2.89 2.89 0 01-1.24-2.66 8.41 8.41 0 013.79-6.57 2.56 2.56 0 014.17 2.41 8.41 8.41 0 01-3.79 6.57 3.67 3.67 0 01-1.8.54zm3.22-9.32a2.85 2.85 0 00-1.42.45 7.58 7.58 0 00-3.43 5.92 1.84 1.84 0 003 1.76 7.55 7.55 0 003.42-5.92 2.18 2.18 0 00-.87-2 1.55 1.55 0 00-.7-.21zm-1.61.13z"
            style={{
              transformOrigin: "103.804px 283.398px",
            }}
            id="elddbrhdn9ato"
            className="animable"
            fill="#22c55e"
          />
          <path
            d="M101.31 284.65l3.7-4.26a.25.25 0 01.43.23l-1.6 5.94-.54-2.35z"
            style={{
              transformOrigin: "103.379px 283.432px",
            }}
            id="el7w6n61vu4na"
            className="animable"
            fill="#22c55e"
          />
          <path
            d="M103.79 278.19a.36.36 0 01-.37-.37v-1.39a.37.37 0 01.37-.37.38.38 0 01.37.37v1.39a.37.37 0 01-.37.37z"
            style={{
              transformOrigin: "103.79px 277.125px",
            }}
            id="elsk0m7scv5z"
            className="animable"
            fill="#22c55e"
          />
          <path
            d="M103.79 290.74a.37.37 0 01-.37-.37V289a.36.36 0 01.37-.37.37.37 0 01.37.37v1.39a.38.38 0 01-.37.35z"
            style={{
              transformOrigin: "103.79px 289.685px",
            }}
            id="el6jq4xv05ndx"
            className="animable"
            fill="#22c55e"
          />
          <path
            d="M108.62 281a.37.37 0 01-.32-.19.37.37 0 01.13-.51l1.21-.69a.37.37 0 01.51.13.37.37 0 01-.14.51l-1.21.7a.37.37 0 01-.18.05z"
            style={{
              transformOrigin: "109.224px 280.279px",
            }}
            id="el0hu41v30xaxp"
            className="animable"
            fill="#22c55e"
          />
          <path
            d="M97.75 287.26a.37.37 0 01-.18-.69l1.2-.7a.37.37 0 01.38.64l-1.21.7a.32.32 0 01-.19.05z"
            style={{
              transformOrigin: "98.3589px 286.539px",
            }}
            id="el9usxb5ng3z5"
            className="animable"
            fill="#22c55e"
          />
          <g
            style={{
              transformOrigin: "103.793px 283.4px",
            }}
            className="animable"
            opacity={0.1}
            id="ellgx8krh47ko"
          >
            <path
              d="M102.18 288.46a2.29 2.29 0 01-1.13-.29 2.89 2.89 0 01-1.24-2.66 8.41 8.41 0 013.79-6.57 2.56 2.56 0 014.17 2.41 8.41 8.41 0 01-3.79 6.57 3.67 3.67 0 01-1.8.54zm3.22-9.32a2.85 2.85 0 00-1.42.45 7.58 7.58 0 00-3.43 5.92 1.84 1.84 0 003 1.76 7.55 7.55 0 003.42-5.92 2.18 2.18 0 00-.87-2 1.55 1.55 0 00-.7-.21zm-1.61.13z"
              id="eli2pcfcaa3r"
              className="animable"
              style={{
                transformOrigin: "103.804px 283.398px",
              }}
            />
            <path
              d="M101.31 284.65l3.7-4.26a.25.25 0 01.43.23l-1.6 5.94-.54-2.35z"
              id="elqpeqg5ncqcl"
              className="animable"
              style={{
                transformOrigin: "103.379px 283.432px",
              }}
            />
            <path
              d="M103.79 278.19a.36.36 0 01-.37-.37v-1.39a.37.37 0 01.37-.37.38.38 0 01.37.37v1.39a.37.37 0 01-.37.37z"
              id="elseoa2cx9r8k"
              className="animable"
              style={{
                transformOrigin: "103.79px 277.125px",
              }}
            />
            <path
              d="M103.79 290.74a.37.37 0 01-.37-.37V289a.36.36 0 01.37-.37.37.37 0 01.37.37v1.39a.38.38 0 01-.37.35z"
              id="el3zzv6137nq3"
              className="animable"
              style={{
                transformOrigin: "103.79px 289.685px",
              }}
            />
            <path
              d="M108.62 281a.37.37 0 01-.32-.19.37.37 0 01.13-.51l1.21-.69a.37.37 0 01.51.13.37.37 0 01-.14.51l-1.21.7a.37.37 0 01-.18.05z"
              id="elrn8uldmmbb"
              className="animable"
              style={{
                transformOrigin: "109.224px 280.279px",
              }}
            />
            <path
              d="M97.75 287.26a.37.37 0 01-.18-.69l1.2-.7a.37.37 0 01.38.64l-1.21.7a.32.32 0 01-.19.05z"
              id="elq7fcws6hg4j"
              className="animable"
              style={{
                transformOrigin: "98.3589px 286.539px",
              }}
            />
          </g>
          <text transform="matrix(.49 -.28 0 1 57.35 340.12)" fontSize="21.313190460205078px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700} letterSpacing=".05001556200153338em">
            {"FRI"}
            <tspan x={38.09} y={0} letterSpacing=".032013218023782763em">
              {"D"}
            </tspan>
            <tspan x={54.18} y={0} letterSpacing="-.02500778100076669em">
              {"A"}
            </tspan>
            <tspan x={68.95} y={0} letterSpacing=".02199381390946907em">
              {"Y"}
            </tspan>
          </text>
          <path
            d="M157.08 287.51l29.7-17.14a10.19 10.19 0 004.61-8V123.19c0-2.94-2.06-4.13-4.61-2.66l-29.7 17.14a10.2 10.2 0 00-4.62 8v139.18c0 2.94 2.07 4.15 4.62 2.66z"
            style={{
              transformOrigin: "171.925px 204.024px",
            }}
            className="animable"
            fill="#22c55e"
            opacity={0.8}
            id="el67j97mug7q"
          />
          <text transform="matrix(.65 -.38 0 1 172.79 238.51)" fontSize="8.518819808959961px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700} letterSpacing=".04998124852367109em">
            {"27\xB0C"}
          </text>
          <text transform="matrix(.65 -.38 0 1 172.79 253.49)" fontSize="8.518819808959961px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700} letterSpacing=".04998124852367109em">
            {"11\xB0C"}
          </text>
          <text transform="matrix(.65 -.38 0 1 158.18 246.94)" fontSize="8.518819808959961px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700} letterSpacing=".050134096378483525em">
            {"MAX"}
          </text>
          <text transform="matrix(.65 -.38 0 1 158.18 261.93)" fontSize="8.518819808959961px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700} letterSpacing=".050134096378483525em">
            {"MIN"}
          </text>
          <path
            d="M184.24 188.93l-2.19 1.22V185c0-3.81-3-4.71-6.34-2.79a13.26 13.26 0 00-6 10.37v.7a3.23 3.23 0 00-2.77.44 9.53 9.53 0 00-4.3 7.47v.31l-3 1.77a6.3 6.3 0 00-2.83 4.92c0 1.8 1.27 2.53 2.83 1.62l24.62-14.31a6.3 6.3 0 002.83-4.91c-.02-1.84-1.29-2.59-2.85-1.66z"
            style={{
              transformOrigin: "171.95px 195.717px",
            }}
            id="el6sx14rz3qtq"
            className="animable"
            fill="#fafafa"
          />
          <path
            d="M165.35 214.5a.7.7 0 00.88 0 3 3 0 001.15-1.85 2.65 2.65 0 00.12-.83v-.27a6.24 6.24 0 00-1.1-2.75.13.13 0 00-.24 0 17 17 0 00-1.19 4.05v.27a1.79 1.79 0 00.38 1.38z"
            style={{
              transformOrigin: "166.226px 211.688px",
            }}
            id="elsnswl0xqogq"
            className="animable"
            fill="#fafafa"
          />
          <path
            d="M173 210.09a.7.7 0 00.88 0 3.08 3.08 0 001.15-1.85 3 3 0 00.12-.83v-.27a6.24 6.24 0 00-1.1-2.75.14.14 0 00-.25 0 17.44 17.44 0 00-1.18 4.05v.27a1.79 1.79 0 00.38 1.38z"
            style={{
              transformOrigin: "173.876px 207.279px",
            }}
            id="els7mjeqojki8"
            className="animable"
            fill="#fafafa"
          />
          <path
            d="M180.62 205.68a.69.69 0 00.87.05 3 3 0 001.16-1.85 3 3 0 00.12-.83v-.27a6.24 6.24 0 00-1.1-2.75.14.14 0 00-.25 0 17.44 17.44 0 00-1.18 4.05v.27a1.84 1.84 0 00.38 1.33z"
            style={{
              transformOrigin: "181.5px 202.907px",
            }}
            id="eldswnmanz3nn"
            className="animable"
            fill="#fafafa"
          />
          <text transform="matrix(.49 -.28 0 1 159.48 176.26)" fontSize="24.82634925842285px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700} letterSpacing=".03797276457516705em">
            {"S"}
            <tspan x={17.68} y={0} letterSpacing="-.019930456544977184em">
              {"A"}
            </tspan>
            <tspan x={35.01} y={0} letterSpacing=".02601449064818075em">
              {"T"}
            </tspan>
          </text>
          <path
            d="M204.66 260l29.7-17.14a10.2 10.2 0 004.62-8V95.71c0-2.94-2.07-4.13-4.62-2.66l-29.7 17.15a10.17 10.17 0 00-4.61 8v139.17c0 2.94 2.06 4.14 4.61 2.63z"
            style={{
              transformOrigin: "219.515px 176.537px",
            }}
            className="animable"
            fill="#22c55e"
            opacity={0.8}
            id="elg3kyreqjrqh"
          />
          <text transform="matrix(.65 -.38 0 1 220.37 211.03)" fontSize="8.518819808959961px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700} letterSpacing=".04998124852367109em">
            {"27\xB0C"}
          </text>
          <text transform="matrix(.65 -.38 0 1 220.38 226.01)" fontSize="8.518819808959961px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700} letterSpacing=".04998124852367109em">
            {"11\xB0C"}
          </text>
          <text transform="matrix(.65 -.38 0 1 205.77 219.47)" fontSize="8.518819808959961px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700} letterSpacing=".050134096378483525em">
            {"MAX"}
          </text>
          <text transform="matrix(.65 -.38 0 1 205.77 234.45)" fontSize="8.518819808959961px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700} letterSpacing=".050134096378483525em">
            {"MIN"}
          </text>
          <path
            d="M231.82 166.45l-2.18 1.22v-5.17c0-3.82-3-4.72-6.34-2.8a13.25 13.25 0 00-6 10.37v.7a3.23 3.23 0 00-2.77.44 9.53 9.53 0 00-4.3 7.47v.32l-3.05 1.77a6.3 6.3 0 00-2.83 4.92c0 1.8 1.27 2.53 2.83 1.62L231.82 173a6.28 6.28 0 002.83-4.91c0-1.82-1.27-2.54-2.83-1.64z"
            style={{
              transformOrigin: "219.5px 173.213px",
            }}
            id="elohu2mp5ntcr"
            className="animable"
            fill="#fafafa"
          />
          <text transform="matrix(.49 -.28 0 1 205.75 149.51)" fontSize="24.82634925842285px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700} letterSpacing=".05000096992862697em">
            {"SUN"}
          </text>
          <path
            d="M219.18 162.22a13.74 13.74 0 00-2.71 7.48 4.53 4.53 0 00-2.45.71 10 10 0 00-3.81 4.39c-1.7-.23-2.82-1.74-2.82-4.21a13.15 13.15 0 016-10.3c2.84-1.63 5.19-.75 5.79 1.93z"
            style={{
              transformOrigin: "213.285px 167.135px",
            }}
            id="el2l9h6qrl0ji"
            className="animable"
            fill="#ffbda7"
          />
          <path
            d="M252.24 232.57l29.7-17.14a10.2 10.2 0 004.62-8V68.25c0-2.94-2.07-4.13-4.61-2.66l-29.71 17.15a10.17 10.17 0 00-4.61 8v139.17c0 2.94 2.06 4.14 4.61 2.66z"
            style={{
              transformOrigin: "267.095px 149.082px",
            }}
            className="animable"
            fill="#22c55e"
            opacity={0.8}
            id="elxyymwdemse9"
          />
          <text transform="matrix(.65 -.38 0 1 267.96 183.55)" fontSize="8.518819808959961px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700} letterSpacing=".04998124852367109em">
            {"27\xB0C"}
          </text>
          <text transform="matrix(.65 -.38 0 1 267.96 198.53)" fontSize="8.518819808959961px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700} letterSpacing=".04998124852367109em">
            {"11\xB0C"}
          </text>
          <text transform="matrix(.65 -.38 0 1 253.35 191.99)" fontSize="8.518819808959961px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700} letterSpacing=".050134096378483525em">
            {"MAX"}
          </text>
          <text transform="matrix(.65 -.38 0 1 253.35 206.97)" fontSize="8.518819808959961px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700} letterSpacing=".050134096378483525em">
            {"MIN"}
          </text>
          <text transform="matrix(.49 -.28 0 1 252.45 122.65)" fontSize="24.82634925842285px" fill="#455a64" fontFamily="Rubik-Bold,Rubik" fontWeight={700} letterSpacing=".05000096992862697em">
            {"MON"}
          </text>
          <path
            d="M267.09 132.84c4.78-2.75 8.65-.52 8.65 5s-3.87 12.22-8.65 15-8.65.52-8.65-5 3.87-12.24 8.65-15z"
            style={{
              transformOrigin: "267.09px 142.847px",
            }}
            id="el17lgwrb74eq"
            className="animable"
            fill="#ffbda7"
          />
        </g>
      </g>
      <g
        id="freepik--Character--inject-63"
        className="animable"
        style={{
          transformOrigin: "379.833px 225.775px",
        }}
      >
        <g
          id="freepik--character--inject-63"
          className="animable"
          style={{
            transformOrigin: "379.833px 225.775px",
          }}
        >
          <path
            d="M316.48 87.64c8.59 1.64 16.81 8.89 21.34 16.58 17.54-.89 39.53 5.07 60 15.45l15.43-59.95c-33.47-6.31-66.04-.72-96.77 27.92z"
            style={{
              transformOrigin: "364.865px 88.5286px",
            }}
            id="el384q51akfpc"
            className="animable"
            fill="#22c55e"
          />
          <path
            d="M337.82 104.22c17.54-.89 39.53 5.07 60 15.45l15.43-59.95c-23.1-1.16-55.82 15.56-75.43 44.5z"
            style={{
              transformOrigin: "375.535px 89.6667px",
            }}
            className="animable"
            opacity={0.35}
            id="elx91pqwz8s3p"
          />
          <path
            d="M316.48 87.64c30.73-28.69 63.3-34.23 96.81-27.92-23.14-1.17-55.86 15.56-75.47 44.5-4.53-7.69-12.75-14.94-21.34-16.58z"
            style={{
              transformOrigin: "364.885px 80.8003px",
            }}
            className="animable"
            opacity={0.25}
            id="ell3z6yrirr0m"
          />
          <path
            d="M484.59 130.9c-8.31-2.71-19-.33-26.69 4.22-14.93-9.24-37.07-14.64-60-15.45l15.43-59.95c32.35 10.65 58.2 31.22 71.26 71.18z"
            style={{
              transformOrigin: "441.245px 97.42px",
            }}
            id="elyhv3za1brf"
            className="animable"
            fill="#22c55e"
          />
          <path
            d="M457.9 135.12c-14.93-9.24-37.07-14.64-60-15.45l15.43-59.95c20.78 10.15 41.37 40.59 44.57 75.4z"
            style={{
              transformOrigin: "427.9px 97.42px",
            }}
            className="animable"
            opacity={0.45}
            id="el5v0iwkd5xe6"
          />
          <path
            d="M484.59 130.9c-13.06-40-38.91-60.53-71.3-71.18 20.82 10.15 41.4 40.59 44.61 75.4 7.67-4.55 18.38-6.93 26.69-4.22z"
            style={{
              transformOrigin: "448.94px 97.42px",
            }}
            className="animable"
            opacity={0.55}
            id="elw34qj6s36lc"
          />
          <path
            d="M409.94 72.77h.95a3.1 3.1 0 00.44 0c.67 0 .49-.35.63-.68l.7-2.83c.56-2.34 1.26-5.48 1.87-8.65.31-1.58.58-3.17.82-4.67.11-.75.24-1.47.33-2.16s.18-1.34.26-1.94.14-1.16.19-1.65.1-.92.13-1.28c.07-.71.09-1.12.09-1.12s-.18.37-.46 1c-.15.32-.32.72-.51 1.18s-.41 1-.63 1.53l-.75 1.92c-.26.65-.49 1.34-.75 2-.52 1.43-1 3-1.54 4.49-1 3.06-1.89 6.15-2.53 8.48l-.75 2.81c0 .36-.36.56.21.9.1.07.27.16.39.23l.47.21z"
            style={{
              transformOrigin: "412.334px 60.2839px",
            }}
            id="eloafs9moumsc"
            className="animable"
            fill="#455a64"
          />
          <g
            id="freepik--character--inject-63"
            className="animable"
            style={{
              transformOrigin: "338.191px 250.19px",
            }}
          >
            <path
              d="M356.59 148.41c-6.83 2.27-8.5 2.77-13.24 10.14-4.55 7.07-9.23 20.14-13.3 30.62-7.52-2.14-20.43-9.09-25.52-12.43-4-2.61-4.72-4.58-6.88-7.14s-6.16-8.23-7.09-4.74c-.62 2.36 1.88 3.68 1.71 6.23-.14 1.36-8.35-3.79-11.59-6.06-2.15-1.51-7.14 3.21-5.14 8.33 1.77 4.53 4.61 7.4 9.69 9.55 5.37 2.28 8.18 3.41 14.92 6.44 7.05 3.16 32.86 19.54 35.73 17.74 6.54-3.23 12.53-23.46 16.49-32.2s1.35-17.74 4.22-26.48z"
              style={{
                transformOrigin: "315.833px 177.819px",
              }}
              id="elq59t2mzgcz"
              className="animable"
              fill="#b16668"
            />
            <path
              d="M358.25 147.57c-2.93 3.86-1.73 2.3-2.63 8.25-.73 4.8-10.81 51-19.94 52.88-4 .85-29.68-15.89-36.69-19.75 2.36-3.5 4.73-7.81 5.54-12.21 4.21 2.31 19.65 10 24.86 11.65 2.4-6.71 5.34-13.6 8.1-20.37 5.26-12.88 8.23-22.02 20.76-20.45z"
              style={{
                transformOrigin: "328.62px 178.063px",
              }}
              id="el3we6tvf1pk3"
              className="animable"
              fill="#e0e0e0"
            />
            <path
              style={{
                transformOrigin: "392.895px 367.315px",
              }}
              className="animable"
              fill="#b16668"
              transform="rotate(-.41)"
              id="elwezd9jo11c"
              d="M387.22 356.72H398.57000000000005V377.91H387.22z"
            />
            <path
              style={{
                transformOrigin: "350.84px 353.84px",
              }}
              id="eljn4difwmhp"
              className="animable"
              fill="#b16668"
              d="M356.38 364.32L344 364.84 343.83 343.4 357.85 342.84 356.38 364.32z"
            />
            <path
              d="M396.16 224.54c.08 10.33 1.21 70.36 1.21 70.36.28 3 3.17 8.24 3.47 18.94.43 15.52-2.28 52.11-2.28 52.11s-4.57 3-11.39.23c0 0-8.92-51.58-11-66.93-1.78-13.39-6.86-48.44-6.86-48.44l-7 45.62a76.37 76.37 0 01.73 16.49C362.62 320 357 355.4 357 355.4a18.93 18.93 0 01-13.06.21s-2.39-55-2.56-61.54c-.19-7.43 2.59-71.4 2.59-71.4z"
              style={{
                transformOrigin: "371.128px 295.012px",
              }}
              id="el06l6ijj6rm6v"
              className="animable"
              fill="#263238"
            />
            <path
              d="M387.25 372.35v-1.62c-.61 0-1 .6-1.21 2.06a31.16 31.16 0 01-.64 3.21 37 37 0 01-1.94 5.82c-1.57 4-2.91 5.45-6.55 10.1-.86 1.1-2.82 2.85-3.5 4.08s-.89 4.62.28 5.39c4.3 2.83 10.81 2.86 15.4 1.48a9.29 9.29 0 006.63-7.55c.16-1.05.09-2.12.2-3.17a15 15 0 012.8-6.61 20 20 0 002.15-3.61c.94-2.34.16-4.95-.47-7.27-.54-2-1.13-4.21-1.81-4v1.23c-.82.92-3.09 1.85-5.66 2-1.66.03-5.69-.27-5.68-1.54z"
              style={{
                transformOrigin: "387.081px 387.203px",
              }}
              id="elgcycw1w9crg"
              className="animable"
              fill="#263238"
            />
            <path
              d="M344 360.74c-.64 0-1.28 1.22-2.69 2.76a27.09 27.09 0 01-7.25 5.3c-4.62 2.35-13.62 6-17.68 7.86-2.55 1.16-2.4 4.24.24 6s9 2.95 16.65 1.18c4.16-1 9.55-4.84 13-4.66s9.85.09 12.37-1.67 1.48-5.48.74-8.68c-.81-3.49-1.48-9.35-2.63-9.11l-.21 1.73c-1.47 2.26-11.64 2.83-12.51.67z"
              style={{
                transformOrigin: "337.393px 372.213px",
              }}
              id="eloaqv0euiwv"
              className="animable"
              fill="#263238"
            />
            <path
              d="M369.34 250.81s-9.67-3.08-16.13-9.23c0 0 2.94 5.42 11.62 10.42L363 292z"
              id="eltt2gqroedig"
              className="animable"
              style={{
                transformOrigin: "361.275px 266.79px",
              }}
            />
            <path
              d="M377.56 147.39c2.28.55 9.13 1.12 13.16 2.27 3 .86 2.87 4.58 3.49 7.31 2 8.73 2.32 27.06 2.32 27.06l.12 47.74c-7.39 5.38-37.76 8.11-53.31-3.25 0 0 1.9-55.88 1.9-63.79s4.39-17.42 16.53-18.12z"
              style={{
                transformOrigin: "369.995px 191.517px",
              }}
              id="elq9vldcito2"
              className="animable"
              fill="#f0f0f0"
            />
            <path
              d="M375 113.35a14.24 14.24 0 11-14.24-14.24A14.25 14.25 0 01375 113.35z"
              style={{
                transformOrigin: "360.76px 113.35px",
              }}
              id="elyebb7a4do9o"
              className="animable"
              fill="#263238"
            />
            <path
              d="M385.34 123.47s-2.34 10.85-3.24 12.63a4.91 4.91 0 01-2.84 2.29l.17-7.63z"
              style={{
                transformOrigin: "382.3px 130.93px",
              }}
              id="el1lcdh3jmctr"
              className="animable"
              fill="#263238"
            />
            <path
              d="M382.58 106.37a5.87 5.87 0 014.22 1.84c1.9 1.94.9 9.31-1.46 15.26L381 124z"
              style={{
                transformOrigin: "384.398px 115.185px",
              }}
              id="elnj9ijf6tv5j"
              className="animable"
              fill="#263238"
            />
            <path
              d="M379.68 124c.88.52 2.12-1.16 3.19-2.28s4.59-2.66 6.34 1-1.55 8.73-4.31 9.6c-4.76 1.49-5.47-1.56-5.47-1.56l-.36 17.7c-3.29 4.22-10.68 9.18-14.67 8.47-3.17-.56-3.87-5.93-.83-9.45v-5.23a29.62 29.62 0 01-6.41.33c-3.5-.54-5.71-3.3-6.77-7.09-1.71-6.09-2.35-11-.91-23 1.59-13.12 16.85-13.26 25.1-8.07s5.1 19.58 5.1 19.58z"
              style={{
                transformOrigin: "369.192px 129.115px",
              }}
              id="elwtqf10e8wer"
              className="animable"
              fill="#b16668"
            />
            <path
              d="M348.26 106.67a15.73 15.73 0 004 2.19 24.87 24.87 0 0014.43.94c.31-.07 4.5-1.18 4.41-1.53a7.2 7.2 0 001.65 3.61 11 11 0 003.9 2.56c.3 2.36.29 5.39.43 7.76.05.81.05 5 1.95 3.79a10.1 10.1 0 001.66-1.86 28 28 0 012.18-2.43c.57-.51.53-1.7.56-2.38a33.86 33.86 0 00-.15-4.27c-.11-1.46-.36-2.92-.49-4.38a7 7 0 01.59-2.43 8.78 8.78 0 00.37-2.79c-.16-2.93-2.41-5.43-5.05-6.73-3.7-1.81-8.17-2.1-12.2-1.77-3.26.27-6.44.27-9.71.22-.82 0-9.91-.43-9.9-.55a8.94 8.94 0 001.32 5.77l-2.88.12c-.42 0 .72 2 .8 2.06a11.72 11.72 0 001.77 1.82z"
              style={{
                transformOrigin: "364.496px 111.414px",
              }}
              id="el3hhjp2mi7ys"
              className="animable"
              fill="#263238"
            />
            <path
              d="M383.44 107.9l5.27-2.83a2.91 2.91 0 00-4-1.32 3.14 3.14 0 00-1.27 4.15z"
              style={{
                transformOrigin: "385.908px 105.653px",
              }}
              id="elc7vuq0qkv19"
              className="animable"
              fill="#263238"
            />
            <path
              d="M363.58 142.25s7.82-1.57 10.55-3a9 9 0 003.78-3.73 12.25 12.25 0 01-2.15 4.41c-2 2.55-12.18 4.43-12.18 4.43z"
              style={{
                transformOrigin: "370.745px 139.94px",
              }}
              id="elxqi7lqxfmrj"
              className="animable"
              fill="#9a4a4d"
            />
            <path
              d="M364.38 121.2a1.68 1.68 0 101.68-1.74 1.7 1.7 0 00-1.68 1.74z"
              style={{
                transformOrigin: "366.059px 121.14px",
              }}
              id="el6wsmrzro4z9"
              className="animable"
              fill="#263238"
            />
            <path
              d="M366.06 115.52l3.46 1.92a2.07 2.07 0 00-.8-2.76 1.93 1.93 0 00-2.66.84z"
              style={{
                transformOrigin: "367.909px 115.941px",
              }}
              id="eleh4shync318"
              className="animable"
              fill="#263238"
            />
            <path
              d="M364.24 132.61l-3.87 1.45a2 2 0 002.63 1.29 2.16 2.16 0 001.24-2.74z"
              style={{
                transformOrigin: "362.369px 134.046px",
              }}
              id="elpf572ijujq"
              className="animable"
              fill="#9a4a4d"
            />
            <path
              d="M350.54 116.92l3.16-2.44a1.92 1.92 0 00-2.75-.42 2.1 2.1 0 00-.41 2.86z"
              style={{
                transformOrigin: "351.927px 115.289px",
              }}
              id="elx6xlx0dyc1"
              className="animable"
              fill="#263238"
            />
            <path
              d="M351.25 120.89a1.63 1.63 0 101.63-1.69 1.65 1.65 0 00-1.63 1.69z"
              style={{
                transformOrigin: "352.879px 120.83px",
              }}
              id="el1kfiyasj4yx"
              className="animable"
              fill="#263238"
            />
            <path
              style={{
                transformOrigin: "356.995px 124.66px",
              }}
              id="el736dkdx9t7c"
              className="animable"
              fill="#9a4a4d"
              d="M359.94 119.55L359.38 129.77 354.05 127.95 359.94 119.55z"
            />
            <path
              d="M358 155.81c1 2.36 2.83 3.33 6.15 3.7a12.42 12.42 0 009.21-3.2l-4.14-4.12-5.22 3.95-.45-4.41z"
              style={{
                transformOrigin: "365.68px 155.635px",
              }}
              id="elhu5daxgeczm"
              className="animable"
              fill="#22c55e"
            />
            <path
              d="M358 155.81c1 2.36 2.83 3.33 6.15 3.7a12.42 12.42 0 009.21-3.2l-4.14-4.12-5.22 3.95-.45-4.41z"
              style={{
                transformOrigin: "365.68px 155.635px",
              }}
              className="animable"
              opacity={0.2}
              id="elju9p0ong3v"
            />
            <path
              d="M360.62 154.52a10.93 10.93 0 00-.54 4.43 7.57 7.57 0 001.47 3.69 4.07 4.07 0 003.58.39 9.77 9.77 0 003.4-7.41l-4.54.52z"
              style={{
                transformOrigin: "364.286px 158.898px",
              }}
              id="elzbs102dah5"
              className="animable"
              fill="#22c55e"
            />
            <path
              d="M361.54 162.64s-6.77 37.37-7 40.39 3.89 13.73 6.47 13.82 7.65-9.61 7.73-12.35-3.26-41.77-3.26-41.77z"
              style={{
                transformOrigin: "361.636px 189.745px",
              }}
              id="elhdum8fhli0u"
              className="animable"
              fill="#22c55e"
            />
            <path
              d="M365.44 162.73a3 3 0 01-3.9-.09l-.1.59s1.29 1.32 4.07.53z"
              style={{
                transformOrigin: "363.475px 163.326px",
              }}
              className="animable"
              opacity={0.2}
              id="elq9fzttnbr9"
            />
            <path
              d="M364 156.14l15.16-11.56.06-3s3.55.94 4.34 7.17c-2.16 5-6.08 9.3-11.83 12.58l-3.19-5.68z"
              style={{
                transformOrigin: "373.78px 151.455px",
              }}
              id="el2apj9fcwxdp"
              className="animable"
              fill="#e0e0e0"
            />
            <path
              d="M363.58 143s-3.56 1.65-5.08 4.16-1.5 10.66-1.5 10.66l3.63-3.3 3.37 1.62c-.32-3.19-.42-8.66-.42-8.66z"
              style={{
                transformOrigin: "360.5px 150.41px",
              }}
              id="eljki5tjh19kq"
              className="animable"
              fill="#e0e0e0"
            />
          </g>
          <path
            d="M426.38 198c-6.33-10.8-16.33-30.28-21.4-37-7.08-9.4-6.67-9.22-13.26-11.27-1.07 3.17-3.53 16.25 1.2 25.65l16.37 23.3c-6.65 1.59-18.55 4.7-22.58 3.87l-1.29 12c23.76-2 34.7-2.35 41.49-6.72 2.96-1.96 1.44-6.49-.53-9.83z"
            style={{
              transformOrigin: "406.995px 182.14px",
            }}
            id="elwv61k5fm5tg"
            className="animable"
            fill="#b16668"
          />
          <path
            d="M393.83 177c-3.59-4.26-6.18-17.75-3.11-27.34 6.23.53 7.71 1.79 12.21 7.34 6.56 8.07 13.78 22.55 16.71 27.38s10 17.3 9.69 20-2.53 5.27-8.32 6.87-31.2 3.27-31.2 3.27a54 54 0 01-1.1-12c7.64-1.49 14.59-2.93 19.09-4.21 0-.03-10.8-17.52-13.97-21.31z"
            style={{
              transformOrigin: "409.019px 182.09px",
            }}
            id="els435iy9lahg"
            className="animable"
            fill="#e0e0e0"
          />
          <path
            d="M387.78 202.71a6.39 6.39 0 01-3.15-1.24c-1.05-.72-2-1.53-3.15-2.18a63.75 63.75 0 00-8.58-3.77 1.73 1.73 0 00-.89-.17 1.15 1.15 0 00-.75.66 3.08 3.08 0 00-.21 1c-.07.72.11 1.45 0 2.18-.86 7.26 15.09 7.09 16.73 3.52z"
            style={{
              transformOrigin: "379.398px 200.228px",
            }}
            id="el56wk0f7idkk"
            className="animable"
            fill="#b16668"
          />
          <path
            d="M375.89 218.52l4.87-19.34-5.85-1.47-4.86 19.34a1.43 1.43 0 00.53 1.5 4.66 4.66 0 004.13 1 1.45 1.45 0 001.18-1.03z"
            style={{
              transformOrigin: "375.383px 208.695px",
            }}
            id="eli018izqbyl"
            className="animable"
            fill="#22c55e"
          />
          <path
            d="M375.89 218.52l4.87-19.34-5.85-1.47-4.86 19.34a1.43 1.43 0 00.53 1.5 4.66 4.66 0 004.13 1 1.45 1.45 0 001.18-1.03z"
            style={{
              transformOrigin: "375.383px 208.695px",
            }}
            className="animable"
            opacity={0.25}
            id="elptozkpoiyu"
          />
          <path
            d="M376.06 196.73a4.69 4.69 0 014.14 1c1 .94.71 2-.6 2.38a4.69 4.69 0 01-4.14-1 1.3 1.3 0 01.6-2.38z"
            style={{
              transformOrigin: "377.837px 198.42px",
            }}
            id="elzhpg0pat11"
            className="animable"
            fill="#22c55e"
          />
          <path
            d="M376.06 196.73a4.69 4.69 0 014.14 1c1 .94.71 2-.6 2.38a4.69 4.69 0 01-4.14-1 1.3 1.3 0 01.6-2.38z"
            style={{
              transformOrigin: "377.837px 198.42px",
            }}
            className="animable"
            opacity={0.1}
            id="elyonxk1i60r"
          />
          <path
            d="M376.33 198l33.52-130.7a1.68 1.68 0 113.25.84L379.59 198.8c-.85.68-3.03.09-3.26-.8z"
            style={{
              transformOrigin: "394.752px 132.532px",
            }}
            id="elzpg2kedpcd"
            className="animable"
            fill="#263238"
          />
          <path
            d="M387.78 202.77c-1.61.66-4.71 0-7.9-.23-2.57 1.81-5.78-.29-5.85-1.44l-.69-2.46s-2.67-.14-3.88 1-.5 2.79-1 3.47a9.23 9.23 0 00-1.28 2.75c-.22.86-1.29 2.58-1.22 3.44s0 2.81 0 2.81a7.39 7.39 0 006.33 4c4.77.34 13.14-1.64 13.14-1.64z"
            style={{
              transformOrigin: "376.868px 207.392px",
            }}
            id="elo12r16uu0e"
            className="animable"
            fill="#b16668"
          />
          <path
            d="M404.73 93a91.8 91.8 0 0150 19.36c15.12 2.63 24.44 9.25 29.84 18.57-11.65-40.65-40.19-63.18-71.3-71.18s-67-2.06-96.81 27.92c9.23-5.55 20.58-6.85 35.1-1.86A91.77 91.77 0 01404.73 93z"
            style={{
              transformOrigin: "400.515px 93.7222px",
            }}
            id="el1jdnf7vr0qb"
            className="animable"
            fill="#22c55e"
          />
          <path
            d="M351.57 85.78A91.79 91.79 0 01404.73 93l8.56-33.25c-35.55-9.18-61.72 26.03-61.72 26.03z"
            style={{
              transformOrigin: "382.43px 75.6115px",
            }}
            className="animable"
            opacity={0.15}
            id="elh289lu7ggu"
          />
          <path
            d="M316.48 87.64c29.83-30 65.69-35.93 96.81-27.92-35.55-9.15-61.71 26.06-61.71 26.06-14.52-4.99-25.87-3.69-35.1 1.86z"
            style={{
              transformOrigin: "364.885px 72.0585px",
            }}
            className="animable"
            opacity={0.1}
            id="elkjgyokdru5"
          />
          <path
            d="M454.75 112.33a91.8 91.8 0 00-50-19.36l8.56-33.25c35.52 9.15 41.44 52.61 41.44 52.61z"
            style={{
              transformOrigin: "429.75px 86.025px",
            }}
            className="animable"
            opacity={0.2}
            id="elcgql9vtojj"
          />
          <path
            d="M484.59 130.9c-11.65-40.65-40.19-63.18-71.3-71.18 35.54 9.14 41.46 52.61 41.46 52.61 15.12 2.67 24.44 9.25 29.84 18.57z"
            style={{
              transformOrigin: "448.94px 95.31px",
            }}
            className="animable"
            opacity={0.25}
            id="eltilgnca9lzq"
          />
        </g>
      </g>
      <defs>
        <filter id="active" height="200%">
          <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius={2} />
          <feFlood floodColor="#32DFEC" floodOpacity={1} result="PINK" />
          <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE" />
          <feMerge>
            <feMergeNode in="OUTLINE" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="hover" height="200%">
          <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius={2} />
          <feFlood floodColor="red" floodOpacity={0.5} result="PINK" />
          <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE" />
          <feMerge>
            <feMergeNode in="OUTLINE" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
          <feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0" />
        </filter>
      </defs>
    </svg>
  );
};

export default SvgComponent;
