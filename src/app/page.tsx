export default function Page() {

  function printUser(user: {name: string, age: number}): void {
    console.log(`${user.name} ${user.age}-years old`)
  }

  printUser({name: 'Ali', age: 23})

  const persons:  [string, number, string, number] = ['Ali', 34, 'Salmon', 33]
  console.log(persons)

  return <div>

  </div>;
}
