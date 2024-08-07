import * as React from "react";
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hi! I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Kim playing pinball in his computer; Harry cheers for him."
        src="../images/de pinball (citrus0lemon).jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage

