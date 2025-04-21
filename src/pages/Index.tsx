import { Linkedin } from "lucide-react";
import { Book, Clock, LineChart, Download, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCard from "@/components/FeaturedCard";
import StatsCard from "@/components/StatsCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 py-8">
        {/* Hero Section */}
        <Hero
          title="Student Prep Kit Portal"
          subtitle="Excel in Your Exams"
          ctaText="Explore Materials"
          ctaLink="/study-materials"
        />

        {/* Stats Overview */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Key Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard
              title="Study Materials"
              value="10+"
              subtitle="Including PDFs, videos, and notes"
              icon={<Book className="h-4 w-4 text-primary" />}
            />
            <StatsCard
              title="Upcoming Intakes"
              value="4"
              subtitle="Scheduled till July"
              icon={<Clock className="h-4 w-4 text-primary" />}
            />
            <StatsCard
              title="YouTube Channel"
              value="appt.ppl"
              subtitle="Watch strategy and prep videos"
              icon={<Trophy className="h-4 w-4 text-primary" />}
              buttonText="Visit Channel"
              buttonLink="https://youtube.com/@appt_ppl?si=heubvM44FGHU-kkL"
            />
            <StatsCard
              title="Downloads"
              value="TBD"
              subtitle="Guides and resources in one place"
              icon={<Download className="h-4 w-4 text-primary" />}
            />

          </div>
        </div>

        {/* Featured Sections */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Prepare Effectively</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeaturedCard
              title="Study Materials"
              description="Access comprehensive study materials including notes, textbooks, videos, and practice tests."
              icon={<Book className="h-5 w-5 text-primary" />}
              linkTo="/study-materials"
              badgeText="10+"
            />
            <FeaturedCard
              title="Exam Schedule"
              description="Keep track of upcoming exams, their dates, timings, and important instructions."
              icon={<Clock className="h-5 w-5 text-primary" />}
              linkTo="/exam-dates"
              badgeText="Updated"
            />
            <FeaturedCard
              title="Previous Cutoffs"
              description="Analyze previous months' cutoffs to understand the competition and set realistic goals."
              icon={<LineChart className="h-5 w-5 text-primary" />}
              linkTo="/cutoffs"
              badgeText="Trending"
            />
          </div>
        </div>

        {/* Quick Tips Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">Quick Preparation Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 rounded-full bg-primary/10 p-2">
                <span className="text-primary font-bold">01</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Give Mock Tests</h3>
                <p className="mt-1 text-gray-600">Attend them Mock tests, as you can learn time management.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 rounded-full bg-primary/10 p-2">
                <span className="text-primary font-bold">02</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Practice Previous Papers</h3>
                <p className="mt-1 text-gray-600">Practice previous year questions (PYQs) and sample tests.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 rounded-full bg-primary/10 p-2">
                <span className="text-primary font-bold">03</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Lectures</h3>
                <p className="mt-1 text-gray-600">Utilize Scalar’s YouTube playlists and Test Prep Serie.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 rounded-full bg-primary/10 p-2">
                <span className="text-primary font-bold">04</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Extra Question</h3>
                <p className="mt-1 text-gray-600">Use topic-specific resources like Arun Sharma for Mathematics and RS Aggarwal for Logical Reasoning.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16 py-6">
        <div className="container px-4">
          <div className="text-center">
            <h3 className="font-bold text-primary">appt.ppl</h3>
            <p className="text-sm text-gray-500 mt-1">Helping students crack Scaler NSET.</p>
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
            <p className="text-xs text-gray-400 mt-4">© {new Date().getFullYear()} appt.ppl. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
