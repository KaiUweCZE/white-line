import { useContext } from 'react';
import Button from '../primitives/button';
import Tag from '../primitives/tag';
import { Article } from './types';
import { ArticleContext } from '@/context/article-context';

const PrimaryArticleView = (article: Article) => {
  const context = useContext(ArticleContext);
  if (!context) return <span>Context is missing</span>;
  const { setCurrentArticle, currentArticle } = context;

  const isActive = currentArticle.time === article.time;
  const outlinedClass = () => {
    switch (article.tags?.type) {
      case 'puppies':
        return 'outline outline-1 outline-fuchsia-200 bg-fuchsia-200/30';
      case 'races':
        return 'outline outline-1 outline-green-200 bg-green-200/30';
      case 'exhibition':
        return 'outline outline-1 outline-yellow-200 bg-yellow-200/30';
    }
  };

  const handleSetArticle = () => {
    window.location.hash = '';
    setCurrentArticle(article);
    window.location.hash = `current-article`;
  };

  return (
    <article
      className={`article-view relative shadow rounded p-4 hover:outline hover:outline-1 hover:outline-blue-300 transition-all duration-300
     ${isActive ? outlinedClass() : 'bg-white'}`}
    >
      <h3 className="font-semibold">{article.headline}</h3>
      <Tag variant={article.tags?.type}>{article.tags?.name}</Tag>
      <p className="line-clamp-2">{article.text}...</p>
      <footer className="flex justify-between">
        <span className="text-xs">{article.time}</span>
        <Button size="sm" animation="undeline" onClick={handleSetArticle}>
          Více
        </Button>
      </footer>
    </article>
  );
};

export default PrimaryArticleView;
