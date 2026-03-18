import http.server
import socketserver
import webbrowser
import os

PORT = 8000

os.chdir(r"C:\Users\admin\Desktop\web dev")

Handler = http.server.SimpleHTTPRequestHandler

print("=" * 50)
print("  DeshDarshan - Smart Indian Travel Planner")
print("=" * 50)
print()
print("  Opening website at: http://localhost:8000")
print()
print("  Press Ctrl+C to stop the server")
print("=" * 50)

webbrowser.open(f"http://localhost:{PORT}")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
