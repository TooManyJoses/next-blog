import Image from 'next/image';
import styles from './hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image src="/images/site/profile_picture.JPG" alt="profile picture" width="300" height="300" />
      </div>
      <h1>Hi Im Jose</h1>
      <p>Blog posting is added in here</p>
    </section>
  );
}

export default Hero;
