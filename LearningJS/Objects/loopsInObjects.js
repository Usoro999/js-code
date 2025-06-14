// Use arrays in objects
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun' ];
const hours = {
  [weekdays[0]]: { open: '10.00', close: '22.00' },
  [weekdays[1]]: { open: '10.00', close: '22.00' },
  [weekdays[2]]: { open: '10.00', close: '22.00' },
};

for (const item of Object.keys(hours)) {
  console.log(item);
}
for (const item of Object.values(hours)) {
  console.log(item);
}
for (const item of Object.entries(hours)) {
  console.log(item);
}
