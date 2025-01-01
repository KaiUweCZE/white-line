'use client';
import { useContext } from 'react';
import ArticleSearch from './article-search';
import { newsData } from './data/data-articles';
import PrimaryArticleView from './primary-article-view';
import { ArticleContext } from '@/context/article-context';

const ArticleSection = () => {
  const data = newsData;
  const context = useContext(ArticleContext);

  if (!context) return <span>Context is missing</span>;

  const { searchOption, year } = context;
  const filteredData = data.filter(
    (data) =>
      (searchOption?.toLocaleLowerCase() === data.tags?.name || searchOption === null) &&
      (year === null || data.year === year) &&
      data
  );

  return (
    <div className="grid gap-2 border-t mt-6 pt-6">
      <h2 className="text-2xl font-bold">Novinky</h2>
      <ArticleSearch />
      <section className="articles-section grid grid-cols-3 gap-2 ">
        {filteredData.map((article, index) => (
          <PrimaryArticleView key={index} {...article} />
        ))}
      </section>
    </div>
  );
};

export default ArticleSection;
