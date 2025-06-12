
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Globe, Users, Edit } from "lucide-react";

interface Activity {
  time: string;
  name: string;
  duration: string;
  description: string;
  cost: string;
}

interface Day {
  day: number;
  title: string;
  activities: Activity[];
}

interface Itinerary {
  destination: string;
  duration: string;
  title: string;
  days: Day[];
  totalCost: string;
  tips: string[];
}

interface ItineraryDisplayProps {
  itinerary: Itinerary;
  onBackToHome: () => void;
}

const ItineraryDisplay = ({ itinerary, onBackToHome }: ItineraryDisplayProps) => {
  const [selectedDay, setSelectedDay] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={onBackToHome}
                className="text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{itinerary.title}</h1>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-1" />
                    {itinerary.destination}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {itinerary.duration} days
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    Total Cost: {itinerary.totalCost}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Invite Friends
              </Button>
              <Button>
                Save Itinerary
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Day Selector */}
          <div className="lg:col-span-1">
            <Card className="p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Itinerary Overview</h3>
              <div className="space-y-2">
                {itinerary.days.map((day) => (
                  <button
                    key={day.day}
                    onClick={() => setSelectedDay(day.day)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedDay === day.day
                        ? 'bg-blue-100 text-blue-900 border border-blue-200'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className="font-medium">Day {day.day}</div>
                    <div className="text-sm text-gray-600">{day.title}</div>
                  </button>
                ))}
              </div>

              {/* Travel Tips */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Travel Tips</h4>
                <div className="space-y-2">
                  {itinerary.tips.map((tip, index) => (
                    <div key={index} className="text-sm text-gray-600 p-2 bg-yellow-50 rounded border-l-2 border-yellow-200">
                      {tip}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Day Details */}
          <div className="lg:col-span-3">
            {itinerary.days
              .filter(day => day.day === selectedDay)
              .map((day) => (
                <div key={day.day}>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                      Day {day.day}: {day.title}
                    </h2>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Day
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {day.activities.map((activity, index) => (
                      <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-4 mb-3">
                              <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                                {activity.time}
                              </Badge>
                              <Badge variant="secondary">
                                {activity.duration}
                              </Badge>
                              <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                                {activity.cost}
                              </Badge>
                            </div>
                            
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                              {activity.name}
                            </h3>
                            
                            <p className="text-gray-600 mb-4">
                              {activity.description}
                            </p>

                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              <Button variant="outline" size="sm">
                                <Edit className="w-4 h-4 mr-1" />
                                Edit
                              </Button>
                              <Button variant="outline" size="sm">
                                Replace
                              </Button>
                            </div>
                          </div>
                          
                          <div className="ml-6 w-32 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                            Photo
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                  {/* Day Summary */}
                  <Card className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 border-0">
                    <h4 className="font-semibold text-gray-900 mb-2">Day {day.day} Summary</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Total Activities:</span>
                        <span className="ml-2 font-medium">{day.activities.length}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Estimated Cost:</span>
                        <span className="ml-2 font-medium text-green-600">
                          ${day.activities.reduce((sum, activity) => 
                            sum + parseInt(activity.cost.replace('$', '')), 0
                          )}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Total Duration:</span>
                        <span className="ml-2 font-medium">Full Day</span>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryDisplay;
