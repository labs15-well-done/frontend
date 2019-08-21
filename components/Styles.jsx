import { Global, css } from "@emotion/core"

export const colors = {
  main: "#fff",
  brand: "#00cffe",
  btnHover: "#1e90fe",
  backgroundColor: "#E5EDF6",
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
