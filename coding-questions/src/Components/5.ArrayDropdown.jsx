import React, { useState } from 'react';

const ArrayDropdown = () => {
  const courses = ["React", "Angular", "Vue"];
  const [selectedCourse, setSelectedCourse] = useState('');

  return (
    <div>
      <h3>Select a Course:</h3>
      <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
        <option value="">-- Select --</option>
        {courses.map((course, index) => (
          <option value={course} key={index}>{course}</option>
        ))}
      </select>

      <p>Selected: {selectedCourse}</p>
    </div>
  );
};

export default ArrayDropdown;
