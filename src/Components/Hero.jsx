import Link from "next/link"

const Hero = () => {
    return (
        <>
            <div id="bg" className="w-screen mx-auto h-screen py-55 flex flex-col space-y-20 content-center text-center">
                <h1 className="text-6xl text-black text-shadow-[4px_4px_3px_gray] font-bold">Hey, I'm Vaishnavi Pol </h1>
                <p className="max-w-xl mx-auto">A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>
                <Link className=" w-[250px] p-4 font-bold text-xl mx-auto bg-purple-800 text-white rounded-lg" href="/Projects">Projects</Link>
            </div>

        </>
    )
}

export default Hero