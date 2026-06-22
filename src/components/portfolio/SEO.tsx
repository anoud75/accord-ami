import { ReactNode, useEffect } from "react";

interface Props {
  title: string;
  description: string;
  children?: ReactNode;
}

const SEO = ({ title, description }: Props) => {
  useEffect(() => {
    document.title = title;
    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
  }, [title, description]);
  return null;
};

export default SEO;
