import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Layout from '../../components/layout/layout'

export default function PostList({ postlist,href }) {
    const router = useRouter()

    const getPostDetail = postId => {
      console.log(postId,router)
      router.push(`posts/comments/${postId}`)
    }

    return <>
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>Post list</h1>
            <Link href="/">
                <a>Back to home</a>
            </Link>
            {postlist.map(post => 
                <div className="post" key={post.id}>
                    <h3>{post.id}</h3>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                    <button onClick={() => getPostDetail(post.id)}>Post detail</button>
                </div>
            )}
        </Layout></>
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const jsonRes = await res.json();
    const response = await jsonRes;
    return { props: { postlist: response.splice(0, 10) } }
}