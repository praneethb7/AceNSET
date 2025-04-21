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
  AlertTriangle,
  Linkedin
} from "lucide-react";
import { Link } from "react-router-dom";

// Syllabus data replacing the old notes section
const syllabusData = {
  "Logical Reasoning": [
    { topic: "Series, Blood Relations, Family Tree", questions: 5, weightage: "16%", difficulty: "Moderate" },
    { topic: "Simple & Compound Interest", questions: 2, weightage: "6%", difficulty: "Easy" },
    { topic: "Direction Sense", questions: 2, weightage: "6%", difficulty: "Easy to Moderate" },
    { topic: "Puzzles", questions: 5, weightage: "16%", difficulty: "Moderate to Hard" },
    { topic: "Seating Arrangement", questions: 4, weightage: "13%", difficulty: "Moderate to Hard" },
    { topic: "Venn Diagram", questions: 2, weightage: "6%", difficulty: "Easy" },
    { topic: "Data Sufficiency", questions: 2, weightage: "6%", difficulty: "Moderate" },
    { topic: "Pie Charts", questions: 1, weightage: "3%", difficulty: "Easy" },
    { topic: "Bar and Line Graphs", questions: 1, weightage: "3%", difficulty: "Easy" },
    { topic: "Coding-Decoding", questions: 2, weightage: "6%", difficulty: "Easy to Moderate" },
    { topic: "Sets and Caselets", questions: 1, weightage: "3%", difficulty: "Moderate" },
    { topic: "Clocks and Calendars", questions: 1, weightage: "3%", difficulty: "Moderate" },
    { topic: "Syllogism", questions: 1, weightage: "3%", difficulty: "Easy" },
    { topic: "Percentages", questions: 1, weightage: "3%", difficulty: "Easy" },
    { topic: "Profit and Loss", questions: 1, weightage: "3%", difficulty: "Easy" },
    { topic: "Speed, Time and Distance", questions: 1, weightage: "3%", difficulty: "Easy to Moderate" },
    { topic: "Work and Time", questions: 1, weightage: "3%", difficulty: "Easy" },
  ],
  Mathematics: [
    { topic: "Number Theory", questions: 5, weightage: "26%", difficulty: "Moderate to Hard" },
    { topic: "Exponentials and Logarithms", questions: 2, weightage: "11%", difficulty: "Easy to Moderate" },
    { topic: "Probability and Statistics", questions: 4, weightage: "21%", difficulty: "Easy to Moderate" },
    { topic: "Permutation and Combinations", questions: 3, weightage: "16%", difficulty: "Easy to Difficult" },
    { topic: "Ratio and Proportion", questions: 3, weightage: "16%", difficulty: "Easy" },
    { topic: "Sets (Venn Diagrams)", questions: 3, weightage: "16%", difficulty: "Moderate" },
  ],
};

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
        description: "In-depth coverage of organic chemistry concepts and reactions",
        type: "PDF",
        url: "https://drive.google.com/file/d/1hOs_gqc0KntrJ3d5KztfJ1Ej-pI260la/view?usp=sharing",
      },
    ],
    videos: [
      {
        id: 1,
        title: "NSET Logical Reasoning",
        subject: "Scaler Topics",
        description: "Scaler NSET Logical Reasoning course overview",
        type: "Video",
        duration: "1h 49m",
        url: "https://www.scaler.com/topics/course/AptitudeNSET/?event=signup_event",
      },
      {
        id: 2,
        title: "NSET Math",
        subject: "Scaler Topics",
        description: "Scaler NSET Mathematics course overview",
        type: "Video",
        duration: "2h 41m",
        url: "https://www.scaler.com/topics/course/MathsNSET/",
      },
      {
        id: 3,
        title: "Probability",
        subject: "Mathematics",
        description: "Comprehensive tutorials on probability concepts",
        type: "Video",
        duration: "5h 32m",
        url: "https://www.youtube.com/watch?v=sYTW-mvxcOk",
      },
      {
        id: 4,
        title: "Premutation And Combination",
        subject: "Mathematics",
        description: "Interactive walkthrough of permutations and combinations",
        type: "Video",
        duration: "7h 26m",
        url: "https://youtu.be/Cq9SqJPC0Dk",
      },
      {
        id: 5,
        title: "Ratio And Proportion",
        subject: "Mathematics",
        description: "Clear explanations on ratio and proportion",
        type: "Video",
        duration: "58m",
        url: "https://youtu.be/jfoJBivWlnQ",
      },
      {
        id: 6,
        title: "Exponents And Logarithms",
        subject: "Mathematics",
        description: "Conceptual guide to exponents and logarithms",
        type: "Video",
        duration: "1h 03m",
        url: "https://youtu.be/w-7mbazOx6o",
      },
      {
        id: 7,
        title: "Statistics",
        subject: "Mathematics",
        description: "Statistics fundamentals with real-world examples",
        type: "Video",
        duration: "2h 10m",
        url: "https://youtu.be/njcdN_-XPqc",
      },
      {
        id: 8,
        title: "Sets",
        subject: "Mathematics",
        description: "Detailed lessons on sets and set operations",
        type: "Video",
        duration: "5h 17m",
        url: "https://www.youtube.com/watch?v=0KCLAfpZ2zY",
      },
    ],
    practice: [
      {
        id: 1,
        title: "Question Bank 1",
        subject: "Mathematics and Logical Reasoning",
        description: "Collection of practice problems for comprehensive revision",
        type: "PDF",
        url: "https://drive.google.com/file/d/1O6qX1PIQjzF_4w3fJXpYk8ZX7UgSvZGZ/view",
      },
      {
        id: 2,
        title: "Mock test",
        subject: "Mathematics and Logical Reasoning",
        description: "Complete set of mock tests simulating actual exam conditions",
        type: "PDF",
        url: "https://drive.google.com/file/d/1DMAIWhOSe2QgPnZ0e_lWkyRVguOjgmqO/view?usp=sharing",
      },
      {
        id: 3,
        title: "Jan Feb Paper Questions",
        subject: "Mathematics and Logical Reasoning",
        description: "Complete set of mock tests simulating actual exam conditions",
        type: "PDF",
        url: "https://drive.google.com/file/d/1c1ip_NlM1NzO3jV5wZlnsIl2pxRB7X-z/view?usp=sharing",
      },
      {
        id: 4,
        title: "March Questions",
        subject: "Mathematics and Logical Reasoning",
        description: "Complete set of mock tests simulating actual exam conditions",
        type: "PDF",
        url: "https://drive.google.com/file/d/1bremw10gtJ7XL9xJMu_L20IFf_ZWXHH6/view?usp=sharing",
      },
    ],
  };

  // filter function for search (applicable to textbooks, videos, practice)
  const filteredMaterials = (type) =>
    materials[type].filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const getIcon = (type) => {
    switch (type) {
      case "PDF": return <FileText className="h-4 w-4" />;
      case "Video": return <Video className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
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
            <TabsTrigger value="syllabus" className="flex items-center gap-2">
              <PenTool className="h-4 w-4" />
              <span className="hidden sm:inline">Topic Wise Weightage</span>
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

          {/* Textbooks Tab */}
          <TabsContent value="textbooks">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMaterials("textbooks").map((item) => (
                <Card key={item.id} className="transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{item.subject}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        {getIcon(item.type)}
                        <span className="ml-1">{item.type}</span>
                      </div>
                    </div>
                    <CardTitle className="my-1">
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline hover:text-primary">
                        {item.title}<LinkIcon className="h-3 w-3 ml-1 inline" />
                      </a>
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" className="w-full">
                        <SquareArrowOutUpRight className="h-4 w-4 mr-2" />Visit
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              ))}
              {filteredMaterials("textbooks").length === 0 && (
                <div className="col-span-full text-center py-12">
                  No textbooks found matching "{searchTerm}".
                </div>
              )}
            </div>
          </TabsContent>

          {/* Syllabus Tab */}
          <TabsContent value="syllabus">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(syllabusData).map(([section, topics]) => (
                <div key={section}>
                  <h2 className="text-xl font-semibold mb-4">{section}</h2>
                  <div className="border rounded-lg overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-muted">
                        <tr>
                          <th className="px-4 py-2">Topic</th>
                          <th className="px-4 py-2"># Qs</th>
                          <th className="px-4 py-2">Weightage</th>
                          <th className="px-4 py-2">Difficulty</th>
                        </tr>
                      </thead>
                      <tbody>
                        {topics.map((t, i) => (
                          <tr key={i} className="border-t">
                            <td className="px-4 py-2 whitespace-nowrap">{t.topic}</td>
                            <td className="px-4 py-2">{t.questions}</td>
                            <td className="px-4 py-2">{t.weightage}</td>
                            <td className="px-4 py-2">{t.difficulty}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-accent/50 p-4 rounded-md border border-accent mt-4">
                      <div className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Important Note</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                          Please note: This topic-wise analysis is intended solely for reference purposes. 
                          While we strive for accuracy, the actual exam pattern may vary. 
                          We recommend verifying with official sources before relying on this information.
                          </p>
                        </div>
                      </div>
                    </div>
          </TabsContent>

          {/* Videos Tab */}
          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMaterials("videos").map((item) => (
                <Card key={item.id} className="transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{item.subject}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Video className="h-4 w-4" />
                        <span className="ml-1">Video</span>
                      </div>
                    </div>
                    <CardTitle className="mt-2">
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-primary flex items-center">
                        {item.title}<LinkIcon className="h-3 w-3 ml-1 inline" />
                      </a>
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    Duration: {item.duration || "N/A"}
                  </CardContent>
                  <CardFooter>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" className="w-full">
                        <Video className="h-4 w-4 mr-2" />Watch Now
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              ))}
              {filteredMaterials("videos").length === 0 && (
                <div className="col-span-full text-center py-12">
                  No videos found matching "{searchTerm}".
                </div>
              )}
            </div>
          </TabsContent>

          {/* Practice Tab */}
          <TabsContent value="practice">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMaterials("practice").map((item) => (
                <Card key={item.id} className="transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{item.subject}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        {getIcon(item.type)}
                        <span className="ml-1">{item.type}</span>
                      </div>
                    </div>
                    <CardTitle className="mt-2">
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-primary flex items-center">
                        {item.title}<LinkIcon className="h-3 w-3 ml-1 inline" />
                      </a>
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" className="w-full">
                        <SquareArrowOutUpRight className="h-4 w-4 mr-2" />Download
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              ))}
              {filteredMaterials("practice").length === 0 && (
                <div className="col-span-full text-center py-12">
                  No practice materials found matching "{searchTerm}".
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
              Helping students crack Scaler NSET.
            </p>
            {/* Contributors Box */}
            <div className="mt-6 mx-auto max-w-md bg-muted rounded-2xl p-4 shadow-md">
              <h4 className="text-md font-semibold text-foreground mb-2">Connect with Contributors</h4>
              <div className="flex flex-col gap-3 items-start text-base">

                <a
                  href="https://www.linkedin.com/in/praneeth-budati-257391326/?originalSubdomain=in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Linkedin size={18} /> Praneeth Budati
                </a>

                <a
                  href="https://www.linkedin.com/in/pranay-reddy-a3015a333/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Linkedin size={18} /> Pranay Reddy
                </a>

                <a
                  href="https://www.linkedin.com/in/ananthadattaeranti/?originalSubdomain=in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Linkedin size={18} /> Anantha
                </a>
              </div>
            </div>
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
