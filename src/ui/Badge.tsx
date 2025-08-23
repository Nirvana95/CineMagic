function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`bg-[#221F3D] rounded-md py-2 px-4.5 text-white flex ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
