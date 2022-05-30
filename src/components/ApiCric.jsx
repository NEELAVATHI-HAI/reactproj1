import React, { createContext, useState } from "react";
export const cric = createContext();
const ApiCric = (props) => {
  const [dataCric, setDataCric] = useState([
    
    {
    "source": {
    "id": null,
    "name": "Cricbuzz"
    },
    "author": null,
    "title": "Bangladesh stutter after SL take big lead",
    "description": "The start of the third session brought some respite for the hosts with Dinesh Chandimal smashing a pretty full Ebadot Hossain delivery straight to extra cover, to end a 199-run stand with Angelo Mathews",
    "url": "https://www.cricbuzz.com/cricket-news/122393/bangladesh-stutter-after-sl-take-big-lead",
    "urlToImage": "https://www.cricbuzz.com/a/img/v1/595x396/i1/c234937/sri-lanka-reduced-bangladesh-t.jpg",
    "publishedAt": "May 26, 2022, 06:16 PM",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "CricBuzz"
    },
    "author": "CricBuzz",
    "title": "SL lead nears hundred after Mathews, Chandimal tons",
    "description": "Angelo Mathews and Dinesh Chandimal hit hundreds in another dominating session for Sri Lanka, who went to Tea on Day 4 in Dhaka at 459/5, having accrued a lead of 94.",
    "url": "https://www.cricbuzz.com/cricket-news/122392/sl-lead-nears-hundred-after-mathews-chandimal-tons",
    "urlToImage": "https://www.cricbuzz.com/a/img/v1/595x396/i1/c234934/mathews-and-chandimal-put-on-a.jpg",
    "publishedAt": "May 26, 2022, 02:41 PM",
    "content": "Angelo Mathews and Dinesh Chandimal hit hundreds in another dominating session for Sri Lanka, who went to Tea on Day 4 in Dhaka at 459/5, having accrued a lead of 94."
    },
    {
    "source": {
    "id": null,
    "name": "CricBuzz"
    },
    "author": "CricBuzz",
    "title": "'I want to be in those situations' - Harshal on bowling at the death",
    "description": "Incidentally, Patidar had compiled only 71 runs in IPL 2021. He subsequently remained unsold in the IPL auction.",
    "url": "https://www.cricbuzz.com/cricket-news/122390/i-want-to-be-in-those-situations-harshal-patel-on-bowling-at-the-death",
    "urlToImage": "https://www.cricbuzz.com/a/img/v1/595x396/i1/c234929/harshal-finished-with-figures.jpg",
    "publishedAt": "May 26, 2022, 08:23 AM",
    "content": "Incidentally, Patidar had compiled only 71 runs in IPL 2021. He subsequently remained unsold in the IPL auction."
    },
    {
    "source": {
    "id": null,
    "name": "Cricbuzz"
    },
    "author": null,
    "title": "Behind the scenes, Deepak Hooda undergoes batting transformation | Cricbuzz.com - Cricbuzz - Cricbuzz",
    "description": "Batting at 3/4 this season, Deepak Hooda has been amongst the best performers for Lucknow Super Giants in their maiden season",
    "url": "https://www.cricbuzz.com/cricket-news/122376/behind-the-scenes-deepak-hooda-undergoes-batting-transformation-cricbuzzcom",
    "urlToImage": "//m.cricbuzz.com/a/img/v1/600x400/i1/c234833/hooda-has-scored-over-400-runs-this-season-for-lsg.jpg",
    "publishedAt": "2022-05-25T09:16:04Z",
    "content": "The year 2021 was not the best of years for Deepak Hooda. Early in January, Hooda got into a verbal altercation with Baroda captain Krunal Pandya, which led to his suspension from domestic cricket fo… [+10565 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CricBuzz"
    },
    "author": null,
    "title": "An outstanding partnership between Harry Brook and skipper Joe Root gave Yorkshire the perfect start to their T20 Blast campaign on Wednesday (May 25). Chasing 173, Yorkshire appeared to be in a bit of trouble in the tournament opener when Dawid Malan departed in the 11th over with his side still needing 85 runs.",
    "description": "Virender Sehwag Bets on RCB’s Virat Kohli coming good against LSG in Eliminator match of IPL 2022.",
    "url": "https://www.cricbuzz.com/cricket-news/122389/t20-blast-harry-brook-joe-root-give-yorkshire-the-perfect-start",
    "urlToImage": "https://www.cricbuzz.com/a/img/v1/595x396/i1/c234928/brook-smashed-60-off-just-27-d.jpg",
    "publishedAt": "May 26, 2022, 10:48 AM",
    "content": "An outstanding partnership between Harry Brook and skipper Joe Root gave Yorkshire the perfect start to their T20 Blast campaign on Wednesday (May 25). Chasing 173, Yorkshire appeared to be in a bit of trouble in the tournament opener when Dawid Malan departed in the 11th over with his side still needing 85 runs."
    },
    {
    "source": {
    "id": null,
    "name": "CricBuzz"
    },
    "author": "CricBuzz",
    "title": "Amy Satterthwaite announces retirement from international cricket",
    "description": "New Zealand Women's most-capped cricketer, Amy Satterthwaite, has announced her retirement from international cricket on Thursday (May 26). New Zealand Cricket confirmed the development after Satterthwaite was not offered a central contract for the 2022-23 season.",
    "url": "https://www.cricbuzz.com/cricket-news/122388/amy-satterthwaite-announces-retirement-from-international-cricket",
    "urlToImage": "https://www.cricbuzz.com/a/img/v1/595x396/i1/c234926/satterthwaite-played-145-odis.jpg",
    "publishedAt": "2022-05-25T08:58:06Z",
    "content": "New Zealand Women's most-capped cricketer, Amy Satterthwaite, has announced her retirement from international cricket on Thursday (May 26). New Zealand Cricket confirmed the development after Satterthwaite was not offered a central contract for the 2022-23 season."
    },
    
]);
return (
  <div>
    <cric.Provider value={[dataCric, setDataCric]}>
      {props.children}
    </cric.Provider>
  </div>
);
};
export default ApiCric;