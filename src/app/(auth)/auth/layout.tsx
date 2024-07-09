import LeftNavbar from "@/components/auth/left-navbar";
import TopNavbar from "@/components/auth/top-navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* <TopNavbar /> */}

      <div className=" flex h-[100vh]">
        <LeftNavbar />
        {children}
      </div>
    </section>
  );
}
