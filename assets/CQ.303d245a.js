import{D as n,r as i,u as t,j as r,k as a,l as o}from"./index.afc9ff77.js";import{a as l}from"./index.15c82977.js";import{e as m}from"./api.c280ee84.js";const _={key:0},u=["src"],d={key:1,class:"min-h-screen flex items-center justify-center"},f=o("button",{class:"btn btn-circle loading"},null,-1),p=[f],v={setup(h){const c=n();let e=i("");return l.get(`${m}?type=examlist&id=${c.params.id}`).then(s=>{e.value=s.data.exam.cq_link}),(s,x)=>t(e)?(r(),a("div",_,[o("iframe",{src:t(e),frameborder:"0",class:"min-h-screen w-screen"},null,8,u)])):(r(),a("div",d,p))}};export{v as default};
