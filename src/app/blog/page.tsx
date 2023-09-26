import CardList from "@/components/CardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/Menu/Menu";
import { ParsedUrlQuery } from "querystring";

const BlogPage = ({ searchParams }: {searchParams: ParsedUrlQuery}) => {
  const page = parseInt(searchParams.page as string) || 1;
  const cat = searchParams.cat as string;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat}/>
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;