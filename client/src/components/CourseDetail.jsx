import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import courses from '../assets/certiificatesCoursesObject';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CourseDetail = () => {
    useEffect(() => {
        // Scroll to top of the page
        window.scrollTo(0, 0);
    }, []);
    
    const { courseId } = useParams();
    const course = courses.find(course => course.id === parseInt(courseId));

    if (!course) return <p>Course not found</p>;

    return (
        <div className="course-details w-full min-h-[100vh] py-12 px-4 bg-[#f9f9f9]">
            <div className="container w-[90%] md:w-[75%] m-auto flex flex-col gap-8">
                
                {/* Header Section */}
                <div className="header flex flex-col md:flex-row items-center gap-6">
                    <img src={course.image} alt={course.title} className="w-full md:w-[40%] rounded-lg shadow-lg" />
                    <div className="course-info flex flex-col gap-4">
                        <h1 className="text-3xl md:text-4xl font-semibold text-[#002761]">{course.title}</h1>
                        <div className="company flex items-center gap-2">
                            <img src={course.companyLogo} alt={course.title} className="w-10 h-10" />
                            <p className="text-lg font-medium text-gray-600">{course.type} by {course.instructor}</p>
                        </div>
                        <div className="rating flex items-center gap-2 text-yellow-500">
                            <StarIcon /> <span>{course.rating} ({course.reviews} reviews)</span>
                        </div>
                        <p className="text-lg text-gray-700">{course.overview}</p>
                        <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                            <span>Level: {course.level}</span>
                            <span>Language: {course.language}</span>
                            <span>Duration: {course.duration}</span>
                            <span>Enrollment: {course.enrollment}</span>
                        </div>
                    </div>
                </div>

                {/* What You'll Learn Section */}
                <div className="what-you-will-learn bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-[#002761] mb-4">What You'll Learn</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {course.whatYouWillLearn.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Course Details Section */}
                <div className="course-details bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-[#002761] mb-4">Course Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Skills You’ll Gain:</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                {course.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Prerequisites:</h3>
                            <p className="text-gray-700">{course.prerequisites}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Certificate:</h3>
                            <p className="text-gray-700">{course.certificate ? 'Yes' : 'No'}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Price:</h3>
                            <p className="text-gray-700">{course.price}</p>
                        </div>
                    </div>
                </div>

                {/* Enrollment Section */}
                <div className="enrollment bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between">
                    <p className="text-lg font-semibold text-[#002761]">Get started with this course today</p>
                    <Button variant="contained" startIcon={<ShoppingCartIcon />} className="bg-[#002761]">
                        Enroll Now - {course.price}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
