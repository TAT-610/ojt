import ProfileInstructor from 'pages/profile/ProfileInstructor';
import ProfileStudent from 'pages/profile/ProfileStudent';
import Login from 'pages/register/Login';
import SignUp from 'pages/register/SignUp';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainLayout from '../components/layout/Layout';
import BuyNow from '../pages/BuyNow';
import CategoryPage from '../pages/CategoryPage';
import Contact from '../pages/Contact';
import CoursePage from '../pages/CoursePage';
import HomePage from '../pages/HomePage';
import ReportPage from '../pages/ReportPage';
import SearchPage from '../pages/SearchPage';
import ShoppingCard from '../pages/ShoppingCart';



const App: React.FC = () => (
  <Router>
    <MainLayout>
      <Routes>
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />

        <Route path="/" element={<HomePage/>} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/course" element={<CoursePage/>} />
        <Route path="/shoppingCard" element={<ShoppingCard />} />
        <Route path="/buyNow" element={<BuyNow />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/profile-student" element={<ProfileStudent />} />
        <Route path="/profile-instructor" element={<ProfileInstructor />} />

      </Routes>
    </MainLayout>
  </Router>
);

export default App;