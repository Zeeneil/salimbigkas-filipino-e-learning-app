import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import {
    Bell,
    BookOpen,
    Calendar,
    ChevronRight,
    Home,
    MessageSquare,
    Settings,
    User,
    Users,
    FileText,
    Mic,
    LogOut,
  } from "lucide-react";
import { useAuth } from '../firebase/authContext';
import { doSignOut, doDeleteUser } from '../firebase/auth';
import woman from '../assets/woman.svg';
import { act } from "react";

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Get current user from auth service
  const { currentUser } = useAuth();

  // Mock data for the dashboard - use current user or fallback
  const teacher = currentUser || {
    displayName: "Teacher",
    email: "teacher@salimbigkas.edu",
    photoURL: "https://via.placeholder.com/150",
    notifications: 8,
  };

  const stats = {
    activeStudents: 87,
    coursesManaged: 4,
    averageScore: 78, // percentage
  };

  const upcomingSessions = [
    {
      id: 1,
      title: "Pagkilala sa Alpabeto",
      date: "Today",
      time: "2:00 PM",
      students: 24,
    },
    {
      id: 2,
      title: "Pangngalan at Pandiwa",
      date: "Tomorrow",
      time: "10:00 AM",
      students: 18,
    },
    {
      id: 3,
      title: "Pagkilala sa Alpabeto",
      date: "Apr 18",
      time: "1:30 PM",
      students: 15,
    },
  ];

  const recentAssignments = [
    {
      id: 1,
      title: "Unang Pagususlit",
      course: "Pagkilala sa Alpabeto",
      submissions: 22,
      pending: 2,
    },
    {
      id: 2,
      title: "Pandiwa'y iyong itama",
      course: "Pangngalan at Pandiwa",
      submissions: 15,
      pending: 3,
    },
    {
      id: 3,
      title: "Bigkasin ang sampung salita",
      course: "Tamang Bigkas at Diin",
      submissions: 12,
      pending: 3,
    },
  ];

  // Handle tab change with loading animation
  const handleTabChange = (value) => {
    setLoading(true);
    setTimeout(() => {
      setActiveTab(value);
      setLoading(false);
    }, 100);
  };

  // Handle logout
  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      doSignOut()
        .then(() => {
            navigate("/");
        })
        .catch((error) => {
          console.error("Error signing out:", error);
        });
    }, 800);
  };

  // Handle delete account
  const handleDeleteAccount = () => {
    setLoading(true);
    setTimeout(async () => {
      await doDeleteUser(teacher.email, teacher.password)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.error("Error deleting account:", error);
        });
    }, 800);
  };

  // Handle navigation to other dashboards
  const handleDashboardNav = (role) => {
    setLoading(true);
    setTimeout(() => {
      navigate(`/${role}`);
    }, 800);
  };

  // Redirect if not authenticated or not an teacher
