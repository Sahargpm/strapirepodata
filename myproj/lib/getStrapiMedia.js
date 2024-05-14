export function getStrapiURL() {
    return process.env.STRAPI_URL ?? "http://localhost:1337";
  }
  
  export default function getStrapiMedia(url) {
    if (url == null) return null;
    if (url.startsWith("data:")) return url;
    if (url.startsWith("http") || url.startsWith("//")) return url;
    return `${getStrapiURL()}${url}`;
  }