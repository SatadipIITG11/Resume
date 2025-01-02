import { keyCourses } from "../data"
function Courses() {
  return (
    <div>
        <div className="w-full border-b-[1px] border-black mt-6 text-2xl mb-4">
        KEY COURSES TAKEN
      </div>
      <div>
        {keyCourses.map((course,index)=>(
           <li key={index}><span className="font-semibold mr-3">{course.course}</span><span>{course.detail}</span></li>
        ))}
      </div>
    </div>
  )
}

export default Courses