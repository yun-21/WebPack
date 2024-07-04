const root = document.getElementById('root')!;

const anchorTags = (href:string, text:string):string => {
  let result = `<a href="#${href}">${text}</a>`;
  return result;
}

const liTags = (children:string):string => {
  let result =`<li>${children}</li>`;
  return result
}


interface BasicData {
  jaemin: {
    name:"재민",
    backgroundColor:"red"
  },
  ujin : {
    name : "유진",
    backgroundColor:"yellow"
  },
  jiyun: {
    name : "지윤",
    backgroundColor:"pink"
  },
  ukjae : {
    name : "욱재",
    backgroundColor:"blue"
  }
}

const basicData:BasicData ={
  jaemin: {
    name:"재민",
    backgroundColor:"red"
  },
  ujin : {
    name : "유진",
    backgroundColor:"yellow"
  },
  jiyun: {
    name : "지윤",
    backgroundColor:"pink"
  },
  ukjae : {
    name : "욱재",
    backgroundColor:"blue"
  }
}

const totalElement= (object:BasicData):string =>{
  let result = '';
  for (let key in object) {
    // TypeScript가 key가 BasicData의 키인 것을 알게 함
    const value = object[key as keyof BasicData];
    result += liTags(anchorTags(key, value.name));
  }
  return result;
}

root.innerHTML=`
<ul id="menu">
  ${totalElement(basicData)}
</ul>
<main id="main-target"></main>
`

// -----------------------------------------------------------------------------//
// 조립 컴포넌트 //

const mainTarget = document.getElementById("main-target")!;
console.log(window.location.hash);

window.addEventListener('hashchange',()=>{
  const hash = window.location.hash;
  console.log(hash.slice(1));
  let test = basicData[hash.slice(1) as keyof BasicData];
  let div = document.createElement('div');
  div.style.backgroundColor = test.backgroundColor;
  div.textContent = test.name;
  if(mainTarget.hasChildNodes()) {
    mainTarget.removeChild(mainTarget.childNodes[0]);
  }
  mainTarget.appendChild(div);

})