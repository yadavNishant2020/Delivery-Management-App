import { useState } from 'react';
import { PiUploadSimpleLight } from 'react-icons/pi';
import Animation from "../../../public/Animation.json";
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';

function Index() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Logic to handle file upload
    if (selectedFile) {
      console.log('File uploaded:', selectedFile);
      // Add your upload logic here
    } else {
      console.log('No file selected');
    }
  };

  return (
    <>
      <div className="container px-6 mx-auto text-center h-[82vh] flex items-center justify-center">
        <div className="max-w-6xl mx-autoo">
          <h2 className="mb-4 text-4xl md:text-6xl tracking-tight font-extrabold text-gray-900">
            Revolutionize Your Workflow with Affordable Electronic Signatures
          </h2>
          <p className="mt-6 text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique
            obcaecati illum mollitia.</p>
            <Link to="/builder">
            <button type="submit" className=" mt-8 px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none focus:bg-gray-400 focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Start 14-Day free trial
          </button>
          </Link>
          <p className="mt-3 text-sm text-gray-400 ">No credit card required</p>
        </div>

      </div>
      
    </>
  );
}

export default Index;
