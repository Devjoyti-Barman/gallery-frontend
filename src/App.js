import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';

// importing components

import CreateBlog from './components/CreateBlog/createBlog';
import ShowBlog from './components/showBlog/showBlog';
import MainHeader from './components/mainheader/mainheader';
import Signup from './components/signup/signup';
import Signin from './components/signin/signin';
import ForgotPassword from './components/forgotPassword/forgotPassword';
import ChangePassword from './components/changePassword/changePassword';
import Confirmation from './components/confirmation/confirmation';
import Blog from './components/blog/blog';
import SavedBlog from './components/savedBlog/savedBlog';
import TestComponent from './components/testingComponent/testComponent';

// importing redux action

import { fetchUser } from './redux';

function App() {
    
	const dispatch=useDispatch();
	const users=useSelector((state)=>state.user);
	useEffect(()=>{
		dispatch(fetchUser());
	},[]);

		return (
	    <div>
				
			<main> 
    		    <Router>
				    <MainHeader/> 
    		    	<Routes>
					    
						<Route path='signup' element={<Signup/>} />
						<Route path='signin' element={<Signin/> } />
						<Route path='saved'>
							<Route path='blog' element={<SavedBlog/>} />
						</Route>
						<Route path='test' element={<TestComponent/>} />
						<Route path='forgot-password' element={<ForgotPassword/>} />
						<Route path='search'>
							<Route path='blog' element={<Blog/>} />
						</Route>
						<Route path='confirmation/:tokenID' element={<Confirmation/>}/>
						<Route path='change'>
							<Route path='password/:tokenID' element={<ChangePassword/>} />
						</Route>
						<Route path='create'>
							<Route path='blog' element={<CreateBlog/>}/>
						</Route>
						<Route path='show'>
							<Route path='blog'>
							    <Route path=':blogID' element={<ShowBlog/> } />
							</Route>
						</Route>
    		    	</Routes>
    		    </Router>
			</main>
		</div>
		);
}



export default App;