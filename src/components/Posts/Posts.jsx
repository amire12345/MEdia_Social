import React from 'react'
import './Posts.css'
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Post/Post'
import { useEffect } from 'react';
import { getTimelinePosts } from '../../actions/postAction';

const Posts = () => {

  const dispatch = useDispatch();
  const {user} = useSelector((state)=> state.authReducer.authData)
  const {Posts, loading} = useSelector((state)=> state.postReducer)


  useEffect(()=> {
    dispatch(getTimelinePosts(user._id))
  }, [])

  return (
    <div className="Posts">
      {Posts.map((post, id)=>{
        return <Post data={post} id={id} />
      })}
    </div>
  )
}

export default Posts