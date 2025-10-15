import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { PageShell } from "@/components/layout/PageShell";

const calendarWeeks = [
  ["", "1", "2", "3", "4", "5", "6"],
  ["7", "8", "9", "10", "11", "12", "13"],
  ["14", "15", "16", "17", "18", "19", "20"],
  ["21", "22", "23", "24", "25", "26", "27"],
  ["28", "29", "30", "31", "", "", ""],
];

const timeSlots = [
  "Saturday, Oct 16 • 2:00 PM - 4:00 PM",
  "Saturday, Oct 16 • 4:00 PM - 6:00 PM",
  "Saturday, Oct 16 • 6:00 PM - 8:00 PM",
];

export default function SmartSchedulerPage() {
  const navigate = useNavigate();

  const handleConfirm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/schedule/confirmation");
  };

  return (
    <PageShell mainClassName="space-y-10">
      <Link to="/dashboard" className="text-sm font-medium text-gray-700 underline">
        ← Back to Dashboard
      </Link>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Create New Study Group</h2>
        <form onSubmit={handleConfirm} className="space-y-8">
          <section className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Step 1: Group Details</h3>
            <div className="mt-6 space-y-6">
              <label className="block text-sm font-medium text-gray-700">
                Group Name
                <Input
                  required
                  placeholder="e.g., UI Design Sprint Team"
                  className="mt-2 h-11 border-gray-300 bg-gray-50 text-base"
                />
              </label>
              <label className="block text-sm font-medium text-gray-700">
                Course
                <Input
                  required
                  placeholder="CSC 3119: User Interface Design"
                  className="mt-2 h-11 border-gray-300 bg-gray-50 text-base"
                />
              </label>
            </div>
          </section>

          <section className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Step 2: Smart Scheduling</h3>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Calendar View</p>
                    <p className="text-sm text-gray-500">October 2025</p>
                  </div>
                </header>
                <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
                  <div className="grid grid-cols-7 bg-gray-100 text-center text-xs font-semibold uppercase text-gray-600">
                    {["M", "T", "W", "T", "F", "S", "S"].map((day) => (
                      <div key={day} className="border-b border-gray-200 py-3">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 text-center text-sm">
                    {calendarWeeks.flat().map((date, index) => {
                      const isSelected = date === "16";
                      return (
                        <div
                          key={`${date || "empty"}-${index}`}
                          className={`flex h-[40px] items-center justify-center border border-gray-200 ${
                            isSelected ? "border-2 border-gray-900 font-semibold" : ""
                          } ${date ? "text-gray-800" : "bg-gray-50 text-gray-300"}`}
                        >
                          {date}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-sm font-medium text-gray-700">
                  Suggested Time Slots (Available for all members)
                </p>
                <fieldset className="space-y-4">
                  {timeSlots.map((slot, slotIndex) => (
                    <label
                      key={slot}
                      className={`flex items-center gap-3 rounded-md border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm ${
                        slotIndex === timeSlots.length - 1
                          ? "border-gray-900 ring-1 ring-gray-900"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="time-slot"
                        defaultChecked={slotIndex === timeSlots.length - 1}
                        className="h-4 w-4 border-gray-400 text-gray-900 focus:ring-gray-900"
                      />
                      {slot}
                    </label>
                  ))}
                </fieldset>
                <Button
                  type="submit"
                  className="h-11 w-full justify-center rounded-md bg-gray-900 text-white hover:bg-gray-800"
                >
                  Confirm Schedule
                </Button>
              </div>
            </div>
          </section>
        </form>
      </div>
    </PageShell>
  );
}
