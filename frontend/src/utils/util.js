export const SERVER_URL = "http://localhost:8000" 
export const BASE_URL = SERVER_URL + "/api"

export const requestConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjkzOWZkYjg3NDg4ZmQyZjhkYmM0ZiIsInVzZXJuYW1lIjoianN0b3JlMkBleGFtcGxlIiwiZW1haWwiOiJqc3RvcmUyQGV4YW1wbGUuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkemZ5TDNCT2RWb3JNSlBZZjBwb0hrLkY3Q21ybGJEWHN5SnQ0bk83UXN4WkxQamJhZWl6TWUiLCJyb2xlIjoiZWRpdG9yIiwiYnVzaW5lc3NOYW1lIjoiSi1TdG9yZSIsImFjY291bnRMb2NrZWQiOmZhbHNlLCJsb2dpbkF0dGVtcHRzIjowLCJsYXN0TG9naW5BdCI6IjIwMjQtMDQtMjdUMDc6NTg6MTEuMTMzWiIsImdyb3VwSWQiOm51bGwsImlhdCI6MTcxNDIwNTEwMCwiZXhwIjoxNzE0ODA5OTAwfQ.XUWtsQpK4-yxpmr4VxiifnUHqyTgPa5tVsO44ajXP1g'
    },
    withCredentials: true,
    credentials: 'include'
}