export default function convertHourToMinutes(time: string) {
  //8:00

  //Dividir pelas horas e minutos usando o slip o map é para transformar a string em numeros
  //na primeira posiçao tem as horas e a segunda os minutos.
  //entao
  const [hour, minutes] = time.split(":").map(Number);
  const timeInMinutes = hour * 60 + minutes;
  return timeInMinutes;
  
}
