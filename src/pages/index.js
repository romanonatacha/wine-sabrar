import Head from 'next/head'
import ReactFullpage from '@fullpage/react-fullpage'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Sabrage from '@/components/Sabrage'
import Social from '@/components/Social'


export default function Home() {

  return (
    <>
      <Head>
        <title>Wine Sabrar</title>
        <meta name="description" content="Em qualquer lugar do mundo o vinho è sinônimo de prazer alegria e confraternização" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000}
        animateAnchor={true}
        anchors={['', 'sabrage', 'social']}
        responsiveHeight='650'

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Hero />
              </div>
              <div className="section">
                <Sabrage />
              </div>
              <div className="section">
                <Social />
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </>
  )
}
