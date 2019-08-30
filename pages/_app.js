import React from "react"
import App, { Container } from "next/app"
import Styles, { breakingPoints } from "../components/Styles"
import Nav from "../components/Nav"
import Layout from "../components/Layout"

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Layout>
          <Nav />
          <div
            css={{
              marginLeft: 240,
              width: "100%",
              [breakingPoints.md]: {
                marginLeft: 0,
              },
            }}>
            <Component {...pageProps} />
          </div>
        </Layout>
        <Styles />
      </Container>
    )
  }
}
