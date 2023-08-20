import IBaseSaction from "@/interfaces/IBaseSaction";
import React from "react";

interface ProjectsSectionProps extends IBaseSaction {

}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ sectionId }) => (
    <div id={sectionId} className="flex flex-col items-center min-h-screen bg-white lg:px-6 pt-8">
        <h1 className="font-bold text-3xl">{'<'}PROJECTS{'/>'}</h1>
        <span>Under construction</span>
    </div>
);

export default ProjectsSection;
