import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return(
        <>
            <section class="flex items-center bg-[#8d3131] text-white justify-around p-[2%] mt-[2%]">
                    <div class="w-[60%]">
                        <h1 class="font-bold text-3xl">Do you have any Questions?</h1>
                        <br/>
                        <p>Please feel free to contact us anytime. Provide your all details and the relevant person will contact you as soon as possible.</p>
                    </div>
                    <div class="w-[10%]">
                        <button class="w-[100%] flex bg-white text-[#8d3131] p-[10%] pl-0 pr-0 items-center rounded justify-around font-bold"><i class="fa fa-forward"></i><p class="">Contact Us</p></button>
                    </div>
                </section>
            <footer class="bg-gray-200 flex justify-around p-[2%] pl-0 pr-0 mt-0">
                
                <ul>
                    <p class="underline text-[#8d3131] text-xl font-semibold">Silver Oak University</p>
                    <li>About SOU</li>
                    <li>Mission & Vision</li>
                    <li>MOUs</li>
                    <li>Testimonials</li>
                    <li>Careers</li>
                </ul>
                <ul>
                    <p class="underline text-[#8d3131] text-xl font-semibold">Leadership</p>
                    <li>Managment</li>
                    <li>Provost</li>
                    <li>Registar</li>
                    <li>Governing Body</li>
                </ul>
                <ul>
                    <ul>
                        <p class="underline text-[#8d3131] text-xl font-semibold">Placement</p>
                        <li>Overview of Placement</li>
                        <li>Testimonials</li>
                    </ul>
                    <ul>
                        <p class="underline text-[#8d3131] text-xl font-semibold">Achievements</p>
                        <li>Grants</li>
                        <li>Rankings</li>
                        <li>Students Achievements</li>
                        <li>Faculty Recognition</li>
                        <li>Awards</li>
                    </ul>
                </ul>
                <ul>
                    <p class="underline text-[#8d3131] text-xl font-semibold">Student Facilities</p>
                    <li>Acommodation</li>
                    <li>Laboratories</li>
                    <li>E-library</li>
                    <li>Incubation Center</li>
                    <li>Student Clubs</li>
                    <li>IEEE Student Branch</li>
                    <li>Health Care Services</li>
                </ul>
            </footer>
        </>
    );
}

export default Footer;