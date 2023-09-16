import CardList from "@/components/CardList/CardList";
import CategoryList from "@/components/CategoryList/CategoryList";
import Featured from "@/components/Featured/Featured";
import Menu from "@/components/Menu/Menu";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
