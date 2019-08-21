import React from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FiMenu, FiLogOut } from "react-icons/fi"
import { colors } from "./Styles"

const nav = [
  { name: "Dashboard", link: "/dashboard", icon: FiMenu },
  { name: "Monitors", link: "/monitors", icon: FiMenu },
  // { name: 'Reports', link: '/reports' },
  // { name: 'Settings', link: '/settings' }
]

export default function Nav() {
  return (
    <>
      <div
        className="navigation-styles"
        css={{
          minHeight: "100vh",
          backgroundColor: colors.brand,
          padding: "0 20px",
        }}>
        <Link href="/index">
          <img
            src="../static/textlogo.png"
            css={{ width: 200, margin: "30px 0 50px" }}
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
                <div>
                  {Icon ? <Icon /> : null}
                  <a>{name}</a>
                </div>
              </Link>
            )
          })}
          <div>
            <FiLogOut />
            <a>Logout</a>
          </div>
        </div>
      </div>
    </>
  )
}
