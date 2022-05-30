import React, { createContext, useState } from "react";
export const fit = createContext();
const ApiFit = (props) => {
  const [dataFit, setDataFit] = useState([
   {
            "source": {
            "id": null,
            "name": "indianexpress"
            },
            "author": "Lifestyle Desk",
            "title": "Losing weight or losing fat: What should you focus on?",
            "description": "According to an expert, losing fat is always more beneficial than losing weight",
            "url": "https://indianexpress.com/article/lifestyle/fitness/losing-weight-losing-fat-focus-weight-loss-fat-loss-7930056/",
            "urlToImage": "https://images.indianexpress.com/2022/05/GettyImages-weight-loss-fat-loss-1200.jpg",
            "publishedAt": "May 26, 2022 5:30:15 pm",
            "content": "Nutritionist Azra Khan answers this question on Instagram. In a video, she explains that if you lose weight, you lose fat, muscle weight, water weight, etc. “But if you are losing inches, you are losing pure fat,” she says."
            },
           {
            "source": {
            "id": "indianexpress",
            "name": "Indian Express"
            },
            "author": "Lifestyle Desk",
            "title": "Asanas and breathing exercises to enhance mood, boost energy levels",
            "description": "In yoga, we use movement and breath to release stuck energy along the spine and throughout the body, says an expert",
            "url": "https://indianexpress.com/article/lifestyle/fitness/tips-de-stress-yoga-asanas-health-wellbeing-7920629/",
            "urlToImage": "https://images.indianexpress.com/2022/04/GettyImages-yoga-breathing-1200.jpg",
            "publishedAt": "May 24, 2022 4:30:53 pm",
            "content": "Stress has become a part of life, but instead of living with it, we must find the tools with which to combat it. Yoga is one such tool that can deal with physical, emotional and mental issues caused by stress, and give you a better perspective of life."
            },
           {
            "source": {
            "id": null,
            "name": "indianexpress"
            },
            "author": "Lifestyle Desk",
            "title": "Malaika Arora demonstrates three yoga asanas to reduce belly fat; watch",
            "description": "Belly fat can be lost through consistent exercise and healthy food choices",
            "url": "https://indianexpress.com/article/lifestyle/fitness/malaika-arora-yoga-asanas-reduce-belly-fat-7901613/",
            "urlToImage": "https://images.indianexpress.com/2022/05/Malaika-Arora-1200.jpg",
            "publishedAt": "May 25, 2022 9:40:01 am",
            "content": "Malaika Arora’s Instagram account is one which will give you effective solutions for your fitness-related questions. Now, in a recent post, the actor and model shared some yoga poses, which can help with belly fat reduction."
            },
           {
            "source": {
            "id": null,
            "name": "indianexpress"
            },
            "author": "Lifestyle Desk",
            "title": "Should yoga be done on an empty stomach? Here’s what experts say",
            "description": "“No one will understand you or your body the way you do so make sure you listen to it, protect it, do good things for it and celebrate it,” they said.",
            "url": "https://indianexpress.com/article/lifestyle/fitness/yoga-empty-stomach-method-pooja-makhija-anshuka-7905689/",
            "urlToImage": "https://images.indianexpress.com/2022/04/GettyImages-yoga-1200.jpg",
            "publishedAt": "May 21, 2022 10:20:59 am",
            "content": "Yoga is now the preferred choice of many, to stay fit, active and agile. It helps in numerous ways, be it in improving flexibility, strength and posture, or reducing stress and providing a sense of calm. Nutrition and diet are an important part of fitness along with physical exercise. On that account, it becomes necessary to understand whether yoga should be done on an empty stomach or not."
            },
           {
            "source": {
            "id": null,
            "name": "indianexpress.com"
            },
            "author": "Lifestyle Desk",
            "title": "World Hypertension Day 2022: Five restorative yoga poses for high blood pressure",
            "description": "Holistic practices like yoga, meditation, and mindfulness, help handle stress in a productive and effective manner.",
            "url": "https://indianexpress.com/article/lifestyle/fitness/world-hypertension-day-2022-five-restorative-yoga-poses-high-blood-pressure-fitness-7902681/",
            "urlToImage": "https://images.indianexpress.com/2022/05/bloodpressureGetty_1200.jpg",
            "publishedAt": "May 17, 2022 10:00:55 am",
            "content": "An estimated 26 per cent of the world’s population or roughly 972 million people have hypertension; and this number is set to increase to 29 per cent by 2025, according to National Center for Biotechnology Information (NCBI)."
            },
           {
            "source": {
            "id": "timesofindia",
            "name": "India Times"
            },
            "author": "TNN",
            "title": "Yoga & Ayurveda will spur health tourism, growth: Uttar Pradesh CM Yogi Adityanath",
            "description": "Speaking at the inauguration of Patanjali Wellness’ integrated health centre for yoga, natural and ayurvedic medicine at Jamli village in Pauri Garhwal on...",
            "url": "https://timesofindia.indiatimes.com/city/lucknow/yoga-ayurveda-will-spurhealth-tourism-growth-cm/articleshow/91329164.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-91331055,imgsize-913521,width-400,resizemode-4/91331055.jpg",
            "publishedAt": "May 5, 2022, 07:00 IST",
            "content": "The CM also thanked Baba Ramdev and Acharya Balakrishnan, chairperson of Patanjali Ayurveda, for the development of Pokhri and said that one is finally able to see development in backward area “Earlier Pokhri was barren but now sandalwood trees are growing here. The products being grown here, at this height, are both herbal and organic,” he said."
            },
           {
            "source": {
            "id": "indianexpress",
            "name": "Indian Express"
            },
            "author": "Lifestyle Desk",
            "title": "Here an easy way to asses your exercise intensity without fitness trackers",
            "description": "The 'talk test' relies on understanding the effects of physical activity on your heart rate and breathing",
            "url": "https://indianexpress.com/article/lifestyle/fitness/heres-an-easy-way-to-track-exercise-intensity-without-any-fitness-trackers-7898105/",
            "urlToImage": "https://images.indianexpress.com/2022/05/WhatsApp-Image-2022-05-02-at-6.01.46-PM.jpeg",
            "publishedAt": "May 8, 2022 11:25:00 am",
            "content": "If you want to test the intensity of your workout and hit the physical activity requirement guidelines, then you can do so without the use of a fitness band, an app, or a software. The ‘talk test’ is the easiest tool available to everyone which relies on understanding the effects of physical activity on your heart rate and breathing."
            }
  ]);
  return (
    <div>
      <fit.Provider value={[dataFit, setDataFit]}>
        {props.children}
      </fit.Provider>
    </div>
  );
};
export default ApiFit;