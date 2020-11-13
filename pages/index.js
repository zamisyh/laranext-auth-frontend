import React from 'react'
import Head from 'next/head'
import styles from '../styles/kuiz/Home.module.css'
import { Button, TextField } from '@material-ui/core'


class Home extends React.Component {


	static async getInitialProps(ctx) {
    const res = await fetch('http://localhost:8000/api/v1/blog/users/1')
    const json = await res.json()
    return { 
    	name: json.name,
    	email: json.email
    }
  }

  render() {
    return <div>
    	<TextField
          id="username"
          label="Username"
          type="text"
          autoComplete="current-username"
          variant="outlined"
        />
    </div>
  }
}

export default Home