import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { PageShell } from "@/components/layout/PageShell";

const studyGroups = [
  {
    id: "ui-design",
    name: "UI Design Project",
    nextSession: "Tomorrow • 4:00 PM",
    location: "Main Library",
    members: 5,
  },
  {
    id: "algorithms",
    name: "Algorithms Study",
    nextSession: "Friday • 2:00 PM",
    location: "Room 301",
    members: 4,
  },
];

const upcomingSessions = [
  {
    title: "UI Design Project",
    schedule: "Tomorrow • 4:00 PM",
    location: "Main Library",
  },
  {
    title: "Algorithms Study",
    schedule: "Friday • 2:00 PM",
    location: "Room 301",
  },
];

export default function DashboardPage() {
  return (
    <PageShell mainClassName="space-y-12">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Welcome back, Musheija Abraham! 👋
          </h2>
          <p className="text-sm text-gray-600">
            Track your groups and upcoming sessions in one place.
          </p>
        </div>
        <Button
          asChild
          className="h-11 rounded-md bg-gray-900 px-6 text-sm font-medium text-white hover:bg-gray-800"
        >
          <Link to="/scheduler">+ New Group</Link>
        </Button>
      </header>

      <section>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">My Study Groups</h3>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {studyGroups.map((group) => (
            <article
              key={group.id}
              className="flex min-h-[240px] flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex-1 space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {group.name}
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Next: {group.nextSession}
                  </p>
                  <p className="text-sm text-gray-600">Location: {group.location}</p>
                  <p className="text-sm text-gray-600">Members: {group.members}</p>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                className="mt-6 h-10 justify-center border-gray-300 text-sm font-medium text-gray-900 hover:bg-gray-100"
              >
                <Link to={`/group/${group.id}`}>View Details</Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900">Upcoming Sessions</h3>
        <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <ul className="space-y-4 text-sm text-gray-700">
            {upcomingSessions.map((session) => (
              <li key={session.title} className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-500" />
                <div>
                  <p className="font-medium text-gray-900">{session.title}</p>
                  <p className="text-gray-600">
                    {session.schedule} • {session.location}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
