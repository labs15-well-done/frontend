import { Global, css } from "@emotion/core"

export const colors = {
  main: "#fff",
  brand: "#00cffe",
  btnHover: "#1e90fe",
  backgroundColor: "#E5EDF6",
  text: "#50A8FF",
  success: "#01c000",
  danger: "#f44336",
  orange: "#FF9800",
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
      `}
    />
  )
}