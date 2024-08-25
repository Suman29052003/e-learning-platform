import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import courses from '../assets/certiificatesCoursesObject';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';

const CourseDetail = () => {
    useEffect(() => {
        // Scroll to top of the page
        window.scrollTo(0, 0);
    }, []);

    const { courseId } = useParams();
    const course = courses.find(course => course.id === parseInt(courseId));

    if (!course) return <p>Course not found</p>;

    const handlePayment = async () => {
        try {
            // Fetch the order from the backend
            const { data: order } = await axios.post('http://localhost:3000/api/purchase-course', {
                amount: course.price, // Course price is passed in rupees
                currency: 'INR', // Make sure this matches the backend
            });
    
            const options = {
                key: 'rzp_test_BX3KQ7tc1uJhLX', // Your Razorpay key ID
                amount: order.amount,
                currency: order.currency,
                name: course.title,
                description: 'Course Enrollment',
                image: course.image,
                order_id: order.id, // Razorpay order ID returned by the backend
                handler: function (response) {
                    alert('Payment successful!');
                    console.log('Payment ID:', response.razorpay_payment_id);
                    console.log('Order ID:', response.razorpay_order_id);
                    console.log('Signature:', response.razorpay_signature);
                },
                prefill: {
                    name: 'Your Name',
                    email: 'youremail@example.com',
                    contact: '9999999999',
                },
                theme: {
                    color: '#002761',
                },
            };
    
            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error('Error during payment:', error.response ? error.response.data : error.message);
        }
    };
    

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

                {/* Enrollment Section */}
                <div className="enrollment bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between">
                    <p className="text-lg font-semibold text-[#002761]">Get started with this course today</p>
                    <Button
                        variant="contained"
                        startIcon={<ShoppingCartIcon />}
                        className="bg-[#002761]"
                        onClick={handlePayment}
                    >
                        Enroll Now - {course.price} /-
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
