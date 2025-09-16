type GraphQLError = {
  message: string
  locations?: Array<{ line: number; column: number }>
  path?: Array<string | number>
  extensions?: Record<string, unknown>
}

type ApiResponse<T> = {
  data: T
  errors?: Array<GraphQLError>
}

// ---------------------------------------------------------------------------

const API_URL = process.env.WORDPRESS_API_URL

// ---------------------------------------------------------------------------

export const fetchAPI = async <T>(query: string): Promise<T> => {
  const headers = { 'Content-Type': 'application/json' }

  if (!API_URL) {
    throw new Error('API_URL is missing')
  }

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query }),
      next: { revalidate: 10 },
    })

    if (!res.ok) {
      const errorBody = await res.text()
      console.error('Response body:', errorBody)
      throw new Error('Failed to fetch API')
    }

    const json: ApiResponse<T> = await res.json()

    if (json.errors && json.errors.length > 0) {
      console.error('API errors:', json.errors)
      throw new Error('Failed to fetch API')
    }

    return json.data
  } catch (error) {
    console.error('Fetch API error:', error)
    throw new Error('Failed to fetch API')
  }
}
