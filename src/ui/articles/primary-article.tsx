"use client";
import { useContext } from "react";
import Gallery from "../gallery/gallery";
import { ArticleContext } from "@/context/article-context";

const PrimaryArticle = () => {
  const context = useContext(ArticleContext);
  if (!context) return <span>Context is missing</span>;
  const { currentArticle } = context;
  return (
    <main className="grid grid-cols-2 gap-4">
      <article>
        <h2 className="text-2xl font-bold">{currentArticle.headline}</h2>
        <p>{currentArticle.text}</p>
      </article>
      <Gallery images={currentArticle.images} alts={["1", "2", "3", "4"]} />
    </main>
  );
};

export default PrimaryArticle;
