# Check if port 3000 is in use
$portInUse = netstat -ano | findstr ":3000"

if ($portInUse) {
    $targetPid = ($portInUse -split "\s+")[-1]
    Write-Host "Port 3000 is in use by PID $targetPid. Killing process..."
    taskkill /PID $targetPid /F
    Start-Sleep -Seconds 2  # Increased delay to fully release port
} else {
    Write-Host "Port 3000 is free."
}

# Start the server
Write-Host "Starting server..."
Start-Process "node" "server.js" -NoNewWindow

# powershell -ExecutionPolicy Bypass -File .\start-server.ps1
