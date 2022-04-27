import PostList from '../posts/post-list';
import styles from './featured-posts.module.css';

function FeaturedPosts({ posts }) {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostList posts={posts} />
    </section>
  )
}

export default FeaturedPosts;