//   useEffect(() => {
//     if (!currentUser) {
//       navigate("/");
//     } else if (currentUser.role !== "teacher") {
//       navigate(`/${currentUser.role}`);
//     }
//   }, [currentUser, navigate]);

  return (
    <div className="min-h-screen bg-white flex">
      {/* {loading && <Loading />} */}
      {/* Sidebar */}
      <div className="w-20 hover:w-64 border-r border-gray-200 flex flex-col justify-between overflow-hidden transition-width duration-300 ease-in-out sticky top-0 h-screen">
        <div className="flex flex-col h-full">
          <div className="relative w-64 px-20 py-4 flex items-center gap-2 border-b-1 border-gray-200">
            <BookOpen size={34} className="absolute top-auto left-6" />
            <h2 className="whitespace-nowrap font-bold">SalimBigkas Teacher</h2>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            <button
              variant={activeTab === "dashboard" ? "default" : "ghost"}
              className={`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${activeTab === "dashboard" ? "bg-[#2C3E50] text-white" : ""}`}
              onClick={() => handleTabChange("dashboard")}
              autoFocus
            >
              <div className="relative flex items-center gap-3 px-15">
                <Home size={22} className="absolute top-0 left-0"/>
                <span>Dashboard</span>
              </div>
            </button>
            <button
              variant={activeTab === "courses" ? "default" : "ghost"}
              className={`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${activeTab === "courses" ? "bg-[#2C3E50] text-white" : ""}`}
              onClick={() => handleTabChange("courses")}
            >
              <div className="relative flex items-center gap-3 px-15">
                <BookOpen size={22} className="absolute top-0 left-0" />
                <span className="whitespace-nowrap">My Courses</span>
              </div>
            </button>
            <button 
              variant={activeTab === "students" ? "default" : "ghost"}
              className={`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${activeTab === "students" ? "bg-[#2C3E50] text-white" : ""}`}
              onClick={() => handleTabChange("students")}
            >
              <div className="relative flex items-center gap-3 px-15">
                <Users size={22} className="absolute top-0 left-0" />
                <span>Students</span>
              </div>
            </button>
            <button
              variant={activeTab === "assignments" ? "default" : "ghost"}
              className={`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${activeTab === "assignments" ? "bg-[#2C3E50] text-white" : ""}`}
              onClick={() => handleTabChange("assignments")}
            >
              <div className="relative flex items-center gap-3 px-15">
                <FileText size={22} className="absolute top-0 left-0" />
                <span>Assignments</span>
              </div>
            </button>
            <button 
              variant={activeTab === "pronunciation" ? "default" : "ghost"} 
              className={`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${activeTab === "pronunciation" ? "bg-[#2C3E50] text-white" : ""}`}
              onClick={() => handleTabChange("pronunciation")}
            >
              <div className="relative flex items-center gap-3 px-15">
                <Mic size={22} className="absolute top-0 left-0" />
                <span>Pronunciation</span>
              </div>
            </button>
            <button
              variant={activeTab === "schedules" ? "default" : "ghost"}
              className={`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${activeTab === "schedules" ? "bg-[#2C3E50] text-white" : ""}`}
              onClick={() => handleTabChange("schedules")}
            >
              <div className="relative flex items-center gap-3 px-15">
                <Calendar size={22} className="absolute top-0 left-0" />
                <span>Schedule</span>
              </div>
            </button>
            <button
              variant={activeTab === "messages" ? "default" : "ghost"}
              className={`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${activeTab === "messages" ? "bg-[#2C3E50] text-white" : ""}`}
              onClick={() => handleTabChange("messages")}
            >
              <div className="relative flex items-center gap-3 px-15">
                <MessageSquare size={22} className="absolute top-0 left-0" />
                <span>Messages</span>
              </div>
            </button>
            <div className='border-b-1 mb-2.5 mr-2 w-full border-gray-200'></div>
            <button 
              variant={activeTab === "settings" ? "default" : "ghost"} 
              className={`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${activeTab === "settings" ? "bg-[#2C3E50] text-white" : ""}`}
              onClick={() => handleTabChange("settings")}
            >
              <div className="relative flex items-center gap-3 px-15">
                <Settings size={22} className="absolute top-0 left-0" />
                <span>Settings</span>
              </div>
            </button>
            <button
              variant="ghost"
              className="w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg"
              onClick={() => navigate("/")}
            >
              <div className="relative flex items-center gap-3 px-15">
                <Home size={22} className="absolute top-0 left-0" />
                <span>Home</span>
              </div>
            </button>
            <button
              variant="ghost"
              className="w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg"
              onClick={handleLogout}
            >
              <div className="relative flex items-center gap-3 px-15">
                <LogOut size={22} className="absolute top-0 left-0" />
                <span>Logout</span>
              </div>
            </button>
          </nav>
        </div>

        <div className="p-5 border-t border-gray-200">
          <div className="relative flex items-center gap-3 px-15">
            <img
              src={woman}
              alt="Teacher Avatar"
              className="absolute top-auto left-0 h-10 w-10 rounded-full border border-gray-200 shadow-sm"
            />
            <div className="flex-1 min-w-0 text-left">
                <p className="text-sm font-medium truncate">{teacher.displayName}</p>
                <p className="text-xs">
                  {teacher.email}
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-gray-200 flex items-center justify-between px-6">
            <div className="md:hidden">
                <BookOpen className="h-6 w-6 text-primary" />
            </div>

            <div className="flex items-center gap-4 justify-end w-full">
                <button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    {teacher.notifications > 0 && (
                    <div className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                        {teacher.notifications}
                    </div>
                    )}
                </button>
                <img
                    src={woman}
                    alt="Teacher Avatar"
                    className="h-10 w-10 rounded-full border border-gray-200 shadow-sm hover:cursor-pointer"
                />
            </div>
        </header>
        
        <main className="flex-1 overflow-auto p-4 md:p-6 pb-20 md:pb-6">
          <div className="max-w-8xl mx-auto space-y-6">
            {activeTab === "dashboard" && (
              <>
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold tracking-tight">
                    Teacher Dashboard
                  </h1>
                  <button variant="outline" className="flex items-center gap-2 px-3 py-2 text-sm shadow-sm rounded-sm border border-gray-200 hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:drop-shadow-lg">
                    <Calendar className="mr-2 h-4 w-4" />
                    April 2025
                  </button>
                </div>

                {/* Stats divs */}
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex flex-col text-left items-start justify-between p-6 rounded-lg bg-white shadow-sm border border-gray-200">
                    <div className="pb-2">
                      <div className="text-sm font-medium">
                        Active Students
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">
                        {stats.activeStudents}
                      </div>
                      <p className="text-xs text-gray-500 text-muted-foreground">
                        +5 students from last month
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col text-left items-start justify-between p-6 rounded-lg bg-white shadow-sm border border-gray-200">
                    <div className="pb-2">
                      <div className="text-sm font-medium">
                        Courses Managed
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">
                        {stats.coursesManaged}
                      </div>
                      <p className="text-xs text-gray-500 text-muted-foreground">
                        2 active, 2 upcoming
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col text-left items-start justify-between p-6 rounded-lg bg-white shadow-sm border border-gray-200">
                        <div className="pb-2">
                            <div className="text-sm font-medium">
                            Average Student Score
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="text-2xl font-bold">
                                {stats.averageScore}%
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                <div
                                    className="bg-[#2C3E50] h-2 rounded-full"
                                    style={{ width: `${stats.averageScore}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                    {/* Upcoming sessions section */}
                    <div className="lg:col-span-4 flex flex-col text-left items-start p-6 rounded-lg bg-white shadow-sm border border-gray-200">
                        <div className="w-full">
                            <div className="flex items-center justify-between">
                                <h2 className="font-medium">Upcoming Sessions</h2>
                                <button variant="ghost" size="sm" className="gap-1 px-3 py-2 flex items-center text-xs rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:drop-shadow-lg">
                                    View All <ChevronRight size={16} />
                                </button>
                            </div>
                            <h2 className="text-gray-500 text-sm mt-2">Your scheduled teaching sessions</h2>
                        </div>
                        <div className="space-y-4 w-full mt-5">
                            {upcomingSessions.map((session) => (
                                <div
                                    key={session.id}
                                    className="flex items-center justify-between p-3 border rounded-lg border-gray-200"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-full p-2 bg-[#2C3E50] flex items-center justify-center">
                                            <BookOpen size={18} color="white" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium">{session.title}</h4>
                                            <div className="flex items-center gap-2 mt-1">
                                                <p className="text-xs text-gray-400">
                                                    {session.date}
                                                </p>
                                                <span className="text-xs text-gray-400">
                                                    •
                                                </span>
                                                <p className="text-xs text-gray-400">
                                                    {session.time}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1 text-xs text-gray-500">
                                            <Users size={14} />
                                            <span className="text-sm text-muted-foreground">
                                                {session.students}
                                            </span>
                                        </div>
                                        <button className="flex items-center gap-1 px-3 py-2 text-xs shadow-sm rounded-xs border border-gray-200 hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:drop-shadow-lg">
                                            Prepare
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Recent activities section */}
                    <div className="flex flex-col lg:col-span-3 text-left items-start justify-between p-6 rounded-lg bg-white shadow-sm border border-gray-200">
                    <div>
                        <h2 className="font-medium">Recent Assignments</h2>
                        <h2 className="text-gray-400">Track student submissions</h2>
                    </div>
                    <div className="w-full space-y-4 mt-5">
                        {recentAssignments.map((assignment) => (
                            <div
                                key={assignment.id}
                                className="p-4 border border-gray-200 rounded-lg space-y-2 justify-between"
                            >
                                <div className="flex justify-between items-start">
                                    <h4 className="font-medium">
                                        {assignment.title}
                                    </h4>
                                    <div className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-sm border border-gray-200">
                                        {assignment.pending} pending
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    {assignment.course}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="text-sm">
                                    <span className="font-medium">
                                        {assignment.submissions}
                                    </span>{" "}
                                    <span className="text-gray-500">
                                        submissions
                                    </span>
                                    </div>
                                    <button className="flex items-center gap-1 px-3 py-2 text-xs rounded-xs hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:drop-shadow-lg">
                                        Review
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
              </>
            )}

            {activeTab === "pronunciation" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold tracking-tight">
                    Pronunciation Exercises
                  </h1>
                </div>

                <div className="grid gap-6 md:grid-cols-1 flex-col text-left items-start justify-between p-6 rounded-lg bg-white shadow-sm border border-gray-200">
                  <div>
                    <div>
                      <h2 className="font-medium">Pronunciation Management</h2>
                      <h2 className="text-gray-500">Manage pronunciation exercises across the platform</h2>
                    </div>
                    <div className="space-y-4 mt-5">
                      <p>Pronunciation management interface would go here.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "students" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold tracking-tight">
                    Student Management
                  </h1>
                </div>
                <div className="grid gap-6 md:grid-cols-1 flex-col text-left items-center justify-between p-6 rounded-lg bg-white shadow-sm border border-gray-200">
                  <div className="flex flex-col justify-between">
                    <h2 className="font-medium">Student List</h2>
                    <h2 className="text-sm text-gray-500">Manage your students and their progress</h2>
                  </div>
                  <div className="grid gap-6 md:grid-cols-1 flex-col text-left items-center justify-between">
                    <div className="space-y-4">
                      {[
                        {
                          id: 1,
                          name: "Alex Johnson",
                          email: "alex.j@example.com",
                          progress: 78,
                          avatar:
                            "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
                        },
                        {
                          id: 2,
                          name: "Jamie Smith",
                          email: "jamie.s@example.com",
                          progress: 92,
                          avatar:
                            "https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie",
                        },
                        {
                          id: 3,
                          name: "Taylor Wilson",
                          email: "taylor.w@example.com",
                          progress: 65,
                          avatar:
                            "https://api.dicebear.com/7.x/avataaars/svg?seed=Taylor",
                        },
                      ].map((student) => (
                        <div
                          key={student.id}
                          className="flex items-center justify-between p-4 rounded-lg border border-gray-200"
                        >
                          <div className="relative flex items-center gap-3 px-15">
                            <img
                                src={woman}
                                alt="Teacher Avatar"
                                className="absolute top-auto left-0 h-10 w-10 rounded-full border border-gray-200 shadow-sm"
                            />
                            <div>
                              <h4 className="font-medium">{student.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {student.email}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <div className="font-medium">
                                {student.progress}%
                              </div>
                              <div className="text-xs text-gray-500">
                                Progress
                              </div>
                            </div>
                            <button className="flex items-center gap-1 px-3 py-2 text-xs rounded-xs shadow-xs border border-gray-200 hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:drop-shadow-lg">
                                View Details
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;
