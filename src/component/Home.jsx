// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";

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
    }
]

const Home = () => {
    return (
        <>
            <Nav/>
            <main className="m-[2%] ml-0 mr-0 mt-0 mb-0 justify-center">
                <img src="https://silveroakuni.ac.in/upload/images/slider/active/6.webp" className="w-full" alt="Silver Oak University" />
                <div className="flex justify-around m-[2%] mt-0 ml-0 mr-0 bg-[#8d3131] p-[1.5%]">
                    <a
                        href="https://virtualtour.silveroakuni.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[30%] border bg-[#E1F9DC] text-[#0C6842] rounded-full flex items-center justify-center py-2"
                    >
                        360° VIRTUAL CAMPUS TOUR
                    </a>
                    <a
                        href="https://exploreyourcareer.silveroakuni.ac.in/Register"
                        className="w-[30%] border bg-[#E1F9DC] text-[#0C6842] rounded-full flex items-center justify-center py-2"
                    >
                        EXPLORE YOUR CAREER
                    </a>
                </div>

                <div className="flex justify-around items-center flex-wrap">
                    <div className="w-full md:w-[40%] mb-4 md:mb-0">
                        <div className="relative">
                            <img
                                src="https://silveroakuni.ac.in/upload/images/home/video_thumb1.webp"
                                className="w-full h-auto"
                                alt="About"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-[40%]">
                        <p>
                            Silver Oak University(SOU) is premier private university carrying forward the legacy of Silver Oak Group of Institutes.
                        </p>
                        <br />
                        <p>
                            As a reflection to its motto, “Gyanam Param Bhushanam” meaning Knowledge is the highest virtue, SOU delivers engaging learning experience through futuristic curriculum, advanced technological interface, eminent faculty, industry academia bonding, career planning and counseling and ample career opportunities.
                        </p>
                        <br />
                        <button className="bg-[#8d3131] flex text-white p-[1%] items-center rounded">
                            <i className="fa fa-forward mr-2"></i>
                            <p>Read More...</p>
                        </button>
                    </div>
                </div>


                <section class="bg-[#f1f1f1] pt-4 pb-3 mt-6 mt-[4%]">
                    <div className="container mx-auto px-2">
                        <div className="flex flex-col md:flex-row justify-around p-[3%] pl-0 pr-0">
                            <div className="flex w-[30%]">
                                <table className="w-full border border-gray-300">
                                    <tbody>
                                        <tr className="text-center bg-[#136B43] text-white text-xl">
                                            <th colSpan={2}>Illuminate: 2.0</th>
                                        </tr>
                                        <tr>
                                            <td><h5>Industrial Design/ Design Patent</h5></td>
                                            <td><h5 className="text-center">103</h5></td>
                                        </tr>
                                        <tr>
                                            <td><h5>Product Patent</h5></td>
                                            <td><h5 className="text-center">4</h5></td>
                                        </tr>
                                        <tr>
                                            <td><h5>Copyright</h5></td>
                                            <td><h5 className="text-center">5</h5></td>
                                        </tr>
                                        <tr>
                                            <td><h5><strong>Total IPR</strong></h5></td>
                                            <td><h5 className="text-center"><strong>112</strong></h5></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex w-[30%]">
                                <table className="w-full border border-gray-300">
                                    <tbody>
                                        <tr className="text-center bg-[#136B43] text-white text-xl">
                                            <th colSpan={2}>Illuminate: 1.0</th>
                                        </tr>
                                        <tr>
                                            <td><h5>Industrial Design/ Design Patent</h5></td>
                                            <td><h5 className="text-center">81</h5></td>
                                        </tr>
                                        <tr>
                                            <td><h5>Product Patent</h5></td>
                                            <td><h5 className="text-center">0</h5></td>
                                        </tr>
                                        <tr>
                                            <td><h5>Copyright</h5></td>
                                            <td><h5 className="text-center">0</h5></td>
                                        </tr>
                                        <tr>
                                            <td><h5><strong>Total IPR</strong></h5></td>
                                            <td><h5 className="text-center"><strong>81</strong></h5></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="counter" class="bg-[#8d3131]">
                    <div className="w-full text-center ">
                        <div className="flex flex-col md:flex-row justify-center items-center">
                            <div className="w-full md:w-1/3 py-5 px-0">
                                <p className="text-4xl font-bold text-white">90%</p>
                                <div className="text-lg mt-2 font-bold text-white">Placements</div>
                            </div>
                            <div className="w-full md:w-1/3 py-5 px-0">
                                <p className="text-4xl font-bold text-white">500+</p>
                                <div className="text-lg mt-2 font-bold text-white">Recruitment Companies</div>
                            </div>
                            <div className="w-full md:w-1/3 py-5 px-0">
                                <p className="text-4xl font-bold text-white">150+</p>
                                <div className="text-lg mt-2 font-bold text-white">Research Publications</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="flex flex-col justify-center p-[2%] pl-0 pr-0 ">
                    <div class="flex justify-around m-[4%] justify-center">
                        <img src="https://silveroakuni.ac.in/upload/images/home/sou-video-gallery1.webp" alt=""></img>
                        <img src="https://silveroakuni.ac.in/upload/images/home/sou-video-gallery2.webp" alt=""></img>
                    </div>
                    <div class="flex justify-center">
                        <button class="bg-[#8d3131] text-white justify-self-center p-[1%] rounded">
                            <i class="fa fa-forward"> View More</i>
                        </button>
                    </div>
                </section>

                <section class="bg-gray-100 p-[1%]">
                    <div class="flex justify-around">
                        <div class="justify-items-center">
                            <img src="https://silveroakuni.ac.in/upload/images/edu_green.webp" alt="" loading="lazy" class="h-[50%] w-auto"/>
                            <p class="main-head-text text-2xl">Admission</p>
                            <p  class="text-[#8d3131] font-semibold text-xl justify-center">Inquiry</p>
                        </div>

                        <div class="justify-items-center">
                            <img src="https://silveroakuni.ac.in/upload/images/apply_online.webp" alt="" loading="lazy" class="h-[50%] w-auto"/>
                            <p class="main-head-text text-2xl">Online</p>
                            <p  class="text-[#8d3131] font-semibold text-xl justify-center">Admission</p>
                        </div>

                        <div class="justify-items-center">
                            <img src="https://silveroakuni.ac.in/upload/images/student_login_icon.webp" alt="" loading="lazy" class="h-[50%] w-auto"/>
                            <p class="main-head-text text-2xl">Student</p>
                            <p  class="text-[#8d3131] font-semibold text-xl justify-center">Login</p>
                        </div>

                        <div class="justify-items-center">
                            <img src="https://silveroakuni.ac.in/upload/images/pdf_green.webp" alt="" loading="lazy" class="h-[50%] w-auto"/>
                            <p class="main-head-text text-2xl">Download</p>
                            <p  class="text-[#8d3131] font-semibold text-xl justify-center">e-Brochure</p>
                        </div>

                        <div class="justify-items-center">
                            <img src="https://silveroakuni.ac.in/upload/images/placement_green.webp" alt="" loading="lazy" class="h-[50%] w-auto"/>
                            <p class="main-head-text text-2xl">PHD</p>
                            <p  class="text-[#8d3131] font-semibold text-xl justify-center">Application</p>
                        </div>

                        <div class="justify-items-center">
                            <img src="https://silveroakuni.ac.in/upload/images/question_green.webp" alt="" loading="lazy" class="h-[50%] w-auto"/>
                            <p class="main-head-text text-2xl">Why</p>
                            <p  class="text-[#8d3131] font-semibold text-xl justify-center">Silver Oak</p>
                        </div>

                    </div>
                </section>

                

                <section class="mt-[4%] justify-items-center  bg-gray-100 p-[1%]">
                    <div class="justify-items-center">
                        <h1 class="text-[#8d3131] text-4xl border-b-2 border-green-700 w-min font-semibold">Gallery</h1>
                        <div className="flex flex-wrap justify-center gap-6 py-8 mt-[3%]">
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
                        
                        </div>
                        <button class="bg-[#8d3131] text-white rounded p-[3%] justify-center">
                            <i class="fa fa-forward w-max"> View More...</i>
                        </button>
                    </div>
                </section>

                <section class="bg-gray-100 justify-items-center p-[4%] mt-[4%] pl-0 pr-0 ">
                    <div class="w-[100%] justify-items-center">
                    <h1 class="p-[2%] text-3xl text-[#8d3131] font-semibold underline decoration-green-700">STRAIGHT FROM THE SOU STUDENTS</h1>
                    </div>
                    <div class="flex justify-around w-[100%]">
                        <img src="https://silveroakuni.ac.in/upload/images/home/video-testimonial-1.webp" class="w-[30%]" alt=""></img>
                        <img src="https://silveroakuni.ac.in/upload/images/home/video-testimonial-2.webp" class="w-[30%]" alt=""></img>
                        <img src="https://silveroakuni.ac.in/upload/images/home/video-testimonial-3.webp" class="w-[30%]" alt=""></img>
                    </div>
                    <div class="flex justify-center mt-[2%]">
                        <button class="bg-[#8d3131] text-white rounded p-[3%]">
                            <i class="fa fa-forward w-max"> View More...</i>
                        </button>
                    </div>
                </section>
            </main>

            <Footer/>
        </>
    );
}

export default Home;