import React, { createContext, useState } from 'react'
export const home=createContext()
const Api = (props) => {

    const [data,setData]=useState([
    {
      "Title" : "BTS V aka Kim Taehyung-Blackpink's Jennie spotted on Jeju Island flight by anonymous airline crew member? Read report",
      "CategoryName"  : "Bollywood",
      "PublishedDate" : "May 26 2022",
      "ImageAsset"    : "https://st1.bollywoodlife.com/wp-content/uploads/2022/05/FotoJet-2022-05-24T162536.035-1.jpg?impolicy=Medium_Widthonly&w=800",
      "BlogContent"   : "BTS vocalist and Christmas Tree singer Kim Taehyung who is known as V has been in the news for his dating rumours with Blackpink rapper and superstar Jennie. The new broke out four days back when someone posted a video with four pictures of two people who looked a lot like Kim Taehyung and Blackpink's Jennie. Many people dismissed it as an edited pic but when YG Entertainment, the agency of Jennie said that they had nothing to say about the rumours, people became even more curious. Fans have been investigating their social media accounts and schedules to find out if there were any real chances that the two K-Pop icons indeed went together on this rumored trip to Jeju Island. "
  },
{
  "Title" : "Karan Johar 50th birthday party: Here's how the cool filmmaker will be styled for his big bash",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "May 25 2022",
  "ImageAsset"    : "https://st1.bollywoodlife.com/wp-content/uploads/2022/05/Karan_Johar_50th_Birthday_Party_Styling_Venue_Decor_Guest_List.jpg?impolicy=Medium_Widthonly&w=800",
  "BlogContent"   : "Karan Johar has apparently decided on all-red theme for his 50th birthday party and the decor is supposed to boast an extravagant set-like design, complete with a bountiful of red roses"
},
{
  "Title" : "Khatron Ke Khiladi 12: Did Pratik Sehajpal mock Tejasswi Prakash's outing on Rohit Shetty's show? Angry fans of the Naagin 6 actress school him on Twitter",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "May 26 2022",
  "ImageAsset"    : "https://st1.bollywoodlife.com/wp-content/uploads/2022/05/FotoJet-2022-05-26T100443.634.jpg?impolicy=Medium_Widthonly&w=800",
  "BlogContent"   : "Khatron Ke Khiladi 12: Tejasswi Prakash fans flay Pratik Sehajpal for allegedly making a mocking remark on the actress' stint on the stunt reality show"
},
{
  "Title" : "Kabhi Eid Kabhi Diwali: Shehnaaz Gill reconsidering decision of making Bollywood debut with Salman Khan film?",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "May 26 2022",
  "ImageAsset"    : "https://st1.bollywoodlife.com/wp-content/uploads/2022/05/shehnaaz.png?impolicy=Medium_Widthonly&w=800",
  "BlogContent"   : "Kabhi Eid Kabhi Diwali: Shehnaaz Gill is not very happy with the developments around the Salman Khan starrer and is planning to quit the film? Here's the truth."
},
{
  "Title" : "Malaika Arora's green neon blazer to Kareena Kapoor Khan's metallic dress: A look at the WORST dressed celebs at Karan Johar's 50th birthday party",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "Januaury 14 2022",
  "ImageAsset"    : "https://st1.bollywoodlife.com/wp-content/uploads/2022/05/FotoJet-2022-05-26T104424.209.jpg",
  "BlogContent"   : "From Malaika Arora, Kareena Kapoor Khan, Sara Ali Khan to other Bollywood celebs who failed to impress us with their style at Karan Johar's 50th birthday bash. Here is a list of worst dressed celebs at the party."
},
{
  "Title" : "Dhaakad box office collection: Kangana Ranaut's film joins Ranbir Kapoor's Bombay Velvet as one of Bollywood's biggest flops? Read report",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "May 26 2022",
  "ImageAsset"    : "https://st1.bollywoodlife.com/wp-content/uploads/2022/05/kangana-dhaakad.jpg?impolicy=Medium_Widthonly&w=800",
  "BlogContent"   : "Dhaakad box office collection: Kangana Ranaut's film is entered the records as one of Bollywood's biggest flops along with the likes of Ranbir Kapoor's Bombay Velvet and others"
},
{
  "Title" : "Taarak Mehta Ka Ooltah Chashmah: Dilip Joshi aka Jethalal's most expensive possessions will leave you zapped",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "May 26 2022",
  "ImageAsset"    : "https://st1.bollywoodlife.com/wp-content/uploads/2022/05/DILIP-JOSHI-22.png",
  "BlogContent"   : "Taarak Mehta Ka Ooltah Chashmah: Birthday boy Dilip Joshi has made a name for himself on Indian TV. Here is a look at his net worth"
},
{
  "Title" : "Neither Shah Rukh Khan, Salman Khan nor Ranbir Kapoor, Ranveer Singh, only Akshay Kumar can defeat South biggies at the box office?",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "May 26 2022",
  "ImageAsset"    : "https://st1.bollywoodlife.com/wp-content/uploads/2022/05/Thalapathy-Vijay-and-Jr-NTR.jpg",
  "BlogContent"   : "Thalapathy Vijay and Jr NTR are om the top of a list of most popular pan India male film stars. South stars are dominating and how."
}

    ])
  return (
    <div>
      <home.Provider value={[data,setData]}>
        {props.children }
      </home.Provider>
    </div>
  )
}

export default Api;