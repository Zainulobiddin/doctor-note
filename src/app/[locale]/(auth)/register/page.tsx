import Register from "@/components/(auth)/register/register";
import AuthLayout from "../layout";

export default function page() {
  return (
    <div>
      <AuthLayout>
        <Register />
      </AuthLayout>
    </div>
  );
}
