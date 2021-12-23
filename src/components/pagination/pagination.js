import { Button } from "@material-ui/core";
import './pagination.css';
import {useLocation,useNavigate} from 'react-router-dom';

function Pagination(props){
    
    const {search}=useLocation();
    const query= new URLSearchParams(search);
    const navigate=useNavigate();

    const {page,updatePage}=props;
    
    const getUpdateSearchParams=(eventKey,eventValue)=>{
          
        let searchQuery='?';
        let found=false;

        for( const [key,value] of query ){
            
            if( searchQuery==='?' ){

                if( key===eventKey ) {
                    searchQuery+=key+'='+eventValue;
                    found=true;
                }
                else
                   searchQuery+=key+'='+value;
            }else{

                if( key===eventKey ) {
                    searchQuery+='&'+key+'='+eventValue;
                    found=true;
                }
                else
                   searchQuery+='&'+key+'='+value;

            }
        }
        
        if( found===false && eventValue ){

            if( searchQuery==='?' )searchQuery+=eventKey+'='+eventValue;
            else
              searchQuery+='&'+eventKey+'='+eventValue;
        }

        return searchQuery;
    }

    const HandleClick=(add)=>{
        
        add=parseInt(add);
        const pageNO=query.get('pageNO')===null ? 2 : Math.max( parseInt( query.get('pageNO') )+add,1);

        const searchParams=getUpdateSearchParams('pageNO',pageNO);
        navigate(`/search/blog${searchParams}`);
        
    }

    const HandleJump=()=>{
        const searchParams=getUpdateSearchParams('pageNO',page);
        navigate(`/search/blog${searchParams}`);

    }


    return(
        <div>
            <div className='pagination-container'>

                <Button 
                    className='pagination-btn' 
                    variant="contained" 
                    color='primary' 
                    onClick={()=>HandleClick(-1)}
                >Previous</Button>

                <div className='pagination-jump'>
                    <span className='pagination-span' >page</span>
                    <div>
                       <input type='text' className='pagination-input' value={page} onChange={(event)=>updatePage(event)}/>
                       <Button className='pagination-jump-btn' variant='contained'color='primary' onClick={()=>HandleJump()}>go</Button>
                    </div>
                    <span className='pagination-span'>of 123</span>
                </div>
                <Button className='pagination-btn' variant="contained" color='primary' onClick={()=>HandleClick(1)}>Next</Button>
                
            </div>
        </div>
    )
}

export default Pagination;