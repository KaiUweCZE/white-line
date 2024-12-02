import { useContext } from "react";
import Button from "../primitives/button";
import Tag from "../primitives/tag";
import { Article } from "./types";
import { ArticleContext } from "@/context/article-context";

const PrimaryArticleView = (article: Article) => {
  const context = useContext(ArticleContext);
  if (!context) return <span>Context is missing</span>;
  const { setCurrentArticle, currentArticle } = context;

  const isActive = currentArticle.time === article.time;
  const outlinedClass = () => {
    switch (article.tags?.type) {
      case "puppies":
        return "outline outline-1 outline-fuchsia-300 bg-fuchsia-300/30";
      case "races":
        return "outline outline-1 outline-green-300 bg-green-300/30";
      case "exhibition":
        return "outline outline-1 outline-yellow-300 bg-yellow-300/20";
    }
  };

  return (
    <article
      className={`primary-article relative shadow rounded p-4 hover:outline hover:outline-1 hover:outline-blue-300 transition-all duration-300
     ${isActive ? outlinedClass() : "bg-white"}`}
    >
      <h3 className="font-semibold">{article.headline}</h3>
      <Tag variant={article.tags?.type}>{article.tags?.name}</Tag>
      <p className="line-clamp-2">{article.text}...</p>
      <footer className="flex justify-between">
        <time className="text-xs">{article.time}</time>
        <Button
          size="sm"
          animation="undeline"
          onClick={() => setCurrentArticle(article)}
        >
          Více
        </Button>
      </footer>
    </article>
  );
};

export default PrimaryArticleView;
