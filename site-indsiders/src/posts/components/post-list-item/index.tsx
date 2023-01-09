import Link from 'next/link';
import { Post } from '../../models/post';

type Props = {
  post: Post;
};

export default function PostsListItem({
  post,
}: Props) {
  return (
    <>
      <Link
        href={`/blog/${post.slug}`}
      >
          <h1>
              Titulo: {post.title}
          </h1>
      </Link>
      <h3>
        Slug: {post.slug}
      </h3>
      <h3>
        User: {post.owner_username}
      </h3>
    </>
  );
}
