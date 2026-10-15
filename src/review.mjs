import {grade,winning,explanation,tacticalFacts,START} from './model.mjs';
export const CATEGORIES=[
 {key:'best',name:'أفضل نقلة',icon:'★',color:'#73a83b'},
 {key:'excellent',name:'ممتازة',icon:'!',color:'#76a658'},
 {key:'good',name:'جيدة',icon:'✓',color:'#92ad71'},
 {key:'book',name:'افتتاحية',icon:'▤',color:'#c4976c'},
 {key:'inaccuracy',name:'غير دقيقة',icon:'?!',color:'#d9a51a'},
 {key:'mistake',name:'خطأ',icon:'?',color:'#e08a3c'},
 {key:'blunder',name:'خطأ كبير',icon:'??',color:'#dc625c'},
 {key:'pending',name:'لم تُحلّل بعد',icon:'…',color:'#889b98'}
];
export function openingPrefixes(data){const set=new Set();for(const x of data){const moves=(x.uci||'').trim().split(/\s+/).filter(Boolean);for(let i=1;i<=Math.min(24,moves.length);i++)set.add(moves.slice(0,i).join(' '));}return set;}
export function reviewRows(study,book=new Set()){
 const line=study.mainline().slice(1);let path='';return line.map(n=>{path+=(path?' ':'')+n.move.lan;const g=grade(n),side=n.parent.fen.split(' ')[1];const loss=g?Math.max(0,(winning(n.parent.evaluation)-winning(n.evaluation))*(side==='w'?1:-1)):null;
 // Local, transparent heuristic. It is not Chess.com's proprietary accuracy.
 const key=study.root.fen===START&&book.has(path)?'book':!g?'pending':g.key==='good'&&loss<.5?'excellent':g.key;
 return {node:n,side,key,loss,score:loss===null?null:100*Math.exp(-.05*loss)};
 });
}
export function reviewStats(rows){const result={};for(const side of ['w','b']){const own=rows.filter(r=>r.side===side),done=own.filter(r=>r.score!==null),counts=Object.fromEntries(CATEGORIES.map(c=>[c.key,own.filter(r=>r.key===c.key).length]));result[side]={total:own.length,done:done.length,accuracy:done.length?done.reduce((a,r)=>a+r.score,0)/done.length:null,loss:done.length?done.reduce((a,r)=>a+r.loss,0)/done.length:null,counts};}return result;}
export function coachText(row){if(!row)return 'راجع المباراة بهدوء، نقلة واحدة في كل مرة.';const n=row.node;if(row.key==='book')return n.move.san+' موجودة في أحد خطوط قاعدة الافتتاحات المحلية. تابع كيف تتطور القطع والسيطرة على المركز.';if(row.key==='pending')return 'هذه النقلة تحتاج تحليل وضعيتها والوضعية السابقة قبل الحكم عليها.';return explanation(n)+' '+tacticalFacts(n).join(' ');}
