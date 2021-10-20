import axios from 'axios';
import Card from '../card/card';
import { useEffect, useState } from 'react';
import {useParams,useHistory,useRouteMatch } from 'react-router-dom';
import './home.css';


function Home(){
    
    const [Image,setImage]=useState(null);
      
    let history=useHistory();

    let match=useRouteMatch('/page/:id');

    function HandleClick(inc){
        
        let pageNo=parseInt(inc)+parseInt(match.params.id);
        window.location.replace(`/page/${ pageNo}`);
    }

    useEffect(()=>{

        if(match.isExact===false || isNaN(match.params.id) || match.params.id<1 ){
            return window.location.replace('/error');
        }

        //console.log(match);
        
        const API=`http://localhost:5000/api/image/page/${Math.max(1, match.params.id) }`;

        async function getImages(){
            const {data}=await axios.get(API);
            let temp=[];
            let i=0;
            while(i<data.length){
                
                let hold=[];
                
                for(let j=0;(i+j)<data.length && j<3;j++){
                    hold.push(
                            <Card 
                               ImgName={data[j+i].ImgName}  
                               ImgDetails={data[j+i].ImgDetails} 
                               imageSrc={data[j+i].img} 
                               imageID={data[j+i].id}
                               key={j+i}
                            />
                    )
                }
                
                temp.push(
                    <div className="card-container" key={i}>
                        {[...hold]}
                    </div>
                );
                i+=3;            
            }

            setImage(temp);
        }

        getImages();
    },[]);


    return (
       <div>
            { Image===null ?   <div></div> : 
                (   <div> 
                        <div className="pagination-container">  
                            { [...Image] } 
                            <div className="btn-container"> 
                                <button className="prev-btn" onClick={()=>HandleClick(-1)} > Prev Page</button>    
                                <button className="next-btn" onClick={()=>HandleClick(1)} > Next Page</button>
                            </div> 
                        </div> 
                        
                    </div> 
                )  
            } 
       </div>
    )
}

export default Home;