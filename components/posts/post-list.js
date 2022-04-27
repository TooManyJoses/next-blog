import PostItem from './post-item';
import styles from './post-list.module.css';

function PostList({ posts }) {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostList;
