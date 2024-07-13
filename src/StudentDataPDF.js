// StudentDataPDF.js
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import Charts from './Charts';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  collegeName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flexGrow: 1,
    alignSelf: 'center',
  },
  section: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '50%',
    backgroundColor: '#f0f0f0',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    padding: 5,
  },
  tableCol: {
    width: '50%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    padding: 5,
  },
  tableCell: {
    textAlign: 'center',
  },
  graphContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  graphImage: {
    width: '60%',
    height: 'auto',
  },
});

const StudentDataPDF = ({ student }) => {
  const charts = Charts({ data: student });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Image style={styles.logo} src="https://via.placeholder.com/50" />
          <Text style={styles.collegeName}>Bhagwan Parshuram Institute Of Technology</Text>
        </View>

        {/* Student Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Student Information</Text>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}><Text>Name</Text></View>
            <View style={styles.tableCol}><Text>{student.name}</Text></View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}><Text>Batch</Text></View>
            <View style={styles.tableCol}><Text>{student.batch}</Text></View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}><Text>Email</Text></View>
            <View style={styles.tableCol}><Text>{student.email}</Text></View>
          </View>
        </View>

        {/* Academic Records */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Academic Records</Text>
          {student.academicRecords.map((record, index) => (
            <View key={index} style={styles.table}>
              <View style={styles.tableRow}>
                <View style={styles.tableColHeader}><Text>Semester</Text></View>
                <View style={styles.tableColHeader}><Text>Grade</Text></View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCol}><Text>{record.semester}</Text></View>
                <View style={styles.tableCol}><Text>{record.grade}</Text></View>
              </View>
            </View>
          ))}
          {/* Academic Graph */}
          <View style={styles.graphContainer}>
            <Text>Grades Distribution:</Text>
            <Image style={styles.graphImage} src={charts.gradesPieChart} />
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}><Text>Academic</Text></View>
            <View style={styles.tableCol}><Text>{student.achievements.academic.join(', ')}</Text></View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}><Text>Non-Academic</Text></View>
            <View style={styles.tableCol}><Text>{student.achievements.nonAcademic.join(', ')}</Text></View>
          </View>
        </View>

        {/* Attendance */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Attendance</Text>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}><Text>Percentage</Text></View>
            <View style={styles.tableCol}><Text>{student.attendance}%</Text></View>
          </View>
          {/* Attendance Graph */}
          <View style={styles.graphContainer}>
            <Text>Attendance Graph:</Text>
            <Image style={styles.graphImage} src={charts.attendancePieChart} />
          </View>
        </View>

        {/* CGPA */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>CGPA</Text>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}><Text>CGPA</Text></View>
            <View style={styles.tableCol}><Text>{student.cgpa}</Text></View>
          </View>
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {student.projects.map((project, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={styles.tableColHeader}><Text>Project {index + 1}</Text></View>
              <View style={styles.tableCol}><Text>{project}</Text></View>
            </View>
          ))}
        </View>

        {/* Experience and Internships */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience & Internships</Text>
          {student.experience.map((exp, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={styles.tableColHeader}><Text>Experience {index + 1}</Text></View>
              <View style={styles.tableCol}><Text>{exp}</Text></View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default StudentDataPDF;
