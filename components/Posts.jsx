import React, { useState, useEffect } from 'react';
import { PageHeader } from 'antd';
import PostSnippet from './PostSnippet';
import api from '../mock_api';
import _ from 'lodash';
import db from '../firebase';
const Posts= (props) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {

    let userId = props?.user.uid ? props?.user.uid : props.uid

       db.collection('users').doc(userId).collection('posts')
            .onSnapshot(async posts => {
                let postsData = await posts.docs.map(post => {
                    let data = post.data();
                    let { id } = post;
            
                    
                    let payload = {
                        id,
                        ...data
                    }

                    return payload
                });
              setPosts(postsData)
                });   
    },[])

    return(
            <div className="post_container">

                        <div className="page_header_container">
                        <PageHeader
                                style={{
                                border: '1px solid rgb(235, 237, 240)',
                                }}
                        
                                title="Header Cuy"
                            
                    />
                    </div>

                <div className="article_container">
            
                   {
                       _.map(posts,(article, idx) =>{
                       
                        return(
                            <PostSnippet
                             key={idx} 
                             id={article.id} 
                             title={_.capitalize(article.title)} 
                             content={article.content.substring(1, 1500)} 
                             user={props.user}
                             uid={props.uid}
                             />
                        )
                       }                    
                       )
                   }
                </div>

            </div>

    )
}

export default Posts;