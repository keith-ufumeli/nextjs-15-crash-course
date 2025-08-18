export interface Author {
  _id: string;
  _type: "author";
  id?: number;
  name: string;
  username?: string;
  email?: string;
  image?: string;
  bio?: string;
}

export interface Startup {
  _id: string;
  _type: "startup";
  _createdAt: string;
  title: string;
  slug?: { current: string };
  author?: Author;
  views: number;
  description: string;
  category: string;
  image?: string;
  pitch?: string;
}
