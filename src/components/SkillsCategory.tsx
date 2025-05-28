import ItemSkills from "./itemSkills";

function SkillsCategory({ category, skills }: { category: string; skills: { title: string; image: string }[] }) {
  return (
    <div className="mb-20">
        <h3 className="text-2xl mb-3 text-center">{category}</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => (
                <ItemSkills title={skill.title} image={skill.image} />
            ))}
        </div>
    </div>
  );
}

export default SkillsCategory;