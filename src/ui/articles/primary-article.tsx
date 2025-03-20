'use client';
import { useContext } from 'react';
import Gallery from '../gallery/gallery';
import { ArticleContext } from '@/context/article-context';

const formatArticleText = (text: string) => {
  // Split the text by double newlines to create paragraphs
  const paragraphs = text.split('\n\n');

  return paragraphs.map((paragraph, index) => {
    // For each paragraph, handle any single newlines by converting them to <br> tags
    const lines = paragraph.split('\n');
    return (
      <p key={index} className="mb-4">
        {lines.map((line, lineIndex) => (
          // For each line within a paragraph, add a <br> if it's not the last line
          <span key={lineIndex}>
            {line}
            {lineIndex < lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    );
  });
};

const PrimaryArticle = () => {
  const context = useContext(ArticleContext);
  if (!context) return <span>Context is missing</span>;
  const { currentArticle } = context;
  return (
    <div className="gap-4 primary-article">
      <article className="max-w-full">
        <h2 className="text-2xl font-bold">{currentArticle.headline}</h2>
        <div>{formatArticleText(currentArticle.text)}</div>
      </article>
      <Gallery
        images={currentArticle.images}
        labels={currentArticle?.labels ?? ['']}
        fullscreen={true}
        width={currentArticle?.galleryOptions?.width ?? 600}
        height={currentArticle?.galleryOptions?.height ?? 400}
        sameSize={currentArticle?.sameSize ?? true}
      />
    </div>
  );
};

export default PrimaryArticle;
