import React from "react";

import AllRecipes from "../components/AllRecipes";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

function Recipes() {
  return (
    <Layout>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  );
}

export function Head() {
  return <SEO title="Recipes" />;
}

export default Recipes;
