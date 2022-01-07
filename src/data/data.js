import {BsFacebook , BsWhatsapp , BsLinkedin } from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';
import {BsFillTelephoneFill,BsFillLaptopFill,BsCodeSlash} from 'react-icons/bs';
import {BiSupport} from'react-icons/bi';
import {MdTouchApp} from 'react-icons/md';
import {GrLocation} from 'react-icons/gr';
import {FaMobile,FaLaptopCode} from 'react-icons/fa';
// Work Images
import medadaa  from '../images/work/medadaa.png';
import tafawq  from '../images/work/tafawq.png';
import elm  from '../images/work/3lm.png';
import nitg  from '../images/work/nitg.png';

import luxestate  from '../images/work/luxestate.png';
import hmdb  from '../images/work/hmdb.png';
import htmlcss1  from '../images/work/htmlcss1.png';
import htmlcsstwo  from '../images/work/Html-Css2.png';
import weather  from '../images/work/weather.png';
import bridegroom  from '../images/work/bride&groom.png';
import elnady  from '../images/work/shop-basketball.png';
import portf21  from '../images/work/portf21.png';
import portf20  from '../images/work/Hussein-sPortfolio.png';
import githubprof from '../images/work/githubprof.png';
import newyear from '../images/work/newyear.png';
import todoJs from '../images/work/Todo.png';
import DrawingApp from '../images/work/DrawingApp.png';
// skills logos
import html from '../images/skills/html.png'
import css from '../images/skills/css.png'
import js from '../images/skills/js.png'
import php from '../images/skills/php.png'
import react from '../images/skills/react.png'
import bs from '../images/skills/bs.svg'
import mysql from '../images/skills/mysql.png'

export const meData =
[
    {
        id:0,
        description:'"I’m Hussein Alaa, 22 years old Graduated from Faculty of commerce Business information systems (bis) - Helwan universty I’m a front end developer aiming to be a fullstack developer Well-organised person, problem solver, Interested in the entire frontend spectrum and working on ambitious projects with positive people. You can read more about my biography, experience, skills, education and much more in my resume attached below."',
        social : [
            {
                id:0,
                icon: <BsFacebook />,
                link :'https://www.facebook.com/hussein.alaa.1272/',
                target:'_blank',
            },
            {
                id:1,
                icon: <SiGmail/>,
                link :'mailto:hussein.alaa12199@gmail.com',
                target:'_blank',

            },
            {
                id:2,
                icon: <BsWhatsapp />,
                link :'https://wa.me/201150370370',
                target:'_blank',
            },
            {
                id:3,
                icon: <BsLinkedin />,
                link :'https://www.linkedin.com/in/hussein-alaa-4511861b0/',
                target:'_blank',
            },
        ]
    }
]

export const contactData = [
    {
        id:0,
        icon: <BsFillTelephoneFill />,
        text : ' +201150370370',
    },
    {
        id:1,
        icon: <SiGmail/>,
        text : ' hussein.alaa12199@gmail.com',
    },
    {
        id:2,
        icon: <GrLocation />,
        text : ' Faisal,Giza - Egypt',
    }
]

export const servicesData = [
    {
        id:0,
        icon:<MdTouchApp />,
        text:"Retouch",
        duration:500
    },
    {
        id:2,
        icon:<FaLaptopCode />,
        text:"Web Idea",
        duration:1000
    },
    {
        id:3,
        icon:<BiSupport />,
        text:"Support",
        duration:1500
    },
    {
        id:4,
        icon:<BsCodeSlash />,
        text:"Clean Code",
        duration:2000
    },
    {
        id:5,
        icon:<FaMobile />,
        text:"Responsive Design",
        duration:2500
    },
    {
        id:6,
        icon:<BsFillLaptopFill />,
        text:"Web Development",
        duration:3000
    },
]

export const skillsData = [
  
    {
        id:0,
        tite: "html",
        img : html,
        progress : "95",

    },
    {
        id:1,
        tite: "css",
        img : css,
        progress : "95",

    },
    {
        id:2,
        tite: "javascript",
        img : js,
        progress : "85",

    },
    {
        id:3,
        tite: "php",
        img : php,
        progress : "80",


    },
    {
        id:4,
        tite: "mysql",
        img : mysql,
        progress : "80",
       

    },
    {
        id:5,
        tite: "Bootstrap",
        img : bs,
        progress : "95",

    },
    {
        id:6,
        tite: "react",
        img : react,
        progress : "70",

    },
   
]

