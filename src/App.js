import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import CreateBlog from './components/CreateBlog/createBlog';
import ShowBlog from './components/showBlog/showBlog';

function App() {

		return (
		<Router>
			<Routes> 
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

export default App;