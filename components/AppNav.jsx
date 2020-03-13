import React from 'react';
import { Link  } from "@reach/router"
import { Menu, Icon } from 'antd';


const AppNav = (props) => {

    const onSignOut = () => {
        auth.signOut().then(function(){
          console.log('user logout')
          setUser(false)
        }).catch(function(error){
    
        })
      }



    return(
    <div className="app_main_navigation">
    <Menu mode="horizontal">

    <Menu.Item key="posts">
    <Icon type="read" />
    <Link to ={`/blogs/${props.user.uid}/posts`}  style={{float:"right"}}>Posts</Link>
    </Menu.Item>
    {props.user &&
      
      <Menu.Item key="create_post">
      <Icon type="highlight" />
      <Link to ="/create_post" style={{float:"right"}}>Create Post!</Link>
    </Menu.Item>

    }

   
    {!props.user
      ?
      <Link to="/sign_in" style={{float:"right"}}>Sign In</Link>
      :
      <a onClick={props.onSignOut} style={{float:"right"}}>Sign Out</a>
    }

     


  </Menu>
      </div>
    )
}


export default AppNav;