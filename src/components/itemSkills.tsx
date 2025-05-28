function ItemSkills({ title, image }: { title: string; image: string }) {
    return (
        <div className="flex flex-col items-center justify-between w-full max-w-2xl p-4 border-b border-zinc-300 dark:border-zinc-600">
            <img src={`logos/${image}`} alt={title} className="w-24 h-24 object-contain p-4" />
            <h3 className="text-xl font-semibold">{title}</h3>
        </div>
    );
}

export default ItemSkills;