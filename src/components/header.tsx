function Header() {
    return (
        <section id="header" className="grid grid-cols-1 md:grid-cols-2 max-h-[90svh] border-b border-zinc-300 dark:border-zinc-600 dark:text-gray-300">
            <div className="min-h-[50svh] md:min-h-auto flex flex-col justify-center items-center p-4 border-r border-zinc-300 dark:border-zinc-600">
                <h1 className="text-7xl md:text-9xl font-display text-center">Lucas <br /> Debeve</h1>
                <p className="text-xl md:text-2xl font-light text-center mt-4">Président de la République Française</p>
            </div>
            <div className="h-full">
                <img src="avatar3D.png" alt="huile" className="object-cover w-full h-full max-h-[90svh] block dark:hidden lg:pb-[1px]" />
                <img src="avatar3D-nuit.png" alt="huile" className="object-cover w-full h-full max-h-[90svh] hidden dark:block lg:pb-[1px]" />
            </div>
        </section>
    );
}

export default Header;