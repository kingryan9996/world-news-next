export interface INews {
    id: number;
    isCompleted?: boolean;
    news?: string;
  }
  
  export type Optional<T> = {
    [P in keyof T]?: T[P];
  };