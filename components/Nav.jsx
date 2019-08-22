import React from "react"
import Link from "next/link"
import {
  FiMenu,
  FiLogOut,
  FiBarChart2,
  FiEdit,
  FiSettings,
} from "react-icons/fi"
import { colors } from "./Styles"

const nav = [
  { name: "Dashboard", link: "/dashboard", icon: FiMenu },
  { name: "Monitors", link: "/monitors", icon: FiBarChart2 },
  { name: "Reports", link: "/reports", icon: FiEdit },
  { name: "Settings", link: "/settings", icon: FiSettings },
]

export default function Nav() {
  return (
    <>
      <div
        className="navigation-styles"
        css={{
          minHeight: "100vh",
          backgroundColor: colors.brand,
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
          {nav.map(({ name, link, icon: Icon }) => {
            return (
              <Link href={link}>
                <div
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
