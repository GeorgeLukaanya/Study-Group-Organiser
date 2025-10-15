import { Link, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { PageShell } from "@/components/layout/PageShell";

const files = [
  {
    id: "user-research-notes",
    name: "User Research Notes.pdf",
    uploadedBy: "Musheija Abraham",
    uploadedAt: "2 days ago",
    size: "2.3 MB",
    comments: "3 Comments",
  },
  {
    id: "wireframe-draft",
    name: "Wireframe Draft v2.fig",
    uploadedBy: "Paul Okema",
    uploadedAt: "5 hours ago",
    size: "5.1 MB",
    comments: "1 Comment",
  },
  {
    id: "meeting-agenda",
    name: "Meeting Agenda - Oct 14.docx",
    uploadedBy: "George Lukaanya",
    uploadedAt: "1 week ago",
    size: "45 KB",
    comments: "No comments",
  },
];

const filters = [
  { label: "📁 All Files", active: true },
  { label: "📄 Documents", active: false },
  { label: "🖼️ Images", active: false },
  { label: "🔗 Links", active: false },
];

export default function ResourceHubPage() {
  const { groupId = "ui-design" } = useParams<{ groupId: string }>();

  return (
    <PageShell mainClassName="space-y-10">
      <Link
        to={`/group/${groupId}`}
        className="text-sm font-medium text-gray-700 underline"
      >
        ← Back to Group
      </Link>

      <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Resource Hub - UI Design Project
          </h2>
        </div>
        <Button className="h-10 rounded-md bg-gray-900 px-5 text-sm font-medium text-white hover:bg-gray-800">
          + Upload File
        </Button>
      </header>

      <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-600">
        {filters.map((filter) => (
          <span
            key={filter.label}
            className={`rounded-full border px-4 py-2 ${
              filter.active
                ? "border-gray-900 bg-gray-900 text-white"
                : "border-gray-300 bg-white hover:border-gray-400"
            }`}
          >
            {filter.label}
          </span>
        ))}
      </div>

      <div className="space-y-6">
        {files.map((file) => (
          <article
            key={file.id}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-gray-300 text-xl">
                  📄
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">{file.name}</h3>
                  <p className="text-sm text-gray-600">
                    Uploaded by {file.uploadedBy} • {file.uploadedAt} • {file.size}
                  </p>
                  <p className="text-sm text-gray-600">💬 {file.comments}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  asChild
                  variant="outline"
                  className="h-10 border-gray-300 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100"
                >
                  <Link to={`/group/${groupId}/resources/${file.id}`}>View</Link>
                </Button>
                <Button
                  variant="outline"
                  className="h-10 border-gray-300 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100"
                >
                  Download
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
