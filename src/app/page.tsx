import Gallery from "@/ui/gallery/gallery";
import img1 from "@/assets/images/news/a.jpg";
import img2 from "@/assets/images/news/b.jpg";
import img3 from "@/assets/images/news/c.jpg";
import img4 from "@/assets/images/news/d.jpg";
import ContactFooter from "@/ui/contact";
import ArticleSection from "@/ui/articles/article-section";
import { ArticleProvider } from "@/context/article-context";
import PrimaryArticle from "@/ui/articles/primary-article";

export default function Home() {
  const images = [img1, img2, img3, img4];
  const alts = ["image 1", "image 2", "image 3", "image 4"];
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
