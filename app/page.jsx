"use client";

import Feed from "@components/Feed"
import ImageCarousel from "@components/Carousel"
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <ImageCarousel/>
        
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Promptopia is an open-source AI prompting tool for modern world to discover, create and share creativity
        </p>
        <Feed />
    </section>
  )
}

export default Home