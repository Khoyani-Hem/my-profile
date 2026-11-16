
function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen w-full px-6 md:px-16 pt-28 pb-16 scroll-mt-20 bg-[#0B1120]"
        >

            {/* Main Container */}

            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}

                <div className="flex flex-col items-start">

                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        My{" "}
                        <span className="text-blue-400">Projects</span>
                        <span className="text-blue-400">.</span>
                    </h2>

                    {/* Heading Underline */}

                    <div className="mt-4 h-1 w-20 rounded-full bg-blue-400"></div>

                    {/* Section Introduction */}

                    <p className="mt-6 max-w-2xl text-slate-300 text-base md:text-lg leading-relaxed">
                        Here are some projects I'm building to explore
                        new technologies, improve my development skills,
                        and turn ideas into reality.
                    </p>

                </div>

                {/* Projects Grid */}

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Project 1 - Personal Portfolio */}

                    <div className="border border-slate-700 rounded-2xl p-6 md:p-8 bg-slate-800/30">

                        <span className="text-sm text-blue-400 font-medium">
                            PROJECT 01
                        </span>

                        <h3 className="mt-4 text-2xl font-bold text-white">
                            Personal Portfolio
                        </h3>

                        <p className="mt-4 text-slate-400 leading-7">
                            A personal portfolio website showcasing my
                            introduction, interests, skills, and projects.
                            Built to present my development journey.
                        </p>

                        {/* Technologies */}

                        <div className="mt-6 flex flex-wrap gap-2">
                            {["React", "Tailwind CSS", "JavaScript"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 rounded-lg bg-slate-800 text-blue-400 border border-slate-700 text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <p className="mt-8 text-sm text-blue-400">
                            In Development
                        </p>

                    </div>

                    {/* Project 2 - ChessBlaze */}

                    <div className="border border-slate-700 rounded-2xl p-6 md:p-8 bg-slate-800/30">

                        <span className="text-sm text-blue-400 font-medium">
                            PROJECT 02
                        </span>

                        <h3 className="mt-4 text-2xl font-bold text-white">
                            ChessBlaze
                        </h3>

                        <p className="mt-4 text-slate-400 leading-7">
                            A chess analytics platform designed to analyse
                            chess games, explore positions, and help players
                            understand their gameplay.
                        </p>

                        {/* Technologies */}

                        <div className="mt-6 flex flex-wrap gap-2">
                            {["React", "JavaScript", "Stockfish"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 rounded-lg bg-slate-800 text-blue-400 border border-slate-700 text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <p className="mt-8 text-sm text-blue-400">
                            In Development
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Projects;
