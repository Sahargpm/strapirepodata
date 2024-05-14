"use client"
import { useState, useEffect } from "react";
import flattenDataAttribute from "../../lib/utils"
import {getStrapiURL} from "../../lib/getStrapiMedia"
import Herosection from "../../Component/herosection";
import { FeatureSection } from "../../Component/Featuresection";
import qs from "qs"

const homepageQuery=qs.stringify({
  populate: {
    Hero:{
    populate:{
    media:{
          fields: ['url',"alternativeText"]
  
    },
    link:{
      populate: true
      },
      feature:{
        populate: true
      },
    }
    }  
    }, 
})

async function getStrapiData(path) {
  const baseUrl = getStrapiURL();
  const url=new URL(path,baseUrl)
  url.search=homepageQuery;
  console.log(url.href)
  try {
    const response = await fetch(url.href);
    const data = await response.json();
    console.log("data before",data);
    const flattenedData=flattenDataAttribute(data)
    console.log("flattenedData",flattenedData)
    // console.dir(flattenedData,{depth:null})
    return flattenedData;
  } catch (error) {
    return null; // Return null in case of error
  }
}
async function getStrapiprops(path) {
  const baseUrl = "https://supportive-boat-43618c4336.strapiapp.com";

  try {
    const response = await fetch(baseUrl+path);
    const data = await response.json();
    // console.dir(flattenedData,{depth:null})
    console.log(data)
    return data;
  } catch (error) {
    return null; // Return null in case of error
  }
}

export default function Home() {
  const [strapiData, setStrapiData] = useState(null);
  const [dataset,setDataset]=useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getStrapiData("/api/home");
      const propsdata=await getStrapiprops("/api/home")

      if (data) {
        setDataset(propsdata.data.attributes);
        console.log(dataset)
        setStrapiData(data.Hero);
      }
    }
    fetchData();
  }, []); 
  return (
    <>
    {dataset&&
    <>
    <h1>{dataset.title}</h1>
    <p>{dataset.description}</p>
    </>
    }
      {strapiData && <>
      <Herosection data={strapiData[0]} />
      <FeatureSection data={strapiData[1]}></FeatureSection></>
      }
    </>
  );
}



