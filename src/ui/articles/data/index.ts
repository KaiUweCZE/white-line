import { articles2024 } from './articles/2024';
import { articles2023 } from './articles/2023';
import { Article } from './types';

export const newsData: Article[] = [...articles2024, ...articles2023];
