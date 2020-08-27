var str = 'Привет, Мир!';
alert(str);

var name = prompt('Как Вас зовут?');
alert('Привет, '+name);

var sqrt = prompt(name + ', введите любое число, а я возведу его в квадрат');
alert('Квадрат числа '+ sqrt + ' равно ' + sqrt*sqrt);

alert('Кстати, вторая буква вашего имени это буква ' + name[1]);

var countDays = prompt(name + ' введите количество дней, а я скажу, сколько в этих днях секунд');
var secInHour = 60*60;
var secInDay = secInHour*24;
var totalSec = secInDay * countDays;
alert('В ' + countDays + ' дне(-ях) ' + totalSec + ' секунд');
