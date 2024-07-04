const root = document.getElementById('root')!;

const anchorTags = (href:string, text:string):string => {
  let result = `<a href=${href}>${text}</a>`;
  return result;
}

const liTags = (children:string):string => {
  let result =`<li>${children}</li>`;
  return result
}
root.innerHTML=`
<ul>
  ${liTags(anchorTags("#jiyun",'도릉'))}
</ul>
`