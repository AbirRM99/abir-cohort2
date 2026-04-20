import React, { useEffect } from 'react'
import "../style/feed.scss"
import Post from '../components/Post'
import { usePost } from '../hook/usePost'
import Nav from '../../../shared/components/Nav'


const Feed = () => {
    const { feed, handleGetFeed, loading, handleLike, handleUnlike, handleFollow, handleUnFollow } = usePost()

    useEffect(() => {
        handleGetFeed()
    }, [])

    if (loading || !feed) {
        return (<main><h1>feed is loading...</h1></main>)
    }

    console.log(feed)
    return (
        <main className='feed-page'>
            <Nav />
            <div className="feed">
                <div className="posts">
                    {feed.map(post => {
                        return <Post user={post.user} post={post} loading={loading} handleLike={handleLike} handleUnlike={handleUnlike} handleFollow={handleFollow} handleUnFollow={handleUnFollow} />
                    })}
                </div>
            </div>
        </main>
    )
}

export default Feed