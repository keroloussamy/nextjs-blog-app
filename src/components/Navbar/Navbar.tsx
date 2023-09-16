import Image from 'next/image'
import styles from './navbar.module.css'
import Link from 'next/link'
import AuthLinks from '../AuthLinks/AuthLinks'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>KeroBlog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

/* 
The code inside both ThemeToggle and AuthLinks uses hooks.
So we separated them in different components to let the Navbar be a server component. And both of them are client components.
*/