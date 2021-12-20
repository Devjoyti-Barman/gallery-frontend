import './searchBar.css';
import SearchIcon from '@material-ui/icons/Search';
function SearchBar(){
      
    return(
        <div className='search-container'>        
            <div className='search'>
                <input type='search' className='search-bar' placeholder='Enter your query'/>
                <SearchIcon
                  color='primary'
                  className='search-icon'
                />
            </div>
        </div>

    )
}

export default SearchBar;