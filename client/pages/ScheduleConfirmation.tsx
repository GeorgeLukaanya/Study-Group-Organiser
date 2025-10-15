import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { PageShell } from "@/components/layout/PageShell";

export default function ScheduleConfirmationPage() {
  return (
    <PageShell mainClassName="flex min-h-[calc(100vh-64px)] items-center justify-center">
      <div className="w-full max-w-[500px] rounded-xl border border-gray-200 bg-white p-12 text-center shadow-sm">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl text-green-600">
          ✓
        </div>
        <h2 className="mt-6 text-2xl font-semibold text-gray-900">
          Session Scheduled!
        </h2>
        <p className="mt-4 text-sm text-gray-600">
          Your study session has been successfully scheduled. All members have
          been notified via email.
        </p>

        <div className="mt-8 space-y-4 text-sm text-gray-700">
          <p>📅 Saturday, Oct 16</p>
          <p>🕐 6:00 PM - 8:00 PM</p>
          <p>📍 Main Library</p>
        </div>

        <div className="mt-10 space-y-4">
          <Button
            asChild
            className="h-11 w-full justify-center rounded-md bg-gray-900 text-white hover:bg-gray-800"
          >
            <Link to="/group/ui-design">View Group Dashboard</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-11 w-full justify-center border-gray-300 text-gray-900 hover:bg-gray-100"
          >
            <Link to="/scheduler">Schedule Another</Link>
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
