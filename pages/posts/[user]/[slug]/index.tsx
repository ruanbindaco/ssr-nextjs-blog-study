import PostDetailComponent from '../../../../src/posts/components/post-detail-component';
import { PostDetail } from '../../../../src/posts/models/post-detail';

type Props = {
    post: PostDetail,
    params:{
        slug: string;
        user: string;
    }
};
    
async function getPost(slug: string | string[] | undefined, user: string | string[] | undefined) {
    const postResponse = await fetch(
        `https://www.tabnews.com.br/api/v1/contents/${user}/${slug}`
    );
        const post = (await postResponse.json()) as PostDetail;

    if (!post) {
        return null;
    }
    return post;
}
  
export default function BlogPostDetailsPage({ post }: Props) {
    return post ? (
        <>
            <PostDetailComponent post={post} />
        </>
    ) : (
        <h3>Post não encontrado</h3>
    );
}

export const getStaticProps = async ({params}: Props) => {
    let post: PostDetail | {} | null = {};
    const { slug, user } = params;
    await getPost(slug, user).then((response) => {
      post = response;
    })
    return {
      props: { post }
    }
}

export const getStaticPaths = async () => {

    return {
        paths: [],
        fallback: 'blocking'
    }
}