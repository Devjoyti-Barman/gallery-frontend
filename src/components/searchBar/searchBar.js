import './searchBar.css';
import SearchIcon from '@material-ui/icons/Search';
function SearchBar(props){
    
    const {HandleSearchInput}=props;

    return(
        <div className='search-container'>        
            <div className='search'>
                <input 
                    type='search' 
                    className='search-bar' 
                    placeholder='Enter your query'
                    onChange={(e)=>HandleSearchInput(e)}
                />
                <SearchIcon
                  color='primary'
                  className='search-icon'
                />
            </div>
        </div>

    )
}

export default SearchBar;