export const workData = [
    {
        id:0,
        title:"Medadaa",
        image:medadaa,
        description:"Medadaa is a Web App to communicate informally with others, find people, and share similar interests. Allows users to directly connect with one another through groups, sections, and networks.",
        link:"https://www.medadaa.com",
        skills:[
            {
                id:0,
                title:"html"
            },
            {
                id:1,
                title:"css"
            },
            {
                id:2,
                title:"javascript"
            },
            {
                id:3,
                title:"bootstrap"
            },
            {
                id:4,
                title:"php"
            },
            {
                id:5,
                title:"mysql"
            },
            {
                id:6,
                title:"jquery"
            },
            {
                id:7,
                title:"Ajax"
            },
        ]
    },
    {
        id:1,
        title:"3lm Academy",
        image:elm,
        description:"The 3lm platform is the first educational platform in the Arab world that seeks to provide educational and training services approved by the strongest places and institutions for all age groups and in various fields, University or post-university education.",
        link:"https://3lm.academy/",
        skills:[
            {
                id:0,
                title:"html"
            },
            {
                id:1,
                title:"css"
            },
            {
                id:2,
                title:"javascript"
            },
            {
                id:3,
                title:"bootstrap"
            },
            {
                id:4,
                title:"php"
            },
            {
                id:5,
                title:"mysql"
            },
            {
                id:6,
                title:"LMS Moodle"
            },
            {
                id:7,
                title:"Jquery"
            },
            {
                id:8,
                title:"ajax"
            },
        ]
    },
    {
        id:2,
        title:"NITG",
        image:nitg,
        description:"The National Company for Software Engineering and Information The National Company for Software Engineering and Information, N.I.T works in the global market to provide e-learning and training, services and solutions for helping students, disables and employees to improve their performance through learning and technology.",
        link:"https://nitg-eg.com/",
        skills:[
            {
                id:0,
                title:"html"
            },
            {
                id:1,
                title:"css"
            },
            {
                id:2,
                title:"javascript"
            },
            {
                id:3,
                title:"bootstrap"
            },
            {
                id:4,
                title:"php"
            },
            {
                id:5,
                title:"mysql"
            },
            {
                id:6,
                title:"Wordpress"
            },
            {
                id:7,
                title:"Jquery"
            },
            
        ]
    },
    {
        id:3,
        title:"ACADEMY OF EXCELLENCE",
        image:tafawq,
        description:"Academy of Excellence is an E-learning web app that seeks to provide educational and training services . ",
        link:"https://academy.nitg-eg.com/",
        skills:[
            {
                id:0,
                title:"html"
            },
            {
                id:1,
                title:"Javascript"
            },
            {
                id:2,
                title:"css"
            },
            {
                id:3,
                title:"bootstrap"
            },
          
        ]
    },
    {
        id:4,
        title:"Luxestate",
        image:luxestate,
        description:"luxestate is a simple responsive web app ",
        link:"https://www.medadaa.com",
        skills:[
            {
                id:0,
                title:"html"
            },
            {
                id:1,
                title:"Javascript"
            },
            {
                id:2,
                title:"css"
            },
            {
                id:3,
                title:"bootstrap"
            },
          
        ]
    },
    {
        id:5,
        title:"HMDB",
        image:hmdb,
        description:"Hmdb is a Movie Library Site which gets movies from The Api directly to the site with its Data and rate, using vanilla JS.",
        link:"https://husseinalaa15.github.io/HMDB/",
        skills:[
            {
                id:0,
                title:"html"
            },
            {
                id:1,
                title:"Javascript"
            },
            {
                id:2,
                title:"css"
            },
            {
                id:3,
                title:"bootstrap"
            },
            {
                id:4,
                title:"API"
            },
          
        ]
    },
    {
        id:6,
        title:"Bride & Groom",
        image:bridegroom,
        description:"B&G is a Graduation Project that helps planning the whole wedding day including packages and hotel offers.",
        link:"https://husseinalaa15.github.io/HMDB/",
        skills:[
            {
                id:0,
                title:"html"
            },
            {
                id:1,
                title:"Javascript"
            },
            {
                id:2,
                title:"css"
            },
            {
                id:3,
                title:"bootstrap"
            },
            {
                id:4,
                title:"php"
            },
            {
                id:5,
                title:"mysql"
            },
           
          
        ]
    },
    {
        id:7,
        title:"El-Nady",
        image:elnady,
        description:"El-Nady is a Graduation Project that helps People to eaisly find the nearest courts to them, it has also a shop .",
        link:"https://husseinalaa15.github.io/el-nady/",
        skills:[
            {
                id:0,
                title:"html"
            },
            {
                id:1,
                title:"Javascript"
            },
            {
                id:2,
                title:"css"
            },
            {
                id:3,
                title:"bootstrap"
            },
            {
                id:4,
                title:"php"
            },
            {
                id:5,
                title:"mysql"
            },
           
          
        ]
    },
    {
        id:8,
        title:"Portfolio",
        image:portf21,
        description:"Portfolio 2021.",
        link:"https://husseinalaa15.github.io/Portfolio/",
        skills:[
            {
                id:0,
                title:"html"
            },
            {
                id:1,
                title:"Javascript"
            },
            {
                id:2,
                title:"css"
            },
            {
                id:3,
                title:"bootstrap"
            },

           
          
        ]
    },
    {
        id:9,
        title:"Project",
        image:htmlcss1,
        description:"A Responsive Web App built With Html , css ,js .",
        link:"https://husseinalaa15.github.io/Portfolio/",
        skills:[
            {
                id:0,
                title:"html"
            },
            {
                id:1,
                title:"Javascript"
            },
            {
                id:2,
                title:"css"
            },
           

           
          
        ]
    },
    {
        id:10,
        title:"Weather ",
        image:weather,
        description:"Weather Web App  .",
        link:"https://husseinalaa15.github.io/Weather-App/",
        skills:[
            {
                id:0,
                title:"html"
            },
            {
                id:1,
                title:"Javascript"
            },
            {
                id:2,
                title:"css"
            },
            {
                id:3,
                title:"API"
            },
           

           
          
        ]
    },
    {
        id:11,
        title:"Project ",
        image:htmlcsstwo,
        description:"A Responsive Web App built With Html , css ,js,Bootstrap 4        .",
        link:"https://husseinalaa15.github.io/Weather-App/",
        skills:[
            {
                id:0,
                title:"html"
            },
            {
                id:1,
                title:"Javascript"
            },
            {
                id:2,
                title:"css"
            },
            {
                id:3,
                title:"Bootstrap"
            },
           

           
          
        ]
    },
    {
        id:11,
        title:"Portfolio ",
        image:portf20,
        description:" Portfolio built with React.",
        link:"https://husseinalaa15.github.io/hussPortfolio/",
        skills:[
            {
                id:0,
                title:"html"
            },
            {
                id:1,
                title:"Javascript"
            },
            {
                id:2,
                title:"css"
            },
            {
                id:3,
                title:"Bootstrap"
            },
            {
                id:4,
                title:"react"
            },
           

           
          
        ]
    },
    {
        id:12,
        title:"Github Profiles ",
        image:githubprof,
        description:" A web app gets any Github profile with its username.",
        link:"https://husseinalaa15.github.io/Github-users/",
        skills:[
            {
                id:0,
                title:"html"
            },
            {
                id:1,
                title:"Javascript"
            },
            {
                id:2,
                title:"css"
            },
            {
                id:3,
                title:"Bootstrap"
            },
            {
                id:4,
                title:"Api"
            },
           

           
          
        ]
    },
    {
        id:13,
        title:"New Year ",
        image:newyear,
        description:" Countdown for the next year .",
        link:"https://husseinalaa15.github.io/NewYear-sCountDown/",
        skills:[
            {
                id:0,
                title:"html"
            },
            {
                id:1,
                title:"Javascript"
            },
            {
                id:2,
                title:"css"
            },
            {
                id:3,
                title:"Bootstrap"
            },

           

           
          
        ]
    },
    {
        id:14,
        title:"Todo  ",
        image:todoJs,
        description:" Todo Web App built with vanilla JS",
        link:"https://husseinalaa15.github.io/todos/",
        skills:[
            {
                id:0,
                title:"html"
            },
            {
                id:1,
                title:"Javascript"
            },
            {
                id:2,
                title:"css"
            },
            {
                id:3,
                title:"Bootstrap"
            },

           

           
          
        ]
    },
    {
        id:15,
        title:"Drawing Web app ",
        image:DrawingApp,
        description:" Drawing Web App built with vanilla js .",
        link:"https://husseinalaa15.github.io/Drawing-App/",
        skills:[
            {
                id:0,
                title:"html"
            },
            {
                id:1,
                title:"Javascript"
            },
            {
                id:2,
                title:"css"
            },
            {
                id:3,
                title:"Bootstrap"
            },

           

           
          
        ]
    },
    
]