import { useEffect } from "react";

export interface SEOMetadata {
  title: string;
  description: string;
}

export const setSeoMetadata = (metadata: SEOMetadata) => {
  // Set page title
  document.title = metadata.title;

  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute("content", metadata.description);

  // Update og:title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute("content", metadata.title);

  // Update og:description
  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (!ogDescription) {
    ogDescription = document.createElement("meta");
    ogDescription.setAttribute("property", "og:description");
    document.head.appendChild(ogDescription);
  }
  ogDescription.setAttribute("content", metadata.description);

  // Update twitter:title
  let twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (!twitterTitle) {
    twitterTitle = document.createElement("meta");
    twitterTitle.setAttribute("name", "twitter:title");
    document.head.appendChild(twitterTitle);
  }
  twitterTitle.setAttribute("content", metadata.title);

  // Update twitter:description
  let twitterDescription = document.querySelector(
    'meta[name="twitter:description"]',
  );
  if (!twitterDescription) {
    twitterDescription = document.createElement("meta");
    twitterDescription.setAttribute("name", "twitter:description");
    document.head.appendChild(twitterDescription);
  }
  twitterDescription.setAttribute("content", metadata.description);
};

export const usePageTitle = (metadata: SEOMetadata) => {
  useEffect(() => {
    setSeoMetadata(metadata);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [metadata.title, metadata.description]);
};
