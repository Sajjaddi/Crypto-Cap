import { useContext, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

import { SiteContext } from "../../store";

const LanguageSelector = () => {
  const { lang, setLang } = useContext(SiteContext);
  const [isOpenToSelect, setIsOpenToSelect] = useState(false);

  const handleSelector = (value) => {
    setLang((prevState) => {
      return {
        ...prevState,
        current: value,
      };
    });
  };

  return (
    <div
      onClick={() => setIsOpenToSelect((prevState) => !prevState)}
      className="select-none flex gap-x-2 cursor-pointer relative w-1/2 sm:w-1/3 lg:w-auto z-[1]"
    >
      <TbWorld className="text-xl" />
      <div className="gap-x-1 flex items-center">
        <span className="font-light lg:text-sm">{lang.current.toUpperCase()}</span>
        <MdKeyboardArrowDown
          className={`text-xl transition duration-300 ${
            isOpenToSelect && "-rotate-180"
          }`}
        />
      </div>
      <div
        className={`absolute flex flex-col [&>span:not(:last-child)]:border-b ease-in-out [&>span:not(:last-child)]:border-gray-400 top-[120%] inset-x-0 overflow-hidden bg-tara-fourth bg-opacity-80 py-1 px-2 text-white transition-all duration-300 rounded ${
          isOpenToSelect
            ? "translate-y-0 opacity-100"
            : "opacity-0 -translate-y-4 h-0 w-0"
        }`}
      >
        {lang?.all.map((i, index) => (
          <span
            className={`py-1.5 hover:bg-brightness-[1.2] transition text-sm`}
            onClick={() => handleSelector(i)}
            key={index}
          >
            {i.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
