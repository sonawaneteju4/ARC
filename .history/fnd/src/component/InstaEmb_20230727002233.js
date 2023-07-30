import React from 'react'
import DOMPurify from 'dom';


const InstaEmb = () => {
  return (
    <blockquote
    className="instagram-media"
    data-instgrm-captioned
    data-instgrm-permalink="https://www.instagram.com/p/CmQbVQUqBLj/?utm_source=ig_embed&amp;utm_campaign=loading"
    data-instgrm-version="14"
    style={{
      background: '#FFF',
      border: '0',
      borderRadius: '3px',
      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
      margin: '1px',
      maxWidth: '540px',
      minWidth: '326px',
      padding: '0',
      width: '99.375%',
      WebkitWidth: 'calc(100% - 2px)',
      width: 'calc(100% - 2px)',
    }}
  >
    <div style={{ padding: '16px' }}>
      {/* Instagram embed code here */}
      {/* It's important to sanitize and trust the source of the embed code */}
    </div>
  </blockquote>
  )
}

export default InstaEmb