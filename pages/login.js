import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/kuiz/signup.module.css'
import { TextField, Button } from '@material-ui/core'
import React, { Component } from 'react'
import axios from 'axios'
import bcrypt from 'bcryptjs'
import Swal from 'sweetalert2'
import { withIronSession } from "next-iron-session"



class Login extends Component{

	constructor(props){
		super(props)

		this.state = {
			email: '',
			password: ''
		}

	}

	changeHandler = e => {
		this.setState({ [e.target.name] : e.target.value })
	}

	submitHandler = async e => {
		e.preventDefault()
		const data = {
			email: this.state.email,
			password: this.state.password
		}

		await axios.post('http://localhost:8000/api/v1/blog/auth/login', data)
			.then(res => {

				localStorage.setItem('token', res.data.api_token);


				// session.save()
				Swal.fire(
					'Success',
					'Succesfully Login',
					'success'
				)
			}).catch(error => {
				Swal.fire(
					'Oppss, error',
					'Wrong email or password',
					'error'
				)
			})






	}

	render(){
		const { email, password } = this.state

		return(
			<div>
				<Head>
					<title>User Login</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>



				 <div className={styles.wrapper}>
					 	 <div className={styles.container}>
							 		<h1 className={styles.title}>Form Login User</h1>

								<form onSubmit={this.submitHandler}>
									<div className={styles.form}>
										<TextField
												id="email"
												label="Email"
												type="email"
												autoComplete="off"
												variant="outlined"
												name="email"
												value={email}
												onChange={this.changeHandler}
										/>
									<p></p>
										<TextField
												id="password"
												label="Password"
												type="password"
												autoComplete="current-password"
												variant="outlined"
												name="password"
												value={password}
												onChange={this.changeHandler}
										/>
									<span className={styles.span}></span>
									 <Link href="/signup"><a>Dont have an Account?</a></Link>
								 <p></p>
										<Button variant="contained" color="primary" type="submit">
												Login
										</Button>
									</div>
								</form>

						 </div>
				 </div>
			 </div>
		)
	}
}


export default Login
