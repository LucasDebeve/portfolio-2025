import type React from "react";

function Section({ title, children, id}: { title: string; id: string; children: React.ReactNode }) {
    if (!id) {
        id = title.toLowerCase().replace(/\s+/g, "-");
    }
    return (
        <section id={id} className="flex flex-col items-center justify-center min-h-screen py-16 border-b border-zinc-300 dark:border-zinc-600 dark:text-gray-300">
            <h1 className="text-4xl font-display mb-5">{title}</h1>
            {children}
        </section>
    );
}

export default Section;