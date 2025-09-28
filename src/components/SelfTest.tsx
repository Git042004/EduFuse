import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { FileQuestion, ChevronRight, ChevronLeft, CheckCircle, Brain, Heart } from 'lucide-react';

const phq9Questions = [
  {
    id: 1,
    question: "Little interest or pleasure in doing things",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" }
    ]
  },
  {
    id: 2,
    question: "Feeling down, depressed, or hopeless",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" }
    ]
  },
  {
    id: 3,
    question: "Trouble falling or staying asleep, or sleeping too much",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" }
    ]
  },
  {
    id: 4,
    question: "Feeling tired or having little energy",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" }
    ]
  },
  {
    id: 5,
    question: "Poor appetite or overeating",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" }
    ]
  },
  {
    id: 6,
    question: "Feeling bad about yourself or that you are a failure",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" }
    ]
  },
  {
    id: 7,
    question: "Trouble concentrating on things, such as reading or watching TV",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" }
    ]
  },
  {
    id: 8,
    question: "Moving or speaking so slowly that others could notice, or being fidgety or restless",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" }
    ]
  },
  {
    id: 9,
    question: "Thoughts that you would be better off dead or of hurting yourself",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" }
    ]
  }
];

const gad7Questions = [
  {
    id: 1,
    question: "Feeling nervous, anxious, or on edge",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" }
    ]
  },
  {
    id: 2,
    question: "Not being able to stop or control worrying",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" }
    ]
  },
  {
    id: 3,
    question: "Worrying too much about different things",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" }
    ]
  },
  {
    id: 4,
    question: "Trouble relaxing",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" }
    ]
  },
  {
    id: 5,
    question: "Being so restless that it is hard to sit still",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" }
    ]
  },
  {
    id: 6,
    question: "Becoming easily annoyed or irritable",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" }
    ]
  },
  {
    id: 7,
    question: "Feeling afraid, as if something awful might happen",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" }
    ]
  }
];

