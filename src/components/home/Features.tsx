import { Package, BarChart3, Bell, Zap, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Smart Inventory Tracking",
    description: "Track stock levels in real-time with automated alerts for low inventory and expiring products.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get actionable insights with powerful analytics and customizable reports to optimize your business.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Receive real-time notifications for critical inventory events and never miss important updates.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized system that handles millions of records.",
    color: "from-yellow-500 to-orange-600",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with automatic backups and 99.9% uptime guarantee.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work seamlessly with your team with role-based access and collaborative features.",
    color: "from-indigo-500 to-indigo-600",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Powerful features to help you manage your inventory efficiently and grow your business.
          </p>
        </div>

        {/* Feature Showcase Images */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 animate-fade-in-up">
          <div className="order-2 lg:order-1">
            <img 
              src="/inventory-illustration.svg" 
              alt="Inventory Management Illustration" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Complete Inventory Control
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Track every item in your warehouse with real-time updates, automated alerts, and intelligent forecasting.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Barcode Scanning</p>
                  <p className="text-gray-600 dark:text-gray-400">Quick item identification and tracking</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Cloud Sync</p>
                  <p className="text-gray-600 dark:text-gray-400">Access your data anywhere, anytime</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Smart Alerts</p>
                  <p className="text-gray-600 dark:text-gray-400">Never run out of stock again</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 animate-fade-in-up animation-delay-200">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Data-Driven Insights
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Make informed decisions with powerful analytics and customizable reports that help you understand your inventory trends.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy Rate</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Monitoring</div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="/analytics-chart.svg" 
              alt="Analytics Dashboard" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative space-y-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
