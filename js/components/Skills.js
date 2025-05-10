function SkillBar({ skill, level, color = "serene" }) {
  return (
    <div className="mb-6 fade-in" data-id="ami22yxkz" data-path="js/components/Skills.js">
      <div className="flex justify-between mb-1" data-id="4wrvti6ed" data-path="js/components/Skills.js">
        <span className="font-medium text-gray-700" data-id="utw4p85t7" data-path="js/components/Skills.js">{skill}</span>
        <span className="text-sm text-gray-500" data-id="raupplqzf" data-path="js/components/Skills.js">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full" data-id="r5mlsmnz6" data-path="js/components/Skills.js">
        <div
          className={`h-2 rounded-full bg-${color}-500`}
          style={{ width: `${level}%` }} data-id="sduj0thjq" data-path="js/components/Skills.js"></div>
      </div>
    </div>);

}

function Skills() {
  const technicalSkills = [
  { skill: "JavaScript", level: 95 },
  { skill: "React.js", level: 90 },
  { skill: "HTML5/CSS3", level: 95 },
  { skill: "Node.js", level: 85 },
  { skill: "UI/UX Design", level: 80 }];


  const softSkills = [
  { skill: "Project Management", level: 85 },
  { skill: "Team Leadership", level: 80 },
  { skill: "Communication", level: 90 },
  { skill: "Problem Solving", level: 95 },
  { skill: "Time Management", level: 85 }];


  return (
    <section id="skills" className="py-16 bg-white" data-id="6i1hj9qj7" data-path="js/components/Skills.js">
      <div className="blog-container" data-id="w75xdwnm7" data-path="js/components/Skills.js">
        <div className="text-center mb-12" data-id="blf79ze38" data-path="js/components/Skills.js">
          <span className="inline-block px-4 py-1 rounded-full bg-serene-100 text-serene-700 font-medium text-sm mb-4" data-id="iihwvoh2m" data-path="js/components/Skills.js">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="dl8m9usmh" data-path="js/components/Skills.js">Skills & Proficiencies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto" data-id="hpurw7lsv" data-path="js/components/Skills.js">
            I've developed a diverse set of skills throughout my career, always striving to learn and improve.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" data-id="nqbn4pc3x" data-path="js/components/Skills.js">
          <div className="fade-in" data-id="n53s28e4y" data-path="js/components/Skills.js">
            <h3 className="text-xl font-semibold mb-6 text-serene-700" data-id="v1o6w90fb" data-path="js/components/Skills.js">Technical Skills</h3>
            {technicalSkills.map((skill, index) =>
            <SkillBar
              key={index}
              skill={skill.skill}
              level={skill.level} />

            )}
          </div>
          
          <div className="fade-in" style={{ animationDelay: '0.3s' }} data-id="71zrbscg5" data-path="js/components/Skills.js">
            <h3 className="text-xl font-semibold mb-6 text-calm-700" data-id="9wab4iqsd" data-path="js/components/Skills.js">Soft Skills</h3>
            {softSkills.map((skill, index) =>
            <SkillBar
              key={index}
              skill={skill.skill}
              level={skill.level}
              color="calm" />

            )}
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center" data-id="o5r6iq927" data-path="js/components/Skills.js">
          <div className="bg-serene-50 p-6 rounded-lg fade-in" data-id="zgikxlypy" data-path="js/components/Skills.js">
            <div className="text-4xl text-serene-500 mb-4" data-id="ftqimpolz" data-path="js/components/Skills.js">
              <i className="fas fa-laptop-code" data-id="cez8j07cx" data-path="js/components/Skills.js"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2" data-id="h2pveykqp" data-path="js/components/Skills.js">Frontend Development</h3>
            <p className="text-gray-600 text-sm" data-id="tniw0s8co" data-path="js/components/Skills.js">Creating beautiful, responsive, and accessible user interfaces</p>
          </div>
          
          <div className="bg-serene-50 p-6 rounded-lg fade-in" style={{ animationDelay: '0.1s' }} data-id="undv4zoqh" data-path="js/components/Skills.js">
            <div className="text-4xl text-serene-500 mb-4" data-id="ulvt0oh8b" data-path="js/components/Skills.js">
              <i className="fas fa-server" data-id="awqk4x5y1" data-path="js/components/Skills.js"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2" data-id="d4kqc230z" data-path="js/components/Skills.js">Backend Development</h3>
            <p className="text-gray-600 text-sm" data-id="sbsq8k8a0" data-path="js/components/Skills.js">Building robust server-side applications and APIs</p>
          </div>
          
          <div className="bg-serene-50 p-6 rounded-lg fade-in" style={{ animationDelay: '0.2s' }} data-id="vwzksuxo5" data-path="js/components/Skills.js">
            <div className="text-4xl text-serene-500 mb-4" data-id="5jtmwb28p" data-path="js/components/Skills.js">
              <i className="fas fa-paint-brush" data-id="tpj2kvhi0" data-path="js/components/Skills.js"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2" data-id="17lnxj288" data-path="js/components/Skills.js">UI/UX Design</h3>
            <p className="text-gray-600 text-sm" data-id="jgvs5wr7k" data-path="js/components/Skills.js">Designing intuitive and engaging user experiences</p>
          </div>
          
          <div className="bg-serene-50 p-6 rounded-lg fade-in" style={{ animationDelay: '0.3s' }} data-id="1gxqopuoo" data-path="js/components/Skills.js">
            <div className="text-4xl text-serene-500 mb-4" data-id="8jqbkennv" data-path="js/components/Skills.js">
              <i className="fas fa-mobile-alt" data-id="hto1eeott" data-path="js/components/Skills.js"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2" data-id="o7kyy0668" data-path="js/components/Skills.js">Mobile Development</h3>
            <p className="text-gray-600 text-sm" data-id="raopyrpj7" data-path="js/components/Skills.js">Building cross-platform applications for iOS and Android</p>
          </div>
        </div>
      </div>
    </section>);

}