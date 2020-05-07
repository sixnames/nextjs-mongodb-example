import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href={'/favicon.ico'} />
      </Head>

      <main>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequatur dolorem
        doloribus facere ipsa iusto magnam nihil nisi quia totam. Accusantium amet asperiores ex
        ipsam labore maiores omnis possimus recusandae!
      </main>
    </div>
  );
}
