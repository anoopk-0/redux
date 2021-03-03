import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/posts/postActions';

const PostsContainer = () => {

    const { loading, data, error } = useSelector(state => state.posts);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    if (error) return <h1>{error}</h1>

    return (
        <div>
            {loading ? <h1>loading..........</h1> : <div>

                {
                    data.map(item => <ul>
                        <li key={item.id}>{item.name}</li>
                    </ul>)
                }
            </div>}
        </div>
    );
}

export default PostsContainer;
