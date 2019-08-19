import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/Nav';

const Home = () => (
  <>
      <Head>
        <title>Home</title>
      </Head>

    <div className='container'>
      <Nav />
      <h2>Index Page!</h2>
    </div>
    <style jsx>{`
      .container {
        display: flex;
      }
      h2 {
        margin-left: 10px;
      }
    `}</style>
  </>
);

export default Home;
