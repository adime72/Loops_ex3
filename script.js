var studentsme =[{
    eyes: "blue",
    name: "Adi",
    hight: 176,
    }, 
    {
      eyes: "brown",
      name: "Noam",
      hight: 178,
      },
      {
        eyes: "blue",
        name: "Marina",
        hight: 168,
        },
        {
          eyes: "green",
          name: "Hen",
          hight: 165,
          },
          {
            eyes: "brown",
            name: "Alex",
            hight: 173,
            },
            {
              eyes: "black",
              name: "Michal",
              hight: 165,
              }
  ];

for (var index = 0; index < studentsme.length; index++){ 
    console.log(studentsme[index].hight);
    studentsme[index].hight=175;
}  
console.log(studentsme);