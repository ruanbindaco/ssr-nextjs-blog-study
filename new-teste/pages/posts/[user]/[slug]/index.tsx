import PostDetailComponent from '../../../../src/posts/components/post-detail-component';
import { PostDetail } from '../../../../src/posts/models/post-detail';
import { useRouter } from 'next/router'

type Props = {
    post: PostDetail[],
    params:{
        slug: string;
        user: string;
    }
};
    
async function getPost(slug: string | string[] | undefined, user: string | string[] | undefined) {
    const postResponse = await fetch(
        `https://www.tabnews.com.br/api/v1/contents/posts/${user}/${slug}`
    );
        const post = (await postResponse.json()) as PostDetail;

    if (!post) {
        return null;
    }
    return post;
}
  
export default function BlogPostDetailsPage({ post }: Props) {
    return post ? (
        <> aaaa </>
    ) : (
        <h3>Post não encontrado</h3>
    );
}

export const getStaticProps = async () => {
    let post: PostDetail | {} = {};
    await getPost(slug, user).then((response) => {
      post = response;
    })
    return {
      props: { post }
    }
  }
