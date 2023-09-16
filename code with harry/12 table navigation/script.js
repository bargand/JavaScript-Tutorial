let t = document.body.firstElementChild.firstElementChild;
console.log(t);
console.log(t.rows);
console.log(t.rows.firstElementChild);
console.log(t.caption);
console.log(t.tHead);
console.log(t.tFoot);
console.log(t.body);

let tr = console.log(t.rows[0]);
console.log(tr.rowIndex);
console.log(tr.SectionRowIndex);

let td = console.log(t.rows[2]);
console.log(td.cellIndex);
