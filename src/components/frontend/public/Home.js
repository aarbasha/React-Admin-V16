import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import "./style/style.css"
import GlobalAnimation from '../../../Animation/GlobalAnimation'

const Home = () => {

  const [posts, setPosts] = useState([])
  const [loding, setLodin] = useState(false)


  const getValueScroll = window.screenTop
  console.log(getValueScroll);



  const getData = async () => {
    await axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data)
        setLodin(false)
      })
  }

  useEffect(() => {
    setLodin(true)

    setTimeout(() => {
      getData()
    }, 2000)

  }, [])



  return (
    <GlobalAnimation>
    <div className="wrapper home">
      <main className="">

        <h1 className='text-center'>Home</h1>
        <hr />
        <ul className='row w-100 justify-content-between'>

          {
            posts.map(post => (
              <div className="card" key={post.id} style={{ width: '18rem', minHeight: "250px" }}>
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title text-danger">{post.title}</h5>
                  <hr />
                  <p className="card-text">{post.body}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>

            ))
          }
          {
            loding ? (
              <div className='spical-spinner'>
                <div
                  className="spinner-border text-primary"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>

            ) : null
          }



        </ul>


      </main>
    </div>
    </GlobalAnimation>

  )
}

export default Home