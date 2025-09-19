'use client'
import React from 'react'

export function LoadingFallback() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header skeleton */}
      <div className="h-16 bg-white border-b border-gray-200 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="h-8 w-32 bg-gray-200 rounded"></div>
          <div className="hidden md:flex space-x-8">
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Hero section skeleton */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="h-12 w-96 bg-gray-200 rounded mx-auto animate-pulse"></div>
          <div className="h-6 w-80 bg-gray-200 rounded mx-auto animate-pulse"></div>
          <div className="h-6 w-64 bg-gray-200 rounded mx-auto animate-pulse"></div>
          <div className="h-12 w-48 bg-blue-200 rounded mx-auto animate-pulse"></div>
        </div>
      </div>

      {/* Content sections skeleton */}
      <div className="space-y-16 py-16">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-96 bg-gray-100 rounded-lg animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Footer skeleton */}
      <div className="h-64 bg-gray-900 animate-pulse"></div>
    </div>
  )
}
