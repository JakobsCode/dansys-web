import { CiCalendar } from "react-icons/ci";
import { CiDatabase } from "react-icons/ci";
import { HiCodeBracket } from "react-icons/hi2";
import { CiCloudRainbow } from "react-icons/ci";
import { PiNetworkLight } from "react-icons/pi";
import { CiPower } from "react-icons/ci";

const TiltedExperienceScroll = () => {
  const experiences = [
    {
      count: 25,
      description: "Webentwicklung",
      icon: CiCalendar,
    },
    {
      count: 5,
      description: "Datenbankadministration",
      icon: CiDatabase,
    },
    {
      count: 8,
      description: "Softwareentwicklung",
      icon: HiCodeBracket,
    },
    {
      count: 6,
      description: "Cloud-Lösungen",
      icon: CiCloudRainbow,
    },
    {
      count: 7,
      description: "Netzwerktechnik",
      icon: PiNetworkLight,
    },
    {
      count: 9,
      description: "Kundenservice",
      icon: CiPower,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      {experiences.map((experience) => (
        <div className="flex items-center gap-4" key={experience.description}>
          <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12">
            <experience.icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              {experience.count} Jahre Erfahrung
            </h3>
            <p className="text-muted-foreground">{experience.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TiltedExperienceScroll;
