/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  arr.map((element) => {
    if (element.profession == "developer") {
      console.log(element);
    }
  })

  // another way of writing-------------------------------//


  // arr.map(printingThroghMap); // Each element is stored in "printingThroghMap" variable

  // function printingThroghMap(arrayItem) {
  //   if (arrayItem.profession === "developer") {
  //     console.log(arrayItem);
  //   }
  // }
}

function PrintDeveloperbyForEach() {
  arr.forEach((element) => {
    if (element.profession == "developer") {
      console.log(element);
    }
  })
}

function addData() {
  let flag=false;                   //condition check if already 4th element with "id:4" is present in array it not allow
  arr.forEach((element) => {          //to add element again a same element ,only display the element in array
    if (element.profession == "intern") {
      flag=true;
    }
  })

  if(flag==false){
  arr.push({id:4,name:"susan",age:"20",profession:"intern"})
  
  }
  console.log(arr)
}

function removeAdmin() {
  arr.filter((element) => {
    if (element.profession != "admin") {
      console.log(element);
    }
  })
}

function concatenateArray() {
  let arr2 = [
    { id: 5, name: "jacob", age: "28", profession: "team leader" },
    { id: 6, name: "jenni", age: "30", profession: "ux designer" },
    { id: 9, name: "karthik", age: "49", profession: "QA tester" },
  ];

  let result=arr.concat(arr2)
  console.log(result)
  // for(num of arr){
  //   console.log(num)
  //   }
}
