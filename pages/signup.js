import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/kuiz/signup.module.css'
import { TextField, Button } from '@material-ui/core'
import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
class Signup extends Component{

	constructor(props){
		super(props)

		this.state = {
			name: '',
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
			name: this.state.name,
			email: this.state.email,
			password: this.state.password
		}

		await axios.post('http://localhost:8000/api/v1/blog/auth/signup', data)
			.then(
				res => {
					Swal.fire(
						'Success',
						'Data succesfully created!',
						'success'
					)
				}
			).catch(
				err => {
					Swal.fire(
						'Opps, error',
						'Something went wrong, please try again later',
						'error'
					)
				}
			)





	}

	render(){
		const { name, email, password } = this.state

		return(
			<div>
				<Head>
					<title>User Signup</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>



				 <div className={styles.wrapper}>
					 	 <div className={styles.container}>
							 		<h1 className={styles.title}>Form Signup User</h1>

								<form onSubmit={this.submitHandler}>
									<div className={styles.form}>
											<TextField
													id="name"
													label="Username"
													type="text"
													autoComplete="off"
													variant="outlined"
													name="name"
													value={name}
													onChange={this.changeHandler}
											/>
										<p></p>
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
									 <Link href="/login"><a>Already have an Account?</a></Link>
								 <p></p>
										<Button variant="contained" color="primary" type="submit">
												Signup
										</Button>
									</div>
								</form>

						 </div>
				 </div>
			 </div>
		)
	}
}


export default Signup
