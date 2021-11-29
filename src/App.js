import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import CreateBlog from './components/CreateBlog/createBlog';
function App() {

		return (
		<Router>
			<Routes> 
				<Route path="/create-blog" element={<CreateBlog/>}/>

			</Routes>
		</Router>
		);
}

export default App;