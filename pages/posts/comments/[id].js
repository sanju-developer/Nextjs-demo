import { useEffect, useState } from 'react'
import { useRouter, useLocation } from 'next/router'

function PostDetail({ postlist }) {
    const router = useRouter()
    // const [postData, setPostData] = useState([])
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`)
    //         .then((response) => response.json())
    //         .then((json) => setPostData(json))
    // }, [])

    return <div className="single-post"><h1>Single Post</h1>
        <ul>{postlist && postlist.length !== 0 ? postlist.map(comment => <li key={comment.id}>{comment.body}</li>) : <span>Loading...</span>}
        </ul>
    </div>
}

export default PostDetail

// export async function getServerSideProps(context) {
//     return {
//         props: { postId: context.query.id }, // will be passed to the page component as props
//     }
// }

export async function getStaticPaths(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const jsonRes = await res.json();
    const response = await jsonRes.splice(0, 10);
    const paths = response.map((post) => ({
        params: { id: post.id.toString() },
    }))
    console.log(paths, '1111111111111111', context)

    return {
        paths,
        fallback: true // See the "fallback" section below
    };
}

export async function getStaticProps({ params }) {
    console.log(params, '2222222222222')

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const jsonRes = await res.json();
    const response = await jsonRes;

    let commentsResponse = []
    if (params && params.id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
        .then((response) => response.json())
        .then((json) => commentsResponse = json)
    }

    return { props: { postlist: response.splice(0, 10), commentsResponse: commentsResponse } }
}
