import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1>Homepage</h1>
      <div>
        <Link to="/about">about</Link>
      </div>
      <div>
        <Link to="/company/history">history</Link>
      </div>
    </Layout>
  );
}
