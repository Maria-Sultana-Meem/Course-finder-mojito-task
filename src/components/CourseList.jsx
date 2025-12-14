const CourseList = ({ courses }) => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
      {courses.length === 0 ? (
        <p>No courses found</p>
      ) : (
        courses.map(course => (
          <div
            key={course.id}
            className="bg-white p-4 rounded shadow"
          >
            <h3 className="font-semibold">{course.name}</h3>
            <p className="text-sm text-gray-500">{course.category}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CourseList;
