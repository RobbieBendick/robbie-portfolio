import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LandingPage from "../components/LandingPage/LandingPage"
import AboutMe from "../components/AboutMe/AboutMe"


const Index = () => (
  <Layout>
    <Seo title="Home" />
      <LandingPage />
      <AboutMe />
  </Layout>
)

export default Index;
