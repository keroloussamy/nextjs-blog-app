interface Category {
  _id: string;
  slug: string;
  title: string;
  img?: string;
  Posts: Post[];
}

interface Post {
  _id: string;
  createdAt: Date;
  slug: string;
  title: string;
  desc: string;
  img?: string;
  views: number;
  catSlug: string;
  cat: Category;
  userEmail: string;
  user: User;
  comments: Comment[];
}

interface Comment {
  _id: string;
  createdAt: Date;
  desc: string;
  userEmail: string;
  user: User;
  postSlug: string;
  post: Post;
}

interface User {
  _id: string;
  name: string;
  email: string;
  image?: string;
  posts: Post[];
  comments: Comment[];
}