// App.js
import React from 'react';
import RenderPDF from './RenderPDF';
import student from './studentData';

const App = () => {
  return (
    <div>
      <h1>Student Data</h1>
      <RenderPDF student={student} />
    </div>
  );
};

export default App;
