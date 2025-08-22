import Link from "next/link";
const Header = () => {
    return (
        <>
            <div id="header-bg" className=" mx-auto fixed w-screen flex text-white justify-between shadow-2xl backdrop-blur-xl px-10 py-4 ">
                <Link href="/" className="text-xl text-white font-bold text-shadow-lg">Vaishnavi Pol</Link>
                <ul className="flex space-x-4 text-shadow-lg font-bold">
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                    <Link href="/About">
                        <li>About</li>
                    </Link>
                    <Link href="/Project">
                        <li>Projects</li>
                    </Link>
                    <Link href="/Contact">
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </>
    );
};

export default Header;
