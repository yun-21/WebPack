const root = document.getElementById('root')!;

const anchorTags = (href:string, text:string):string => {
  let result = `<a href=${href}>${text}</a>`;
  return result;
}

const liTags = (children:string):string => {
  let result =`<li>${children}</li>`;
  return result
}

const basicData ={
  jeamin: "재민",
  ujin : "유진",
  jiyun: "지윤",
  hoyoung: "호영"
}

const totalElement= () =>{
  let result = liTags(anchorTags('#jiyun','도릉'));
  return result
}

root.innerHTML=`
<ul>
  ${totalElement()}
</ul>
`