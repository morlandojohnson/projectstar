import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="flex h-screen w-full">
        <aside className="bg-primary fixed flex h-screen lg:w-60">
          <Sidebar />
        </aside>
        <section className="mt-20 flex-1 lg:ml-60">{children}</section>
      </main>
    </>
  );
}

export default Layout;
