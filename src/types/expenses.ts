export type Expenses<T = number> = {
  id?: T;
  title: string;
  date: string;
  value: number;
  description: string;
};
