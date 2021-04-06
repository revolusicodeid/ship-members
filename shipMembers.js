let dataJson = require('./backend-titanic-test.json');

const shipMembers = (arr,data=[]) => {
    //sort data by age => chunk data by age => sort data by length
    const res = chunkData(arr.sort(function(a,b){return a.age - b.age})).sort(function(a,b){return b.length - a.length});
    //make sure prev data length same as next data length and push it to data[] as result
    res.reduce((a,b)=>a === b.length ? data.push(b) : a,res[0].length);
    //return data with name
    return data.length > 1 ? data.map(x=>x.map(({name})=>name)) : data[0].map(({name})=>name);
}
//recrusive function to chunk data as expected
const chunkData = (data,i=0,res=[]) => {
    const tmp = data.filter(x=> x.age === data[i].age);
    res.push(tmp);
    i += tmp.length;
    return i < data.length ? chunkData(data,i,res) : res;
}

console.log(shipMembers(dataJson));