const root = document.getElementById('root')!;

const anchorTags = () => {
  let result = '<a href="#">메뉴</a>';
  return result;
}

const liTags = (children:string) => {
  let result =`<li>${children}</li>`;
  return result
}
root.innerHTML=`
<ul>
  ${liTags(anchorTags())}
</ul>
`