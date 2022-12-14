set URL="https://www.eventbrite.com/ ,https://www.musimundo.com/";
git clone https://github.com/AccesibilidadWCARG/WCARG.git
cd WCARG
call npm install
node index.js %URL%
