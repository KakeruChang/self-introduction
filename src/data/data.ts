import info from '../assets/info.jpg'
import work11 from '../assets/work1-1.png'
import work12 from '../assets/work1-2.png'
import side1 from '../assets/side1.png'
import side2 from '../assets/side2.png'
import side31 from '../assets/side3_1.png'
import side32 from '../assets/side3_2.png'
import side4 from '../assets/side4.png'

const data = {
  information: {
    name: '張庭瑋 (Chang Ting-Wei)',
    email: 'b97201019@gmail.com',
    tel: '0922-426226',
    language: ['TOEIC 790', 'JLPT N1'],
    img: info,
    link: {
      github: 'https://github.com/KakeruChang',
      medium: 'https://medium.com/@b97201019'
    }
  },
  introduction: {
    Chinese:
      '畢業於台大數學系，從小便有旺盛的求知慾，大學時期除了本科外，也因為對日本文化感到有興趣而開始學習日文，並於畢業後考取了JLPT N1，就業時雖因安穩而選擇了公務員作為第一份工作，而後因厭倦了無法學習新東西的生活，毅然決然地邁向了工程師之路。',
    English:
      "I graduated with a Bachelor's in Mathematics from National Taiwan University. Being an avid learner since childhood, apart from focusing on my major during college, I also begin to learn the Japanese language because of my interest in Japanese culture, finally qualifying for JLPT N1 after graduation. I chose to become a civil servant as my first job due to the security that it offered, but I eventually became tired of the dull life and sought to learn something new. Therefore I left my job and embarked on the path to learn to be a programmer."
  },
  skills: [
    {
      title: 'JavaScript',
      content: [
        'React.js (Hook)',
        'React Native',
        'Redux',
        'Typescript',
        'ES6',
        'Vue.js',
        'Vuex'
      ]
    },
    {
      title: 'Layout / Service & Helper',
      content: [
        'Bootstrap4',
        'RWD',
        'HTML5 / CSS3',
        'firebase',
        'Git & Github',
        'yarn & npm'
      ]
    }
  ],
  works: [
    {
      title: '12-years-education',
      img: [work11, work12],
      company: 'United Daily News',
      link: [
        'https://udn.com/newmedia/2020/12-years-education/',
        'https://udn.com/newmedia/2020/12-years-education/poll'
      ],
      type: 'Web',
      framework: 'Vue'
    }
  ],
  sideProject: [
    {
      title: 'Using React Native to make an App without Expo',
      img: [side4],
      content: [
        '33 tutorial articles of React Native',
        'React hooks / Redux',
        'TypeScript / ESLint-airbnb',
        'Firebase / Async Storage',
        'i18n',
        'Scheduled Notification',
        'Redirecting to detail as clicking on the notification'
      ],
      demo: 'https://ithelp.ithome.com.tw/users/20121828/ironman/3042'
    },
    {
      title: 'Imitating of Linksmate',
      img: [side1],
      content: [
        'React hooks / Redux',
        'Bootstrap4 / RWD',
        'firebase',
        'estimating the phone rate on homepage',
        'apply for your own account by clicking "申し込む" button, and complete the steps for registering.',
        'log in and view detail  (such as circular progress bar which can reveal the data left ) in my page (マイページ)]'
      ],
      demo: 'https://react-hook-demo.herokuapp.com/#/',
      demoPlace: 'Heroku',
      source: 'https://github.com/KakeruChang/react-hook-demo/tree/master'
    },
    {
      title: 'Imitating of 5xRuby',
      img: [side2],
      content: ['React hooks', 'Bootstrap4 / RWD', 'Webpack'],
      demo: 'https://five-ruby-webpack.herokuapp.com/',
      demoPlace: 'Heroku',
      source: 'https://github.com/KakeruChang/5xruby-webpack'
    },
    {
      title: 'Japan Travel Website (with CMS)',
      img: [side31, side32],
      content: [
        'Vue / Vuex',
        'Bootstrap4 / RWD',
        'firebase',
        'user can either use keywords or choose area to find the spot they want to go',
        'user who has the administration authority  can access to the CMS'
      ],
      demo: 'https://kakeruchang.github.io/shop_demo/#/HomePage',
      demoPlace: 'Github Page',
      source: 'https://github.com/KakeruChang/3.0test'
    }
  ],
  experience: [
    {
      name: 'Front-End Developer | United Daily News',
      duration: 'May 2020 ~ Present',
      content: [
        'Collaborated with team of web designers and product team members to create new RWD Web Content using Vue',
        'Collaborated with back end developer',
        'Maintained and fixed content for existing website'
      ]
    },
    {
      name: 'Atmark Solution Inc.',
      duration: 'Sep 2019 ~ Mar 2020',
      content: [
        'React (Function & Class component)',
        'React Hooks.Redux',
        'Making member system with CRUD by Spring Boot and MySQL (also by Laravel)'
      ]
    },
    {
      name: 'Hex School (Online Course)',
      duration: 'Dec 2018 ~ Aug 2019',
      content: ['Vue', 'Bootstrap4', 'RWD', 'HTML5 / CSS3 / JavaScript (ES6)']
    },
    {
      name: 'Local Tax Bureau of Keelung City',
      duration: 'Mar 2015 ~ Dec 2018',
      content: ['As a Tax Officer, mainly in charge of Land Tax']
    },
    {
      name: 'National Taiwan University',
      duration: 'Sep 2009 ~ Jun 2012',
      content: ['Bachelor of Science in Mathematics']
    }
  ]
}

export default data
