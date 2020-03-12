import React, { useState } from 'react';
import Posts from './Posts';
import Post from './Post'
import UpdatePost from './UpdatePost'
import CreatePost from './CreatePost'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { Router,Link  } from "@reach/router"
import { Menu, Icon } from 'antd';
import { auth } from '../firebase'

const { SubMenu } = Menu;

function App(props){

  const [user, setUser] = useState(false);

  auth.onAuthStateChanged(function(user) {
    if (user) {
      console.log(user)
      setUser(user)
    } else {
      console.log('user have to logged in')
    }
  });

  const onSignOut = () => {
    auth.signOut().then(function(){
      console.log('user logout')
      setUser(false)
    }).catch(function(error){

    })
  }

    return(
        <div className="app_container">

            <div className="app_main_navigation">
        <Menu mode="horizontal">

        <Menu.Item key="posts">
        <Icon type="read" />
        <Link to ="/posts"  style={{float:"right"}}>Posts</Link>
        </Menu.Item>
        {user &&
          
          <Menu.Item key="create_post">
          <Icon type="highlight" />
          <Link to ="/create_post" style={{float:"right"}}>Create Post!</Link>
        </Menu.Item>

        }

       
        {!user
          ?
          <Link to="/sign_in" style={{float:"right"}}>Sign In</Link>
          :
          <a onClick={onSignOut} style={{float:"right"}}>Sign Out</a>
        }

         
    

      </Menu>
          </div>

        <Router>
        <SignUp path="sign_up"  />
        <SignIn path="sign_in" default />
        <Posts path="posts" user={user} />
        <Post path="post/:id"  user={user} />
        <CreatePost path="create_post"  user={user} />
        <UpdatePost path="update_post/:id" user={user} />
        </Router>
        </div>
      )
}

export default App;