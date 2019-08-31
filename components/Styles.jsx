import { Global, css } from "@emotion/core"

export const colors = {
  main: "#fff",
  brand: "#0282FA",
  btnHover: "#1e90fe",
  backgroundColor: "#F3F7FC",
  text: "#886BFE",
  success: "#01c000",
  danger: "#f44336",
  orange: "#FFAD34",
  darkText: "#2A2A32",
}

export const breakingPoints = {
  xl: "@media (max-width: 1200px)",
  lg: "@media (max-width: 1000px)",
  md: "@media (max-width: 800px)",
  sm: "@media (max-width: 600px)",
}

export default function Styles() {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body {
          font-family: "Poppins", sans-serif;
          background-color: ${colors.backgroundColor};
        }

        h1 {
          color: ${colors.darkText};
        }
      `}
    />
  )
}
