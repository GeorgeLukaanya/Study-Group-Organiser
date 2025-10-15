import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { PageShell } from "@/components/layout/PageShell";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <PageShell showNavigation={false} mainClassName="flex min-h-screen items-center justify-center bg-white px-6 py-24">
      <div className="w-full max-w-[400px]">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-semibold text-gray-900">
            Study Group Organizer
          </h1>
          <p className="text-base text-gray-600">
            Coordinate. Collaborate. Succeed.
          </p>
        </div>
        <form onSubmit={handleLogin} className="mt-10 space-y-6">
          <div className="space-y-4">
            <label className="block text-start text-sm font-medium text-gray-700">
              Email Address
              <Input
                type="email"
                required
                placeholder="musheija@example.edu"
                className="mt-2 h-11 border-gray-300 bg-gray-50 text-base"
              />
            </label>
            <label className="block text-start text-sm font-medium text-gray-700">
              Password
              <Input
                type="password"
                required
                placeholder="Enter your password"
                className="mt-2 h-11 border-gray-300 bg-gray-50 text-base"
              />
            </label>
          </div>
          <div className="flex justify-end">
            <Link to="#" className="text-sm font-medium text-gray-700 underline">
              Forgot Password?
            </Link>
          </div>
          <Button
            type="submit"
            className="h-11 w-full justify-center rounded-md bg-gray-900 text-white hover:bg-gray-800"
          >
            Login
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link to="#" className="font-medium text-gray-900 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </PageShell>
  );
}
