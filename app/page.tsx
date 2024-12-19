import JobSearch from '@/components/JobSearch'
import FeaturedJobs from '@/components/FeaturedJobs'
import { ArrowRight, Briefcase, Users, Globe } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="py-20 text-center relative">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-background to-primary/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
        <div className="container space-y-8">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              Find Your Dream Job
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover thousands of job opportunities from top companies around the world.
              Your next career move starts here.
            </p>
          </div>
          <JobSearch />
        </div>
      </section>

      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Briefcase,
              title: "10,000+ Jobs",
              description: "Find opportunities across all industries and experience levels"
            },
            {
              icon: Users,
              title: "Top Companies",
              description: "Connect with leading companies and startups worldwide"
            },
            {
              icon: Globe,
              title: "Remote First",
              description: "Discover remote opportunities that fit your lifestyle"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border bg-background p-6"
            >
              <div className="flex items-center gap-4">
                <feature.icon className="h-8 w-8 text-primary" />
                <h3 className="font-semibold">{feature.title}</h3>
              </div>
              <p className="mt-2 text-muted-foreground">
                {feature.description}
              </p>
              <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              Featured Jobs
            </h2>
            <Link
              href="/jobs"
              className="text-sm font-medium text-primary hover:text-primary/80"
            >
              View all jobs →
            </Link>
          </div>
          <FeaturedJobs />
        </div>
      </section>

      <section className="border-t bg-muted/40">
        <div className="container py-12">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Ready to take the next step?
            </h2>
            <p className="text-muted-foreground max-w-[600px]">
              Create an account to save your favorite jobs, get personalized recommendations,
              and apply with just one click.
            </p>
            <Link
              href="/auth/signup"
              className={cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
                "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                "h-9 px-4 py-2"
              )}
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
