import logo from '../assets/logo.png'
import { userDetails } from '../data.js'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import code from '../assets/code.png'

function Info() {
  return (
    <div className="flex items-center md:justify-between md:flex-row w-full flex-col">
        <div className="flex items-center">
            <img src={logo} alt="" height={100} width={100} className='mx-4'/>
            <div>
                <h1 className=' font-semibold text-3xl'>{userDetails.name}</h1>
                <p>{userDetails.rollNumber}</p>
                <p>{userDetails.education.degree}</p>
                <p>{userDetails.education.minor}</p>
                <p>{userDetails.education.institute}</p>
            </div>
        </div>
        <div className="flex flex-col">
            <p>{userDetails.contact.phone}</p>
            <a href="" target="_blank">{userDetails.contact.emailIITG}</a>
            <a href="" target="_blank">{userDetails.contact.emailPersonal}</a>
            <a href={userDetails.links.github} target="_blank" className='flex items-center gap-2'>
                <FaGithub/>
                <span>Github</span>
            </a>
            <a href={userDetails.links.linkedin} target="_blank" className='flex items-center gap-2'>
                <FaLinkedin/>
                <span>Linkedin</span>
            </a>
            <a href="https://codeforces.com/profile/Satadip.Forz" target="_blank" className='flex items-center gap-2'>
                 <img src={code} alt="" height={24} width={24}/>
                <span>Satadip.Forz</span>
            </a>
        </div>
    </div>
  )
}

export default Info