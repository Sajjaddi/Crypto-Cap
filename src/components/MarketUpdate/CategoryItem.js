import { Button } from "../Shared";

const CategoryItem = ({ data, onClick }) => {
  return (
    <Button onClick={() => onClick(data.id)} className={"py-[10px] px-3 w-full"} secondary>
      {data.name}
    </Button>
  );
};

export default CategoryItem;
