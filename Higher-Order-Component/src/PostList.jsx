import React from 'react'

function PostList({data}) {
  return (
    <div>
      <ul>
        {data.map( post => (
            <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
