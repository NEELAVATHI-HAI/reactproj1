import React,{ useContext } from 'react'
import {cric} from './ApiCric'
const Cricket = () => {
    const [dataCric, setDataCric] = useContext(cric);
    return (
      <>
      <div className="contentPage">
        
        {dataCric.map((item) => {
          return (
            <a href={item.url}>
              <div className="card">
                <img src={item.urlToImage} alt="FitnessImg" />
                <p>{item.title}</p>
                <hr />
                <p>{item.description}</p>
              <p>{item.author}{item.publishedAt}</p>
              </div>
              </a>
          );
        })}
        </div>
        <div className="right">
          
        </div>
      </>
    )
  }
  
  export default Cricket