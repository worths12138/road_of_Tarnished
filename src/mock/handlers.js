import { http, HttpResponse } from 'msw'

export const handlers = [
  // 拦截 /api/login 的 POST 请求
  http.post('/api/login', async ({ request }) => {
    const { username, password } = await request.json()
    if (username === 'admin' && password === 'password') {
      return HttpResponse.json({
        code: 200,
        data: { token: 'mock-token' },
        message: 'Login successful'
      })
    } else {
      return HttpResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      )
    }
  }),
  // 你可以继续定义其他接口的 Mock 规则
]