import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { lara, meili, vueLogo, viteLogo, SqlLogo } from '../../assets/graphic/techlogo';
import frameworking from '../../assets/vectors/framework.svg';

const TechCard = () => {
    const [selectedId, setSelectedId] = useState();
    const items = [
        {
            id: '1',
            title: 'Vue.js',
            subtitle: 'FrontEnd',
            description: 'We use Vue.js framework as a frontend template and also to distribute the page',
            image: vueLogo,
        },
        {
            id: '2',
            title: 'Laravel',
            subtitle: 'BackEnd',
            description: 'We also need another framework to create web application with expressive which robust enough for system',
            image: lara,
        },
        {
            id: '3',
            title: 'MySQL',
            subtitle: 'Database',
            description: 'To store most of data and manage data from RDBMS for using data query information',
            image: SqlLogo,
        },
        {
            id: '4',
            title: 'Vite',
            subtitle: 'Plugin Development Environment',
            description: 'Using vite as compatible plugin to support common web development interface',
            image: viteLogo,
        },
        {
            id: '5',
            title: 'Meilisearch',
            subtitle: 'Search Engine',
            description: 'With meilisearch it can optimise and increase speed for user search experience',
            image: meili,
        },
    ];

    const features = [
        { name: 'Origin', description: 'Designed by Peranut Toomnus.' },
        { name: 'Material Type', description: 'Laravel application with authorization and Eloquent tools for APIs fetching request.' },
        { name: 'File Size', description: 'less than 325MB' },
        { name: 'Finish', description: 'Handed on and review by 07/10/2023.' },
        { name: 'Includes', description: 'Meilisearch Data search Engine' },
        // { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
      ]

    return(
        <section className="bg-slate-50" id="tech">
            <motion.div className=" mx-auto grid max-w-2xl grid-cols-1 gap-x-14 gap-y-10 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((item) => (
                    <motion.div 
                        className={`card bg-white rounded-lg shadow-md cursor-pointer transform transition-transform duration-500 hover:scale-105 ${
                            selectedId === item.id ? 'card-selected' : ''
                        }`}
                        key={item.id}
                        layoutId={`card-container-${item.id}`}
                        onClick={() => setSelectedId(item.id)}
                        initial={{ scale: 1 }}
                        animate={{ scale: selectedId === item.id ? 1.1 : 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="card-content place-self-center">
                            <img className="w-16 h-16 my-4 mx-auto" src={item.image} alt="image.png" />
                            <motion.h5 className="text-black my-4 text-center">{item.title}</motion.h5>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div>
                <p className="text-base font-semibold leading-7 text-blue-600">Share your stats with the team</p>
                <h2 className="text-3xl mt-2 font-bold tracking-tight text-gray-900 sm:text-4xl">Feature Framework Specification</h2>
                <p className="mt-6 text-gray-500">These web development frameworks speed up application development, reduce errors, simplify 
                debugging and increase reliability. Taken them together, the factors can significantly reduce overall development costs.
                The Model layer is concerned with the back-end business logic and data. The View layer focuses on the user interface and 
                facilitating interactivity. The Controller layer acts as an interface between the model and view layers, processing the 
                requests between them.</p>
                <p className="mt-6 text-black">We carefully selected these frameworks based on their exceptional usage features. When they work together, they create something truly remarkable.</p>
            </div>
            <AnimatePresence>
                {selectedId && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {items.map((item) => (
                    item.id === selectedId && (
                        <motion.div
                        className="bg-white rounded-lg p-4 shadow-md max-w-lg mx-auto"
                        layoutId={`card-container-${item.id}`}
                        key={item.id}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        >
                        <motion.div className="relative">
                            <motion.button
                                className="absolute top-2 right-2 py-1 px-2 text-center text-white bg-red-500 rounded-full"
                                onClick={() => setSelectedId('')}   
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </motion.button>
                            <img className="mx-auto" src={item.image}alt="image.png" />
                            <motion.h2 className="text-xl font-bold mb-2 text-purple-600">{item.title}</motion.h2>
                            <motion.h5 className="text-sm font-bold mb-1 text-gray-700">{item.subtitle}</motion.h5>
                            <motion.p className="text-md text-gray-700 mb-4">{item.description}</motion.p>
                            <motion.p
                                className="text-md text-gray-700"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                            </motion.p>
                        </motion.div>
                        </motion.div>
                    )
                    ))}
                </motion.div>
                )}
            </AnimatePresence>
            <div className="">
                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                    <div key={feature.name} className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                    <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                    </div>
                ))}
                </dl>
            </div>
            <div className="">
                <img src={frameworking} />
            </div>
            </motion.div>
            
        </section>
    );
};

export default TechCard;

// <div className='flex min-h-screen items-center justify-center  px-24'>
//             <div>
//                 <div className="group relative -ml-4 flex scroll-mt-40 items-center pl-4">
//                     {/* <a href="#" className="absolute z-50 -ml-10 mb-2.5 rounded-md border border-blue-gray-50 bg-blue-gray-50/50 p-1 opacity-0 hover:opacity-100 group-hover:opacity-100">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" aria-hidden="true" className="pointer-events-none h-3.5 w-3.5 rounded-lg">
//                         <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"></path>
//                         </svg>
//                     </a> */}
//                     <h2 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug !mb-2 text-primary">Featured Frameworks Integration</h2>
//                 </div>
//                 <p className="block antialiased font-sans text-base font-light leading-relaxed text-inherit !mb-4 !font-normal !text-gray-600">This project is consist of different frameworks combine in order to provides various features for the system here's a list of what framework we use in this project</p>
//                 <div className="layout-cards w-full h-full grid grid-rows-2 grid-cols-3 gap-6 bg-cyan-100">
                
                    
//                 </div>
//                 <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4" id="frameworks-integration">
//                 </div>
//             </div>
//         </div>



                    