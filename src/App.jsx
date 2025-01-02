import Achievements from "./components/achievements"
import Courses from "./components/courses"
import Education from "./components/education"
import Info from "./components/info"
import Projects from "./components/projects"
import Skills from "./components/skills"

function App() {
  

  return (
    <div className="w-[100vw] h-full p-16">
       <Info/>
       <Education/>
       <Projects/>
       <Skills/>
       <Achievements/>
       <Courses/>
    </div>
  )
}

export default App
