import React from 'react';
import { Link } from 'react-router-dom';


// function Home() {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <header className="bg-blue-500 text-white py-4">
//         <h1 className="text-4xl font-bold text-center">Welcome to My Website</h1>
//       </header>
//       <main className="container mx-auto py-8">
//         <p className="text-xl text-center">This is the home page content.</p>
//       </main>
//       <footer className="bg-blue-500 text-white py-4 text-center">
//         &copy; 2023 My Website. All rights reserved.
//       </footer>
//     </div>
//   );
// }

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white py-4">
        <h1 className="text-4xl font-bold text-center">Welcome to My Website</h1>
      </header>
      <main className="container mx-auto py-8">
        <p className="text-xl text-center">This is the home page content.</p>
        <div className="flex justify-center mt-4">
          <Link to="/SignUp" className="bg-blue-500 text-white rounded-md px-4 py-2">
            Sign Up
          </Link>
        </div>
      </main>
      <footer className="bg-blue-500 text-white py-4 text-center">
        &copy; 2023 My Website. All rights reserved.
      </footer>
    </div>
  );
}


export default Home;
