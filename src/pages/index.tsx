import * as React from "react";
import { Helmet } from "react-helmet";
import "twin.macro";
import Layout from "../components/Layout";
import { Canvas } from "@react-three/fiber";
import Polygon from "../components/Polygon";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Jerred Shepherd</title>
      </Helmet>
      <div tw="max-h-screen h-screen">
        <div tw="h-full bg-indigo-700 heropattern-topography-white">
          <div tw="grid grid-cols-2 items-center h-full">
            <div tw="justify-self-center">
              <div>
                <h1 tw="font-bold text-4xl text-white bg-black inline-block p-1">
                  Hi, I'm Jerred :)
                </h1>
              </div>
              <p tw="text-white bg-black inline-block p-1">
                I work as a software engineer at{" "}
                <a href="https://www.rstudio.com/">RStudio</a>.
              </p>
            </div>
            <div tw="h-full">
              <Canvas tw="h-full">
                <ambientLight />
                <pointLight position={[5, 5, 5]} />
                <Polygon position={[0, 0, 0]} />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
