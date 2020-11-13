import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
import { withIronSession, session } from "next-iron-session"


class Home extends Component{

  state = {}

  componentDidMount() {

    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('api_token')
      }
    }

    axios.get('http://localhost:8000/api/v1/blog/users', config)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render(){
    return(
      <div>
        <p>Homepage</p>
      </div>
    )
  }
}

export default Home
