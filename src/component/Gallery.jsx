// import Home from './Home';
import Nav from './Nav';
import Footer  from './Footer';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

const teachers = [
    {
        image: 'https://silveroakuni.ac.in/upload/images/gallery/festival_celebration/2025/m_1.webp',
        name: 'Festival Celebration'
    },
    {
        image: 'https://silveroakuni.ac.in/upload/images/gallery/convocation/2025/m_1.webp',
        name: 'Convocation'
    },
    {
        image: 'https://silveroakuni.ac.in/upload/images/gallery/celebrity/2024/m_1.webp',
        name: 'Celebrity At SOU'
    },
    {
        image: 'https://silveroakuni.ac.in/upload/images/gallery/rass_rasiya/2024/m_1.webp',
        name: 'Rass Rasiya'
    },
    {
        image: 'https://silveroakuni.ac.in/upload/images/gallery/rangmanch/2024/m_1.webp',
        name: 'Rangmanch'
    },
    {
        image: 'https://silveroakuni.ac.in/upload/images/gallery/independence_day/2024/m_1.webp',
        name: 'Independence Day'
    },
    {
        image: 'https://silveroakuni.ac.in/upload/images/gallery/foundation_day/2024/m_1.webp',
        name: 'Foundation Day'
    },
    {
        image: 'https://silveroakuni.ac.in/upload/images/gallery/days_celebration/m_1.webp',
        name: 'Days Celebration'
    },
    {
        image: 'https://silveroakuni.ac.in/upload/images/gallery/junoon/2024/m_1.webp',
        name: 'Junoon'
    },
    {
        image: 'https://silveroakuni.ac.in/upload/images/gallery/events/2024/m_1.webp',
        name: 'Events'
    },
    {
        image: 'https://silveroakuni.ac.in/upload/images/gallery/republicday/2024/m_1.webp',
        name: 'Republic Day'
    },
    {
        image: 'https://silveroakuni.ac.in/upload/images/gallery/JUNOON-CulturalFestival/m_1-(1).webp',
        name: 'Cultural Events'
    },
    
    {
        image: 'https://silveroakuni.ac.in/upload/images/gallery/Orientation/m_1-(1).webp',
        name: 'Orientation'
    },
    {
        image: 'https://silveroakuni.ac.in/upload/images/gallery/Prarambh/m_1-(1).webp',
        name: 'Prarambh'
    },
    {
        image: 'https://silveroakuni.ac.in/upload/images/gallery/Seminars/m_1-(1).webp',
        name: 'Seminars'
    },
    {
        image: 'https://silveroakuni.ac.in/upload/images/gallery/SportsMania/m_1-(1).webp',
        name: 'Sports Mania'
    },{
        image: 'https://silveroakuni.ac.in/upload/images/gallery/Taalash-TechnicalFest/m_1-(1).webp',
        name: 'Taalash Technical Fest'
    },
    {
        image: 'https://silveroakuni.ac.in/upload/images/gallery/WeCare/m_1-(1).webp',
        name: 'We Care'
    }
]

const Gallery = () => {
    return(
        <> 
            <Nav/>
            <main className="m-0">
                <section className="justify-items-center w-full">
                    <div className="justify-items-center w-full">
                        <button className="justify-items-center bg-[url('https://i.ytimg.com/vi/bk1AyMsILrU/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgVChLMA8=&rs=AOn4CLDRTbaxyfIORxP3ZQoEhXDgd3jYgQ')] bg-no-repeat bg-cover bg-center w-full p-[18%] pl-0 pr-0">
                            <i className="fa fa-youtube-play text-red-700"></i>
                        </button>
                    </div>
                </section>
                
                <section className="mt-[1%]">
                    <div className="flex justify-around p-[1.3%] pl-0 pr-0 bg-[#8d3131] text-white items-center">
                        <div>
                            <h1 className="font-semibold text-3xl items-center">Gallery</h1>
                        </div>
                        <div>
                            <p className="text-xl font-medium hover:underline">Press & Media Coverage</p>
                        </div>
                    </div>
                </section>

                <section className="flex flex-wrap justify-center gap-6 py-8 bg-gray-50">
                    {
                        teachers.map(function(teacher, index) {
                            return (
                                <div className="bg-white rounded shadow-md flex flex-col items-center justify-around w-[20%] mb-[1%]" key={index}>
                                    <img src={teacher.image} alt={teacher.name} className="w-full object-cover rounded border-b-4 border-green-700"/>
                                    <h2 className="text-lg font-semibold text-[#8d3131] justify-start p-[8%]">{teacher.name}</h2>
                                </div>
                            )
                        })
                    }
                </section>

            </main>
            <Footer/>
        </>
    );
}

export default Gallery;