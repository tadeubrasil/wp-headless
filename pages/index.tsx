import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import { client } from '../lib/apollo';
import { gql } from "@apollo/client";
import Navigation from '../components/navigation'
import Preloader from '../components/preloader'


function HomePage() {
  return  (
    <div className="container">
      <Preloader />
      <Navigation></Navigation>
      <Head>
        <title>Headless WP Next Starter</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <main>
        <h1 className="title">
          Headless WordPress Next.js Starter
        </h1>

      </main>

    </div>
  )
}

export default HomePage


