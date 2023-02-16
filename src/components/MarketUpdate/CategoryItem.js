const CategoryItem = ({ data, onClick }) => {
  return (
    <div
      onClick={() => onClick(data.id)}
      className={
        "py-[10px] px-3 text-xs md:text-sm text-tara-fifth cursor-pointer text-fifth bg-[rgba(255,255,255,0.05)] rounded-[6px] border border-[rgba(255,255,255,0.05)] transition group-hover:bg-tara-fourth"
      }
    >
      {data.name}
    </div>
  );
};

export default CategoryItem;
