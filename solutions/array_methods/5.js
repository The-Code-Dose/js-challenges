const Users = [
  {
    id: 1,
    items: [
      { id: 1, name: "Alice" },
      { id: 3, name: "Jordan" },
    ],},
  {
    id: 2,
    items: [
      { id: 3, name: "Luke" },
      { id: 4, name: "Christopher" },
    ],},
  {
    id: 3,
    items: [
      { id: 5, name: "Tristen" },
      { id: 2, name: "David" },
    ],},
  {
    id: 4,
    items: [
      { id: 1, name: "Abdiel" },
      { id: 6, name: "Marcus" },
    ],},
  {
    id: 5,
    items: [
      { id: 4, name: "Diana" },
      { id: 3, name: "Jordan" },
    ],},
];

const output = [];

Users.forEach((element)=>{
  element.items.forEach((user)=>{
    const index = output.findIndex((res)=>{ return res.id == user.id})
    if(index < 0){
      output.push(user)
    }
  })
})
console.log(output)
