import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import "./gradient.css"
import { styles } from "./styles";
import { fadeIn, textVariant } from "./utils/motion";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary ProjectsCardBg p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />
                </div>

                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-[16px]'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[16px] ${tag.color} `}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = (props) => {
    return (
        <>
            <div className='mt-20 flex flex-wrap gap-7'>
                {props.data.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}

            </div>

        </>
    );
};

export default Works;
