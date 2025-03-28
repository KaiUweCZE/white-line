'use client';
import { useContext } from 'react';
//import ReactMarkdown from 'react-markdown';
import Gallery from '../gallery/gallery';
import { ArticleContext } from '@/context/article-context';
import { formatDate } from '@/utils/form-date';
import '@/assets/styles/article.css';
import { fixIndentation } from '@/utils/fix-indentation';
import dynamic from 'next/dynamic';

const ReactMarkdown = dynamic(() => import('react-markdown'), {
  ssr: true,
  loading: () => (
    <div className="animate-pulse article-content h-32 bg-gray-100">
      <p>
        V prosinci 2024 Narodil se nám první vrh Welsh corgi cardigan. Matka Lovitpon Tilda Tango a
        otec CIB Simba Tender Lion z Jurajskiego Zamku přivedli na svět 3 fenky a 1 psa. Porod
        proběhl bez komplikací.
      </p>
    </div>
  ),
});

const PrimaryArticle = () => {
  const context = useContext(ArticleContext);
  if (!context) return <span>Context is missing</span>;
  const { currentArticle, placeholder, isSwitching, setIsSwitching } = context;
  const { tags, time, headline, text, images, labels, galleryOptions, sameSize } = currentArticle;

  const splitTime = time.split('.');
  const editedMonth = splitTime[1].length === 1 ? '0' + splitTime[1] : splitTime[1];
  const editedDay = splitTime[0].length === 1 ? '0' + splitTime[0] : splitTime[0];
  const isoTime = `${splitTime[2]}-${editedMonth}-${editedDay}`;

  const getCategoryColors = () => {
    switch (tags?.name) {
      case 'štěňata':
        return {
          specialClass: 'border-l-fuchsia-400/60 border-b-fuchsia-200/80 bg-fuchsia-50/100',
          bgColor: 'bg-fuchsia-50/50 border-b border-fuchsia-200/80',
          scrollClass: 'fuchsia-scroll',
          textColor: 'text-fuchsia-800',
        };
      case 'závody':
        return {
          specialClass: 'border-l-emerald-400/60 border-b-emerald-200/80 bg-emerald-50/100',
          bgColor: 'bg-emerald-50/50 border-b border-emerald-200/80',
          scrollClass: 'emerald-scroll',
          textColor: 'text-emerald-800',
        };
      case 'výstava':
        return {
          specialClass: 'border-l-amber-400/60 border-b-amber-200/80 bg-amber-50/100',
          bgColor: 'bg-amber-50/50 border-b border-amber-200/80',
          scrollClass: 'amber-scroll',
          textColor: 'text-amber-800',
        };
      default:
        return {
          specialClass: 'border-l-sky-400/60 border-b-sky-200/80 bg-sky-50/100',
          bgColor: 'bg-sky-50/50 border-b border-sky-200/80',
          scrollClass: 'sky-scroll',
          textColor: 'text-sky-800',
        };
    }
  };

  const { specialClass, textColor, bgColor } = getCategoryColors();

  const cleanText = fixIndentation(currentArticle.content ?? text);

  return (
    <div className="gap-4 primary-article transition-all duration-600 relative">
      <article className="max-w-full rounded">
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
          onAnimationEnd={() => setIsSwitching((prev) => ({ ...prev, article: false }))}
          className={`p-4 article-content ${isSwitching.article && 'switching'} ${bgColor}`}
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
        isSwitching={isSwitching}
        setIsSwitching={setIsSwitching}
      />
    </div>
  );
};

export default PrimaryArticle;
