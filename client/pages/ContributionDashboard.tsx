import { Link, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { PageShell } from "@/components/layout/PageShell";

const taskRows = [
  {
    name: "Musheija Abraham",
    task: "Wireframes",
    status: "Done",
    progress: 100,
  },
  {
    name: "George Lukaanya",
    task: "User Research",
    status: "Done",
    progress: 100,
  },
  {
    name: "Paul Okema",
    task: "Prototype",
    status: "Progress",
    progress: 55,
  },
  {
    name: "Ryan Kizito",
    task: "Documentation",
    status: "Pending",
    progress: 0,
  },
  {
    name: "Sean Mwesigwa",
    task: "Testing",
    status: "Pending",
    progress: 0,
  },
];

const statusStyles: Record<string, string> = {
  Done: "bg-green-600",
  Progress: "bg-yellow-500",
  Pending: "bg-red-500",
};

export default function ContributionDashboardPage() {
  const { groupId = "ui-design" } = useParams<{ groupId: string }>();

  return (
    <PageShell mainClassName="space-y-10">
      <Link to="/dashboard" className="text-sm font-medium text-gray-700 underline">
        ← Back to Dashboard
      </Link>

      <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">UI Design Project</h2>
          <p className="text-sm text-gray-600">
            Next Session: Tomorrow • 4:00 PM • Main Library
          </p>
        </div>
        <div className="flex gap-3">
          <Button className="h-10 border border-gray-300 bg-white px-5 text-sm font-medium text-gray-900 hover:bg-gray-100">
            Edit
          </Button>
          <Button className="h-10 border border-gray-300 bg-white px-5 text-sm font-medium text-gray-900 hover:bg-gray-100">
            Share
          </Button>
        </div>
      </header>

      <div className="flex flex-wrap items-center gap-6 border-b border-gray-200 pb-2 text-sm font-medium text-gray-600">
        <Link
          to={`/group/${groupId}`}
          className="border-b-2 border-gray-900 pb-2 text-gray-900"
        >
          Tasks
        </Link>
        <Link to="/dashboard" className="pb-2 hover:text-gray-900">
          Schedule
        </Link>
        <Link
          to={`/group/${groupId}/resources`}
          className="pb-2 hover:text-gray-900"
        >
          Resources
        </Link>
      </div>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Task Contribution Dashboard
          </h3>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="grid grid-cols-[2fr_2fr_1fr_1fr] border-b border-gray-200 bg-gray-100 px-6 py-4 text-sm font-semibold uppercase text-gray-700">
            <span>Member Name</span>
            <span>Task</span>
            <span>Status</span>
            <span>Progress</span>
          </div>
          <div className="divide-y divide-gray-200">
            {taskRows.map((row) => (
              <div
                key={row.name}
                className="grid grid-cols-[2fr_2fr_1fr_1fr] items-center px-6 py-5 text-sm text-gray-700"
              >
                <span className="font-medium text-gray-900">{row.name}</span>
                <span>{row.task}</span>
                <span className="flex items-center gap-2">
                  <span
                    className={`inline-block h-2.5 w-2.5 rounded-full ${statusStyles[row.status]}`}
                  />
                  {row.status}
                  {row.status === "Done" ? " ✓" : ""}
                </span>
                <span>
                  <div className="h-2 w-24 rounded-full bg-gray-200">
                    <div
                      className={`h-2 rounded-full ${statusStyles[row.status]}`}
                      style={{ width: `${row.progress}%` }}
                    />
                  </div>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button className="h-10 border border-gray-300 bg-white px-5 text-sm font-medium text-gray-900 hover:bg-gray-100">
            + Add Task
          </Button>
          <Button className="h-10 border border-gray-300 bg-white px-5 text-sm font-medium text-gray-900 hover:bg-gray-100">
            Send Reminder
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h4 className="text-sm font-semibold text-gray-800">Quick Actions</h4>
        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            className="h-10 border border-gray-300 bg-white px-5 text-sm font-medium text-gray-900 hover:bg-gray-100"
          >
            <Link to="/scheduler">Schedule Next Session</Link>
          </Button>
          <Button
            asChild
            className="h-10 border border-gray-300 bg-white px-5 text-sm font-medium text-gray-900 hover:bg-gray-100"
          >
            <Link to={`/group/${groupId}/resources`}>Upload Resources</Link>
          </Button>
          <Button
            asChild
            className="h-10 border border-gray-300 bg-white px-5 text-sm font-medium text-gray-900 hover:bg-gray-100"
          >
            <Link to={`/group/${groupId}/resources/user-research-notes`}>
              View Notes
            </Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
