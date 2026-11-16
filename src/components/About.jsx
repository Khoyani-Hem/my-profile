function About() {
    return (
        <section id="about" className="min-h-screen w-full px-4.5 md:px-8 track pt-28 pb-12 scroll-mt-20 bg-[#111827]">

            {/* Main Container */}

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

                {/* Left Column */}

                <div className="flex flex-col items-start">

                    {/* About Heading */}

                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">

                        <span className="text-blue-400">About {" "} </span>
                        Me
                        <span className="text-blue-400"> . </span>

                    </h2>

                    {/* Heading Underline */}

                    <div className="mt-1 h-1 w-20 rounded-full bg-blue-400"></div>

                    {/* Introduction */}

                    <p className="mt-2 max-w-2xl text-slate-300 text-base md:text-lg leading-8">
                        Introduction goes here...
                    </p>

                    {/* Left Section */}

                    <div className="w-full flex flex-col items-start mt-5 border border-slate-700 rounded-2xl p-4 md:p-5 min-h-87.5">

                        {/* Intoduction */}

						<h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
							<span className="text-blue-400">Intro</span>duction
							<span className="text-blue-400"> . </span>
						</h3>

						<p className="mt-1.5 text-slate-300 text-base md:text-lg leading-8 tracking-tighter">
							I'm a student passionate about technology, programming, and creative problem-solving. I enjoy building morden websites, exploring new technologies and turning creative ideas into reality through code.
						</p>

						
						{/* My Interests */}

						<div className="mt-7 w-full">

						    <h3 className="text-xl font-semibold text-white">
						        My Interests
						    </h3>

						    {/* Interests Grid */}

						    <div className="mt-3 grid grid-cols-2 gap-2">

						        {/* Interest 1 */}

						        <div className="p-3 rounded-xl border border-slate-700 bg-slate-800/40">
						            <h4 className="text-blue-400 font-medium tracking-tight">
						                Web Development
						            </h4>
						            <p className="mt-0.5 text-sm text-slate-400 leading-6">
						                Building modern and responsive websites.
						            </p>
						        </div>

						        {/* Interest 2 */}

						        <div className="p-3 rounded-xl border border-slate-700 bg-slate-800/40">
						            <h4 className="text-blue-400 font-medium tracking-tight">
						                UI/UX Design
						            </h4>
						            <p className="mt-0.5 text-sm text-slate-400 leading-6">
						                Creating clean and user-friendly interfaces.
						            </p>
						        </div>

						        {/* Interest 3 */}

						        <div className="p-3 rounded-xl border border-slate-700 bg-slate-800/40">
						            <h4 className="text-blue-400 font-medium tracking-tight">
						                Chess
						            </h4>
						            <p className="mt-0.5 text-sm text-slate-400 leading-6">
						                Exploring strategy and problem-solving.
						            </p>
						        </div>

						        {/* Interest 4 */}

						        <div className="p-3 rounded-xl border border-slate-700 bg-slate-800/40">
						            <h4 className="text-blue-400 font-medium tracking-tight">
						                Technology
						            </h4>
						            <p className="mt-0.5 text-sm text-slate-400 leading-6">
						                Exploring innovative ideas and digital tools.
						            </p>
						        </div>

						    </div>
						</div>

                    </div>

                </div>


                {/* Right Column */}

				<div className="w-full border border-slate-700 rounded-2xl p-4 md:p-5 min-h-112.5 flex flex-col">

				    {/* Profile Overview */}

				    <div>
				        <p className="text-sm font-semibold tracking-widest uppercase text-blue-400">
				            Profile Overview
				        </p>

				        <h3 className="mt-2 text-3xl font-bold text-white">
				            Developer Profile
				        </h3>

				        <p className="mt-3 text-slate-400 leading-7">
				            A curious learner exploring programming,
				            web development, and creative design.
				        </p>
				    </div>

				    {/* Technologies */}

				    <div className="mt-6">

				        <h3 className="text-xl font-semibold text-white">
				            Technologies I'm Learning
				        </h3>

				        <div className="mt-2.5 flex flex-wrap gap-3">

				            {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Python", "C"].map((tech) => (
				                <span
				                    key={tech}
				                    className="px-3 py-2 rounded-lg bg-slate-800 text-blue-400 border border-slate-700 text-sm"
				                >
				                    {tech}
				                </span>
				            ))}

				        </div>
				    </div>
				    
					{/* My Projects */}

					<div className="mt-6">

					    <h3 className="text-xl font-semibold text-white">
					        My Projects
					    </h3>

					    {/* Projects Grid */}

					    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">

					        {/* Portfolio Project */}

					        <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700">

					            <h4 className="font-semibold text-white">
					                Personal Portfolio
					            </h4>

					            <p className="mt-1 text-sm leading-6 text-slate-400">
					                My personal website showcasing my skills,
					                interests, and development journey.
					            </p>

					            <span className="inline-block mt-3 text-xs text-blue-400">
					                In Development
					            </span>

					        </div>

					        {/* ChessBlaze Project */}

					        <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700">

					            <h4 className="font-semibold text-white">
					                ChessBlaze
					            </h4>

					            <p className="mt-1 text-sm leading-6 text-slate-400">
					                A chess analytics platform designed to
					                explore games and understand chess positions.
					            </p>

					            <span className="inline-block mt-3 text-xs text-blue-400">
					                In Development
					            </span>

					        </div>

					    </div>
					</div>


				    {/* Bottom Message */}

				    <div className="mt-auto pt-10">
				        <div className="border-t border-slate-700 pt-5">
				            <p className="text-sm text-slate-500">
				                Always learning. Always building.
				            </p>
				        </div>
				    </div>

				</div>


            </div>

        </section>
    );
}

export default About;
