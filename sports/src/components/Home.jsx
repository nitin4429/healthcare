import HomeLayout from "../layout/HomeLayout";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import ServiceCards from "./ServiceCards";
import MedicalDepartments from "./MedicalDepartment";
import FeaturedServices from "./FeaturedService";

function Home() {
  return (
    <HomeLayout>
      <div className="relative w-full h-[600px] bg-cover bg-center border bg-[url('healthcarehome.webp')]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>

        {/* Text Content */}
        <div className="absolute top-[20%] md:left-[5%] md:w-[45%] bg-black bg-opacity-40 p-6 md:p-10 rounded-lg shadow-lg">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            QUALITY CARE
          </h1>
          <h2 className="text-white text-lg md:text-2xl mt-2">
            Your Health is our priority
          </h2>
          <div className="w-20 h-1 bg-blue-500 my-3"></div>
          <p className="text-white text-sm md:text-lg">
            From preventive care and checkups to immunizations and exams, our
            primary care physicians and providers work to keep you and your
            whole family healthy and strong each and every day.
          </p>
          <Link
            to="/service"
            className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-white hover:text-blue-500 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
      <ServiceCards />
      <div className="bg-gray-100 py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              WELCOME TO MEDICUS CLINIC
            </h2>
            <p className="text-gray-600 mt-2">
              We've built a long-standing relationship based on trust
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Personalized patient care is what sets Medicus Medical Center
              apart. When you visit one of our four San Francisco campus
              locations, you can expect to receive world-class care. Expert
              physician specialists and caring clinical staff provide you with
              an exceptional healthcare experience.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h3 className="text-xl font-bold text-gray-900">
              MODERN MEDICAL FACILITIES
            </h3>
            <p className="text-gray-700 mt-2">
              Personalized patient care is what sets Medicus Medical Center
              apart. When you visit one of our San Francisco campus locations,
              you can expect top-quality care.
            </p>

            {/* Button */}
            <div className="mt-6 ">
              <Link
                to="/about-us"
                className="flex items-center md:w-[50%] w-full bg-blue-600 text-white font-bold py-3 md:px-6  rounded-lg hover:bg-blue-700 transition"
              >
                <span className="mr-2">🏥</span> CHECKOUT OUR FACILITIES
              </Link>
            </div>
          </div>

          {/* Right Side - Image with Overlay */}
          <div className="relative">
            <img
              src="/health1.webp" // Replace with actual image URL
              alt="Hospital"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-blue-500 text-white text-center py-3 rounded-b-lg">
              <p className="font-bold">PATIENT & VISITOR GUIDE</p>
              <p className="text-sm">Plan your visit to our Clinic</p>
            </div>
          </div>
        </div>
      </div>
      <MedicalDepartments />
      <FeaturedServices />
      <div
        className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/microbiology.webp')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            NEED A PERSONAL HEALTH PLAN?
          </h1>
          <p className="text-gray-200 mt-4 text-lg md:text-xl">
            Call Now (600) 123-4567 and receive Top Quality Healthcare for you
            and your Family
          </p>

          {/* CTA Button */}
          <div className="mt-6 flex justify-center">
            <Link
              to="/contact"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded flex items-center gap-2"
            >
              ✅ REQUEST A PLAN
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </HomeLayout>
  );
}
export default Home;
