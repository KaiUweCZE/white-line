import ContactFooter from "@/ui/contact";
import ArticleSection from "@/ui/articles/article-section";
import { ArticleProvider } from "@/context/article-context";
import PrimaryArticle from "@/ui/articles/primary-article";

export default function Home() {
  return (
    <ArticleProvider>
      <div className="wrapper mx-auto primary-bg max-width pt-8 px-8">
        <PrimaryArticle />
        <ArticleSection />
        <ContactFooter />
      </div>
    </ArticleProvider>
  );
}
