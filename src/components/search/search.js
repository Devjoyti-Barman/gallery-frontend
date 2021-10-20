import axios from 'axios';
import Card from '../card/card';
import { useEffect, useState } from 'react';
import {useParams,useHistory,useRouteMatch } from 'react-router-dom';
import './search.css';


function Search(){
    
    const [Image,setImage]=useState(null);
      
    let history=useHistory();

    let match=useRouteMatch('/search/:q');



    useEffect(()=>{

        if(match.isExact===false  ){
            return window.location.replace('/error');
        }

        console.log(match);
        
        const API=`http://localhost:5000/api/search-image/${match.params.q}`;

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
                        { [...Image] }                         
                    </div> 
                )  
            } 
       </div>
    )
}

export default Search;