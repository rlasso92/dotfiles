Invoke-WebRequest https://downloads.gradle-dn.com/distributions/gradle-6.8-bin.zip -OutFile $env:TEMP\gradle.zip
Expand-Archive -Path $env:TEMP\gradle.zip -DestinationPath C:\ -Verbose
Remove-Item  $env:TEMP\gradle.zip -force
[Environment]::SetEnvironmentVariable("C:\gradle-6.8\bin", $env:Path, [System.EnvironmentVariableTarget]::Machine)
setx PATH "$env:path;C:\gradle-6.8\bin" -m 