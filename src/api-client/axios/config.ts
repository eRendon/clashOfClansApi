import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.clashofclans.com/v1/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjQ5NTNlZDEzLTFiNGEtNGZiZi1iNDQ4LTA5MTcwYmE5ZjJjMyIsImlhdCI6MTY0NTExMTk5Miwic3ViIjoiZGV2ZWxvcGVyLzM0OGFjZjk4LTE2YjYtZDJjOC01OGNjLTliMTBlZjI0MGEwZiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjYzLjI1MC41OC4zMSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.ADjtajhT_J--aSTXf4Atrxs9gLaX_tqEvQ-O6sW_NvBgJggijc3SXfT970eABFFczZkb5VumWaMKR96YEaO9Ag'
        // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjNkNjY3ZTEzLTA5ZDAtNDIxMS1iMWJiLTA1ZThiNDZhYTYzMSIsImlhdCI6MTY0NTA2MzkyMCwic3ViIjoiZGV2ZWxvcGVyLzM0OGFjZjk4LTE2YjYtZDJjOC01OGNjLTliMTBlZjI0MGEwZiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjIwMC4xMjIuMjA3LjEzMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.MjYg63MyLwlS6aPGE3EyHVrLIBZWjgwFhz8UZ6o132KUCIDXBqRVX7HtqtIBrXy9VOPODhY6rWp7nrMb22UiOw'
    },
    proxy: {
        host: 'localhost',
        port: 3001
    }
})

export default apiClient