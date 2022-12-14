set URL="http://localhost:3000/";
set EMAILS="gonza.a.fuentes@gmail.com;rlema.1989@gmail.com"
git clone https://github.com/AccesibilidadWCARG/WCARG.git
cd WCARG
call npm install
node wcarg %URL% %EMAILS%
