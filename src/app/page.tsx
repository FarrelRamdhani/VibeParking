import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-8">
        <div className="flex items-center justify-center mb-8">
          {/* Logo placeholder - will be replaced with actual logo */}
          <div className="w-64 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center border-2 border-gray-200">
            <div className="text-center p-8">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">Vibe Parking</h1>
              <p className="text-gray-600 text-sm mt-2">Professional Parking Management System</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/dashboard"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
          >
            Go to Dashboard
          </Link>
          
          <div className="text-gray-600 text-sm">
            <p>Enterprise-grade parking management solution</p>
          </div>
        </div>
      </div>
    </main>
  )
}