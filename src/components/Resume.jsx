import React from "react";
import jsPDF from "jspdf"; 

const Resume = () => {
  const handleDownload = () => {
    const doc = new jsPDF();
    const resume = document.getElementById("resume");

    // Generate the PDF from the HTML content
    doc.html(resume, {
      callback: function (pdf) {
        // Save the generated PDF as "resume.pdf"
        pdf.save("resume.pdf");
      },
    });
  };

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto shadow-md p-6 rounded-md">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Simon Doe</h1>
            <p className="text-lg font-semibold">Senior Software Engineer</p>
            <p className="text-sm">0123 4567 890</p>
            <p className="text-sm">simon@yourwebsite.com</p>
            <p className="text-sm">www.yourwebsite.com</p>
            <p className="text-sm">New York</p>
          </div>
          <div>
            <img
              src="image_url_here"
              alt="Simon Doe"
              className="h-24 w-24 rounded-full"
            />
          </div>
        </div>

        <hr className="my-6" />

        <p className="text-sm">
          Summarise your career here. You can make a PDF version of your resume
          using our free Sketch template here.
          {/* Add your summarized career details */}
        </p>

        <hr className="my-6" />

        <div className="p-8">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Work Experiences</h2>
                {/* List of work experiences */}
                <div className="mb-4">
                  <p className="font-semibold mb-2">Senior Software Engineer</p>
                  <p>Google | 2019 - Present</p>
                  {/* Add role description */}
                </div>
                {/* Add other work experiences similarly */}
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Projects</h2>
                {/* List of projects */}
                <div className="mb-4">
                  <p className="font-semibold mb-2">Project Lorem Ipsum</p>
                  <p>Open Source</p>
                  {/* Add project description */}
                </div>
                {/* Add other projects similarly */}
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Skills</h2>
                <p>Technical:</p>
                <ul className="list-disc list-inside mb-4">
                  {/* List of technical skills */}
                  <li>JavaScript/Angular/React/Vue</li>
                  {/* Add other technical skills similarly */}
                </ul>
                <p>Professional:</p>
                <ul className="list-disc list-inside">
                  {/* List of professional skills */}
                  <li>Effective communication</li>
                  {/* Add other professional skills similarly */}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Education</h2>
                {/* List of education */}
                <div className="mb-2">
                  <p className="font-semibold">MSc in Computer Science</p>
                  <p>University College London | 2010 - 2011</p>
                </div>
                {/* Add other education similarly */}
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Awards</h2>
                {/* List of awards */}
                <div className="mb-2">
                  <p className="font-semibold">Award Lorem Ipsum</p>
                  <p>Microsoft lorem ipsum (2019)</p>
                </div>
                {/* Add other awards similarly */}
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Languages</h2>
                <p>English (Native), Spanish (Professional)</p>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Interests</h2>
                <p>Climbing, Snowboarding, Photography, Travelling</p>
              </div>
            </div>

            <div className="p-6 bg-gray-50">
              <div className="flex space-x-4">
                <a
                  href="https://github.com/username"
                  className="text-blue-500 hover:underline"
                >
                  github.com/username
                </a>
                <a
                  href="https://linkedin.com/in/username"
                  className="text-blue-500 hover:underline"
                >
                  linkedin.com/in/username
                </a>
                <a
                  href="https://twitter.com/twittername"
                  className="text-blue-500 hover:underline"
                >
                  @twittername
                </a>
                <button onClick={handleDownload}>Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
