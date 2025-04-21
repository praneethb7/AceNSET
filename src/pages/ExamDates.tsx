
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, AlertCircle } from "lucide-react";

const ExamDates = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  const createExamData = (monthOffset: number) => {
    const targetMonth = new Date(currentYear, currentMonth + monthOffset, 1);
    const monthName = targetMonth.toLocaleString('default', { month: 'long' });
    const year = targetMonth.getFullYear();
    
    let exams = [];
    
    if (monthOffset === 0) {
      exams = [
        {
          id: 1,
          name: "April - Intake 1",
          date: new Date(2025,3 ,26 ),
          time: "11:00 AM - 1:00 PM",
          type: "Online",
          deadline: new Date(2025,3,24)
        },
        {
          id: 2,
          name: "April - Intake 2",
          date: new Date(2025,3,27),
          time: "11:00 AM - 1:00 PM",
          type: "Online",
          deadline: new Date(2025,3,24)
        },
      ];
    } else if (monthOffset === 1) {
      exams = [
        {
          id: 3,
          name: "May Intake-1",
          date: new Date(2025,4, 25),
          time: "11:00 AM - 1:00 PM",
          type:"Online",
          deadline: new Date(2025,4, 23)
        }
      ];
    } else {
          
    }
    
    return {
      month: monthName,
      year: year,
      exams: exams
    };
  };
  
  const examSchedule = [
    createExamData(0), // Current month
    createExamData(1), // Next month
    createExamData(2),  // Month after next
    createExamData(3)
  ];
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric',
      month: 'short', 
      year: 'numeric'
    });
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Exam Schedule</h1>
        <p className="text-gray-600 mb-6">
          Keep track of all upcoming exams and prepare accordingly.
        </p>
        
        <Tabs defaultValue={examSchedule[0].month.toLowerCase()}>
          <TabsList className="mb-6">
            {examSchedule.map((schedule) => (
              <TabsTrigger 
                key={schedule.month} 
                value={schedule.month.toLowerCase()}
                className="px-6"
              >
                {schedule.month} {schedule.year}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {examSchedule.map((schedule) => (
            <TabsContent key={schedule.month} value={schedule.month.toLowerCase()}>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  {schedule.month} {schedule.year}
                </h2>
              </div>
              
              {schedule.exams.length === 0 ? (
                <Card>
                  <CardContent className="py-10 text-center">
                    <p className="text-gray-500">Dates will be released soon.</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {schedule.exams.map((exam) => (
                    <Card key={exam.id} className={exam.important ? "border-primary/50" : ""}>
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{exam.name}</CardTitle>
                          <Badge variant={exam.important ? "default" : "outline"}>
                            {exam.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                            <span>{formatDate(exam.date)}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-gray-500" />
                            <span>{exam.time}</span>
                          </div>
                          <div className="mt-4 p-3 bg-primary/10 rounded-md flex items-start">
                            <AlertCircle className="h-4 w-4 mr-2 text-primary mt-0.5" />
                            <div>
                              <p className="text-sm font-medium">Important </p>
                              <p className="text-xs text-gray-600">Deadline: <span>{formatDate(exam.deadline)}</span></p>
                              </div>
                          </div>
                        </div>
                        
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="bg-white p-6 mt-8 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold mb-4">Exam Guidelines</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-2">
                <span className="text-xs font-medium text-primary">1</span>
              </span>
              <span>Attempt the mock test beforehand..</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-2">
                <span className="text-xs font-medium text-primary">2</span>
              </span>
              <span>Use a laptop/desktop with a working camera and mic.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-2">
                <span className="text-xs font-medium text-primary">3</span>
              </span>
              <span>Log in at least 15 minutes before the exam starts.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-2">
                <span className="text-xs font-medium text-primary">4</span>
              </span>
              <span>All activities are monitored. Cheating leads to a ban.</span>
            </li>
          </ul>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t mt-16 py-6">
        <div className="container px-4">
          <div className="text-center">
            <h3 className="font-bold text-primary">appt.ppl</h3>
            <p className="text-sm text-gray-500 mt-1">Helping students crack Scaler NSET  .</p>
            <p className="text-xs text-gray-400 mt-4">© {new Date().getFullYear()} appt.ppl. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExamDates;
