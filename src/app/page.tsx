import ContactFooter from '@/ui/contact';
import ArticleSection from '@/ui/articles/article-section';
import { ArticleProvider } from '@/context/article-context';
import PrimaryArticle from '@/ui/articles/primary-article';

export default function Home() {
  return (
    <ArticleProvider>
      <main className="wrapper primary-bg pt-8 px-8" id="current-article">
        <PrimaryArticle />
        <ArticleSection />
        <ContactFooter />
      </main>
    </ArticleProvider>
  );
}
