import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function ItemXp({ xp }: { xp: { poste: string; entreprise: string; dateDeb: string; dateFin?: string; image?: string; missions?: string[] } }) {
    const [open, setOpen] = useState(false);
    
    return (
        <div className="w-full max-w-2xl p-4">
            <button onClick={() => setOpen(!open)} className="w-full hover:cursor-pointer">
                <div className="flex items-center w-full gap-2 max-w-2xl p-4 border-b border-zinc-300 dark:border-zinc-600">
                    <h3 className="text-lg md:text-xl text-start font-semibold flex-1">{xp.poste}</h3>
                    <div className="min-w-1/2 flex flex-col items-end">
                        <p className="text-lg font-medium text-end">{xp.entreprise}</p>
                        <p className="text-sm font-light">{xp.dateDeb} - {xp.dateFin ? xp.dateFin : 'Présent'}</p>
                    </div>
                    {open ? <ChevronUp className="w-6 h-6 flex-shrink-0" /> : <ChevronDown className="w-6 h-6 flex-shrink-0" />}
                </div>
            </button>
            <div
                className={`transition-all duration-300 overflow-hidden ${
                open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="p-4 text-sm text-zinc-700 dark:text-zinc-300">
                    {xp.missions && xp.missions.map((mission: string, index: number) => (
                        <li key={index} className="mb-2">
                            {mission}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ItemXp;