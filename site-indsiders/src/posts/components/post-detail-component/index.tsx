import { PostDetail } from '../../models/post-detail';

type Props = {
  post: PostDetail;
};

export default function PostDetailComponent({ post }: Props) {
  return (
    <>
      <h1>
        Titulo: {post.title}
      </h1>
      <h1>
        Slug: {post.slug}
      </h1>
      <div>
        <p>{post.body}</p>
        <a href="/blog">Ver outros posts</a>
      </div>
    </>
  );
}
