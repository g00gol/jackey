import Image from "next/image";
import { useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function Hero() {
  return (
    <div className="mt-16 md:mt-48">
      <div className="text-xl md:text-4xl flex flex-col md:block">
        Hi, I&apos;m Jackey, <br />
        an aspiring{" "}
        <mark className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-violet to-skyblue">
          Software Developer
        </mark>
      </div>
      <div className="text-lg md:text-3xl hidden md:block text-gray-dark">
        I currently study Computer Science <br />
        at Stevens Institute of Technology.
      </div>
      <div className="absolute -z-50 left-0 -top-32">
        <HeroImage url={`/images/hero.png`} />
        <div className="absolute bottom-0">
          <HeroImage url={`/images/mountains.png`} />
        </div>
      </div>
    </div>
  );
}

const HeroImage = (props) => {
  const [aspectRatio, setAspectRatio] = useState(16 / 9);
  const size = useWindowDimensions();

  return (
    <Image
      className="block"
      alt={""}
      src={props.url}
      width={size.width ? size.width : 0}
      height={size.width ? size.width / aspectRatio : 0}
      layout="fixed"
      onLoadingComplete={({ naturalWidth, naturalHeight }) => {
        setAspectRatio(naturalWidth / naturalHeight);
      }}
    />
  );
};
