import { FaGithubSquare } from "react-icons/fa";
import { ChessKnight } from "lucide-react";

function Hero() {
    return(
        <section id="home" className="min-h-[calc(100vh-80px)] flex-1 bg-[#0B1120] flex items-center px-8 md:px-20">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                {/* Left side text */}

                <div className="text-center md:text-left">

                    <p className="text-blue-500 font-semibold mb-4 text-lg">Hello, I'm</p>

                    <h1 className="text-white text-5xl md:text-7xl font-bold mb-4">
                        Hem{" "}
                        <span className="text-[#60A5FA] hover:text-blue-300 transition-colors duration-300">Khoyani</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-blue-300 mb-6 ">Aspiring Web Developer</h2>

                    <p className="text-lg md:text-xl text-zinc-300 mb-4">
                        Developer {" "}
                        <span className="text-[#60A5FA]">|</span>
                        {" "} Designer {" "}
                        <span className="text-[#60A5FA]">|</span>
                        {" "} Chess Enthusiast
                    </p>

                    <p className="text-blue-400 text-lg leading-relaxed mb-8">
                        I love coding, designing, building amazing digital experiences, creating musics and also a good player in Chess.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 md:justify-start">

                        <button className="bg-blue-500 hover:bg-blue-600 text-blue-950 hover:text-white px-6 py-3 rounded-full font-semibold shadow-lg text-center transition-colors duration-300 ease-in-out cursor-pointer">View Projects</button>
                        <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-blue-950 px-6 py-3 rounded-full font-semibold shadow-lg text-center transition-colors duration-300 ease-in-out cursor-pointer">Contact Me</button>

                    </div>

                    {/* Social Links */}

                    <div className='flex justify-center md:justify-start gap-5 mt-8'>

                        {/* GitHub */}

                        <a href="http://github.com/Khoyani-Hem" target="_blank" rel="noopener noreferrer" aria-label='GitHub' className='p-3 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white hover:-translate-y-1 transition-all duration-300'>
                            <FaGithubSquare size={24} />
                        </a>

                        {/* Chess.com */}

                        <a href="http://chess.com/member/kinda_innocent_11" target="_blank" rel="noopener noreferrer" aria-label='Chess.com' className='p-3 rounded-full border border-green-500 text-green-400 hover:bg-green-500 hover:text-white hover:-translate-y-1 transition-all duration-300'>
                            <ChessKnight  size={24} />
                        </a>

                    </div>

                </div>

                {/* right side profile picture */}

                <div className="flex justify-center items-center">

                    <div className="relative">

                        {/* Blue glow */}

                        <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full"></div>

                        {/* Decorative Border */}

                        <div className="relative p-2 border-2 rounded-3xl border-blue-500/50 rotate-6 hover:rotate-0 transition-transform duration-500"></div>

                        <img src="/img-anime-style-profile-picture.png" alt="Profile Picture [ Hem Khoyani ]" className="w-64 h-76 md:w-80 md:h-96 object-cover rounded-2xl mb-6 md:mb-0" />

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;