NEXT_PUBLIC_API_URL=http://localhost:9999/

# 가져올때 process.env.API_URL 
# 서버단에서만 사용이 가능함

# client component에서도 사용하고 싶다면 아예 접두사 NEXT_PUBLIC_를 붙이면 됨
# server-> process.env.API_URL
# client-> NEXT_PUBLIC_API_URL