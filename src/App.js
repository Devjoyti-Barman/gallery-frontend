import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import CreateBlog from './components/CreateBlog/createBlog';
import ShowBlog from './components/showBlog/showBlog';
import GoogleAuth from './components/googleAuth/googleAuth';
import { useEffect,useState } from 'react';
import axios from 'axios';

function App() {
    
    const [user,setUser]=useState(null);

	useEffect(()=>{

		async function getUserDetails(){
			try {
				const response=await  fetch("http://localhost:3000/auth/success", {
					method: "GET",
					credentials: "include",
					headers: {
					  Accept: "application/json",
					  "Content-Type": "application/json",
					  "Access-Control-Allow-Credentials": true,
					},
				});
				const data=await response.json();
			    console.log(data);
			} catch (error) {
				console.log('error');
				console.log(error);
			}
			
		}

		getUserDetails();
	},[])

		return (
		<Router>
			<Routes> 
				<Route path="auth" element={<GoogleAuth/>}/> 
				<Route path="create">
				   <Route path="blog" element={<CreateBlog/>} /> 
				</Route>
                <Route path="show">
					<Route path="blog/:blogno" element={<ShowBlog/>} />
				</Route> 
			</Routes>
		</Router>
		);
}

function Auth() {
	return(
		<div>
			<a href="http://localhost:3000/auth/google" > Sign in </a>
		</div>
	)
}

export default App;