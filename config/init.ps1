
$choco = Get-Command choco | Select-Object -ExpandProperty Definition
$node = Get-Command node | Select-Object -ExpandProperty Definition

$chocoinstallscript = ".\chocolatey.ps1"

if ($choco -like '*choco*') {
    Write-Host "Choco done --->>> installed" -ForegroundColor Green
}
else {
    .$chocoinstallscript
}

if ($node -like '*node*') {
    Write-Host "Node done --->>> installed" -ForegroundColor Green
}
else {
    choco install nodejs
    choco install winrar
}