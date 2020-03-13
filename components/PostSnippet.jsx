import React from 'react'
import { Card } from 'antd'
import { Link } from "@reach/router"
import db from '../firebase'

const PostSnippet = (props) => {

    const onDeletePost = () =>{
    let postRef = db
                  .collection('users').doc(props.user.uid)
                  .collection('posts').doc(props.id)

    postRef.delete()
    }

    return(
  
        <div className="post_snippet_container">
        <Card
        style={{ marginTop: 16 }}
        type="inner"
        title={props.title}
        extra={
          <div>
          <Link  to={`/blogs/${props.uid}/post/${props.id}`} style={{ marginRight: '10px'}}>Read Full Article</Link>
          
          {props.user &&
            <div className="post_edit_links" style={{float:'right'}}>
            <a onClick={onDeletePost} style={{marginRight:'15px'}}>Delete Article</a>

            <Link to={`/update_post/${props.id}`}>Edit Article</Link>
            </div>
          }
        
          </div>
        }
      >
     <div className="article_content">
  
     {
      props.content.split('\n').map((paragraph, idx) => {
        return <p key={idx}>{paragraph}</p>;
    })
     }
   
     </div>

      </Card>
        </div>
    )
}

export default PostSnippet;