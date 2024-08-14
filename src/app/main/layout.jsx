import BottomNav from "@/components/BottomNav";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex-grow overflow-auto bg-bg-secondary">
          {children}
        </div>
        <BottomNav />
      </div>
    </>
  );
}
