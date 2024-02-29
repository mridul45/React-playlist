import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
// import Post from './components/Post'
import PostList from './components/PostList'
import PostListProvider from './store/post-list-store'

function App() {
  const [count, setCount] = useState(0)
  const [selectedTab, setSelectedTab] = useState("Home")

  return (
    <PostListProvider>
    <div classNameName="app-container">
      <Header />
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === 'Home' ? <PostList /> : <CreatePost />}
      <div classNameName="content">
        <Footer />
      </div>
    </div>
    </PostListProvider>
  )
}

export default App
