import { useEffect, useState } from 'react'
import Head from 'next/head'

function PostDetail({ postId }) {
    const [postData, setPostData] = useState()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then((response) => response.json())
            .then((json) => setPostData(json))
    }, [])

    return <>
        <Head>
            <title>Comments on post&nbsp;{postId}</title>
            <meta name="description" content={`Information of post ${postId}.`} />
        </Head>
        <div className="single-post"><h1>Single Post</h1>
            <ul>{postData && postData.map(comment => <li key={comment.id}>{comment.body}</li>)}
            </ul>
        </div></>
}

export default PostDetail

export async function getServerSideProps(context) {
    return {
        props: { postId: context.query.id }, // will be passed to the page component as props
    }
}