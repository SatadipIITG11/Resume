import { educationData } from "../data.js";
function Education() {
  return (
    <div>
      <div className="w-full border-b-[1px] border-black mt-6 text-2xl mb-2">
        EDUCATION
      </div>
      <table border="1" style={{ borderCollapse: "collapse", width: "100%" }} className="min-w-full table-auto border-collapse text-left text-sm font-sans">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-black px-2 py-2">Degree/Certificate</th>
            <th className="border border-black px-2 py-2">Institute/Board</th>
            <th className="border border-black px-2 py-2">CGPA/Percentage</th>
            <th className="border border-black px-2 py-2">Year</th>
          </tr>
        </thead>
        <tbody>
          {educationData.map((row, index) => (
            <tr key={index}>
              <td className="border border-black px-2 py-2 align-middle">{row.degree}</td>
              <td className="border border-black px-2 py-2 align-middle">{row.institute}</td>
              <td className="border border-black px-2 py-2 align-middle">{row.score}</td>
              <td className="border border-black px-2 py-2 align-middle">{row.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Education;
