import LoginCard from "@/components/auth/login-card";
import { ModeToggle } from "@/components/modal-toggle";

const HomePage = () => {
  return (
    <div className="flex h-[100vh] w-full items-center justify-center px-3 ">
      <ModeToggle />
      <LoginCard
        title=" Documentation App"
        description="Streamlining Tomorrow: Documentation for Effortless Future Workflows"
      />
    </div>
  );
};

export default HomePage;
