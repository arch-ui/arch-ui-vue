@echo off
setlocal

set dirs=components core docs hooks theme utils

for %%i in (%dirs%) do (
    mkdir %%i
    cd %%i
    pnpm init
    cd ..
)

endlocal
