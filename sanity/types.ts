export interface Author {
  _id: string;
  name: string;
  image?: string;
}

export interface Startup {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  views: number;
  author?: Author;
} 