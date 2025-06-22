import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <header className="flex justify-between p-[0.8%] items-center bg-[#8d3131] text-white w-[100%]">
                <p className="text-xs font-semibold">
                    Admission Helpline: +91-79-35201300 /<i className="fa fa-whatsapp"></i> 301-79-66046300 +91-90990 63464
                </p>
                <div className="flex w-[30%] justify-between">
                    <ul className="flex justify-around items-center w-[55%] font-bold">
                        <li>EXAM</li>
                        <li>IQAC</li>
                        <li>CAREERS</li>
                    </ul>
                    <ul className="flex justify-around items-center w-[35%]">
                        <li><i className="fa fa-facebook"></i></li>
                        <li><i className="fa fa-instagram"></i></li>
                        <li><i className="fa fa-linkedin"></i></li>
                        <li><i className="fa fa-youtube-play"></i></li>
                        <li><i className="fa fa-twitter"></i></li>
                    </ul>
                </div>
            </header>
            <nav class="flex items-center justify-around w-[100%]">
                <Link to="/"><img src="https://silveroakuni.ac.in/upload/images/250x70.webp" alt="" /></Link>
                <ul className="flex items-center w-[80%] justify-around text-[#8d3131] font-semibold">
                    <li className="relative items-center justify-between p-[1%] group">
                        <Link to="#">About</Link>
                        <ul className="absolute hidden group-hover:flex bg-white text-black shadow-lg w-[900px] justify-around p-[20%] border-t-2 border-solid border-[#8d3131] mt-2">
                            <li>
                                <p className="font-semibold text-xl">Silver Oak University</p>
                                <ul className="font-normal text-sm">
                                    <li><a href="https://silveroakuni.ac.in/about">About Us</a></li>
                                    <li><a href="https://silveroakuni.ac.in/the-logo">The Logo</a></li>
                                    <li><a href="https://silveroakuni.ac.in/kulgeet">Kulgeet</a></li>
                                    <li><a href="https://silveroakuni.ac.in/vision-mission">Vision and Mission</a></li>
                                    <li><a href="https://silveroakuni.ac.in/mous">MOUs</a></li>
                                    <li><a href="https://silveroakuni.ac.in/upload/pdf/hr_policy.pdf" target="_blank" rel="noopener noreferrer">HR Policy</a></li>
                                </ul>
                            </li>
                            <li>
                                <p className="font-semibold text-xl">Leadership</p>
                                <ul className="font-normal text-sm">
                                    <li><a href="https://silveroakuni.ac.in/director">Management</a></li>
                                    <li><a href="https://silveroakuni.ac.in/provost">Provost</a></li>
                                    <li><a href="https://silveroakuni.ac.in/registrar">Registrar</a></li>
                                    <li><a href="https://silveroakuni.ac.in/governing-body">Governing Body</a></li>
                                    <li><a href="https://silveroakuni.ac.in/academic-council">Academic Council</a></li>
                                </ul>
                            </li>
                            <li>
                                <p className="font-semibold text-xl">Campus Life</p>
                                <ul className="font-normal text-sm">
                                    <li><a href="https://silveroakuni.ac.in/infrastructure">Infrastructure</a></li>
                                    <li><a href="https://silveroakuni.ac.in/disabled-friendly-campus">Disabled Friendly Campus</a></li>
                                    <li><a href="https://silveroakuni.ac.in/auditorium">Auditorium Halls</a></li>
                                    <li><a href="https://silveroakuni.ac.in/library">Library</a></li>
                                    <li><a href="https://silveroakuni.ac.in/e-library">E-Library</a></li>
                                    <li><a href="https://silveroakuni.ac.in/laboratories">Laboratories</a></li>
                                </ul>
                            </li>
                            <li>
                                <p className="font-semibold text-xl">Achievements</p>
                                <ul className="font-normal text-sm">
                                    <li><a href="https://silveroakuni.ac.in/grants">Grants</a></li>
                                    <li><a href="https://silveroakuni.ac.in/ranking">Rankings</a></li>
                                    <li><a href="https://silveroakuni.ac.in/students-achievements">Students Achievements</a></li>
                                    <li><a href="https://silveroakuni.ac.in/faculty-recognition">Faculty Recognition</a></li>
                                    <li>
                                        <a href="https://silveroakuni.ac.in/upload/naac/c2/245/i1.pdf" target="_blank" rel="noopener noreferrer">
                                            Faculty Recognition &amp; Awards (Academics)
                                        </a>
                                    </li>
                                    <hr className="m-0 p-0" />
                                    <li>
                                        <a href="https://silveroakuni.ac.in/press-media" className="font-bold text-xl text-[#8d3131]">Press Media Coverage</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <i className="fa fa-angle-down"></i>
                    </li>
                    <li className="relative items-center justify-between p-[1%] group">
                        <Link to="#">Admissions</Link>
                        <ul className="absolute hidden group-hover:flex bg-white text-black shadow-lg w-[600px] justify-around p-[20%] border-t-2 border-solid border-[#8d3131] mt-2">
                            <li>
                                <p className="font-semibold text-xl">List of Programmes</p>
                                <ul className="font-normal text-sm">
                                    <li><a href="https://silveroakuni.ac.in/about">Programs offer</a></li>
                                    <li><a href="https://silveroakuni.ac.in/the-logo">PhD</a></li>
                                    <li>
                                        <p className="font-semibold text-xl">Admission Process</p>
                                        <ul>
                                            <li><a href="#">Admission Inquiry</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul className="font-normal text-sm">
                                    <li><a href="https://silveroakuni.ac.in/faculty-of-nursing">Nursing</a></li>
                                    <li><a href="https://silveroakuni.ac.in/faculty-of-physiotherapy">Physiotherapy</a></li>
                                    <li><a href="https://silveroakuni.ac.in/silveroak-college-of-pharmacy">Pharmacy</a></li>
                                    <li><a href="https://silveroakuni.ac.in/faculty-of-paramedical">Paramedical</a></li>
                                    <li><a href="https://silveroakuni.ac.in/faculty-of-technology_admission">Engineering &amp; Technology</a></li>
                                    <li><a href="https://silveroakuni.ac.in/faculty-of-computer-application_admission">Computer Application</a></li>
                                    <li><a href="https://soid.silveroakuni.ac.in" target="_blank">Design</a></li>
                                    <li><a href="https://socat.silveroakuni.ac.in" target="_blank">Aviation</a></li>
                                </ul>
                            </li>
                            <li>
                                <ul className="font-normal text-sm">
                                    <li><a href="https://silveroakuni.ac.in/school-animation_admission">Animation &amp; Multimedia</a></li>
                                    <li><a href="https://silveroakuni.ac.in/faculty-of-management_admission">Management</a></li>
                                    <li><a href="https://silveroakuni.ac.in/faculty-of-commerce_admission">Commerce</a></li>
                                    <li><a href="https://silveroakuni.ac.in/faculty-of-humanity-social-sicence">Humanities and Social Science</a></li>
                                    <li><a href="https://silveroakuni.ac.in/faculty-of-science_admission">Science</a></li>
                                    <li><a href="https://silveroakuni.ac.in/silveroak-law-college">Law</a></li>
                                    <li><a href="https://silveroakuni.ac.in/liberal_studies_admission">Liberal Studies</a></li>
                                </ul>
                            </li>
                        </ul>
                        <i className="fa fa-angle-down"></i>
                    </li>
                    <li className="relative items-center justify-between p-[1%] group">
                        <Link to="#">Academics</Link>
                        <ul className="absolute hidden group-hover:flex bg-white text-black shadow-lg w-[750px] justify-around p-[20%] border-t-2 border-solid border-[#8d3131] mt-2">
                            <li>
                                <p className="font-semibold text-xl">List of Programmes</p>
                                <ul className="font-normal text-sm">
                                    <li><a href="https://silveroakuni.ac.in/program-offered" className="font-bold text-[#8d3131]">Programs Offered</a></li>
                                    <li><a href="https://silveroakuni.ac.in/phd">PhD</a></li>
                                    <hr />
                                    <li><a href="https://silveroakuni.ac.in/faculty-of-nursing">Nursing</a></li>
                                    <li><a href="https://silveroakuni.ac.in/faculty-of-physiotherapy">Physiotherapy</a></li>
                                    <li><a href="https://silveroakuni.ac.in/silveroak-college-of-pharmacy">Pharmacy</a></li>
                                    <li><a href="https://silveroakuni.ac.in/faculty-of-paramedical">Paramedical</a></li>
                                    <li><a href="https://silveroakuni.ac.in/faculty-of-technology_admission">Engineering &amp; Technology</a></li>
                                    <li><a href="https://silveroakuni.ac.in/faculty-of-computer-application_admission">Computer Application</a></li>
                                    <li><a href="https://soid.silveroakuni.ac.in" target="_blank">Design</a></li>
                                    <li><a href="https://socat.silveroakuni.ac.in" target="_blank">Aviation</a></li>
                                    <li><a href="https://silveroakuni.ac.in/school-animation_admission">Animation &amp; Multimedia</a></li>
                                </ul>
                            </li>
                            <li>
                                <ul className="font-normal text-sm">
                                    <li><a href="https://silveroakuni.ac.in/faculty-of-management_admission">Management</a></li>
                                    <li><a href="https://silveroakuni.ac.in/faculty-of-commerce_admission">Commerce</a></li>
                                    <li><a href="https://silveroakuni.ac.in/faculty-of-humanity-social-sicence">Humanities and Social Science</a></li>
                                    <li><a href="https://silveroakuni.ac.in/faculty-of-science_admission">Science</a></li>
                                    <li><a href="https://silveroakuni.ac.in/silveroak-law-college">Law</a></li>
                                    <li><a href="https://silveroakuni.ac.in/liberal_studies_admission">Liberal Studies</a></li>
                                    <p>Clubs</p>
                                    <li><a href="https://silveroakuni.ac.in/studentclub">Student Clubs</a></li>
                                    <li><a href="http://ieee.silveroakuni.ac.in/" target="_blank">IEEE Student Branch</a></li>
                                </ul>
                            </li>
                            <li>
                                <ul className="font-normal text-sm">
                                    <p>Resources</p>
                                    <li><a href="https://silveroakuni.ac.in/supercomputer">Supercomputer</a></li>
                                    <li><a href="https://silveroakuni.ac.in/applelab">Apple Lab</a></li>
                                    <li><a href="https://silveroakuni.ac.in/robotics">Robotics Lab</a></li>
                                    <li><a href="https://silveroakuni.ac.in/cad">Cad / Cam Laboratory</a></li>
                                    <li><a href="https://silveroakuni.ac.in/cnc">CNC / VMC</a></li>
                                    <li><a href="https://silveroakuni.ac.in/solar">Solar Panel / Welding Simulator</a></li>
                                    <li><a href="https://silveroakuni.ac.in/environment">Environment lab</a></li>
                                    <li><a href="https://silveroakuni.ac.in/SWAYAM_NPTEL_Local_Chapters">SWAYAM-NPTEL Local Chapters @SOU</a></li>
                                    <p>Research @ SOU</p>
                                    <li><a href="https://silveroakuni.ac.in/research">Centre for Research</a></li>
                                    <li><a href="https://silveroakuni.ac.in/intellectual-property-rights">Intellectual Property Rights</a></li>
                                    <li><a href="https://silveroakuni.ac.in/upload/pdf/patent_data_w.pdf" target="_blank">List of Patent filed and Approved</a></li>
                                    <li><a href="https://silveroakuni.ac.in/published">Published Papers</a></li>
                                </ul>
                            </li>
                            <li>
                                <ul className="font-normal text-sm">
                                    <p>Centres</p>
                                    <li><a href="https://silveroakuni.ac.in/cce">Centre for Continuing Education (CCE)</a></li>
                                    <li><a href="https://silveroakuni.ac.in/incubation-center">Incubation Centre</a></li>
                                    <li><a href="https://doctordrone.in/" target="_blank">Doctor Drone</a></li>
                                    <li><a href="https://silveroakuni.ac.in/fronius-innovation-skill-center">Fronius Innovation & Skill Center</a></li>
                                    <li><a href="https://silveroakuni.ac.in/hero-two-wheeler-skill-devlopment-center">Hero Two Wheeler Skill Development Centre</a></li>
                                    <li><a href="https://silveroakuni.ac.in/royalenfield">ROYAL ENFIELD "CENTRE OF EXCELLENCE"</a></li>
                                    <hr />
                                    <li><strong><a href="https://silveroakuni.ac.in/Ml_AI">Machine Learning - Artificial Intelligence</a></strong></li>
                                </ul>
                            </li>
                        </ul>
                        <i className="fa fa-angle-down"></i>
                    </li>
                    <li className="relative items-center justify-between p-[1%] group">
                        <Link to="#">Events</Link>
                        <ul className="absolute hidden group-hover:flex flex-col bg-white text-black shadow-lg p-[20%] border-t-2 border-solid border-[#8d3131] mt-2 w-[200px]">
                            <li><a href="https://silveroakuni.ac.in/past-events">Past Events</a></li>
                            <li><a href="https://silveroakuni.ac.in/googlecloud">Google Cloud Program</a></li>
                            <li><a href="https://silveroakuni.ac.in/tedx">TED<sup>x</sup> SilverOakUniversity</a></li>
                        </ul>
                        <i className="fa fa-angle-down"></i>
                    </li>
                    <li className="items-center justify-between p-[1%]">
                        <Link to="Gallery">Gallery</Link>
                        
                    </li>
                    <li className="relative items-center justify-between p-[1%] group">
                        <Link to="#">Placements</Link>
                        <ul className="absolute hidden group-hover:flex flex-col bg-white text-black shadow-lg p-[20%] border-t-2 border-solid border-[#8d3131] mt-2 w-[200px]">
                            <li><a href="https://silveroakuni.ac.in/overview-placement">Overview of Placement</a></li>
                            <li><a href="https://silveroakuni.ac.in/alumni-association">Alumni Association</a></li>
                            <li><a href="https://silveroakuni.ac.in/capability-enhancement-development-schemes">Capability Enhancement Development Schemes</a></li>
                        </ul>
                        <i className="fa fa-angle-down"></i>
                    </li>
                    <li className="relative items-center justify-between p-[1%] group">
                        <Link to="#">Student Corner</Link>
                        <ul className="absolute hidden group-hover:flex flex-col bg-white text-black shadow-lg p-[20%] border-t-2 border-solid border-[#8d3131] mt-2 w-[200px]">
                            <div className="flex">
                                <ul className="mb-0">
                                    <h4>Student Facilities</h4>
                                    <li><a href="https://silveroakuni.ac.in/laboratories">Laboratories</a></li>
                                    <li><a href="https://silveroakuni.ac.in/studentclub">Student Clubs</a></li>
                                    <li><a href="https://silveroakuni.ac.in/accomodation">Hostel</a></li>
                                    <li><a href="https://silveroakuni.ac.in/nss-ncc-bsg">NSS / NCC / BSG</a></li>
                                    <li><a href="http://ieee.silveroakuni.ac.in/" target="_blank">IEEE Student Branch</a></li>
                                    <li><a href="https://gradehistory.silveroakuni.ac.in" target="_blank">Student Grade History</a></li>
                                    <li><a href="https://silveroakuni.ac.in/grayquest-tuition-fees-with-emi">Tuition Fees with EMI</a></li>
                                    <li><a href="https://silveroakuni.ac.in/upload/pdf/SOU_AMTS_Bus_Route.pdf" target="_blank">AMTS Bus Connectivity & Routes</a></li>
                                </ul>
                                <ul className="mb-0">
                                    <h4>Online Lecture</h4>
                                    <li><a href="video-lecture">Video Lecture</a></li>
                                    <li><a href="https://silveroakuni.ac.in/virtual_lab">Virtual Laboratory</a></li>
                                </ul>
                            </div>
                            <ul className="mb-0">
                                <hr />
                                <li><a href="https://silveroakuni.ac.in/timetable-2023-2024">TIME TABLE</a></li>
                                <li><a href="https://silveroakuni.ac.in/student-corner-e-news-letter">E – NEWS LETTER</a></li>
                                <li><a href="https://silveroakuni.ac.in/student-corner-tecos">TECOS</a></li>
                                <li><a href="https://silveroakuni.ac.in/student-corner-sarjan">SARJAN</a></li>
                            </ul>
                        </ul>
                        <i className="fa fa-angle-down"></i>
                    </li>
                    <li className="relative items-center justify-between p-[1%] group">
                        <Link to="#">Approvals</Link>
                        <ul className="absolute hidden group-hover:flex flex-col bg-white text-black shadow-lg p-[20%] border-t-2 border-solid border-[#8d3131] mt-2 w-[190px]">
                            <li><a href="https://silveroakuni.ac.in/ugc_approval" target="_blank">UGC Approval Letter</a></li>
                            <li><a href="https://silveroakuni.ac.in/upload/pdf/NBA/NBA_Approval.pdf" target="_blank">NBA Approval Letter</a></li>
                            <li><a href="https://silveroakuni.ac.in/student-corner-loa">LOA</a></li>
                            <li><a href="https://silveroakuni.ac.in/student-corner-eoa">EOA</a></li>
                        </ul>
                        <i className="fa fa-angle-down"></i>
                    </li>
                    <li className="items-center justify-between p-[1%]">
                        <a href="https://silveroakuni.ac.in/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;
