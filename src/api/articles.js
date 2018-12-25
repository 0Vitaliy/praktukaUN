export default function(){
return fetch(
'https://codeguida.com/api/v1/posts/?category=it_news&limit=8&o=-moderated_at&offset=8',
{
method:"GET"
}
).then(res=>{
return res.json()
})
}
