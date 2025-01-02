
import { achievements } from "../data";
import code from '../assets/code.png'
function Achievements() {
  return (
    <div>
      <div className="w-full border-b-[1px] border-black mt-6 text-2xl mb-4">
        ACHIEVEMENTS
      </div>
      <div>
        {achievements.map((ach, index) => {
            
          return <li key={index}>
            <span className="font-semibold mr-4 mb-3">{ach.exam}</span>
            {ach.details}
          </li>
        
        })}
      </div>
    </div>
  );
}

export default Achievements;
