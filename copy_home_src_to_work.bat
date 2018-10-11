@echo off

set workComputerBranch=..\branches\scythe-work-computer\src
set homeComputerBranch=src

xcopy /s /i /y %homeComputerBranch% %workComputerBranch%
pause