import React, {useState} from 'react';
import MovieInfo from './MovieInfo';

const Card = ({movie, index}) => {

    const [isShown, setIsShown] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handler = () => {
        setIsActive(!isActive)
    }
    
    return ( 
        <>
        <div 
            className="card"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            {!isShown && (<video 
                src={movie.thumbnail} 
                type="video/mp4" 
                className="video" 
                // controls  
            >
            </video>)}

            {isShown && (
               <> 
                <video 
                    src={movie.thumbnail} 
                    type="video/mp4" 
                    className="video" 
                    // controls 
                    autoPlay={true} 
                    loop
                >
                </video>
                
                <div className="info-box">
                    <p>{movie.title}</p>
                    <p>TIME: {Math.floor(movie.duration/60)}:{((movie.duration%60) <10)?'0'+(movie.duration%60):(movie.duration%60)} H</p>
                </div>
                <button className="info-box-button" onClick={handler}>info</button>
               </>
                )}
               
        </div>
        {isActive ?<MovieInfo onClick={handler} movie={movie}/>:null}
        </>
     );
}
 
export default Card;