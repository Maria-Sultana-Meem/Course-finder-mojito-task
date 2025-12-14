
import { useState } from 'react';
import './App.css'
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Quote from './components/Quote';
import courses from './data/Courses';
import CourseList from './components/CourseList';

function App() {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(search.toLowerCase()) ||
    course.category.toLowerCase().includes(search.toLowerCase())
  );
  

  return (
    <>
      <div className="max-w-5xl mx-auto p-4">
      <Header />
      <Quote />
      <SearchBar search={search} setSearch={setSearch} />
      <CourseList courses={filteredCourses} />
    </div>
      
    </>
  )
}

export default App
