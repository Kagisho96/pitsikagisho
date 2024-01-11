import React, { useRef } from "react";
import jsPDF from "jspdf";

const Resume = () => {
  const resumeRef = useRef(null);

  const handleDownload = () => {
    const doc = new jsPDF();
    const resume = resumeRef.current;

    if (resume) {
      // Decrease font size for the entire content
      const elements = resume.querySelectorAll("*");
      elements.forEach((el) => {
        el.style.fontSize = "2px"; // Adjust the font size as needed
      });

      doc.html(resume, {
        callback: function (pdf) {
          pdf.save("resume.pdf");
        },
        x: 10,
        y: 10
      });

      // Restore original font size after generating PDF (optional)
      elements.forEach((el) => {
        el.style.fontSize = ""; // Reset font size to default or remove the style attribute
      });
    } else {
      console.error("Resume element not found");
    }
  };


  return (
    <div className="bg-gray-100 p-8">
      <div ref={resumeRef} className="max-w-3xl mx-auto shadow-md p-6 rounded-md">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">John Doe</h1>
            <p className="text-lg font-semibold">Software Engineer</p>
            <p className="text-sm">123 Main Street, New York, NY</p>
            <p className="text-sm">john.doe@email.com</p>
            <p className="text-sm">www.johndoeportfolio.com</p>
            <p className="text-sm">LinkedIn: linkedin.com/in/johndoe</p>
          </div>
          <div>
            <img
              src="image_url_here"
              alt="John Doe"
              className="h-24 w-24 rounded-full"
            />
          </div>
        </div>

        <hr className="my-6" />

        <p className="text-sm">
          I am an experienced software engineer with a passion for building scalable and efficient applications. Skilled in JavaScript, React, Node.js, and database management.
        </p>

        <hr className="my-6" />

        <div className="p-8">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Work Experiences</h2>
                <div className="mb-4">
                  <p className="font-semibold mb-2">Senior Software Engineer</p>
                  <p>Google | 2019 - Present</p>
                  <p>Responsible for developing innovative solutions and leading a team of engineers.</p>
                </div>
                {/* Add other work experiences similarly */}
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Projects</h2>
                <div className="mb-4">
                  <p className="font-semibold mb-2">Project X</p>
                  <p>Open Source</p>
                  <p>Contributed to a large-scale open-source project focusing on enhancing user experience.</p>
                </div>
                {/* Add other projects similarly */}
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Skills</h2>
                <p>Technical:</p>
                <ul className="list-disc list-inside mb-4">
                  <li>JavaScript/React/Node.js</li>
                  <li>Database management</li>
                  {/* Add other technical skills similarly */}
                </ul>
                <p>Professional:</p>
                <ul className="list-disc list-inside">
                  <li>Team leadership</li>
                  <li>Problem-solving</li>
                  {/* Add other professional skills similarly */}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Education</h2>
                <div className="mb-2">
                  <p className="font-semibold">MSc in Computer Science</p>
                  <p>University College London | 2010 - 2011</p>
                </div>
                {/* Add other education similarly */}
              </div>
              
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Awards</h2>
                <div className="mb-2">
                  <p className="font-semibold">Innovation Award</p>
                  <p>Company XYZ (2018)</p>
                </div>
                {/* Add other awards similarly */}
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Languages</h2>
                <p>English (Fluent), Spanish (Intermediate)</p>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Interests</h2>
                <p>Reading, Hiking, Cooking</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      <button onClick={handleDownload}>Download CV</button>
    </div>
  );
};

export default Resume;
