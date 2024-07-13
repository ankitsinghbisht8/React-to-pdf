// RenderPDF.js
import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import StudentDataPDF from './StudentDataPDF';

const RenderPDF = ({ student }) => (
  <PDFViewer width="100%" height="600">
    <StudentDataPDF student={student} />
  </PDFViewer>
);

export default RenderPDF;
