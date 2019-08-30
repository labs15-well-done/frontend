import React, { useState } from "react"

export default function Card({
  text,
  icon: Icon,
  color,
  value,
  toggle,
  toggleSummary,
  progress,
  css,
}) {
  return (
    <div
      css={{
        backgroundColor: "white",
        padding: "10px 20px 20px",
        color: color ? color : "black",
        borderRadius: 5,
        ...css,
      }}>
      <div css={{ display: "flex", alignItems: "center" }}>
        <Icon size="25px" css={{ marginRight: 10 }} />
        <h3 css={{ fontSize: 18 }}>{text}</h3>
      </div>
      <div
        css={{
          borderBottom: `2px solid ${color ? color : "black"}`,
          paddingBottom: 10,
        }}>
        <h2
          css={{
            margin: 0,
            fontSize: 40,
            fontWeight: "lighter",
            color: color ? color : "black",
          }}>
          {value}
        </h2>
      </div>
      {toggle ? (
        <div css={{ padding: "20px 10px 0", outline: "none" }}>
          <details>
            <summary css={{ outline: "none", cursor: "pointer" }}>
              {toggleSummary}
            </summary>
            {toggle}
          </details>
        </div>
      ) : null}
      {progress ? (
        <div
          css={{
            width: "100%",
            padding: "20px 10px 0",
            display: "flex",
            alignItems: "center",
          }}>
          <div
            css={{
              height: 10,
              width: "100%",
              backgroundColor: "#E0E0E0",
              borderRadius: 5,
            }}>
            <div
              css={{
                backgroundColor: color,
                width: `${progress}%`,
                height: "100%",
                borderRadius: 5,
              }}></div>
          </div>
          <p css={{ margin: "0 0 0 10px" }}>{progress}%</p>
        </div>
      ) : null}
    </div>
  )
}
