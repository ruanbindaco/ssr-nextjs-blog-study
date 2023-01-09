
// type Props = {
//   allPosts: Post[]
// }

async function fetchPosts() {
  // const postsResponse = await fetch(
  //   'https://www.tabnews.com.br/api/v1/contents/FelipeBarso'
  // );
  // let posts = (await postsResponse.json()) as Post[];

  // return posts ? posts : [];

  console.log(" teste ssr")
}

export default function Home() {
  console.log(" teste web")
  return (
    <>
      <h1>teste</h1>      
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = fetchPosts();


  return {
    props: { },
  }
}
