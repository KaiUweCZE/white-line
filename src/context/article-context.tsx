'use client';
import { newsData } from '@/ui/articles/data/data-articles';
import { Article, RestrictOption } from '@/ui/articles/types';
import { StaticImageData } from 'next/image';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface ArticleContextProps {
  currentArticle: Article;
  setCurrentArticle: Dispatch<SetStateAction<Article>>;
  searchOption: RestrictOption | null;
  setSearchOption: Dispatch<SetStateAction<RestrictOption | null>>;
  year: number | null;
  setYear: Dispatch<SetStateAction<number | null>>;
  placeholder: StaticImageData;
  setPlaceholder: Dispatch<SetStateAction<StaticImageData>>;
  isSwitching: { article: boolean; gallery: boolean };
  setIsSwitching: Dispatch<SetStateAction<{ article: boolean; gallery: boolean }>>;
}

export const ArticleContext = createContext<ArticleContextProps | undefined>(undefined);

export const ArticleProvider = ({ children }: { children: ReactNode }) => {
  const [currentArticle, setCurrentArticle] = useState<Article>(newsData[0]);
  const [searchOption, setSearchOption] = useState<RestrictOption | null>(null);
  const [year, setYear] = useState<number | null>(null);
  const [placeholder, setPlaceholder] = useState<StaticImageData>(newsData[0].images[0]);
  const [isSwitching, setIsSwitching] = useState({
    article: false,
    gallery: false,
  });

  const contextValues = {
    currentArticle,
    setCurrentArticle,
    searchOption,
    setSearchOption,
    year,
    setYear,
    placeholder,
    setPlaceholder,
    isSwitching,
    setIsSwitching,
  };
  return <ArticleContext.Provider value={contextValues}>{children}</ArticleContext.Provider>;
};
