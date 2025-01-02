import { technicalSkills } from "../data"

function Skills() {
  return (
    <div>
        <div className="w-full border-b-[1px] border-black mt-6 text-2xl mb-4">
        TECHNICAL SKILLS
      </div>
      <div className="md:grid md:grid-cols-2 gap-4">
        <div className="flex items-center">
            <li className="mr-2 font-semibold ">Programming:</li>
            <p>{technicalSkills.programming}</p>
        </div>
        <div className="flex items-center">
            <li className="mr-2 font-semibold"> Web Technologies:</li>
            <p>{technicalSkills. webTechnologies}</p>
        </div>
        <div className="flex items-center">
            <li className="mr-2 font-semibold">Libraries:</li>
            <p>{technicalSkills.libraries}</p>
        </div>
        <div className="flex items-center">
            <li className="mr-2 font-semibold">Miscellaneous:</li>
            <p>{technicalSkills.miscellaneous}</p>
        </div>
        <div className="flex items-center">
            <li className="mr-2 font-semibold">IDE Tools:</li>
            <p>{technicalSkills.ideTools}</p>
        </div>
        <div className="flex items-center">
            <li className="mr-2 font-semibold">Mech Tools:</li>
            <p>{technicalSkills.mechTools}</p>
        </div>
      </div>
      <div className="flex justify-end"><span>{technicalSkills.note}</span></div>
    </div>
  )
}

export default Skills