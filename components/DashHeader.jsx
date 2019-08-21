import React, { useState } from "react"
import { FiUser } from "react-icons/fi"
import { colors } from "./Styles"

export default function DashHeader() {
  const [] = useState("")
  return (
    <>
      <div css={{ borderBottom: "2px solid #D1DEEA" }}>
        <div css={{ padding: "20px 20px", maxWidth: 1240, margin: "0 auto" }}>
          <div
            css={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginBottom: 40,
            }}>
            <input
              placeholder="Search"
              css={{
                backgroundColor: "white",
                border: "none",
                outline: "none",
                borderRadius: 5,
                padding: "5px 10px",
              }}
            />
            <div
              css={{
                height: 40,
                width: 40,
                backgroundColor: "#ABD5FF",
                borderRadius: "50%",
                margin: "0 10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <FiUser size="20px" color="white" />
            </div>
          </div>
          <div css={{ display: "flex", alignItems: "center" }}>
            <div css={{ flexGrow: 1 }}>
              <h1 css={{ margin: 0, fontSize: 25, color: colors.text }}>
                Insights
              </h1>
            </div>
            <div
              css={{
                a: {
                  transition: ".2s",
                  marginLeft: 20,
                  color: colors.btnHover,
                  padding: "5px 10px",
                  fontWeight: "lighter",
                  borderRadius: 5,
                  ":hover": {
                    backgroundColor: colors.btnHover,
                    color: "white",
                  },
                },
              }}>
              <a>Weekly</a>
              <a>Monthly</a>
            </div>
          </div>
        </div>
      </div>
      {/* <style jsx>{`
        .top {
          display: flex;
          justify-content: flex-end;
          margin-right: 3%;
          margin-top: 1%;
          align-items: center;
        }
        .user-circle {
          margin-left: 1%;
          color: #aad3fd;
        }
        .search-icon {
          color: #52a7f8;
        }
        input {
          margin-left: 1%;
        }
        .bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 1%;
          border-bottom: 3px solid lightgrey;
        }
        .a-tags {
          margin-right: 4%;
        }
        h4 {
          margin: 0;
          margin-right: 2%;
          color: #52a7f8;
          font-size: 1.5rem;
        }
        a {
          margin-right: 15%;
          color: #52a7f8;
          padding: 5%;
          font-size: 1.25rem;
        }
        a:hover {
          background-color: #52a7f8;
          color: #e5edf6;
          border-radius: 8px;
          cursor: pointer;
        }
      `}</style> */}
    </>
  )
}
