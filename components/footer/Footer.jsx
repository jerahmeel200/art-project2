import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        background: "#f5f5f5",
        minHeight: 50,
      }}>
      <div
        style={{
          margin: "auto",
          width: "100%",
          maxWidth: 1600,
          color: "#777777",
          display: "flex",
          flexWrap: "wrap",
          padding: "30px",
          fontSize: 13,
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <img
          style={{
            cursor: "pointer",

            height: 50,
          }}
          src={"/images/logo/logo-black-small.png"}
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "10px 0",
            lineHeight: "30px",
          }}>
          <span style={{ color: "#777777" }}>© United Kingdom.</span>{" "}
          <small
            style={{
              padding: "0 20px",
            }}>
            |
          </small>
          <span style={{ color: "#777777" }}>2023 All Rights Reserved.</span>
          <small
            style={{
              padding: "0 20px",
            }}>
            |
          </small>
          <span style={{ color: "#777777" }}>
            Elo Art is a trademark and service mark of the Elo Art Gallery.
          </span>
        </div>
        <div className="socials">
          <img src="/images/instagram.png" />
          <img src="/images/facebook.png" />
          <img src="/images/twitter.png" />
        </div>{" "}
      </div>

      <style jsx>{`
        .socials {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-top: 20px;
        }
        .socials img {
          width: 50px;
          cursor: pointer;
        }

        @media screen and (max-width: 770px) {
          .socials {
            margin-top: 0px;
          }
        }
      `}</style>
    </div>
  );
}
