"use client"
import { faSquareGithub, faSquareInstagram, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const social = () => {
    return (
        <div className=" absolute hidden lg:block top-[35%]">
            <div className="flex justify-evenly content-evenly w-15 h-50 bg-gray-100 shadow-[5px_5px_10px_gray] rounded-br-4xl rounded-tr-4xl">
                <ul className="flex flex-col content-evenly justify-evenly">
                    <Link href="https://www.linkedin.com/feed/">
                        <FontAwesomeIcon icon={faSquareLinkedin} size="2x" color="#004182" className=" hover:text-[#0a66c2]" />
                    </Link>
                    <Link href="https://github.com/0925vaishu?tab=repositories">
                        <FontAwesomeIcon icon={faSquareGithub} size="2x" color="gray" className="hover:text-[#333]" />
                    </Link>
                    <Link href="#">
                        <FontAwesomeIcon icon={faSquareInstagram} size="2x" color="#f56040" className="hover:text-[#fd1d1d]" />
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default social