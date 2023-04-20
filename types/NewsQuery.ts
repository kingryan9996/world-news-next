export const queryKeys = {
    news: ['news'] as const,
    newsById: (newsId: number) => ['news', newsId],
  };