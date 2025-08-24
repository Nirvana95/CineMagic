function Main({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={`fixed right-1/2 translate-x-1/2 z-40 `}
      style={{ top: `${window.scrollY}px` }}
    >
      {children}
    </main>
  );
}

export default Main;
