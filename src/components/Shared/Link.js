function Link({
  target = "_black",
  url,
  children,
  className,
  primary,
  secondary,
  ...rest
}) {
  const classes = `${className} flex items-center items-center ${
    primary && "text-white bg-tara-second hover:brightness-[1.2] transition"
  } ${
    secondary &&
    "text-fifth bg-[rgba(255,255,255,0.05)] rounded-[6px] border-[rgba(255,255,255,0.05)] transition"
  }`;

  return (
    <a rel="noreferrer" target={target} {...rest} className={classes}>
      {children}
    </a>
  );
}

Link.propTypes = {
  checkVariationValue: ({ primary, secondary }) => {
    const count = Number(!!primary) + Number(!!secondary);

    if (count > 1) {
      return new Error("Only one of primary, secondary can be use");
    }
  },
};

export default Link;
