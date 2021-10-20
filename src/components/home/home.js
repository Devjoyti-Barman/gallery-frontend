import axios from 'axios';
import Card from '../card/card';
import { useEffect, useState } from 'react';
import './home.css';


function Home(){
    
    const [Image,setImage]=useState(null);

    useEffect(()=>{
        const API="http://localhost:5000/api/image/page/1"
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

            console.log([...temp])
            setImage(temp);
        }

        getImages();
    },[]);


    return (
       <div>
            { Image===null ?   <div> </div> : [...Image]  } 
       </div>
    )
}

export default Home;