import PostsListItem from '../src/posts/components/post-list-item';
import { Post } from '../src/posts/models/post'

type Props = {
  allPosts: Post[]
}

async function fetchPosts() {
  const postsResponse = await fetch(
    'https://www.tabnews.com.br/api/v1/contents'
  );
  let posts = (await postsResponse.json()) as Post[];

  posts = posts
    .filter((post) => !post['parent_id'])
    .map((post) => ({
      ...post,
    }));

  return posts ? posts : [];
}

export default function index({allPosts}: Props) { 
  return (
    <article>
        <h1>
          Blog
        </h1>
      <div>
        {allPosts?.length > 0 && (
          <ul aria-label="Posts">
            {allPosts?.map((post, index) => (
              <li key={index}>
                <PostsListItem
                  post={post}
                />
                <a href={`/posts/${post.owner_username}/${post.slug}`}>Saiba Mais</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export const getStaticProps = async () => {
  let allPosts: Post[] = [];
  await fetchPosts().then((response) => {
    allPosts = response;
  })
  return {
    props: {allPosts}
  }
}