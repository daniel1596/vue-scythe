@echo off

set workComputerBranch=branches\scythe-work-computer\src
set homeComputerBranch=trunk\src

xcopy /s /i /y %workComputerBranch% %homeComputerBranch%
pause