import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = async () => {
  const data = [
    {
      _id: "1",
      title: "Style",
      slug: "style",
      img: "/style.png",
    },
    {
      _id: "2",
      title: "Fashion",
      slug: "fashion",
      img: "/fashion.png",
    },
    {
      _id: "3",
      title: "Travel",
      slug: "travel",
      img: "/travel.png",
    },
    {
      _id: "4",
      title: "Food",
      slug: "food",
      img: "/food.png",
    },
    {
      _id: "5",
      title: "Culture",
      slug: "culture",
      img: "/culture.png",
    },
    {
      _id: "6",
      title: "Coding",
      slug: "coding",
      img: "/coding.png",
    },
  ];
    
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;