import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import HeroPost from '../../components/hero-post'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import {getAllPagesWithSlugs, getPageBySlug} from '../../lib/api';
import { CMS_NAME } from '../../lib/constants'


export default function About() {
  return  <div>About Page - Wp HeadLess!</div>

}