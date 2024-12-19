'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import JobSearch from '@/components/JobSearch'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, MapPin, DollarSign, Building2 } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Icons } from '@/components/icons'

interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  category: string
  salary: string
  description: string
  requirements: string
  createdAt: string
}

const defaultJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    type: 'full-time',
    category: 'technology',
    salary: '$150,000 - $200,000',
    description: 'We are looking for a senior software engineer...',
    requirements: 'Minimum 5 years of experience...',
    createdAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: '2',
    title: 'Product Designer',
    company: 'Design Studio',
    location: 'New York, NY',
    type: 'full-time',
    category: 'design',
    salary: '$100,000 - $140,000',
    description: 'Join our design team...',
    requirements: 'Strong portfolio and 3+ years experience...',
    createdAt: '2024-01-02T00:00:00.000Z',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

function JobList() {
  const searchParams = useSearchParams()
  const [jobs, setJobs] = useState<Job[]>(defaultJobs)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true)
        const queryString = searchParams.toString()
        const response = await fetch(`/api/jobs${queryString ? `?${queryString}` : ''}`)
        
        if (!response.ok) {
          throw new Error('Failed to fetch jobs')
        }

        const data = await response.json()
        setJobs(data)
      } catch (error) {
        setError('Failed to load jobs')
        console.error('Fetch jobs error:', error)
      } finally {
        setLoading(false)
      }
    }

    if (searchParams.toString()) {
      fetchJobs()
    }
  }, [searchParams])

  return (
    <div className="container py-8 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <JobSearch />
      </motion.div>

      {error && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </motion.div>
      )}

      {loading ? (
        <div className="grid gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-6">
              <div className="space-y-4 animate-pulse">
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded"></div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : jobs.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-8 text-muted-foreground"
        >
          No jobs found matching your criteria
        </motion.div>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6"
        >
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              variants={item}
              custom={index}
            >
              <Card
                className={cn(
                  "p-6 group transition-all duration-200 hover:scale-[1.02]",
                  "hover:shadow-lg hover:shadow-primary/5 hover:border-primary/50"
                )}
              >
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {job.title}
                      </h2>
                      <Badge variant="secondary" className="h-fit">
                        {job.type}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{job.company}</p>
                  </div>
                </div>

                <div className="mt-4 grid sm:grid-cols-4 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    <span className="capitalize">{job.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <span>{job.type}</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <Button 
                    variant="outline" 
                    className="group-hover:border-primary/50 transition-all duration-200"
                  >
                    View Details
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default function JobsPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <Icons.spinner className="h-8 w-8 animate-spin" />
      </div>
    }>
      <JobList />
    </Suspense>
  )
}
