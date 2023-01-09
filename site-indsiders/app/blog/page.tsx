import PostsListItem from '../../src/posts/components/post-list-item';
import { Post } from '../../src/posts/models/post';

type Props = {
  allPosts: Post[]
}

async function fetchPosts() {
  const postsResponse = await fetch(
    'https://www.tabnews.com.br/api/v1/contents/FelipeBarso'
  );
  let posts = (await postsResponse.json()) as Post[];

  return posts ? posts : [];
}

export default function BlogPage({allPosts} : Props) {  
  return (
    <article>
      <header>
        <h1>
          Blog
        </h1>
      </header>

      {allPosts?.length > 0 && (
        <ul aria-label="Posts">
          {allPosts?.map((post, index) => (
            <li key={index}>
              <PostsListItem
                post={post}
              />
              <a href={`/blog/${post.slug}`}>Saiba Mais</a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export const getStaticProps = async () => {
  const allPosts = fetchPosts();

  console.log("teste")

  return {
    props: { allPosts },
  }
}