import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '../../utils/formating';
import styles from './post-item.module.css';

function PostItem({ post }) {
  const { title, image, date, text, slug } = post;

  const formattedDate = formatDate(date);

  return (
    <li className={styles.post}>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className={styles.image}>
            <Image
              src={`/images/posts/${slug}/${image}`}
              alt={title}
              width="300"
              height="200"
              layout="responsive"
            />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{text}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
