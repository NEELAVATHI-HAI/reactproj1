import React, { createContext, useState } from "react";
export const holly = createContext();
const ApiHolly = (props) => {
  const [dataHolly, setDataHolly] = useState([
    {
      "source": {
      "id": null,
      "name": "hindustantimes.com"
      },
      "author": "HT Entertainment",
      "title": "Jimmy Kimmel’s teary-eyed monologue on Texas shooting cut short in state",
      "description": "Talk show host Jimmy Kimmel fought back tears in a monologue on Texas shooting where he criticised cowardly leaders. However, his monologue was cut in Texas by the local broadcaster.",
      "url": "https://www.hindustantimes.com/entertainment/hollywood/jimmy-kimmel-criticises-cowardly-leaders-in-teary-eyed-monologue-on-texas-shooting-broadcaster-cuts-telecast-in-texas-101653565956483.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/05/26/550x309/Jimmy_Kimmel_1653566510535_1653566518118.PNG",
      "publishedAt": "May 26, 2022 05:53 PM IST",
      "content": "On Tuesday, the United States witnessed yet another tragic episode of mass shooting after a gunman opened fire in an elementary school in Texas. The incident has seen angry reactions about gun control and mass shootings in the US from celebs and common folk alike."
      },
      {
      "source": {
      "id": null,
      "name": "hindustimes"
      },
      "author": "HT Entertainment Desk",
      "title": "Marvel fans feel Thor 4 will give MCU its first nude scene with Chris Hemsworth",
      "description": "Thor Love and Thunder trailer has fans excited as it features a partially-censored nude scene of Chris Hemsworth. Fans are now wondering if the scene would be uncensored in the theatres.",
      "url": "https://www.hindustantimes.com/entertainment/hollywood/after-chris-hemsworth-tease-in-trailer-marvel-fans-wonder-if-thor-love-and-thunder-will-give-mcu-its-first-nude-scene-101653563275215.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/05/26/550x309/Thor_4_1653563426469_1653563440288.jpg",
      "publishedAt": "May 26, 2022 04:52 PM IST",
      "content": "The second trailer for Marvel’s upcoming film Thor: Love and Thunder gave viewers a ‘better look’ at the God of Thunder."
      },
      {
      "source": {
      "id": "hindustantimes",
      "name": "hindustantimes"
      },
      "author": "Sugandha Rawal",
      "title": "Jake Gyllenhaal: Acting is not real life in any form, you walk into a scene with all of your life experiences",
      "description": "Hollywood actor Jake Gyllenhaal took a conscious decision to stay in New York, but he admits his soul is in Los Angeles",
      "url": "https://www.hindustantimes.com/entertainment/hollywood/jake-gyllenhaal-acting-is-not-real-life-in-any-form-you-walk-into-a-scene-with-all-of-your-life-experiences-101653550528289.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/05/26/550x309/f031a914-ce04-11ec-a18e-026abbb3bb32_1653550527222.jpg",
      "publishedAt": "May 26, 2022 01:05 PM IST",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "indianexpress"
      },
      "author": null,
      "title": "Kristen Stewart on body horror, Cronenberg and Cannes",
      "description": "Kristen Stewart reflected on how the themes of Crimes of the Future encapsulate and dovetail with her own artistic journey.",
      "url": "https://indianexpress.com/article/entertainment/hollywood/kristen-stewart-on-body-horror-cronenberg-and-cannes-7936703/",
      "urlToImage": "https://images.indianexpress.com/2022/05/Kristen-Stewart-ap-1200by667.jpeg",
      "publishedAt": "May 26, 2022 2:26:13 pm",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "indianexpress"
      },
      "author": "Rohan Naahar",
      "title": "Tron Legacy: Before Top Gun Maverick, director Joseph Kosinski made one of the most audacious big-budget debuts of all time",
      "description": "Director Joseph Kosinski was handpicked by Tom Cruise to helm the long-delayed Top Gun: Maverick, and now is an ideal time to revisit Kosinski's under-appreciated cult hit Tron: Legacy, with which he made one of the most spectacular big-budget debuts in recent memory.",
      "url": "https://indianexpress.com/article/entertainment/hollywood/tron-legacy-top-gun-maverick-director-joseph-kosinski-audacious-debut-film-7935233/",
      "urlToImage": "https://images.indianexpress.com/2022/05/tron-legacy-pcs.png",
      "publishedAt": "May 26, 2022 8:03:13 am",
      "content": "Early in his career, Cruise appeared to be checking off directors on his wish-list with the fevered mania of a playboy carving notches on his bedpost. He worked with the likes of Cameron Crowe and Ridley Scott, Martin Scorsese and Stanley Kubrick. Oliver Stone, Sydney Pollack, Steven Spielberg, Brian DePalma, Paul Thomas Anderson… It’s really quite impressive."
      },
      {
      "source": {
      "id": null,
      "name": "indianexpress"
      },
      "author": "Entertainment Desk",
      "title": "‘Amber Heard didn’t have chemistry with Jason Momoa in Aquaman’: DC chief denies her role was reduced because of Johnny Depp trial",
      "description": "DC Films chief Walter Hamada testified during the Amber Heard vs Johnny Depp trial that her role in Aquaman and the Lost Kingdom wasn't reduced because of her legal troubles, but because she lacked chemistry with Jason Momoa.",
      "url": "https://indianexpress.com/article/entertainment/hollywood/amber-heard-didnt-have-chemistry-with-jason-momoa-in-aquaman-walter-hamada-7934725/",
      "urlToImage": "https://images.indianexpress.com/2021/06/aquaman-2-1200.jpeg",
      "publishedAt": "May 25, 2022 9:27:53 am",
      "content": "because of her ongoing legal troubles with ex-husband Johnny Depp. Hamada said that the decision was made because Heard didn’t have chemistry with star Jason Momoa."
      }
      
  ]);
  return (
    <div>
      <holly.Provider value={[dataHolly, setDataHolly]}>
        {props.children}
      </holly.Provider>
    </div>
  );
};
export default ApiHolly;