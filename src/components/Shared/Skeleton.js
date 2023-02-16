function Skeleton({ times, className }) {
  const outerClassNames = `relative
    overflow-hidden
    bg-tara-fourth
    rounded
    mb-2.5
    ${className}`;

  const innerClassNames = `
   animate-shimmer
    absolute
    inset-0
    -translate-x-full
    bg-gradient-to-r
    from-tara-seventh
    via-tara-seventh
    to-tara-fourth
 `;

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerClassNames}>
          <div className={innerClassNames} />
        </div>
      );
    });

  return boxes;
}

export default Skeleton;
