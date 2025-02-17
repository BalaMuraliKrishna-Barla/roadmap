import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Code2, 
  BookOpen, 
  Share2, 
  Github, 
  Database, 
  GitBranch, 
  Globe, 
  Server,
  Cpu,
  Binary,
  BrainCircuit,
  GitFork,
  Hash,
  TreePine,
  Network,
  Search,
  SortDesc,
  FileCode,
  Table,
  TableProperties,
  FolderTree,
  Blocks,
  Component,
  Webhook,
  AppWindow,
  Smartphone,
  Braces,
  ArrowRightLeft,
  PackageOpen,
  Boxes,
  LayoutTemplate,
  Fingerprint
} from "lucide-react";

interface Resource {
  title: string;
  url: string;
  icon: JSX.Element;
}

interface Week {
  id: number;
  title: string;
  focus: string;
  topics: string[];
  resources: Resource[];
  color: string;
  category: string;
}

const weeks: Week[] = [
  {
    id: 1,
    title: "Introduction to Programming",
    focus: "Python/Java Fundamentals",
    topics: [
      "Basic syntax and data types",
      "Variables and operators",
      "Writing your first program",
      "Understanding programming logic"
    ],
    resources: [
      { title: "Python Documentation", url: "https://docs.python.org", icon: <Code2 className="h-4 w-4" /> },
      { title: "W3Schools Python", url: "https://www.w3schools.com/python", icon: <BookOpen className="h-4 w-4" /> },
      { title: "Java Documentation", url: "https://docs.oracle.com/javase", icon: <Code2 className="h-4 w-4" /> }
    ],
    color: "bg-blue-500",
    category: "fundamentals"
  },
  {
    id: 2,
    title: "Control Structures",
    focus: "Programming Logic",
    topics: [
      "If/else statements",
      "Loops and iterations",
      "Functions and methods",
      "Error handling"
    ],
    resources: [
      { title: "Control Flow in Python", url: "https://realpython.com", icon: <Binary className="h-4 w-4" /> },
      { title: "Java Control Structures", url: "https://www.geeksforgeeks.org", icon: <BrainCircuit className="h-4 w-4" /> }
    ],
    color: "bg-green-500",
    category: "fundamentals"
  },
  {
    id: 3,
    title: "Data Structures",
    focus: "Fundamental Data Structures",
    topics: [
      "Arrays and Lists",
      "Stacks and Queues",
      "Hash Tables",
      "Trees and Graphs"
    ],
    resources: [
      { title: "Data Structures Guide", url: "https://www.geeksforgeeks.org", icon: <Database className="h-4 w-4" /> },
      { title: "Visualgo", url: "https://visualgo.net", icon: <Cpu className="h-4 w-4" /> }
    ],
    color: "bg-purple-500",
    category: "algorithms"
  },
  {
    id: 4,
    title: "Advanced Control Structures",
    focus: "Mastering Programming Logic",
    topics: [
      "Nested conditions and complex logic",
      "Loop control statements (Break, Continue)",
      "Ternary operators",
      "Advanced function concepts"
    ],
    resources: [
      { title: "Real Python - Control Structures", url: "https://realpython.com/python-control-flow", icon: <Binary className="h-4 w-4" /> },
      { title: "GeeksforGeeks Control Flow", url: "https://www.geeksforgeeks.org/control-flow-python", icon: <BrainCircuit className="h-4 w-4" /> }
    ],
    color: "bg-green-500",
    category: "fundamentals"
  },
  {
    id: 5,
    title: "Advanced Data Structures",
    focus: "Complex Data Organizations",
    topics: [
      "Multidimensional Arrays",
      "Linked Lists (Singly, Doubly)",
      "Advanced Stack & Queue Operations",
      "Priority Queues"
    ],
    resources: [
      { title: "GeeksforGeeks Data Structures", url: "https://www.geeksforgeeks.org/data-structures", icon: <TreePine className="h-4 w-4" /> },
      { title: "Khan Academy Algorithms", url: "https://www.khanacademy.org/computing/computer-science/algorithms", icon: <Network className="h-4 w-4" /> }
    ],
    color: "bg-purple-500",
    category: "algorithms"
  },
  {
    id: 6,
    title: "Complex Data Structures",
    focus: "Advanced Data Structure Concepts",
    topics: [
      "Hash Tables Implementation",
      "Binary Trees and BST",
      "Graph Representations",
      "Basic Graph Algorithms"
    ],
    resources: [
      { title: "Hash Tables Guide", url: "https://www.geeksforgeeks.org/hashing-data-structure", icon: <Hash className="h-4 w-4" /> },
      { title: "Graph Theory Basics", url: "https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation", icon: <Network className="h-4 w-4" /> }
    ],
    color: "bg-purple-500",
    category: "algorithms"
  },
  {
    id: 7,
    title: "Sorting Algorithms",
    focus: "Understanding Sorting Techniques",
    topics: [
      "Bubble Sort & Selection Sort",
      "Merge Sort & Quick Sort",
      "Time Complexity Analysis",
      "Sorting Algorithm Comparisons"
    ],
    resources: [
      { title: "MIT Algorithms Course", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020", icon: <SortDesc className="h-4 w-4" /> },
      { title: "Sorting Algorithms Visualized", url: "https://visualgo.net/en/sorting", icon: <Cpu className="h-4 w-4" /> }
    ],
    color: "bg-blue-500",
    category: "algorithms"
  },
  {
    id: 8,
    title: "Searching Algorithms",
    focus: "Search Optimization",
    topics: [
      "Linear & Binary Search",
      "Search Trees",
      "Hashing Techniques",
      "Pattern Matching"
    ],
    resources: [
      { title: "Search Algorithms", url: "https://www.geeksforgeeks.org/searching-algorithms", icon: <Search className="h-4 w-4" /> },
      { title: "Binary Search Tutorial", url: "https://www.khanacademy.org/computing/computer-science/algorithms/binary-search", icon: <Binary className="h-4 w-4" /> }
    ],
    color: "bg-blue-500",
    category: "algorithms"
  },
  {
    id: 9,
    title: "Version Control",
    focus: "Git Fundamentals",
    topics: [
      "Git Basics & Workflow",
      "Branching & Merging",
      "Conflict Resolution",
      "Collaborative Development"
    ],
    resources: [
      { title: "Git Documentation", url: "https://git-scm.com/doc", icon: <GitFork className="h-4 w-4" /> },
      { title: "GitHub Learning Lab", url: "https://lab.github.com", icon: <Github className="h-4 w-4" /> }
    ],
    color: "bg-orange-500",
    category: "tools"
  },
  {
    id: 10,
    title: "SQL Databases",
    focus: "Relational Database Fundamentals",
    topics: [
      "Database Design & Schema",
      "SQL CRUD Operations",
      "Joins & Relationships",
      "Query Optimization"
    ],
    resources: [
      { title: "W3Schools SQL", url: "https://www.w3schools.com/sql", icon: <Table className="h-4 w-4" /> },
      { title: "Khan Academy SQL", url: "https://www.khanacademy.org/computing/computer-programming/sql", icon: <TableProperties className="h-4 w-4" /> }
    ],
    color: "bg-yellow-500",
    category: "databases"
  },
  {
    id: 11,
    title: "NoSQL Databases",
    focus: "MongoDB Fundamentals",
    topics: [
      "NoSQL Concepts",
      "MongoDB Operations",
      "Document Design",
      "Aggregation Framework"
    ],
    resources: [
      { title: "MongoDB University", url: "https://university.mongodb.com", icon: <Database className="h-4 w-4" /> },
      { title: "NoSQL Basics", url: "https://www.mongodb.com/nosql-explained", icon: <FolderTree className="h-4 w-4" /> }
    ],
    color: "bg-yellow-500",
    category: "databases"
  },
  {
    id: 12,
    title: "Frontend Basics",
    focus: "Web Development Fundamentals",
    topics: [
      "HTML Structure & Tags",
      "CSS Styling & Layout",
      "JavaScript Basics",
      "DOM Manipulation"
    ],
    resources: [
      { title: "MDN Web Docs", url: "https://developer.mozilla.org", icon: <Globe className="h-4 w-4" /> },
      { title: "freeCodeCamp", url: "https://www.freecodecamp.org", icon: <FileCode className="h-4 w-4" /> }
    ],
    color: "bg-pink-500",
    category: "frontend"
  }
];

const additionalWeeks: Week[] = [
  {
    id: 13,
    title: "Advanced JavaScript",
    focus: "DOM and Modern JavaScript Features",
    topics: [
      "DOM Manipulation & Event Handling",
      "ES6+ Features (Arrow Functions, Destructuring)",
      "Async/Await and Promises",
      "Modern JavaScript Best Practices"
    ],
    resources: [
      { title: "JavaScript.info", url: "https://javascript.info", icon: <Braces className="h-4 w-4" /> },
      { title: "JavaScript30", url: "https://javascript30.com", icon: <Code2 className="h-4 w-4" /> }
    ],
    color: "bg-indigo-500",
    category: "frontend"
  },
  {
    id: 14,
    title: "React.js Fundamentals",
    focus: "Modern Frontend Framework",
    topics: [
      "React Components & JSX",
      "Props and State Management",
      "React Hooks (useState, useEffect)",
      "Component Lifecycle"
    ],
    resources: [
      { title: "React Documentation", url: "https://react.dev", icon: <Component className="h-4 w-4" /> },
      { title: "freeCodeCamp React", url: "https://www.freecodecamp.org/learn/front-end-development-libraries", icon: <Blocks className="h-4 w-4" /> }
    ],
    color: "bg-cyan-500",
    category: "frontend"
  },
  {
    id: 15,
    title: "Backend Development",
    focus: "Node.js and Express.js",
    topics: [
      "Node.js Fundamentals",
      "Express.js Server Setup",
      "Routing & Middleware",
      "Error Handling"
    ],
    resources: [
      { title: "Node.js Docs", url: "https://nodejs.org/docs", icon: <Server className="h-4 w-4" /> },
      { title: "Express.js Guide", url: "https://expressjs.com", icon: <Webhook className="h-4 w-4" /> }
    ],
    color: "bg-green-600",
    category: "backend"
  },
  {
    id: 16,
    title: "RESTful APIs",
    focus: "API Development",
    topics: [
      "REST Architecture",
      "API Routes & Methods",
      "Authentication & JWT",
      "API Testing with Postman"
    ],
    resources: [
      { title: "REST API Tutorial", url: "https://restfulapi.net", icon: <ArrowRightLeft className="h-4 w-4" /> },
      { title: "JWT.io", url: "https://jwt.io", icon: <Fingerprint className="h-4 w-4" /> }
    ],
    color: "bg-orange-600",
    category: "backend"
  },
  {
    id: 17,
    title: "Full Stack Integration",
    focus: "Connecting Frontend & Backend",
    topics: [
      "API Integration",
      "State Management",
      "Form Handling",
      "Data Fetching"
    ],
    resources: [
      { title: "The Odin Project", url: "https://www.theodinproject.com", icon: <Boxes className="h-4 w-4" /> },
      { title: "Full Stack Open", url: "https://fullstackopen.com", icon: <PackageOpen className="h-4 w-4" /> }
    ],
    color: "bg-violet-600",
    category: "fullstack"
  },
  {
    id: 18,
    title: "Mobile Development",
    focus: "Cross-platform Mobile Apps",
    topics: [
      "React Native Basics",
      "Mobile UI Components",
      "Navigation",
      "Device Features"
    ],
    resources: [
      { title: "React Native Docs", url: "https://reactnative.dev", icon: <Smartphone className="h-4 w-4" /> },
      { title: "Expo Documentation", url: "https://docs.expo.dev", icon: <AppWindow className="h-4 w-4" /> }
    ],
    color: "bg-blue-600",
    category: "mobile"
  }
];

const allWeeks = [...weeks, ...additionalWeeks];

function App() {
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  const [completedWeeks, setCompletedWeeks] = useState<Set<number>>(new Set());
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const progress = (completedWeeks.size / allWeeks.length) * 100;

  const toggleWeek = (weekId: number) => {
    setSelectedWeek(selectedWeek === weekId ? null : weekId);
  };

  const toggleComplete = (weekId: number) => {
    const newCompleted = new Set(completedWeeks);
    if (completedWeeks.has(weekId)) {
      newCompleted.delete(weekId);
    } else {
      newCompleted.add(weekId);
    }
    setCompletedWeeks(newCompleted);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'fundamentals':
        return 'bg-green-500';
      case 'algorithms':
        return 'bg-purple-500';
      case 'tools':
        return 'bg-orange-500';
      case 'databases':
        return 'bg-yellow-500';
      case 'frontend':
        return 'bg-pink-500';
      case 'backend':
        return 'bg-green-600';
      case 'fullstack':
        return 'bg-violet-600';
      case 'mobile':
        return 'bg-blue-600';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80")' }}
        />
        <div className={`relative z-10 container mx-auto px-4 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
            Your 6-Month Developer Journey
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Follow this dynamic, interactive roadmap as you progress through your software development learning journey.
            Each week includes focus areas, topics, and resources to help you grow.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">Your Progress</h2>
          <div className="flex items-center gap-4 mb-8 animate-fade-in-delay-1">
            <Progress value={progress} className="w-full" />
            <span className="text-sm font-medium">{Math.round(progress)}% Complete</span>
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className="relative animate-fade-in-delay-2">
          <div className="absolute left-0 right-0 h-1 bg-muted top-6 -z-10" />
          <ScrollArea className="w-full" orientation="horizontal">
            <div className="flex gap-8 min-w-max p-4">
              {allWeeks.map((week) => (
                <div key={week.id} className="flex flex-col items-center group">
                  <div className="relative">
                    <Button
                      variant="outline"
                      size="icon"
                      className={`w-12 h-12 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                        completedWeeks.has(week.id) ? `${getCategoryColor(week.category)} border-primary text-white` : ''
                      } ${selectedWeek === week.id ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''}`}
                      onClick={() => toggleWeek(week.id)}
                    >
                      {week.id}
                    </Button>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 p-2 bg-popover text-popover-foreground text-sm rounded-lg shadow-lg transition-all duration-200">
                      <p className="font-semibold">{week.title}</p>
                      <p className="text-xs text-muted-foreground">{week.focus}</p>
                    </div>
                  </div>
                  <span className="mt-2 text-sm font-medium">Week {week.id}</span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Week Details */}
        <div className="mt-12 animate-fade-in-delay-3">
          {selectedWeek !== null && (
            <Card className="w-full max-w-4xl mx-auto transition-all duration-300 animate-in fade-in-50 slide-in-from-bottom-5 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Week {selectedWeek}: {allWeeks[selectedWeek - 1].title}</CardTitle>
                    <CardDescription className="text-lg mt-2">{allWeeks[selectedWeek - 1].focus}</CardDescription>
                  </div>
                  <Button
                    variant={completedWeeks.has(selectedWeek) ? "default" : "outline"}
                    onClick={() => toggleComplete(selectedWeek)}
                    className={`transition-all duration-300 ${completedWeeks.has(selectedWeek) ? getCategoryColor(allWeeks[selectedWeek - 1].category) : ''}`}
                  >
                    {completedWeeks.has(selectedWeek) ? 'Completed' : 'Mark Complete'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">Topics</h3>
                    <ul className="space-y-2">
                      {allWeeks[selectedWeek - 1].topics.map((topic, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${getCategoryColor(allWeeks[selectedWeek - 1].category)}`} />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Resources</h3>
                    <div className="flex flex-col gap-2">
                      {allWeeks[selectedWeek - 1].resources.map((resource, index) => (
                        <Button
                          key={index}
                          variant="secondary"
                          className="justify-start hover:bg-muted/80 transition-colors duration-200"
                          asChild
                        >
                          <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            {resource.icon}
                            <span className="ml-2">{resource.title}</span>
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <div className="space-y-2">
                <Button variant="link" className="h-8">Join Discord</Button>
                <Button variant="link" className="h-8">Developer Forum</Button>
                <Button variant="link" className="h-8">Blog</Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <div className="space-y-2">
                <Button variant="link" className="h-8">Documentation</Button>
                <Button variant="link" className="h-8">Tutorials</Button>
                <Button variant="link" className="h-8">FAQ</Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2025 Developer Roadmap. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;