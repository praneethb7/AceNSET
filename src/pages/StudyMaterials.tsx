import { useState } from "react";
import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  SquareArrowOutUpRight,
  Search,
  Book,
  FileText,
  Video,
  PenTool,
  Link as LinkIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const StudyMaterials = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const materials = {
    textbooks: [
      {
        id: 1,
        title: "Logical Reasoning 1",
        subject: "Logical Reasoning",
        description: "Comprehensive textbook covering algebra",
        type: "PDF",
        url: "https://drive.google.com/file/d/1ceCVEs-xQ6_Ngw5AbzRoHVCwFhx6EHcO/view?usp=sharing",
      },
      {
        id: 2,
        title: "Logical Reasoning 2",
        subject: "Logical Reasoning",
        description: "Complete guide to mechanics, thermodynamics, and optics",
        type: "PDF",
        url: "https://drive.google.com/file/d/1ExYbaCOqc8k9BL3pMf-4p4JAJt02kqe5/view?usp=sharing",
      },
      {
        id: 3,
        title: "Maths 1",
        subject: "Mathematics",
        description:
          "In-depth coverage of organic chemistry concepts and reactions",
        type: "PDF",
        url: "https://drive.google.com/file/d/1hOs_gqc0KntrJ3d5KztfJ1Ej-pI260la/view?usp=sharing",
      },
    ],
    notes: [
      {
        id: 1,
        title: "Linear Algebra Summarized",
        subject: "Mathematics",
        description: "Concise notes covering all key linear algebra concepts",
        type: "PDF",
        size: "4.3 MB",
        date: "2023-12-05",
        url: "https://example.com/linear-algebra.pdf",
      },
      {
        id: 2,
        title: "Quantum Physics Study Notes",
        subject: "Physics",
        description: "Detailed notes on quantum mechanics fundamentals",
        type: "PDF",
        size: "5.8 MB",
        date: "2024-01-12",
        url: "https://example.com/quantum-notes.pdf",
      },
      {
        id: 3,
        title: "Biology Quick Reference",
        subject: "Biology",
        description:
          "Handy reference notes for biological systems and processes",
        type: "PDF",
        size: "7.1 MB",
        date: "2023-12-28",
        url: "https://example.com/bio-reference.pdf",
      },
    ],
    videos: [
      {
        id: 1,
        title: "Probability",
        subject: "Mathematics",
        description:
          "Video series explaining probability",
        type: "Video",
        duration: "4h 32m",
        url: "https://www.youtube.com/watch?v=sYTW-mvxcOk",
      },
      {
        id: 2,
        title: "Premutation And Combination",
        subject: "Mathematics",
        description: "Visual guide to essential laboratory procedures",
        type: "Video",
        duration: "2h 45m",
        url: "https://example.com/chem-lab-videos",
      },
      {
        id: 3,
        title: "Ratio And Proportion",
        subject: "Mathematics",
        description: "Introduction to programming concepts and practices",
        type: "Video",
        duration: "5h 15m",
        url: "https://example.com/programming-videos",
      },
      {
        id: 4,
        title: "Exponents And Logarithms",
        subject: "Mathematics",
        description: "Introduction to programming concepts and practices",
        type: "Video",
        duration: "5h 15m",
        url: "https://example.com/programming-videos",
      },
      {
        id: 5,
        title: "Statics",
        subject: "Mathematics",
        description: "Introduction to programming concepts and practices",
        type: "Video",
        duration: "5h 15m",
        url: "https://example.com/programming-videos",
      },
      {
        id: 6,
        title: "Sets",
        subject: "Mathematics",
        description: "Introduction to programming concepts and practices",
        type: "Video",
        duration: "5h 15m",
        url: "https://example.com/programming-videos",
      },
    ],
    practice: [
      {
        id: 1,
        title: "Question Bank 1",
        subject: "Mathematics and Logical Reasoning",
        description:
          "Collection of practice problems for comprehensive revision",
        type: "PDF",
        url: "https://drive.google.com/file/d/1O6qX1PIQjzF_4w3fJXpYk8ZX7UgSvZGZ/view",
      },
      {
        id: 2,
        title: "Mock test",
        subject: "Mathematics and Logical Reasoning",
        description:
          "Complete set of mock tests simulating actual exam conditions",
        type: "PDF",
        url: "https://drive.google.com/file/d/1DMAIWhOSe2QgPnZ0e_lWkyRVguOjgmqO/view?usp=sharing",
      },
      {
        id: 3,
        title: "Jan Feb PYQs",
        subject: "Mathematics and Logical Reasoning",
        description:
          "Complete set of mock tests simulating actual exam conditions",
        type: "PDF",
        url: "https://drive.google.com/file/d/1c1ip_NlM1NzO3jV5wZlnsIl2pxRB7X-z/view?usp=sharing",
      },
    ],
  };

  // Define type for material items
  type MaterialItem = {
    id: number;
    title: string;
    subject: string;
    description: string;
    type: string;
    date: string;
    size?: string;
    duration?: string;
    url: string;
  };

  const filteredMaterials = (type: keyof typeof materials) => {
    return materials[type].filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) as MaterialItem[];
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FileText className="h-4 w-4" />;
      case "Video":
        return <Video className="h-4 w-4" />;
      case "ZIP":
        return <FileText className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Study Materials</h1>
        <p className="text-muted-foreground mb-6">
          Access comprehensive study materials to excel in your exams.
        </p>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by title, subject or description..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Tabs defaultValue="textbooks">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="textbooks" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              <span className="hidden sm:inline">Textbooks</span>
            </TabsTrigger>
            <TabsTrigger value="Syllabus" className="flex items-center gap-2">
              <PenTool className="h-4 w-4" />
              <span className="hidden sm:inline">Syllabus</span>
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              <span className="hidden sm:inline">Videos</span>
            </TabsTrigger>
            <TabsTrigger value="practice" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Practice</span>
            </TabsTrigger>
          </TabsList>

          {/* Textbooks */}
          <TabsContent value="textbooks">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMaterials("textbooks").map((item) => (
                <Card
                  key={item.id}
                  className="transition-shadow hover:shadow-md"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{item.subject}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        {getIcon(item.type)}
                        <span className="ml-1">{item.type}</span>
                      </div>
                    </div>
                    <CardTitle className="my-1">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary hover:underline flex items-center"
                      >
                        {item.title}
                        <LinkIcon className="h-3 w-3 ml-1 inline" />
                      </a>
                    </CardTitle>

                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button variant="outline" className="w-full">
                        <SquareArrowOutUpRight className="h-4 w-4 mr-2" />
                        Visit
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              ))}
              {filteredMaterials("textbooks").length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">
                    No textbooks found matching "{searchTerm}"
                  </p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Notes */}
          <TabsContent value="notes">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMaterials("notes").map((item) => (
                <Card
                  key={item.id}
                  className="transition-shadow hover:shadow-md"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{item.subject}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        {getIcon(item.type)}
                        <span className="ml-1">{item.type}</span>
                      </div>
                    </div>
                    <CardTitle className="mt-2">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary hover:underline flex items-center"
                      >
                        {item.title}
                        <LinkIcon className="h-3 w-3 ml-1 inline" />
                      </a>
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      Size: {item.size || "N/A"} • Added:{" "}
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button variant="outline" className="w-full">
                        <SquareArrowOutUpRight className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              ))}
              {filteredMaterials("notes").length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">
                    No notes found matching "{searchTerm}"
                  </p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Videos */}
          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMaterials("videos").map((item) => (
                <Card
                  key={item.id}
                  className="transition-shadow hover:shadow-md"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{item.subject}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Video className="h-4 w-4" />
                        <span className="ml-1">Video</span>
                      </div>
                    </div>
                    <CardTitle className="mt-2">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary hover:underline flex items-center"
                      >
                        {item.title}
                        <LinkIcon className="h-3 w-3 ml-1 inline" />
                      </a>
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      Duration: {item.duration || "N/A"}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button variant="outline" className="w-full">
                        <Video className="h-4 w-4 mr-2" />
                        Watch Now
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              ))}
              {filteredMaterials("videos").length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">
                    No videos found matching "{searchTerm}"
                  </p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Practice */}
          <TabsContent value="practice">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMaterials("practice").map((item) => (
                <Card
                  key={item.id}
                  className="transition-shadow hover:shadow-md"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{item.subject}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        {getIcon(item.type)}
                        <span className="ml-1">{item.type}</span>
                      </div>
                    </div>
                    <CardTitle className="mt-2">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary hover:underline flex items-center"
                      >
                        {item.title}
                        <LinkIcon className="h-3 w-3 ml-1 inline" />
                      </a>
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button variant="outline" className="w-full">
                        <SquareArrowOutUpRight className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              ))}
              {filteredMaterials("practice").length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">
                    No practice materials found matching "{searchTerm}"
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t mt-16 py-6">
        <div className="container px-4">
          <div className="text-center">
            <h3 className="font-bold text-primary">appt.ppl</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Helping students crack scaler NSET.
            </p>
            <p className="text-xs text-muted-foreground/70 mt-4">
              © {new Date().getFullYear()} appt.ppl. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudyMaterials;
