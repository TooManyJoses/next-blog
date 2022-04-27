import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';

const mock_posts = [
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    text: 'Next.js is a React framework that is bound to ease your life as a React developer by abstracting away the common and redundant tasks (such as routing) into relatively simpler and powerful APIs. That way, you can focus on writing your apps instead of reinventing the wheel.',
    date: '2022-04-27',
    slug: 'getting-started-with-nextjs'
  },
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    text: 'Next.js is a React framework that is bound to ease your life as a React developer by abstracting away the common and redundant tasks (such as routing) into relatively simpler and powerful APIs. That way, you can focus on writing your apps instead of reinventing the wheel.',
    date: '2022-04-27',
    slug: 'getting-started-with-nextjs2'
  },
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    text: 'Next.js is a React framework that is bound to ease your life as a React developer by abstracting away the common and redundant tasks (such as routing) into relatively simpler and powerful APIs. That way, you can focus on writing your apps instead of reinventing the wheel.',
    date: '2022-04-27',
    slug: 'getting-started-with-nextjs3'
  },
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    text: 'Next.js is a React framework that is bound to ease your life as a React developer by abstracting away the common and redundant tasks (such as routing) into relatively simpler and powerful APIs. That way, you can focus on writing your apps instead of reinventing the wheel.',
    date: '2022-04-27',
    slug: 'getting-started-with-nextjs4'
  },
]

function HomePage() {
  return(
    <>
    <Hero />
    <FeaturedPosts posts={mock_posts} />
    </>
  )
}

export default HomePage;
