import Section from "./section";
import SkillsCategory from "./SkillsCategory";
import competencesData from "../content/competences.json";

interface Competence {
    category: string;
    skills: {
        title: string;
        image: string;
    }[];
}

function Competences() {
    const competences: Competence[] = JSON.parse(JSON.stringify(competencesData));

    return (
        <Section title="Mes outils maîtrisés" id="competences">
            {competences.map((competence: Competence, index: number) => (
                <SkillsCategory key={index} category={competence.category} skills={competence.skills} />
            ))}
        </Section>
    );
}

export default Competences;