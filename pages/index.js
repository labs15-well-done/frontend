import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';

const Home = () => (
  <>
      <Head>
        <title>Home</title>
        <script src="https://use.fontawesome.com/9640fc46c9.js"></script>
      </Head>

    <div className='container'>
      <Nav />
      <h2>Index Page</h2>
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
