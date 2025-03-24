'use client';
import { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import Gallery from '../gallery/gallery';
import { ArticleContext } from '@/context/article-context';
import { formatDate } from '@/utils/form-date';
import '@/assets/styles/article.css';
import { fixIndentation } from '@/utils/fix-indentation';

const PrimaryArticle = () => {
  const context = useContext(ArticleContext);
  if (!context) return <span>Context is missing</span>;
  const { currentArticle, placeholder } = context;
  const { tags, time, headline, text, images, labels, galleryOptions, sameSize } = currentArticle;

  const splitTime = time.split('.');
  console.log(splitTime);
  const isoTime = `${splitTime[2]}-${splitTime[1]}-${splitTime[0]}`;
  const getCategoryColors = () => {
    switch (tags?.name) {
      case 'štěňata':
        return {
          specialClass: 'border-l-fuchsia-400/60 border-b-fuchsia-200/40 bg-fuchsia-50/100',
          bgColor: 'bg-fuchsia-50/30',
          textColor: 'text-fuchsia-800',
        };
      case 'závody':
        return {
          specialClass: 'border-l-emerald-400/60 border-b-emerald-200/40 bg-emerald-50/100',
          bgColor: 'bg-emerald-50/30',
          textColor: 'text-emerald-800',
        };
      case 'výstava':
        return {
          specialClass: 'border-l-amber-400/60 border-b-amber-200/40 bg-amber-50/100',
          bgColor: 'bg-amber-50/30',
          textColor: 'text-amber-800',
        };
      default:
        return {
          specialClass: 'border-l-sky-400/60 border-b-sky-200/40 bg-sky-50/100',
          bgColor: 'bg-sky-50/30',
          textColor: 'text-sky-800',
        };
    }
  };

  const { specialClass, textColor, bgColor } = getCategoryColors();

  const cleanText = fixIndentation(currentArticle.content ?? text);

  return (
    <div className="gap-4 primary-article transition-all duration-600 relative">
      <article className="max-w-full rounded scroll-colo">
        <header className={`p-4 pb-2 border-b border-l-4 ${specialClass}`}>
          <h2 className="text-2xl font-bold">{headline}</h2>
          <div className="flex items-center gap-2 mt-1">
            <time dateTime={isoTime} className="text-sm text-slate-600">
              {formatDate(time)}
            </time>
            <span className="text-sm text-slate-400">•</span>
            <span className={`text-sm font-medium ${textColor}`}>{tags?.name}</span>
          </div>
        </header>
        <div
          className={`p-4 article-content ${bgColor}`}
          style={{ maxHeight: galleryOptions?.height && galleryOptions.height - 90 }}
        >
          <ReactMarkdown>{currentArticle.content ? cleanText : text}</ReactMarkdown>
        </div>
      </article>

      <Gallery
        images={images}
        labels={labels ?? ['']}
        fullscreen={true}
        width={galleryOptions?.width ?? 600}
        height={galleryOptions?.height ?? 400}
        sameSize={sameSize ?? true}
        placeholder={placeholder}
      />
    </div>
  );
};

export default PrimaryArticle;

/*

    <div
          className="gallery-placeholder relative transition-all duration-1000"
          style={{ height: galleryOptions?.height, width: galleryOptions?.width }}
        >
          <Image
            src={placeholderImage.src}
            alt="placeholder"
            className="absolute inset-0"
            width={galleryOptions?.width ?? 600}
            height={galleryOptions?.height ?? 400}
            blurDataURL={placeholderImage.blurDataURL}
            quality={1}
          />
        </div>
*/
