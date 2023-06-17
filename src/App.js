import './dashboard.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard'
import Student from './Component/Student';
import AddStudent from './Component/AddStudent'
import EditStudent from './Component/EditStudent';
import Exam from './Component/Exam';
import AddQuestion from './Component/AddQuestion';
import Contact from './Component/Contact';
import Wallet from './Component/Wallet';
import AllTest from './Component/AllTest';
// import OnlineClass from './Component/OnlineClass';
import FeesManagement from './Component/FeesManagement';
import Message from './Component/Message';
import User from './Component/User';
import ChangePassword from './Component/ChangePassword';
import Enquiry from './Component/Enquiry';
import Book from './Component/Book';
import Scr from './Component/Scr';
import TopCentersList from './Component/TopCentersList';
import AdminLogin from './Component/AdminLogin';


//Home page
// import './Website.css'
import Home from './Website/Home';
import Home1 from './Website/About/AboutUs/Home1';
import Home2 from './Website/About/OurAim/Home2';
import Home3 from './Website/Contacts/Home3';
import Home4 from './Website/Gallery/Home4';
import HomeR from './Website/Course/Software/HomeR';
import Home6 from './Website/Students/Home6';
import Home7 from './Website/Students/Book/Home7';
import Home8 from './Website/Students/Logins/Home8';
import Hero9 from './Website/Students/Placement/Hero9';
import Home10 from './Website/Students/Query/Home10';
import HomeH from './Website/Course/Hardware/HomeH';
import HomeJ from './Website/Course/Jobcourse/HomeJ';
import HomeS from './Website/Course/skill/HomeS';
import HomeA from './Website/Process/HomeA';
import HomeP from './Website/Process/Reason/HomeP';
import HomeI from './Website/Process/Ragister/HomeI';
import HomeF from './Website/Process/NTTFrenchise/HomeF';
import HomeT from './Website/Process/Topcenter/HomeT';
function App() {
  return (
    <div>
      {/* Website Routing */}
      <Routes>
        <Route extact path="/" element={<Home />}></Route>
        <Route extact path="/Aboutus" element={<Home1 />}></Route>
        <Route extact path="/OurAim" element={<Home2 />}></Route>
        <Route extact path="/Gallery" element={<Home4 />}></Route>
        <Route extact path="/Contacts" element={<Home3 />}></Route>
        <Route extact path="/Course" element={<HomeR />}></Route>
        <Route extact path="/Students" element={<Home6 />}></Route>
        <Route extact path="/Book" element={<Home7 />}></Route>
        <Route extact path="/Login" element={<Home8 />}></Route>
        <Route extact path="/Placements" element={<Hero9 />}></Route>
        <Route extact path="/Qaueries" element={<Home10 />}></Route>
        <Route extact path="/Hardwares" element={<HomeH />}></Route>
        <Route extact path="/Jobcouurses" element={<HomeJ />}></Route>
        <Route extact path="/Skill" element={<HomeS />}></Route>
        <Route extact path="/Process" element={<HomeA />}></Route>
        <Route extact path="/Reason" element={<HomeP />}></Route>
        <Route extact path="/Ragister" element={<HomeI />}></Route>
        <Route extact path="/NTTFrenchise" element={<HomeF />}></Route>
        <Route extact path="/Topcenter" element={<HomeT />}></Route>
      </Routes>

      {/* dashboard Routing */}
      <Routes>
        <Route extact path="/dashboard" element={<Dashboard />}></Route>
        <Route extact path="/student" element={<Student />}></Route>
        {/* <Route extact path="/zoomclass" element={<ZoomClass />}></Route> */}
        {/* <Route extact path="/onlineclass" element={<Onlineclass />}></Route> */}
        <Route extact path="/addstudent" element={<AddStudent />}></Route>
        <Route extact path="/editstudent" element={<EditStudent />}></Route>
        <Route extact path="/exam" element={<Exam />}></Route>
        <Route extact path="/contact" element={<Contact />}></Route>
        <Route extact path="/addQuestion" element={<AddQuestion />}></Route>
        <Route extact path="/wallet" element={<Wallet />}></Route>
        <Route extact path="/allTest" element={<AllTest />}></Route>
        {/* <Route extact path="/onlineClass" element={<OnlineClass />}></Route> */}
        <Route extact path="/feesmanagement" element={<FeesManagement />}></Route>
        <Route extact path="/message" element={<Message />}></Route>
        <Route extact path="/user" element={<User />}></Route>
        <Route extact path="/changepassword" element={<ChangePassword />}></Route>
        <Route extact path="/enquiry" element={<Enquiry />}></Route>
        <Route extact path="/bookManagement" element={<Book />}></Route>
        <Route extact path="/scr" element={<Scr />}></Route>
        <Route extact path="/topCentersList" element={<TopCentersList />}></Route>
        <Route extact path="/adminLogin" element={<AdminLogin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
