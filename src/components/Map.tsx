import React from 'react';
import { MapPin, Navigation, Clock, Car } from 'lucide-react';

const Map: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Visit Our <span className="text-yellow-600">Office</span>
          </h2>
          <p className="text-xl text-gray-600">
            Located in the heart of New York's business district, easily accessible by car and public transportation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Office Information */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-yellow-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      123 Infrastructure Boulevard<br />
                      Suite 500<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                    <Car className="h-6 w-6 text-yellow-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Parking</h4>
                    <p className="text-gray-600">
                      Free visitor parking available<br />
                      in the building garage.<br />
                      Entrance on Main Street.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-8 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-4">Schedule a Visit</h3>
              <p className="mb-6">
                Plan to visit our office? Schedule an appointment to ensure our team is 
                available to give you a proper consultation.
              </p>
              <button className="bg-white text-yellow-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 w-full">
                Book Appointment
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-gray-200 rounded-xl h-96 lg:h-full flex items-center justify-center relative overflow-hidden">
              {/* Placeholder map - In a real application, you'd use Google Maps, Mapbox, etc. */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 opacity-90"></div>
              <div className="relative text-center text-white z-10">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">InfraTech Headquarters</h3>
                <p className="text-lg mb-6">123 Infrastructure Blvd, New York, NY 10001</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center">
                    <Navigation className="mr-2 h-5 w-5" />
                    Get Directions
                  </button>
                  <button className="border-2 border-white hover:bg-white hover:text-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                    View in Google Maps
                  </button>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm text-white">
                  <div className="font-semibold">Easy Access</div>
                  <div>Subway: 5 min walk</div>
                  <div>Parking: Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation Options */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            How to Reach Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-yellow-700" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">By Car</h4>
              <p className="text-gray-600 text-sm">
                Take I-95 to Exit 23. Free parking available in our building garage.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation className="h-8 w-8 text-gray-700" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Public Transit</h4>
              <p className="text-gray-600 text-sm">
                Subway lines 4, 5, 6 to Union Square. 5-minute walk from station.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-yellow-700" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Nearby Landmarks</h4>
              <p className="text-gray-600 text-sm">
                Next to the Federal Building, across from Madison Square Park.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;