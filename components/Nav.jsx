import React, { useState } from "react"
import Link from "next/link"
import {
  FiMenu,
  FiLogOut,
  FiBarChart2,
  FiEdit,
  FiSettings,
} from "react-icons/fi"
import { colors, breakingPoints } from "./Styles"
import { useStore } from "./Layout"

const nav = [
  {
    name: "Dashboard",
    link: "/dashboard",
    id: "tour-dashboard",
    content: "Dashboard Here",
    icon: FiMenu,
  },
  {
    name: "Monitors",
    link: "/monitors",
    id: "tour-monitors",
    content: "Monitors Here",
    icon: FiBarChart2,
  },
  {
    name: "Reports",
    link: "/reports",
    id: "tour-reports",
    content: "Reports Here",
    icon: FiEdit,
  },
  {
    name: "Settings",
    link: "/settings",
    id: "tour-settings",
    content: "Settings Here",
    icon: FiSettings,
  },
]

export default function Nav() {
  const { store } = useStore()
  return (
    <>
      <div
        className="navigation-styles"
        css={{
          minHeight: "100vh",
          backgroundColor: colors.brand,
          [breakingPoints.md]: {
            transition: ".2s",
            position: "fixed",
            zIndex: 99999,
            marginLeft: store.nav ? 0 : -250,
          },
        }}>
        <Link href="/index">
          <img
            src="../static/textlogo.png"
            css={{ width: 200, margin: "30px 20px 50px" }}
          />
        </Link>
        <div
          css={{
            color: "white",
            a: {
              fontSize: 20,
              marginLeft: 10,
            },
          }}>
          {nav.map(({ name, link, id, icon: Icon }) => {
            return (
              <Link href={link}>
                <div
                  id={id}
                  className={id}
                  css={{
                    padding: "10px 25px",
                    cursor: "pointer",
                    ":hover": {
                      backgroundColor: colors.btnHover,
                    },
                  }}>
                  {Icon ? <Icon /> : null}
                  <a>{name}</a>
                </div>
              </Link>
            )
          })}
          <div
            css={{
              padding: "10px 25px",
              cursor: "pointer",
              ":hover": {
                backgroundColor: colors.btnHover,
              },
            }}>
            <FiLogOut />
            <a>Logout</a>
          </div>
        </div>
      </div>
    </>
  )
}
