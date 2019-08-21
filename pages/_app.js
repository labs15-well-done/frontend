import React from 'react';
import App, { Container } from 'next/app';
import Styles from '../components/Styles';
import Nav from '../components/Nav';

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <div css={{ display: 'flex' }}>
          <Nav />
          <Component {...pageProps} />
        </div>
        <Styles />
      </Container>
    );
  }
}
