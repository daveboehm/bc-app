import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dave Boehm - Next app</title>
        <meta name="description" content="Take home code assessment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>
          Hi there! tl;dr: just skip this rambling and click "Go To App" below.
        </p>

        <p>This is the second time I've ever spun up a nextjs app, and the first time I actually made something more than Hello World.</p>
        <p>I enjoyed nextjs immensely and spent a bit longer than the 4 hours expected of me on this mini project. I got hung up in one
          spot in particular: <code>getStaticProps()</code>.... I had written probably 100 lines of code by the time I found this
          method in their docs. :facepalm emoji: No wonder my client side fetch call didn't work at that point. Shame on me for not
          being more thorough in learning nextjs first.</p>
        <p>I included Typescript in here, moreso for my own preference, and because I wanted to see how nextjs and ts played together. I struggled a little trying To
          decipher the <code>'next/foo'</code> types in their declaration files, but I didn't spend much time on them either.</p>
        <p>Also tossed in some React Testing Library. I'm a huge fan of RTL over enzyme/chai/mocha/etc. I did not write all the tests
          I felt I should have for this app, but I think the tests I did include here demonstrate my style and competency. 
        </p>
        <p>I considered implementing sass/less, but I was already pretty unfamiliar with CSS modules and didn't want to overcomplicate something
          as easy as styling for an app of this size. I'm sure nextjs has a command that'll just do it all for me. I did not check.
        </p>
        <p>Lastly, I was forced to write this all on my gaming PC because I've completely forgotten my macbook password, and cannot log in
          or use it in any way. Not having a `cmd` key is devastating during development. This is also why I had to use npm instead of yarn. Well,
          not "had to", but the paths on my PC are a bit screwy and I simply didn't want to troubleshoot it.</p>



        <div>
          <Link href="/entries">
            <a className={styles.buttonLink}>Go To App</a>
          </Link>
        </div>
        
      </main>
    </div>
  )
}

export default Home
