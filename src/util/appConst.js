let BACKEND_DOMAIN = 'http://localhost:8080'
if (process.env.NODE_ENV === 'production') {
  BACKEND_DOMAIN = 'http://localhost:8080'
} else if (process.env.NODE_ENV === 'development') {
  BACKEND_DOMAIN = 'http://localhost:8080'
}
// BACKEND_DOMAIN = 'http://172.17.70.19:8002'
BACKEND_DOMAIN = 'http://112.125.24.53:8002'

export default {
  BACKEND_DOMAIN
}
