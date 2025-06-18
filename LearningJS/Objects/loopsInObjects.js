// Use arrays in objects
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun' ];
const hours = {
  [weekdays[0]]: { open: '10.00', close: '22.00' },
  [weekdays[1]]: { open: '10.00', close: '22.00' },
  [weekdays[2]]: { open: '10.00', close: '22.00' },
};

// THE BEST ways of loops
for (const key  in hours) {
  console.log(key, hours[key])
  
}
Object.keys(hours).forEach(key => {
  console.log(key, hours[key])
})

// Other ways
for (const item of Object.keys(hours)) {
  console.log(item);
}

for (const item of Object.values(hours)) {
  console.log(item);
}

for (const item of Object.entries(hours)) {
  console.log(item);
}

for (const [day, { open, close } ] of Object.entries(hours)) {
  console.log(`Market works on ${day}: from ${open} to ${close}`);
}