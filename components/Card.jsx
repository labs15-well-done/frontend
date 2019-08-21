export default function Card({ text, icon: Icon, color, value }) {
  return (
    <div
      css={{
        width: "24%",
        backgroundColor: "white",
        padding: "10px 20px 20px",
        color: color ? color : "black",
      }}>
      <div css={{ display: "flex", alignItems: "center" }}>
        <Icon size="20px" css={{ marginRight: 10 }} />
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
    </div>
  )
}
