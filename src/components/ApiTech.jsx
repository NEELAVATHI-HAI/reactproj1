import React, { createContext, useState } from "react";
export const tech = createContext();
const ApiTech = (props) => {
  const [dataTech, setDataTech] = useState([
    {
      "source": {
      "id": null,
      "name": "computerworld"
      },
      "author": "JR Raphael",
      "title": "Android 13's dueling identities",
      "description": "What's Android 13 actually all about? It's an unusually complicated question — with a surprisingly simple answer.",
      "url": "https://www.computerworld.com/article/3661433/android-13-identities.html",
      "urlToImage": "https://images.idgesg.net/images/article/2022/05/android-13-100928311-large.jpg?auto=webp&quality=85,70",
      "publishedAt": "25 MAY 2022 15:30 IST",
      "content": "When Android 13 officially arrives this summer, we're bound to see a bunch of befuddled head scratching."
      },
      {
      "source": {
      "id": null,
      "name": "Jon Gold"
      },
      "author": null,
      "title": "Microsoft security vulnerabilities drop after five-year rise",
      "description": "While elevated privilege attacks remain a critical security concern when using Microsoft products, a new report says that the raw number of vulnerabilities is dropping.",
      "url": "https://www.csoonline.com/article/3662069/microsoft-security-vulnerabilities-drop-after-five-year-rise.html",
      "urlToImage": "https://images.techhive.com/images/article/2017/03/p1240491-19-100715058-large.jpg?auto=webp&quality=85,70",
      "publishedAt": "26 MAY 2022 1:15 IST",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Computer World"
      },
      "author": "Matthew Finnegan",
      "title": "Microsoft looks to make Teams screen-sharing more interactive with Live Share",
      "description": "The Live Share SDK, announced at Microsoft’s Build event this week, lets developers turn any third-party application into a “multiplayer” Teams app.",
      "url": "https://www.computerworld.com/article/3661632/microsoft-looks-to-make-teams-screen-sharing-more-interactive-with-live-share.html",
      "urlToImage": "https://images.techhive.com/images/article/2016/11/introducing-microsoft-teams.mp4.00_00_31_15.still001-100691127-large.jpg?auto=webp&quality=85,70",
      "publishedAt": "25 MAY 2022 18:06 IST",
      "content": "Looking to make screen-sharing more interactive so colleagues can collaborate using third-party apps directly in Teams video meetings, Microsoft this week unveiled Live Share, a Teams SDK extension that’s now in preview. It lets developers customize applications so users can co-edit and co-create while on a call together."
      },
      {
      "source": {
      "id": null,
      "name": "Computer World"
      },
      "author": "Jon Gold",
      "title": "Adobe tightens Microsoft integration for document management, validation",
      "description": "Teams, Power Automate, and more will all receive more direct integration with Adobe’s document management services.",
      "url": "https://www.computerworld.com/article/3661673/adobe-tightens-microsoft-integration-for-document-management-validation.html",
      "urlToImage": "https://images.idgesg.net/images/idge/imported/imageapi/2021/10/15/15/adobe_acrobat_dc_logo_2020-sm-100907215-large.jpg?auto=webp&quality=85,70",
      "publishedAt": "25 MAY 2022 1:56 IST",
      "content": "Adobe is bringing broader integration of its document management, tracking and validation services into Microsoft’s product ecosystem, including tighter connections to Teams and the Purview information protection framework."
      },
      {
      "source": {
      "id": null,
      "name": "Computer World"
      },
      "author": "Praston Gralla",
      "title": "16 ways to speed up Windows 10",
      "description": "If you want to optimize Windows 10, take a few minutes to try out these tips to speed up your PC and make it less prone to performance and system issues.",
      "url": "https://www.computerworld.com/article/3029168/16-ways-to-speed-up-windows-10.html",
      "urlToImage": "https://images.techhive.com/images/article/2016/02/speed-up-fast-quick-5-100643069-large.jpg?auto=webp&quality=85,70",
      "publishedAt": "21 JANUARY 2022 22:03 IST",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Computer World"
      },
      "author": "Jonny Evans",
      "title": "Apple boosts diversity with its latest accessibility tools",
      "description": "Apple’s latest accessibility features gives us a sense of new ways in which tech and humans can augment each other.",
      "url": "https://www.computerworld.com/article/3660515/apple-boosts-diversity-with-its-latest-accessibility-tools.html",
      "urlToImage": "https://images.idgesg.net/images/article/2022/05/apple-accessibility-os-features-2022-hero-100928108-large.jpg?auto=webp&quality=85,70",
      "publishedAt": "17 MAY 2022 21:39 IST",
      "content": "What can humans do alone? What can computers do? And what can humans and computers do when they work together? Apple’s latest accessibility features gives us a sense of new ways in which tech and humans can augment each other."
      },
      {
      "source": {
      "id": null,
      "name": "computerworld.com"
      },
      "author": "By Charlotte Trueman",
      "title": "Zoom pushes further into the contact center with Solvvy acquisition",
      "description": "After its failed attempt to purchase Five9 last year, Zoom is once again looking to bolster its nascent contact center software proposition.",
      "url": "https://www.computerworld.com/article/3660510/zoom-pushes-further-into-the-contact-center-with-solvvy-acquisition.html",
      "urlToImage": "https://images.idgesg.net/images/idge/imported/imageapi/2022/01/20/16/istock-1316936288-100916818-large.jpg?auto=webp&quality=85,70",
      "publishedAt": "13 MAY 2022 16:16 IST",
      "content": "Video conferencing giant Zoom has announced it is acquiring Solvvy, a California-based startup which specializes in conversational AI and automation solutions for the contact center."
      }
  ]);
  return (
    <div>
      <tech.Provider value={[dataTech, setDataTech]}>
        {props.children}
      </tech.Provider>
    </div>
  );
};
export default ApiTech;