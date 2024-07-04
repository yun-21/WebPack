const root = document.getElementById('root')!;

const anchorTags = (href:string, text:string):string => {
  let result = `<a href=${href}>${text}</a>`;
  return result;
}

const liTags = (children:string):string => {
  let result =`<li>${children}</li>`;
  return result
}


interface BasicData {
  jaemin: "재민",
  ujin : "유진",
  jiyun: "지윤",
  hoyoung: "호영"
}

const basicData:BasicData ={
  jaemin: "재민",
  ujin : "유진",
  jiyun: "지윤",
  hoyoung: "호영"
}

const totalElement= (object:BasicData):string =>{
  let result = liTags(anchorTags(`#${object.jaemin}`,object.jaemin));
  return result
}

root.innerHTML=`
<ul>
  ${totalElement(basicData)}
</ul>
`