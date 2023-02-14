import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

const LanguageSelector = ({ langData }) => {

    const [lang, setLang] = useState(langData.current)

  return (
    <div>
      <TbWorld />
      {lang}
      <MdKeyboardArrowDown />
    </div>
  );
};

export default LanguageSelector;