export function SelfTest() {
  const [activeTest, setActiveTest] = useState<'phq9' | 'gad7'>('phq9');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestions = activeTest === 'phq9' ? phq9Questions : gad7Questions;
  const progress = ((currentQuestion + 1) / currentQuestions.length) * 100;
  const answeredCount = Object.keys(answers).length;

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: parseInt(value)
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0);
    setScore(totalScore);
    setCompleted(true);
  };

  const getPHQ9Interpretation = (score) => {
    if (score <= 4) return { level: "Minimal", color: "text-green-600", bg: "bg-green-50" };
    if (score <= 9) return { level: "Mild", color: "text-yellow-600", bg: "bg-yellow-50" };
    if (score <= 14) return { level: "Moderate", color: "text-orange-600", bg: "bg-orange-50" };
    if (score <= 19) return { level: "Moderately Severe", color: "text-red-600", bg: "bg-red-50" };
    return { level: "Severe", color: "text-red-700", bg: "bg-red-100" };
  };

  const getGAD7Interpretation = (score) => {
    if (score <= 4) return { level: "Minimal", color: "text-green-600", bg: "bg-green-50" };
    if (score <= 9) return { level: "Mild", color: "text-yellow-600", bg: "bg-yellow-50" };
    if (score <= 14) return { level: "Moderate", color: "text-orange-600", bg: "bg-orange-50" };
    return { level: "Severe", color: "text-red-700", bg: "bg-red-100" };
  };

  const getScoreInterpretation = (score) => {
    return activeTest === 'phq9' ? getPHQ9Interpretation(score) : getGAD7Interpretation(score);
  };

  const switchTest = (newTest: 'phq9' | 'gad7') => {
    setActiveTest(newTest);
    setCurrentQuestion(0);
    setAnswers({});
    setCompleted(false);
    setScore(0);
  };

  if (completed) {
    const interpretation = getScoreInterpretation(score);
    const maxScore = activeTest === 'phq9' ? 27 : 21;
    const assessmentName = activeTest === 'phq9' ? 'PHQ-9' : 'GAD-7';
    const conditionName = activeTest === 'phq9' ? 'Depression' : 'Anxiety';
    
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-2xl font-semibold text-slate-800">{assessmentName} Assessment Results</h1>
        </div>

        <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">Assessment Complete</h2>
              <p className="text-slate-600">Thank you for completing the {assessmentName} questionnaire</p>
            </div>

            <div className={`p-6 rounded-2xl ${interpretation.bg} mb-6`}>
              <div className="text-4xl font-bold mb-2">{score}/{maxScore}</div>
              <div className={`text-xl font-semibold ${interpretation.color} mb-2`}>
                {interpretation.level} {conditionName}
              </div>
              <p className="text-slate-600 text-sm">
                Based on your responses over the last 2 weeks
              </p>
            </div>

            <div className="space-y-4 text-left">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-slate-800 mb-2">📋 What this means:</h4>
                <p className="text-slate-600 text-sm">
                  This score suggests {interpretation.level.toLowerCase()} levels of {conditionName.toLowerCase()} symptoms. 
                  This is a screening tool and should not replace professional diagnosis.
                </p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-slate-800 mb-2">💡 Recommended next steps:</h4>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Consider speaking with a counselor or mental health professional</li>
                  <li>• Practice self-care and stress management techniques</li>
                  <li>• Maintain regular sleep and exercise routines</li>
                  <li>• Stay connected with supportive friends and family</li>
                </ul>
              </div>

              {score > 9 && (
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <h4 className="font-medium text-orange-800 mb-2">⚠️ Important Notice:</h4>
                  <p className="text-orange-700 text-sm">
                    Your score indicates you may benefit from professional support. 
                    Consider booking a session with one of our counselors.
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button 
                onClick={() => switchTest(activeTest)}
                variant="outline"
                className="flex-1"
              >
                Retake Assessment
              </Button>
              <Button className="flex-1 bg-gradient-to-r from-blue-500 to-green-500 text-white">
                Book Counselor Session
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-2xl font-semibold text-slate-800">Mental Health Self-Assessment</h1>
      </div>

      {/* Assessment Selection */}
      <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <Tabs value={activeTest} onValueChange={(value: any) => switchTest(value)} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="phq9" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                PHQ-9 (Depression)
              </TabsTrigger>
              <TabsTrigger value="gad7" className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                GAD-7 (Anxiety)
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>

      {/* Progress Bar */}
      <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-slate-700">
              Question {currentQuestion + 1} of {currentQuestions.length}
            </span>
            <span className="text-sm text-slate-600">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-3" />
        </CardContent>
      </Card>

      {/* Question Card */}
      <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <FileQuestion className="w-5 h-5 text-blue-500" />
            Over the last 2 weeks, how often have you been bothered by:
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="text-lg font-medium text-slate-800 leading-relaxed">
              {currentQuestions[currentQuestion].question}?
            </h3>
          </div>

          <RadioGroup 
            value={answers[currentQuestions[currentQuestion].id]?.toString() || ""}
            onValueChange={(value) => handleAnswer(currentQuestions[currentQuestion].id, value)}
          >
            <div className="space-y-3">
              {currentQuestions[currentQuestion].options.map((option) => (
                <div key={option.value} className="flex items-center space-x-3 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label 
                    htmlFor={option.value} 
                    className="flex-1 cursor-pointer text-slate-700"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>

          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            {currentQuestion === currentQuestions.length - 1 ? (
              <Button
                onClick={calculateScore}
                disabled={answeredCount !== currentQuestions.length}
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white flex items-center gap-2"
              >
                Complete Assessment
                <CheckCircle className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={nextQuestion}
                disabled={!answers[currentQuestions[currentQuestion].id]}
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="text-2xl">ℹ️</div>
            <div>
              <h4 className="font-medium text-slate-800 mb-2">About this assessment</h4>
              <p className="text-slate-600 text-sm">
                {activeTest === 'phq9' ? 
                  'The PHQ-9 is a widely used tool for screening depression. It\'s designed to help identify symptoms and their severity.' :
                  'The GAD-7 is a widely used tool for screening anxiety disorders. It helps identify generalized anxiety symptoms and their severity.'
                } This is not a diagnostic tool and should not replace professional medical advice.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}