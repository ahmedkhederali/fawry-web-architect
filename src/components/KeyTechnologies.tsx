import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineRule } from "react-icons/md";
import { AiOutlinePartition } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

type Technology = {
    name: string;
    icon: string;
};

interface KeyTechnologiesProps {
    items: Technology[];
}

const iconsMap: Record<string, JSX.Element> = {
    FaProjectDiagram: <FaProjectDiagram />,
    AiOutlinePartition: <AiOutlinePartition />,
    MdOutlineRule: <MdOutlineRule />,
    HiOutlineDocumentText: <HiOutlineDocumentText />,
};

const KeyTechnologies: React.FC<KeyTechnologiesProps> = ({ items }) => {
    return (
        <div className="container bg-white p-6 rounded-xl shadow-md w-full">
            <h2 className="text-2xl text-[#006b99] font-semibold mb-6 flex items-center gap-2">
                Our key technologies include
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((tech, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center justify-center p-4 bg-[#f8fafc] rounded-xl shadow hover:shadow-md transition"
                    >
                        <span className="text-4xl text-[#003366] mb-2">
                            {iconsMap[tech.icon]}
                        </span>
                        <span className="text-base font-medium text-center text-[#003366]">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KeyTechnologies;
