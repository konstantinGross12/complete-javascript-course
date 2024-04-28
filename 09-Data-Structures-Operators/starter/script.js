const flights =
  '_Delayed_Departure;fao93766109;txl213375844;11:25+_Arrival;bru094338472;fao93766109;11:45+_Delayed_Arrival;hel743929998;fao93766109;12:05+_Departure;fao93766109;lis232363108;12:30';

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} ${from.slice(0, 3).toUpperCase()} ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(':', 'h')})`.padStart(45);
  console.log(output);
}
