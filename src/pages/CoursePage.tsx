import React from 'react';
import { Image, Collapse } from 'antd';
import 'tailwindcss/tailwind.css';

const { Panel } = Collapse;

const CoursePage = () => {
    const ratings = [
        { stars: 5, percentage: 0 },
        { stars: 4, percentage: 0 },
        { stars: 3, percentage: 0 },
        { stars: 2, percentage: 0 },
        { stars: 1, percentage: 0 },
    ];

    return (
        <div className="course_page">
            <div className="coure-info-top bg-[#333333] text-[#fff] py-14">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:-mx-4">
                        <div className="course-info-left w-full md:w-2/3 md:px-4 mb-8 md:mb-0">
                            <h1 className="entry-title text-4xl font-semibold mb-4 text-left font-serif">Introduction to Marketing</h1>
                            <p className="text-lg mb-6 text-left font-sans text-gray-300">This tutorial will introduce you to PHP, a server-side scripting language you can use to make dynamic websites and web applications.</p>
                            <div className="course-meta course-meta-single flex flex-wrap items-start overflow-hidden relative mb-8 space-y-6 md:space-y-0 md:space-x-8 text-left">

                                <div className="course-author flex flex-col md:flex-row md:items-start space-x-4">
                                    <img alt="User Avatar" className="avatar h-24 w-24 rounded-full" src="https://eduma.thimpress.com/demo-udemy/wp-content/uploads/learn-press-profile/7/e5c6a6fb8aa3864eacaec471611e0470.jpeg" />
                                    <div className="author-contain text-left">
                                        <label className="block text-lg" itemProp="jobTitle">Teacher</label>
                                        <div className="value text-lg font-medium">
                                            <a href="https://eduma.thimpress.com/demo-udemy/instructor-4/keny/">
                                                <span className="instructor-display-name">Keny White</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="course-categories flex flex-col md:items-start text-left">
                                    <label className="block text-lg">Categories</label>
                                    <div className="value text-lg font-medium">
                                        <span className="cat-links"><a href="https://eduma.thimpress.com/demo-udemy/course-category/marketing/" rel="tag">Marketing</a></span>
                                    </div>
                                </div>

                                <div className="meta-item meta-item-review flex flex-col items-start">
                                    <div className="meta-item__value">
                                        <label className="block text-lg">Review</label>
                                        <div className="review-stars-rated flex relative " title="0 out of 5 stars">
                                            {Array(5).fill(0).map((_, index) => (
                                                <div key={index} className="review-star relative ml-1.5">
                                                    <em className="far lp-review-svg-star ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                        </svg>
                                                    </em>
                                                    <em className="fas lp-review-svg-star absolute top-0 left-0 w-0 text-yellow-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                        </svg>
                                                    </em>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto p-2 md:flex">
                <div className="md:w-8/12">
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-5 font-serif mt-20 ">OVERVIEW</h2>
                        <div className='border-t border-solid border-t-1 mt-6'>
                            <h4 className="text-3xl font-bold font-serif mt-9">COURSE DESCRIPTION</h4>
                            <p className='text-xl mt-4 text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <h4 className="text-3xl font-bold font-serif mt-7">CERTIFICATION</h4>
                            <p className='text-xl mt-4 text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <h4 className="text-3xl font-bold font-serif mt-7">LEARNING OUTCOMES</h4>
                            <ul className="list-disc pl-5 text-xl mt-4 text-gray-600">
                                <li>Over 37 lectures and 55.5 hours of content!</li>
                                <li>LIVE PROJECT End to End Software Testing Training Included.</li>
                                <li>Learn Software Testing and Automation basics from a professional trainer from your own desk.</li>
                                <li>Information packed practical training starting from basics to advanced testing techniques.</li>
                                <li>Best suitable for beginners to advanced level users and who learn faster when demonstrated.</li>
                                <li>Course content designed by considering current software testing technology and the job market.</li>
                                <li>Practical assignments at the end of every session.</li>
                                <li>Practical learning experience with live project work and examples.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-8 relative border border-gray-300 p-3">
                        <h2 className="text-3xl font-bold font-serif mt-4">CURRICULUM</h2>
                        <div className='border-t border-solid border-t-1 mt-6'>
                            <p className='text-xl mt-4 text-gray-600'>The curriculum is empty</p>
                        </div>
                    </div>
                    <div className="mb-8 relative border border-gray-300 p-3">
                        <h2 className="text-3xl font-bold font-serif mt-4">INSTRUCTOR</h2>
                        <div className="flex items-center border-t border-solid border-t-1 mt-4">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-32 h-32 overflow-hidden rounded-full">
                                    <img src="https://eduma.thimpress.com/demo-udemy/wp-content/uploads/learn-press-profile/7/e5c6a6fb8aa3864eacaec471611e0470.jpeg" alt="avatar image" className="object-cover w-full h-full" />
                                </div>
                            </div>
                            <div className="ml-8 mt-12">
                                <h3 className="text-xl font-bold">Keny White</h3>
                                <p className='text-gray-400 text-xl'>Professor</p>
                                <p className='text-gray-600 text-xl'>
                                    Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae.
                                    Et autem quia eum reprehenderit voluptates est reprehenderit illo est enim perferendis est neque sunt.
                                    Nam amet sunt aut vero mollitia ut ipsum corporis vel facere eius et quia aspernatur qui fugiat repudiandae.
                                    Et officiis inventore et quis enim ut quaerat corporis sed reprehenderit odit sit saepe distinctio et accusantium
                                    repellendus ea enim harum.
                                </p>
                            </div>
                        </div>
                    </div>



                    <div className="flex flex-wrap relative border border-gray-300 p-3">
                        <div className="w-full border-b border-solid border-b-1 mb-4s">
                            <h2 className="text-3xl font-bold font-serif mt-4 mb-4">REVIEWS</h2>
                        </div>

                        <div className="w-full md:w-1/2 pr-4  ">
                            <p className="text-2xl mb-4 mt-4 ">Average Rating</p>
                            <div className="flex items-center mb-4 flex-col">
                                <div className="text-8xl font-semibold mr-4 mb-7">0</div>
                                <div className="review-stars-rated flex relative " title="0 out of 5 stars">
                                    {Array(5).fill(0).map((_, index) => (
                                        <div key={index} className="review-star relative ml-1.5">
                                            <em className="far lp-review-svg-star ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                </svg>
                                            </em>
                                            <em className="fas lp-review-svg-star absolute top-0 left-0 w-0 text-yellow-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                </svg>
                                            </em>
                                        </div>
                                    ))}
                                </div>
                                <span className="ml-2 text-xl">0 ratings</span>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 pl-4 md:pl-0 ">
                            <div>
                                <p className="text-2xl mt-5">Detailed Rating</p>
                                <div className="space-y-2">
                                    {ratings.map((rating) => (
                                        <div key={rating.stars} className="flex items-center">
                                            <span className="w-6">{rating.stars}</span>
                                            <div className="w-full bg-gray-200 rounded-full h-4 mx-2">
                                                <div
                                                    className="bg-yellow-500 h-4 rounded-full"
                                                    style={{ width: `${rating.percentage}%` }}
                                                ></div>
                                            </div>
                                            <span>{rating.percentage}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="sidebar" className="md:w-4/12 sticky-sidebar top-20 h-full overflow-y-auto mt-8 md:mt-0 relative border border-gray-300 ml-2">
                    <div className="theiaStickySidebar">
                        <div className="course_right ">
                            <div className="relative z-10">
                                <div className="course-thumbnail sticky top-0">
                                    <img fetchPriority="high" width="970" height="560" src="https://eduma.thimpress.com/demo-udemy/wp-content/uploads/sites/93/2022/04/courses-2.jpg" className="w-full" alt="courses 2" title="courses 2" decoding="async" />
                                </div>
                            </div>
                            <div className="course-payment mt-4 p-4 ">
                                <div className="course-price mb-5">
                                    <div className="value text-4xl text-gray-600 font-bold">$45.00</div>
                                </div>
                                <div className="lp-course-buttons mt-4 ">
                                    <form name="purchase-course" className="purchase-course" method="post" encType="multipart/form-data">
                                        <input type="hidden" name="purchase-course" />
                                        <button className="bg-blue-600 text-white w-[100%] py-4 text-xl font-bold hover:bg-blue-800">BUY NOW</button>
                                    </form>
                                </div>
                            </div>
                            <div className="mt-6 ml-4">
                                <h1 className="text-3xl font-bold font-serif mt-10">Course Features</h1>
                                <ul className="mt-4 text-gray-600 text-xl">
                                    <li className="lectures-feature flex justify-between">
                                        <span className="label">Lectures 0</span>
                                    </li>
                                    <li className="lectures-feature flex justify-between">
                                        <span className="label">Quizzes 0</span>
                                    </li>
                                    <li className="lectures-feature">
                                        <span className="label">Duration 54 hours</span>
                                    </li>
                                    <li className="lectures-feature">
                                        <span className="label">Skill level All levels</span>
                                    </li>
                                    <li className="lectures-feature">
                                        <span className="label">Language English</span>
                                    </li>
                                    <li className="lectures-feature flex justify-between">
                                        <span className="label">Students 31</span>
                                    </li>
                                    <li className="lectures-feature flex justify-between">
                                        <span className="label">Assessments Yes</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="social_share mt-9 flex justify-center px-5 relative mb-7">
                                <a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Feduma.thimpress.com%2Fdemo-udemy%2Fcourses%2Fintroduction-to-marketing%2F" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transform hover:scale-110 transition-transform duration-300 p-2 border border-white rounded-full">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-4xl text-[#4B5563] hover:text-blue-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                                    </svg>
                                </a>
                                <a href="https://twitter.com/share?url=https%3A%2F%2Feduma.thimpress.com%2Fdemo-udemy%2Fcourses%2Fintroduction-to-marketing%2F&amp;text=Introduction%20to%20Marketing" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transform hover:scale-110 transition-transform duration-300 p-2 border border-white rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" width="32" height="32" viewBox="0 0 24 24" className="bi bi-twitter-x text-[#4B5563] hover:text-blue-400">
                                        <path d="M24 4.557a9.834 9.834 0 01-2.828.775 4.94 4.94 0 002.165-2.724 9.91 9.91 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149 4.822 4.822 0 00.964 5.887a4.912 4.912 0 002.188 4.1 4.93 4.93 0 01-2.229-.616c-.054 2.148 1.512 4.15 3.747 4.596a4.996 4.996 0 01-2.224.085 4.929 4.929 0 004.604 3.419A9.875 9.875 0 010 21.524a13.94 13.94 0 007.548 2.213c9.054 0 14.009-7.496 14.009-13.985 0-.213-.004-.426-.014-.637A10.012 10.012 0 0024 4.557z" />
                                    </svg>
                                </a>
                                <a href="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Feduma.thimpress.com%2Fdemo-udemy%2Fcourses%2Fintroduction-to-marketing%2F&amp;description=This%20tutorial%20will%20introduce%20you%20to%20PHP%2C%20a%20server-side%20scripting%20language%20you%20can%20use%20to%20make%20dynamic%20websites%20and%20web%20applications.&amp;media=https%3A%2F%2Feduma.thimpress.com%2Fdemo-udemy%2Fwp-content%2Fuploads%2Fsites%2F93%2F2022%2F04%2Fcourses-2.jpg" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="transform hover:scale-110 transition-transform duration-300 p-2 border border-white rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32" className="bi bi-pinterest text-[#4B5563] hover:text-red-600">
                                        <path d="M12 0C5.383 0 0 5.383 0 12c0 4.83 2.877 8.971 7.029 10.84-.035-.922-.067-2.342.014-3.359.084-1.098.554-4.725.554-4.725s-.14-.279-.14-.687c0-1.609.934-2.809 2.093-2.809.99 0 1.471.746 1.471 1.636 0 1.001-.635 2.501-.96 3.888-.271 1.161.574 2.104 1.707 2.104 2.048 0 3.623-2.169 3.623-5.313 0-2.777-2.008-4.724-4.86-4.724-3.313 0-5.268 2.494-5.268 5.073 0 1.013.389 2.105.872 2.698.097.119.111.225.081.344-.078.319-.273 1.007-.296 1.15-.051.292-.194.348-.449.21-1.561-.781-2.53-2.881-2.53-4.822 0-3.828 2.787-7.338 8.043-7.338 4.363 0 7.742 3.146 7.742 7.355 0 4.306-2.718 7.754-6.473 7.754-1.264 0-2.451-.678-2.863-1.443l-.766 2.919c-.281 1.073-.968 2.388-1.445 3.183C8.768 23.603 10.258 24 12 24c6.617 0 12-5.383 12-12S18.617 0 12 0z" />
                                    </svg>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default CoursePage;