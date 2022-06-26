import Image from "next/image"
import { useState } from "react"

export default function Nav() {
	const [isShow, setIsShow] = useState(false)

	return (
		<div className="bg-transparent w-full text-sm md:text-lg">
			<div className="py-6 flex justify-between align-center">

				<a href="#">Jackey Yang</a>
				<span className="hidden md:block space-x-8">
					<a href="">Projects</a>
					<a href="">About</a>
					<a href="">Contact</a>
				</span>

				<div className="md:hidden">
					{!isShow ? (
						<button onClick={() => setIsShow(!isShow)}>
							<Image src="/hamburger.svg" height={15} width={25} />
						</button>
					) : (
						<button onClick={() => setIsShow(!isShow)}>
							close
						</button>
					)}
				</div>
			</div>
		</div>
	)
}