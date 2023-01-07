import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import AllRecipes from "../components/AllRecipes";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  );
}

export function Head() {
  return <SEO title="Home" />;
}

export default Home;
