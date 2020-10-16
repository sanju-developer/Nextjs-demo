import { useEffect, useState } from 'react'
import { useRouter,useLocation } from 'next/router'

function PostDetail() {
    const router = useRouter()
    const [postData, setPostData] = useState()
    useEffect(() => {
        console.log(router)
        fetch(`https://jsonplaceholder.typicode.com/posts/${router.query.id}/comments`)
            .then((response) => response.json())
            .then((json) => setPostData(json))
    }, [])

    return <div className="single-post"><h1>Single Post</h1>
        <ul>{postData && postData.map(comment => <li key={comment.id}>{comment.body}</li>)}
        </ul>
    </div>
}

export default PostDetail