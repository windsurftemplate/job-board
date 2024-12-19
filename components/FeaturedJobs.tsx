'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Job {
  id: string
  title: string
  company: string
  location: string
  salary: string
  type: string
  logo?: string
  description: string
  postedAt: string
}

export default function FeaturedJobs() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchJobs = async () => {
      try {
        // Simulated data for now
        const mockJobs = [
          {
            id: '1',
            title: 'Senior Software Engineer',
            company: 'Tech Corp',
            location: 'San Francisco, CA',
            salary: '$150,000 - $200,000',
            type: 'Full-time',
            description: 'Join our team to build scalable solutions using cutting-edge technologies.',
            postedAt: '2 days ago'
          },
          {
            id: '2',
            title: 'Product Designer',
            company: 'Design Co',
            location: 'Remote',
            salary: '$100,000 - $130,000',
            type: 'Full-time',
            description: 'Create beautiful and intuitive user experiences for our products.',
            postedAt: '1 week ago'
          },
          {
            id: '3',
            title: 'Marketing Manager',
            company: 'Growth Inc',
            location: 'New York, NY',
            salary: '$90,000 - $120,000',
            type: 'Full-time',
            description: 'Lead our marketing initiatives and drive business growth.',
            postedAt: '3 days ago'
          }
        ]
        setJobs(mockJobs)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching jobs:', error)
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="animate-pulse bg-card rounded-lg border p-6 space-y-4"
          >
            <div className="h-4 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
            <div className="h-4 bg-muted rounded w-2/3"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <Link
          key={job.id}
          href={`/jobs/${job.id}`}
          className={cn(
            "group block bg-card rounded-lg border p-6",
            "transition-all duration-200",
            "hover:shadow-lg hover:border-primary/50"
          )}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                {job.title}
              </h3>
              <p className="text-muted-foreground">{job.company}</p>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2">
              {job.description}
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{job.postedAt}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>{job.type}</span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t">
              <span className="text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
                View Details →
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
