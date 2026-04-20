import { useContext, useEffect } from "react";
import { createPost, followUser, getFeed, likePost, unfollowUser, unlikePost } from "../services/post.api";
import { PostContext } from "../post.context";

export const usePost = () => {
    const context = useContext(PostContext)

    const { loading, setLoading, post, setPost, feed, setFeed, user, setUser } = context

    const handleGetFeed = async () => {
        setLoading(true)
        const data = await getFeed()
        setFeed(data.posts.reverse())
        setLoading(false)
    }

    const handleCreatePost = async function (imageFile, caption) {
        setLoading(true)
        const data = await createPost(imageFile, caption)
        setFeed([data.post, ...feed])
        setLoading(false)
    }

    const handleLike = async (post) => {
        setLoading(true)
        const data = await likePost(post)
        await handleGetFeed()
        setLoading(false)
    }
    const handleUnlike = async (post) => {
        setLoading(true)
        const data = await unlikePost(post)
        await handleGetFeed()
        setLoading(false)
    }
    const handleFollow = async (username) => {
        setLoading(true)
        await followUser(username)

        setFeed(prev =>
            prev.map(post =>
                post.user.username === username
                    ? {
                        ...post,
                        user: { ...post.user, isFollowed: true }
                    }
                    : post
            )
        )

        setLoading(false)
    }
    const handleUnFollow = async (username) => {
        setLoading(true)
        await unfollowUser(username)

        setFeed(prev =>
            prev.map(post =>
                post.user.username === username
                    ? {
                        ...post,
                        user: { ...post.user, isFollowed: false }
                    }
                    : post
            )
        )

        setLoading(false)
    }

    useEffect(() => {
        handleGetFeed()
    }, [])

    return { loading, feed, post, handleGetFeed, handleCreatePost, handleLike, handleUnlike, handleUnFollow, handleFollow }
}