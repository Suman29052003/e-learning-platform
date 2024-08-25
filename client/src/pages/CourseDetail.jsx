import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import courses from "../assets/certiificatesCoursesObject"; // Ensure this path is correct
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";
import { useToast } from "../context/ToastProvider";
import onlineDegrees from "../assets/degreeObject";
import EnrollButton from "../components/EnrollButton";

const CourseDetail = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [purchased, setPurchased] = useState();
  const { courseId } = useParams();
  
  useEffect(() => {
    // Scroll to top of the page
    window.scrollTo(0, 0);
    console.log("Course ID from URL:", courseId); // Debugging line
    console.log("Available courses:", courses); // Debugging line
  }, [courseId]);

  const course = [...courses, ...onlineDegrees].find(
    (item) => item.id === parseInt(courseId)
  );

  if (!course) {
    return <p>Course not found</p>;
  }



  return (
    <div className="course-details w-full min-h-[100vh] py-12 px-4 bg-[#f9f9f9]">
      <div className="container w-[90%] md:w-[75%] m-auto flex flex-col gap-8">
        {/* Header Section */}
        <div className="header flex flex-col md:flex-row items-center gap-6">
          <img
            src={course.image}
            alt={course.title}
            className="w-full md:w-[40%] rounded-lg shadow-lg"
          />
          <div className="course-info flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl font-semibold text-[#002761]">
              {course.title}
            </h1>
            <div className="company flex items-center gap-2">
              <img
                src={course.companyLogo}
                alt={course.title}
                className="w-10 h-10"
              />
              <p className="text-lg font-medium text-gray-600">
                {course.type} by {course.instructor}
              </p>
            </div>
            <div className="rating flex items-center gap-2 text-yellow-500">
              <StarIcon />{" "}
              <span>
                {course.rating} ({course.reviews} reviews)
              </span>
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
        <div className="enrollment bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <p className="text-lg font-semibold text-[#002761] text-center md:text-left">
            Get started with this course today
          </p>
          <EnrollButton course={course} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
