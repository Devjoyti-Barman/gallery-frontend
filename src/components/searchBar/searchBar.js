import './searchBar.css';
import SearchIcon from '@material-ui/icons/Search';
function SearchBar(props){
    
    const {HandleSearchInput,HandleSearchClick}=props;

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
                  onClick={(e)=>HandleSearchClick('q')}
                />
            </div>
        </div>

    )
}

export default SearchBar;