import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'

export async function POST(request: Request) {
  try {
    const session = await getServerSession()
    
    if (!session || session.user?.role !== 'employer') {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const jobData = await request.json()

    // Validate required fields
    const requiredFields = ['title', 'company', 'location', 'type', 'category', 'salary', 'description', 'requirements']
    for (const field of requiredFields) {
      if (!jobData[field]) {
        return NextResponse.json(
          { message: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // TODO: Save job to database
    // This is a mock implementation
    const job = {
      id: Date.now().toString(),
      ...jobData,
      createdAt: new Date().toISOString(),
      employerId: session.user.id,
    }

    return NextResponse.json(job, { status: 201 })
  } catch (error) {
    console.error('Create job error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const keyword = searchParams.get('keyword')
    const location = searchParams.get('location')
    const category = searchParams.get('category')
    const salary = searchParams.get('salary')

    // TODO: Implement actual database query with filters
    // This is a mock implementation
    const jobs = [
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
      // Add more mock jobs here
    ]

    return NextResponse.json(jobs)
  } catch (error) {
    console.error('Get jobs error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
