import { ParsedUrlQuery } from 'querystring';
import CardList from "@/components/CardList/CardList";
import CategoryList from "@/components/CategoryList/CategoryList";
import Featured from "@/components/Featured/Featured";
import Menu from "@/components/Menu/Menu";
import styles from "./page.module.css";

export default function Home({ searchParams }: {searchParams: ParsedUrlQuery;}) {
  const page = parseInt(searchParams.page as string) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
