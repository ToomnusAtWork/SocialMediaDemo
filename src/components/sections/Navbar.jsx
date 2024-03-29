import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menu from '../../assets/vectors/menu.svg';
import close from '../../assets/vectors/close.svg';

const Navbar = () => {

    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        {
          id: "home",
          title: "Home",
        },
        {
          id: "tech",
          title: "Tech"
        },
        {
            id: "statistics",
            title: "Statistics"
          },
        {
          id: "services",
          title: "Services",
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          if (scrollTop > 100) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);


    return (
        <nav className={ `navbar fixed z-20 w-screen bg-white dark:bg-gray-900 
        backdrop-blur backdrop-filter border-white/50 dark:border-gray-800/50 
        border-b-2 shadow-md shadow-gray-600/5 md:relative md:bg-transparent 
        dark:shadow-none ${
            scrolled ? "bg-primary" : "bg-transparent"
          }` } 
        >
          <div className="m-auto px-6 md:px-8 py-2">
            <div className="flex flex-wrap w-full items-center justify-between md:py-3 sm:py-2 sm:mx-4 md:gap-0">
              <Link 
                  to="/"
                  className="flex items-center gap-4"
                  onClick={() => {
                      setActive("useState");
                      window.scrollTo(0, 0);
                  }}
                  >
                  <svg width="30px" height="30px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                      <g id="SVGRepo_iconCarrier"> <g id="a"/> <g id="b"/> <g id="c"/> <g id="d"/> <g id="e"/> <g id="f"/> <g id="g"/> <g id="h"/> <g id="i"/> <g id="j"/> <g id="k"/> <g id="l"> <path d="M9.91,25.94v-2.65l-2.52-.81c-.3,.14-.55,.35-.75,.61l-1.38,1.89c-.36,.49-.37,1.15-.02,1.66l.66,.96c.31,.46,.95,.57,1.39,.24l2.61-1.9Z" fill="#a96800" id="m"/> <path d="M14.26,31.5l3.65-2.14-1.67-3.44-3.05-2.94c-.47-.45-1.09-.7-1.75-.7h-3.18c-.3,0-.6,.07-.87,.21l2.52,3.46,3.65,5.02c.18,.24,.42,.43,.69,.54h0Z" fill="#ffaa00" id="n"/> <path d="M55.68,33.44l-1.25,3.18,1.25,3.16,3.08-3.08c.37-.37,.31-.99-.12-1.28l-2.95-1.98Z" fill="#a96800" id="o"/> <path d="M55.68,33.44l-1.25,3.18,1.25,3.16,1.4-1.4v-4l-1.4-.94Z" fill="#ffb43f" id="p"/> <path d="M55.42,28.04l-8.87,4.84-4.21,7.07,4.66,7.98c.32,.54,.9,.88,1.53,.88h6.14c.56,0,1.01-.46,1.01-1.02V28.81c-.01-.28-.1-.55-.26-.78h0Z" fill="#ffaa00" id="q"/> <path d="M40.51,22.17l-14.62,9.61v16c0,.56,.45,1.02,1.01,1.02h4.69c.65,0,1.28-.24,1.77-.68l8.97-8.17,13.08-11.91c-.16-.27-.4-.47-.69-.59l-14.22-5.28Z" fill="#fff995" id="r"/> <path d="M38.88,15.48l-10.22,5.95-4.47,8.72,1.74,1.62,4.27,3.96c.44,.41,1.09,.5,1.63,.24l9.47-4.65c.53-.26,.82-.84,.71-1.42l-1.5-7.73-1.15-5.97c-.07-.29-.24-.54-.48-.71h0Z" fill="#ffaa00" id="s"/> <path d="M21.06,15.2c-.61,0-1.15,.38-1.35,.96l-3.46,9.76-1.98,5.59c.28,.12,.6,.16,.9,.11l9.01-1.46h0l14.7-14.67c-.21-.17-.46-.27-.73-.28H21.06Z" fill="#fff995" id="t"/> <path d="M7.4,22.48l1.21,4.41,1.31-.95-2.52-3.46Z" fill="#ffb43f" id="u"/> <path d="M14.26,31.5l1.98-5.59-1.6-1.54-.38,7.13Z" fill="#a96800" id="v"/> <path d="M55.42,28.04l-10.75,15.9-2.33-3.99,13.08-11.91Z" fill="#a96800" id="w"/> <path d="M55.07,26.51l-13.69-5.08-1.05-5.42c-.2-1.05-1.12-1.81-2.19-1.81H21.06c-1.03,0-1.95,.65-2.3,1.62l-2.94,8.29-1.93-1.86c-.66-.63-1.52-.98-2.44-.98h-3.19c-.95,0-1.86,.46-2.42,1.23l-1.37,1.89c-.61,.83-.62,1.96-.04,2.81l.66,.96c.3,.44,.75,.73,1.27,.83,.52,.1,1.05-.01,1.53-.35l1.8-1.31,3.07,4.21c.59,.81,1.57,1.22,2.57,1.06l8.53-1.38,1.04,.96v15.6c0,1.11,.9,2.02,2.01,2.02h4.69c.9,0,1.77-.33,2.44-.94l8.06-7.34,4.04,6.91c.5,.85,1.41,1.37,2.39,1.37h6.14c1.11,0,2.01-.9,2.01-2.02v-7.59l2.78-2.79c.71-.71,.71-1.88,0-2.59-.09-.09-.18-.17-.28-.23l-2.51-1.68v-4.09c0-1.02-.64-1.95-1.6-2.31Zm-28.47,4.53l-.98-.91,12.92-12.89,.99,5.12h0l1.54,7.97-9.96,4.89-4.5-4.17Zm-5.96-14.55c.06-.17,.23-.29,.41-.29h15.69l-13.04,13.02-8.03,1.3,4.97-14.03ZM6.73,27.03l-.66-.96c-.1-.15-.1-.35,0-.5l1.16-1.6,1.27,1.75-1.78,1.31Zm2.48-3.76h2.24c.39,0,.77,.15,1.05,.42l2.59,2.49-1.23,3.47-4.64-6.38Zm23.47,24.1c-.3,.27-.69,.42-1.09,.42l-4.7-.02v-13.74l3.36,3.11c.31,.29,.76,.34,1.12,.16l11.27-5.53c.41-.2,.63-.64,.54-1.09l-1.35-6.97,11.96,4.44-21.11,19.21Zm21.98,.42h-6.14c-.27,0-.53-.15-.66-.38l-4.25-7.28,11.07-10.08v17.74Zm3.23-11.66l-1.23,1.23v-2.05l1.23,.82Z"/> </g> <g id="x"/> <g id="y"/> <g id="a`"/> <g id="aa"/> <g id="ab"/> <g id="ac"/> <g id="ad"/> <g id="ae"/> <g id="af"/> <g id="ag"/> <g id="ah"/> <g id="ai"/> <g id="aj"/> <g id="ak"/> <g id="al"/> <g id="am"/> <g id="an"/> <g id="ao"/> <g id="ap"/> <g id="aq"/> <g id="ar"/> <g id="as"/> <g id="at"/> <g id="au"/> <g id="av"/> <g id="aw"/> <g id="ax"/> <g id="ay"/> <g id="b`"/> <g id="ba"/> <g id="bb"/> <g id="bc"/> <g id="bd"/> <g id="be"/> <g id="bf"/> <g id="bg"/> <g id="bh"/> <g id="bi"/> </g>
                  </svg>
                  <span className="text-base font-bold text-gray-600 dark:text-white">Social Society</span>
              </Link>
                {/* <label for="hbr" className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                    <div aria-hidden="true" className="m-auto h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div>
                    <div aria-hidden="true" className="m-auto mt-2 h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div>
                </label> */}

                <div className="lg:hidden flex flex-1 justify-end items-center">
                    <img 
                        src= { toggle ? close : menu } 
                        alt="menu" 
                        className="w-[25px] h-[25px]
                        object-contain mr-6" 
                        onClick={() => {
                            setToggle(!toggle);
                    }} />
                    <div
                      className={`${!toggle ? 'hidden' : 'flex'} 
                      p-6  bg-gradient-to-r dark:from-slate-50 to-gray-300 absolute top-20 right-0
                      mx-4 my-2 min-w-[140] z-30 rounded-xl backdrop-blur backdrop-filter`}
                      >
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            { navLinks.map((link) => (
                                <li key={link.id} 
                                className={`${ 
                                    active === link.title
                                    ? "text-white"
                                    : "text-secondary"} font-serif font-medium
                                    cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <ul className="list-none hidden lg:flex flex-row gap-10">
                  {navLinks.map((link) => (
                      <li key={link.id} 
                      className={`${ 
                          active === link.title
                          ? "text-blue-800"
                          : "text-black dark:text-white"} hover:text-blue-700 text-[18px] dark:hover:text-blue-400 
                          font-medium cursor-pointer`}
                          onClick={() => setActive(link.title)}
                      >
                          <a href={`#${link.id}`}>{link.title}</a>
                      </li>
                  ))}
                </ul>
            </div>
          </div>
      </nav>
    );
};

export default Navbar;


