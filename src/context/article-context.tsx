'use client';
import { newsData } from '@/ui/articles/data/data-articles';
import { Article, RestrictOption } from '@/ui/articles/types';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface ArticleContextProps {
  currentArticle: Article;
  setCurrentArticle: Dispatch<SetStateAction<Article>>;
  searchOption: RestrictOption | null;
  setSearchOption: Dispatch<SetStateAction<RestrictOption | null>>;
  year: number | null;
  setYear: Dispatch<SetStateAction<number | null>>;
}

export const ArticleContext = createContext<ArticleContextProps | undefined>(undefined);

export const ArticleProvider = ({ children }: { children: ReactNode }) => {
  const [currentArticle, setCurrentArticle] = useState<Article>(newsData[0]);
  const [searchOption, setSearchOption] = useState<RestrictOption | null>(null);
  const [year, setYear] = useState<number | null>(null);

  const contextValues = {
    currentArticle,
    setCurrentArticle,
    searchOption,
    setSearchOption,
    year,
    setYear,
  };
  return <ArticleContext.Provider value={contextValues}>{children}</ArticleContext.Provider>;
};
