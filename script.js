console.log('------------- # 5');

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  'Вы согласны?',
  () => {
    console.log('Вы согласились.');
  }, // нужно обновить данное место
  () => {
    console.log('Вы отменили выполнение.');
  } // нужно обновить данное место
);

console.log('------------- # 6');

console.log('------------- # 7');

console.log('------------- # 8');

console.log('------------- # 9');

console.log('------------- # 10');

console.log('------------- # 11');

console.log('------------- # 12');

console.log('------------- # 13');
