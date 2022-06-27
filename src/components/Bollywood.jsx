import React, { useContext } from "react";
import { home } from "./Api";
const Bollywood = () => {
  const [data] = useContext(home);

  return (
    <>
    <div className="contentPage">
      
      {data.map((item) => {
        return (
          <a href={item.url}>
            <div className="bcard">
              <img src={item.ImageAsset} alt="BollyImg" />
              <p>{item.Title}</p>
              <p>{item.BlogContent}</p>
              <p>{item.PublishedDate}</p>
              <hr />
            </div></a>
        );
      })}
      </div>
      <div className="right">
        
      </div>
    </>
  );
};

export default Bollywood;





