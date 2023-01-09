import PostDetailComponent from '../../../src/posts/components/post-detail-component';
import { PostDetail } from '../../../src/posts/models/post-detail';
import { Post } from '../../../src/posts/models/post';

type Props = {
  params: {
    slug: string;
    user: string;
  };
};

export async function generateStaticParams() {
  const postsResponse = await fetch(
    `https://www.tabnews.com.br/api/v1/contents`
  );
  let posts = (await postsResponse.json()) as Post[];

  const postsSlugs = posts
    .map((post) => ({ slug: post.slug }));
    
    return postsSlugs;
  }
  
  async function getPost(slug: string, user: string) {
    const postResponse = await fetch(
    `https://www.tabnews.com.br/api/v1/contents/FelipeBarso/${slug}`
    );
    const post = (await postResponse.json()) as PostDetail;
    
  if (!post) {
    return null;
  }
  return post;
}

export default async function BlogPostDetailsPage({ params }: Props) {
  const { slug, user } = params
  const post = await getPost(slug, user);


  return post ? (
    <PostDetailComponent post={post} />
  ) : (
    <h3>Post não encontrado</h3>
  );
}
