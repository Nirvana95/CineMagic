function DetailedList({ children }: { children: React.ReactNode }) {
  return (
    <dl className="grid grid-cols-[2fr_7fr] text-white items-center gap-y-5 w-full">
      {children}
    </dl>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return <dt className="text-lg text-[#a8b5db]">{children}</dt>;
}

function Description({
  color,
  children,
}: {
  color?: string;
  children: React.ReactNode;
}) {
  return (
    <dd className={`flex gap-2.25 ${color || "text-[#d6c7ff]"}`}>{children}</dd>
  );
}

DetailedList.Title = Title;
DetailedList.Description = Description;

export default DetailedList;
