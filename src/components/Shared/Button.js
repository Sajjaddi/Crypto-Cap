function Button({
  target = "_black",
  onClick,
  children,
  href,
  className,
  primary,
  secondary,
  ...rest
}) {
  const classes = `${className} flex items-center justify-center ${
    primary && "text-white bg-tara-second hover:brightness-[1.1] transition"
  } ${
    secondary &&
    "text-fifth bg-[rgba(255,255,255,0.05)] rounded-[6px] border border-[rgba(255,255,255,0.05)] transition"
  }`;

  return (
    <>
      {secondary || onClick ? (
        <button onClick={onClick} className={classes}>
          {children}
        </button>
      ) : (
        <a
          href={href}
          rel="noreferrer"
          target={target}
          {...rest}
          className={classes}
        >
          {children}
        </a>
      )}
    </>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary }) => {
    const count = Number(!!primary) + Number(!!secondary);

    if (count > 1) {
      return new Error("Only one of primary, secondary can be use");
    }
  },
};

export default Button;
