@echo off
set PATH=C:\Program Files\nodejs;%PATH%
cd /d "c:\Users\user\Downloads\tech-tapestry-weave-main\tech-tapestry-weave-main"
echo Starting install... > run_log.txt
npm install >> run_log.txt 2>&1
echo Install finished. >> run_log.txt
npm run dev >> run_log.txt 2>&1
