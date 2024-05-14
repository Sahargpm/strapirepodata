import React from 'react'
import Link from 'next/link';
import  StrapiImage from "../Component/strapiImage";

export default function Herosection({ data }) {
    // console.dir(data, { depth: null });
    const { detail,media , link,description    } = data;
    // const mediaURL = "http://localhost:1337" + media.url;
    return (
      <header className="relative h-[600px] overflow-hidden">
       <StrapiImage
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full"
          src={media.url}
          height={1080}
          width={1920}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-20">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            {detail}
          </h1>
          
          <a
          href={link.Url}
        >
          {link.Name}
          {description}
        </a>



      </div>

    </header>
  );
}

