// import React from "react";

// const ContactUs = () => {
//   return (
//     <div
//       id="contact"
//       className="bg-gray-100 w-full min-h-screen p-2 flex items-center"
//     >
//       <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">
//               Contact Us
//             </h2>
//             <p className="text-lg text-gray-700 mb-8">
//               If you have any questions or would like to schedule a consultation
//               with one of our real estate experts, please don't hesitate to
//               contact us
//             </p>
//             <ul className="text-lg text-gray-700">
//               <li className="flex items-center mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 mr-2 text-amber-800"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//                   />
//                 </svg>
//                 1234 Main St, Anytown USA 12345
//               </li>
//               <li className="flex items-center mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 mr-2 text-amber-800"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M12 22s8-4.5 8-11.8c0-4.1-2.3-7.6-5.5-9.4"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M12 22s-8-4.5-8-11.8c0-4.1 2.3-7.6 5.5-9.4"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M15 7a4 4 0 11-8 0 4 4 0 018 0z"
//                   />
//                 </svg>
//                 (123) 456-7890
//               </li>
//               <li className="flex items-center mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 mr-2 text-amber-800"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M12 22s8-4.5 8-11.8c0-4.1-2.3-7.6-5.5-9.4"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M12 22s-8-4.5-8-11.8c0-4.1 2.3-7.6 5.5-9.4"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M15 7a4 4 0 11-8 0 4 4 0 018 0z"
//                   />
//                 </svg>
//                 info@example.com
//               </li>
//             </ul>
//           </div>
//           <div className="mt-12 sm:mt-16 md:mt-0">
//             <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-lg font-medium text-gray-700"
//                 >
//                   Name
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     type="text"
//                     name="name"
//                     id="name"
//                     autoComplete="given-name"
//                     className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-lg font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-lg font-medium text-gray-700"
//                 >
//                   Phone
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     type="text"
//                     name="phone"
//                     id="phone"
//                     autoComplete="tel"
//                     className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-lg font-medium text-gray-700"
//                 >
//                   Message
//                 </label>
//                 <div className="mt-1">
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows="4"
//                     className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
//                   ></textarea>
//                 </div>
//               </div>
//               <div className="flex justify-center">
//                 <button
//                   type="submit"
//                   className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-amber-800 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-800"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
import React from "react";

const ContactUs = () => {
  return (
    <div id="contact" className="w-full relative bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Side: Text and Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in <span className="text-blue-800">Touch</span>
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Looking to buy, sell, or rent property in Delhi NCR, Gurgaon or
            Noida? We’d love to hear from you! Fill out the form and our team
            will get back to you within 24 hours.
          </p>

          <div className="text-gray-700 space-y-2">
            <p>
              <strong>📍 Address:</strong> DLF Cyber City, Gurgaon, Haryana
            </p>
            <p>
              <strong>📞 Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong>📧 Email:</strong> contact@realestatehub.in
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              placeholder="Tell us about your requirement..."
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
