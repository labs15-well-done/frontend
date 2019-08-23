import React, { useState } from "react"
import { FiUser } from "react-icons/fi"
import { colors, breakingPoints } from "./Styles"
import { useStore } from "./Layout"
import { FiMenu, FiX } from "react-icons/fi"

export default function DashHeader({ title, actions }) {
  const { store, toggleNav } = useStore()
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
            <div>
              <button
                css={{
                  display: "none",
                  backgroundColor: "transparent",
                  outline: "none",
                  border: "none",
                  [breakingPoints.md]: {
                    display: "inherit",
                  },
                }}
                onClick={toggleNav}>
                {store.nav ? <FiX size="30px" /> : <FiMenu size="30px" />}
              </button>
            </div>
          </div>
          <div css={{ display: "flex", alignItems: "center" }}>
            <div css={{ flexGrow: 1 }}>
              <h1 css={{ margin: 0, fontSize: 25, color: colors.text }}>
                {title}
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
              {actions}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
