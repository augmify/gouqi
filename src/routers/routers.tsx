import * as React from 'react'
import {
  View
} from 'react-native'

import {Scene, Router, Actions} from 'react-native-router-flux'
import Home from '../containers/home'
import Login from '../containers/login'
import Search from '../containers/search'
import PlayList from '../containers/playlist/detail'
import Comment from '../containers/playlist/comment'
import UIContainer from '../containers/UIContainer'

const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='home' component={Home} hideNavBar initial/>
    <Scene key='login' component={Login} title='登录' />
    <Scene key='playlist' component={PlayList} title='' />
    <Scene key='search' component={Search} direction='vertical' hideNavBar panHandlers={null}/>
    <Scene key='comment' component={Comment} title='评论'/>
  </Scene>
)

const Routers = () => (
  <View style={{flex: 1}}>
      <Router scenes={scenes}/>
      <UIContainer />
  </View>
)

export default Routers