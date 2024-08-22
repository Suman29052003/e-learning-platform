import React from "react";
import Copyright from '../components/Copyright'


const Footer = () => {
  return (
    <footer className="footer w-full bg-[#f5f5f5] py-12">
      <div className="footer-content w-[90%] m-auto p-4 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1 */}
        <div className="col_1">
          <h3 className="text-lg font-medium py-2">Get Started with AI</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>AWS & DLAI GenAI with LLMs Course</li>
            <li>DLAI AI For Everyone Course</li>
            <li>DLAI Deep Learning Specialization</li>
            <li>DLAI NLP Specialization</li>
            <li>Google AI Essential Course</li>
            <li>Google Cloud Introduction to Generative AI Course</li>
            <li>IBM GenAI Fundamentals Specialization</li>
            <li>Stanford AI in Healthcare Specialization</li>
            <li>Stanford Machine Learning Specialization</li>
            <li>Vanderbilt Prompt Engineering for ChatGPT Course</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="col_2">
          <h3 className="text-lg font-medium py-2">Popular Career Certificates</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>Google Cybersecurity Professional Certificate</li>
            <li>Google Data Analytics Professional Certificate</li>
            <li>Google Digital Marketing Professional Certificate</li>
            <li>Google Project Management Professional Certificate</li>
            <li>Google UX Design Professional Certificate</li>
            <li>IBM Data Analyst Professional Certificate</li>
            <li>IBM Data Science Professional Certificate</li>
            <li>Meta Front-End Developer Professional Certificate</li>
            <li>Microsoft Power BI Data Analyst Professional Certificate</li>
            <li>All Career Certificates</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="col_3">
          <h3 className="text-lg font-medium py-2">Popular Subjects</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>Artificial Intelligence</li>
            <li>Cybersecurity</li>
            <li>Data Analytics</li>
            <li>Data Science</li>
            <li>Digital Marketing</li>
            <li>Generative AI</li>
            <li>Machine Learning</li>
            <li>Microsoft Excel</li>
            <li>Project Management</li>
            <li>Python</li>
            <li>All Courses</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="col_4">
          <h3 className="text-lg font-medium py-2">Popular Resources</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>How to Become a Data Analyst</li>
            <li>How to Get a PMP Certification</li>
            <li>Popular Cybersecurity Certifications</li>
            <li>Popular Data Analytics Certifications</li>
            <li>Popular IT Certifications</li>
            <li>Popular Machine Learning Certifications</li>
            <li>Popular SQL Certifications</li>
            <li>GenAI for Software Developers</li>
            <li>GenAI for Data Professionals</li>
            <li>Career Insights & Advice Hub</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="col_5 ">
          <h3 className="text-lg font-medium py-2">Coursera</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>About</li>
            <li>What We Offer</li>
            <li>Leadership</li>
            <li>Careers</li>
            <li>Catalog</li>
            <li>Coursera Plus</li>
            <li>Professional Certificates</li>
            <li>MasterTrack® Certificates</li>
            <li>Degrees</li>
            <li>For Enterprise</li>
            <li>For Government</li>
            <li>For Campus</li>
            <li>Become a Partner</li>
            <li>Social Impact</li>
            <li>Free Courses</li>
            <li>ECTS Credit Recommendations</li>
          </ul>
        </div>

        {/* Column 6 */}
        <div className="col_6 ">
          <h3 className="text-lg font-medium py-2">Community</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>Learners</li>
            <li>Partners</li>
            <li>Beta Testers</li>
            <li>Blog</li>
            <li>The Coursera Podcast</li>
            <li>Tech Blog</li>
            <li>Teaching Center</li>
          </ul>
        </div>

        {/* Column 7 */}
        <div className="col_7">
          <h3 className="text-lg font-medium py-2">More</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>Press</li>
            <li>Investors</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Help</li>
            <li>Accessibility</li>
            <li>Contact</li>
            <li>Articles</li>
            <li>Directory</li>
            <li>Affiliates</li>
            <li>Modern Slavery Statement</li>
            <li>Manage Cookie Preferences</li>
          </ul>
        </div>
      </div>
      <Copyright/>

    </footer>
  );
};

export default Footer;
