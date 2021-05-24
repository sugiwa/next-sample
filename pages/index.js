import Link from 'next/link';

const Home = ({ blogs }) => {
  return (
    <div>
      <h1>記事一覧</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link href={`blogs/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home

// データを取得
export const getStaticProps = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://sampleblg.microcms.io/api/v1/blog', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      blogs: data.contents,
    },
  };
};