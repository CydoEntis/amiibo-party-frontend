import React from "react";
import Footer from "../components/Footer/Footer";
import AuthForm from "../components/Forms/AuthForm";
import Navbar from "../components/Navigation/Navbar";

import classes from "./Auth.module.css";

const Auth = () => {
	return (
		<>
			<Navbar />
			<main className={classes.main}>
				<div className={classes.info}>
					<h3>This is a demo app</h3>
					<h4>Demo account credentials.</h4>
					<p>
						Email: <strong>test@test.com</strong>
					</p>
					<p>
						Password:<strong> Test123!</strong>
					</p>
				</div>
				<AuthForm />
			</main>
			<Footer />
		</>
	);
};

export default Auth;
