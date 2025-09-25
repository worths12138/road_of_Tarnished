import { http, HttpResponse } from 'msw'

export const handlers = [
  http.post('/api/login',async({request})=>{
    try{
    const { username, password } = await request.json();
    
    // 简单的业务逻辑模拟：根据用户名和密码返回不同结果
    if (username === 'admin' && password === '123456') {
      // 模拟成功响应
      return HttpResponse.json({
        code: 200,
        data: {
          token: 'mock-jwt-token-here',
          user: { id: 1, username: 'admin' }
        },
        message: '登录成功'
      });
    } else {
      // 模拟失败响应
      return HttpResponse.json({
        code: 400,
        message: '用户名或密码错误'
      }, { status: 400 });
    }
  }catch (error) {
    // 解析失败时返回明确的 400 错误（而非 500）
    return HttpResponse.json(
      { code: 400, message: '请求参数格式错误，请传合法 JSON' },
      { status: 400 }
    );
  }
}),

  // 模拟注册POST请求
  http.post('/api/register', async ({ request }) => {
    const { username, email, password } = await request.json();
    // 模拟注册成功，实际开发中可添加更复杂的校验逻辑
    return HttpResponse.json({
      code: 200,
      data: null,
      message: '注册成功'
    });
  }),
   http.get(/\.(vue|js|css|png|jpg|map)$/, () => {
    return new Response(null, { status: 200 }) // 或使用 passthrough()
  }),
];
