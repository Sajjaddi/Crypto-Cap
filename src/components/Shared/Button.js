function Button({
  target = "_black",
  onClick,
  children,
  href,
  className,
  primary,
  ...rest
}) {
  const classes = `${className} flex items-center justify-center ${
    primary && "text-white bg-tara-second hover:brightness-[1.1] transition"
  }`;

  return (
    <>
      {onClick ? (
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

export default Button;
