interface LabeleValue {
  label: string;
}

function printLabel(labeledObj: LabeleValue) {
  console.log(labeledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

let a: number[] = [1, 2, 3, 4];

let ro: ReadonlyArray<number> = a;
a = ro as number[];
