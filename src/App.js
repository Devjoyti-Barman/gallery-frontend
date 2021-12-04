import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { useEffect,useState } from 'react';

import CreateBlog from './components/CreateBlog/createBlog';
import ShowBlog from './components/showBlog/showBlog';
import GoogleAuth from './components/googleAuth/googleAuth';
import MainHeader from './components/mainheader/mainheader';
import Signup from './components/signup/signup';
import Signin from './components/signin/signin';

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
	    <div>
			<MainHeader/>	
			<main> 
    		    <Router>
    		    	<Routes> 
						<Route path='/signup' element={<Signup/>} />
						<Route path='/signin' element={<Signin/> } />
    		    		{/* <Route path='/' element={<MainHeader/>}>
        
    		    		</Route> */}
    		    		{/* <Route path="auth" element={<GoogleAuth/>}/> 
    		    		<Route path="create">
    		    		   <Route path="blog" element={<CreateBlog/>} /> 
    		    		</Route>
                        <Route path="show">
    		    			<Route path="blog/:blogno" element={<ShowBlog/>} />
    		    		</Route> 
    		    		<Route path='' element={<Header/>}/> */}
    		    	</Routes>
    		    </Router>
			</main>
		</div>
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