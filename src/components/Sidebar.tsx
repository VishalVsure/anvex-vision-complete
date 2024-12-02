import sidebarData from "@/assets/SidebarData";
import { sidebarFoot } from "@/assets/SidebarData";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between w-[17%] h-full fixed border-r-2 bg-gray-50 py-4 pb-0 cursor-pointer">
      <div className="px-4">
        <img
          src="anvex-logo-png.png"
          alt="Anvex Speak"
          className="w-auto mx-auto object-contain cursor-pointer mb-4"
          onClick={() => navigate("/")}
        />
        <div className="flex flex-col">
          {sidebarData.map((data) => (
            <p
              key={data.slug}
              className="hover:bg-gray-300 rounded-md py-2 px-4 cursor-pointer mb-2"
              onClick={() => navigate(`/${data.slug}`)}
              role="button"
              tabIndex={0}
            >
              <FontAwesomeIcon
                icon={data.icon || faQuestionCircle}
                className="mr-2"
              />
              {data.title}
            </p>
          ))}
        </div>
      </div>
      <div className="px-4">
        {sidebarFoot.map((data) => (
          <p
            key={data.slug}
            className="hover:bg-gray-300 rounded-md py-2 px-4 cursor-pointer mb-2"
            onClick={() => navigate(`/${data.slug}`)}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon
              icon={data.icon || faQuestionCircle}
              className="mr-2"
            />
            {data.title}
          </p>
        ))}
        <div className="flex px-4 items-center space-x-2 bg-white text-gray-600 text-center mt-4">
          <span className="pr-2">A product of</span>
          <img src="vcs-logo.png" alt="vcs logo" className="w-12" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
