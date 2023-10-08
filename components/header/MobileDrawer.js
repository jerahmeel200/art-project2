import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";

const navData = [
  { link: "/", title: "HOME" },
  { link: "/about", title: "ABOUT ME" },
  { link: "/products", title: "MY GALLERY" },
  { link: "/contact", title: "CONTACT ME" },
];

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen]);

  return scope;
}

export default function MobileDrawer({ showTransparent }) {
  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);

  const toggle = () => setIsOpen(!isOpen);

  const Path = (props) => (
    <path
      fill="transparent"
      strokeWidth="2"
      stroke={!showTransparent ? "#000" : "#fff"}
      strokeLinecap="round"
      {...props}
    />
  );

  return (
    <>
      <div ref={scope}>
        <nav className="menu">
          <ul>
            {navData.map((x) => {
              return (
                <li key={x?.title}>
                  <a href={x?.link}>{x?.title}</a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button onClick={toggle}>
          <svg width="23" height="18" viewBox="0 0 23 18">
            <Path
              d="M 2 2.5 L 20 2.5"
              className="top"
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
            <Path
              d="M 2 16.346 L 20 16.346"
              className="bottom"
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .refresh {
          padding: 5px;
          position: absolute;
          border: 1px dotted #16501c;
          border-radius: 5px;
          width: 20px;
          height: 20px;
          top: 10px;
          right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .refresh path {
          fill: #16501c;
        }

        .menu {
          position: fixed;
          z-index: 9999;
          top: 0;
          left: 0;
          bottom: 0;
          width: 100%;
          max-width: calc(100vw - 200px);
          background: #000000;
          transform: translateX(-100%);
          will-change: transform;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 4434343;
        }

        @media screen and (max-width: 500px) {
          button {
            display: block;
          }

          .menu {
            max-width: calc(100vw - 100px);
          }
        }

        .menu ul {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 15px;
        }

        .menu li a {
          color: #fafafa;
          display: block;
          transform-origin: -20px 50%;
          font-weight: bold;
          font-size: 30px;
          line-height: 48px;
          padding: 0 10px;
          will-change: transform, opacity, filter;
          text-decoration: none;
          text-align: left;
        }

        .menu ul,
        .menu li {
          list-style: none;
          margin: 0;
        }

        button {
          outline: none;
          border: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          cursor: pointer;

          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #eeeeee00;

          display: flex;
          align-items: center;
          justify-content: center;
          display: none;
        }

        button path {
          fill: #fff;
        }

        @media screen and (max-width: 770px) {
          button {
            display: block;
          }
        }

        #root {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        h1,
        h2,
        h3 {
          font-family: sofia-pro, sans-serif;
          font-weight: 600;
          font-style: normal;
        }

        h1 {
          font-size: 36px;
          font-weight: 700;
          letter-spacing: -1px;
          line-height: 1.2;
          text-align: center;
          margin: 100px 0 40px;
        }

        h2 {
          font-weight: 400;
          margin: 50px 0 10px;
        }

        p {
          margin: 0 0 30px 0;
          font-size: 18px;
        }

        footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 20px;
          border-top: 1px dotted #ff0066;
          background-color: transparent;
          background-image: radial-gradient(
            circle at 50% 50%,
            #fafafa 20%,
            #fffd 20.5%,
            #fffd 49.5%,
            #fafafa 50%
          );

          background-size: 15px 15px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          -moz-backdrop-filter: blur(20px);
          font-size: 14px;
          line-height: 14px;
        }

        footer svg {
          margin-right: 20px;
        }

        footer a {
          text-decoration: none;
          color: #ff0066;
        }

        code {
          font-family: input-mono, monospace;
          font-weight: 400;
          font-style: normal;
        }

        ::-webkit-scrollbar {
          height: 5px;
          width: 5px;
          background: #fafafa;
          -webkit-border-radius: 1ex;
        }

        ::-webkit-scrollbar-thumb {
          background: #ff0066;
          -webkit-border-radius: 1ex;
        }

        ::-webkit-scrollbar-corner {
          background: #fff3;
        }
      `}</style>
    </>
  );
}
