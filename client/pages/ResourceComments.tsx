import { Link, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { PageShell } from "@/components/layout/PageShell";

const resourceDetails: Record<string, {
  name: string;
  uploadedBy: string;
  uploadedAt: string;
  size: string;
}> = {
  "user-research-notes": {
    name: "User Research Notes.pdf",
    uploadedBy: "Musheija Abraham",
    uploadedAt: "2 days ago",
    size: "2.3 MB",
  },
  "wireframe-draft": {
    name: "Wireframe Draft v2.fig",
    uploadedBy: "Paul Okema",
    uploadedAt: "5 hours ago",
    size: "5.1 MB",
  },
  "meeting-agenda": {
    name: "Meeting Agenda - Oct 14.docx",
    uploadedBy: "George Lukaanya",
    uploadedAt: "1 week ago",
    size: "45 KB",
  },
};

const comments = [
  {
    id: 1,
    author: "George Lukaanya",
    timestamp: "2 days ago",
    message:
      "Great work on the research! The persona section is really detailed. Should we add more about extreme users?",
  },
  {
    id: 2,
    author: "Musheija Abraham",
    timestamp: "1 day ago",
    message:
      "Thanks! Yes, I'll expand the extreme user section before our next meeting.",
  },
  {
    id: 3,
    author: "Paul Okema",
    timestamp: "5 hours ago",
    message:
      "Can someone also look at page 3? I think there's a typo in the methodology section.",
  },
];

export default function ResourceCommentsPage() {
  const {
    groupId = "ui-design",
    resourceId = "user-research-notes",
  } = useParams<{ groupId: string; resourceId: string }>();

  const resourceMetadata =
    resourceDetails[resourceId] ?? resourceDetails["user-research-notes"];

  return (
    <PageShell mainClassName="space-y-10">
      <Link
        to={`/group/${groupId}/resources`}
        className="text-sm font-medium text-gray-700 underline"
      >
        ← Back to Resources
      </Link>

      <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">
            {resourceMetadata.name}
          </h2>
          <p className="text-sm text-gray-600">
            Uploaded by {resourceMetadata.uploadedBy} • {resourceMetadata.uploadedAt} • {resourceMetadata.size}
          </p>
        </div>
        <Button className="h-10 rounded-md bg-gray-900 px-5 text-sm font-medium text-white hover:bg-gray-800">
          Download
        </Button>
      </header>

      <section className="space-y-6">
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 p-12 text-center text-sm text-gray-600">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gray-300 bg-white text-3xl text-gray-700">
            📄
          </div>
          <p className="mt-4 font-medium text-gray-800">PDF Preview Placeholder</p>
          <p>Document preview would appear here (240px height).</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">Comments (3)</h3>
          <div className="mt-6 space-y-4">
            {comments.map((comment) => (
              <article
                key={comment.id}
                className="space-y-3 rounded-lg border border-gray-200 bg-gray-50 p-4"
              >
                <div className="flex items-center gap-3 text-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-700">
                    👤
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{comment.author}</p>
                    <p className="text-gray-600">{comment.timestamp}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">{comment.message}</p>
              </article>
            ))}
          </div>
        </div>

        <form className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Add a comment
            <Textarea
              placeholder="Write your comment here..."
              className="mt-2 min-h-[120px] border-gray-300 bg-white"
            />
          </label>
          <div className="flex justify-end">
            <Button className="h-10 rounded-md bg-gray-900 px-6 text-sm font-medium text-white hover:bg-gray-800">
              Post Comment
            </Button>
          </div>
        </form>
      </section>
    </PageShell>
  );
}
