'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, MapPin, Briefcase, DollarSign } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function JobSearch() {
  const router = useRouter()
  const [filters, setFilters] = useState({
    keyword: '',
    location: '',
    category: '',
    salary: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const searchParams = new URLSearchParams()
    Object.entries(filters).forEach(([key, value]) => {
      if (value) searchParams.append(key, value)
    })
    router.push(`/jobs?${searchParams.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-card p-4 rounded-xl shadow-lg border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Job title or keyword"
            className={cn(
              "w-full pl-10 pr-4 py-2 rounded-md border bg-background",
              "focus:outline-none focus:ring-2 focus:ring-primary",
              "placeholder:text-muted-foreground"
            )}
            value={filters.keyword}
            onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
          />
        </div>
        
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Location"
            className={cn(
              "w-full pl-10 pr-4 py-2 rounded-md border bg-background",
              "focus:outline-none focus:ring-2 focus:ring-primary",
              "placeholder:text-muted-foreground"
            )}
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          />
        </div>
        
        <div className="relative">
          <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <select
            className={cn(
              "w-full pl-10 pr-4 py-2 rounded-md border bg-background appearance-none",
              "focus:outline-none focus:ring-2 focus:ring-primary",
              "placeholder:text-muted-foreground"
            )}
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          >
            <option value="">All Categories</option>
            <option value="technology">Technology</option>
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
            <option value="design">Design</option>
            <option value="finance">Finance</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
          </select>
        </div>

        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <select
            className={cn(
              "w-full pl-10 pr-4 py-2 rounded-md border bg-background appearance-none",
              "focus:outline-none focus:ring-2 focus:ring-primary",
              "placeholder:text-muted-foreground"
            )}
            value={filters.salary}
            onChange={(e) => setFilters({ ...filters, salary: e.target.value })}
          >
            <option value="">Salary Range</option>
            <option value="0-50000">$0 - $50,000</option>
            <option value="50000-100000">$50,000 - $100,000</option>
            <option value="100000-150000">$100,000 - $150,000</option>
            <option value="150000+">$150,000+</option>
          </select>
        </div>

        <button
          type="submit"
          className={cn(
            "w-full md:col-span-2 lg:col-span-4 py-2 px-4 rounded-md",
            "bg-primary text-primary-foreground font-medium",
            "hover:bg-primary/90 transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          )}
        >
          Search Jobs
        </button>
      </div>
    </form>
  )
}
