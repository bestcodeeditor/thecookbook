@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\node_modules\@gatsbyjs\relay-compiler\bin\relay-compiler" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\node_modules\@gatsbyjs\relay-compiler\bin\relay-compiler" %*
)