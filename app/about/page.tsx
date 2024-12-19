'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Icons } from '@/components/icons'

const features = [
  {
    icon: 'search',
    title: 'Smart Job Matching',
    description: 'Our AI-powered matching system connects the right talent with the right opportunities.',
  },
  {
    icon: 'shield',
    title: 'Verified Companies',
    description: 'All employers on our platform are thoroughly vetted to ensure legitimate opportunities.',
  },
  {
    icon: 'zap',
    title: 'Quick Apply',
    description: 'Apply to multiple positions with your saved profile and get faster responses.',
  },
  {
    icon: 'bell',
    title: 'Real-time Updates',
    description: 'Receive instant notifications about application status and new matching opportunities.',
  },
]

const stats = [
  { number: '10K+', label: 'Active Jobs' },
  { number: '5K+', label: 'Companies' },
  { number: '1M+', label: 'Job Seekers' },
  { number: '500K+', label: 'Successful Matches' },
]

export default function AboutPage() {
  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold mb-4">
          Connecting Talent with Opportunity
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We're building the future of job search and recruitment. Our platform makes it easier than ever for job seekers to find their dream roles and for employers to discover exceptional talent.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 mb-16"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {features.map((feature, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-primary/10 mr-4">
                  <Icons.logo className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Mission Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We believe everyone deserves a job they love. Our mission is to make the job search and hiring process more efficient, transparent, and enjoyable for everyone involved.
        </p>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Have questions about our platform? We'd love to hear from you. Reach out to our team for support, partnerships, or general inquiries.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="mailto:support@jobboard.com"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Contact Support
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}
