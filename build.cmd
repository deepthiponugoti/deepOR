call npm install

call node node_modules/karma/bin/karma start --reporters clear-screen,dots,coverage --single-run

call node node_modules/istanbul/lib/cli.js cover  node_modules/mocha/bin/_mocha -- --recursive test/server

if ERRORLEVEL 1 goto reportError

:reportError
exit %ERRORLEVEL%