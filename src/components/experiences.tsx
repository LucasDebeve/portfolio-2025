import ItemXp from "./itemXp";
import Section from "./section";
import experiencesData from "../content/experiences.json";

// order experiences by dateDeb
interface Experience {
    poste: string;
    entreprise: string;
    dateDeb: string;
    image: string;
    missions?: string[];
}

function Experiences() {
    // get data from json file
    const experiences: Experience[] = JSON.parse(JSON.stringify(experiencesData));

    experiences.sort((a: Experience, b: Experience) => new Date('01/' + a.dateDeb).getTime() - new Date('01/' + b.dateDeb).getTime());

    experiences.reverse();

    return (
        <Section title="Mes expériences" id="experiences">
            <div className="flex flex-col items-center justify-between w-full max-w-2xl p-4">
                {experiences.map((experience: Experience, index: number) => (
                    <ItemXp key={index} xp={experience} />
                ))}
            </div>
        </Section>
    );
}

export default Experiences;