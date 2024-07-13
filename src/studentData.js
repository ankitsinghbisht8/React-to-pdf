// studentData.js
const student = {
  name: 'John Doe',
  batch: '2022-2026',
  email: 'john.doe@example.com',
  academicRecords: [
    { semester: 'Semester 1', grade: 8.2 },
    { semester: 'Semester 2', grade: 7.9 },
    { semester: 'Semester 3', grade: 8.5 },
    { semester: 'Semester 4', grade: 8.1 },
    { semester: 'Semester 5', grade: 8.3 },
    { semester: 'Semester 6', grade: 8.1 },
    { semester: 'Semester 7', grade: 8.4 },
    { semester: 'Semester 8', grade: 8.6 },
  ],
  achievements: {
    academic: [
      'Top 10% in class',
      'Dean\'s List for 3 semesters',
      'Published a research paper in an international journal'
    ],
    nonAcademic: [
      'Winner of inter-college debate competition',
      'Captain of the college soccer team',
      'Volunteered for local community service'
    ]
  },
  attendance: 90,
  cgpa: 8.3,
  projects: [
    'Developed a machine learning model for predicting stock prices',
    'Created a web application for managing student records',
    'Designed a mobile app for real-time weather updates'
  ],
  experience: [
    'Internship at XYZ Corporation, Software Developer',
    'Part-time developer at ABC Solutions, Frontend Developer',
    'Research Assistant at University Lab, Machine Learning'
  ],
  gradesDistribution: [30, 25, 20, 15, 10], // Example distribution of grades: A, B, C, D, F
  attendanceDistribution: [90, 10] // Example distribution: Present, Absent
};

export default student;
