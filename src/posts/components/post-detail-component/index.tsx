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
      <h2>
        Autor: {post.owner_username}
      </h2>
      <div>
        <p>{post.body}</p>
        <a href="/">Ver outros posts</a>
      </div>
    </>
  );
}
