import {accuracyByNode,playerAccuracy} from './accuracy.mjs?v=15';
import {localAccuracy,grade,markOpeningBook,winning,explanation,tacticalFacts,START} from './model.mjs?v=15';
export const CATEGORIES=[
 {key:'brilliant',name:'Brilliant',icon:'!!',color:'#1baca6'},
 {key:'great',name:'Great',icon:'!',color:'#5c8bb0'},
 {key:'best',name:'Best',icon:'★',color:'#73a83b'},
 {key:'excellent',name:'Excellent',icon:'!',color:'#76a658'},
 {key:'good',name:'Good',icon:'✓',color:'#92ad71'},
 {key:'book',name:'Book',icon:'▤',color:'#c4976c'},
 {key:'inaccuracy',name:'Inaccuracy',icon:'?!',color:'#d9a51a'},
 {key:'mistake',name:'Mistake',icon:'?',color:'#e08a3c'},
 {key:'miss',name:'Miss',icon:'×',color:'#ff7769'},
 {key:'blunder',name:'Blunder',icon:'??',color:'#dc625c'},
 {key:'pending',name:'لم تُحلّل بعد',icon:'…',color:'#889b98'}
];
export function openingPrefixes(data){const set=new Set();for(const x of data){const moves=(x.uci||'').trim().split(/\s+/).filter(Boolean);for(let i=1;i<=Math.min(24,moves.length);i++)set.add(moves.slice(0,i).join(' '));}return set;}
export function reviewRows(study,book=null){
 if(book)markOpeningBook(study,book);
 const computed=accuracyByNode(study),line=study.mainline().slice(1);let path='';return line.map(n=>{path+=(path?' ':'')+n.move.lan;const g=grade(n),side=n.parent.fen.split(' ')[1];const loss=g?.loss??null;
 // Local, transparent heuristic. It is not Chess.com's proprietary accuracy.
 const key=g?.key||'pending';
 return {node:n,side,key,...computed.get(n)};
 });
}
export function reviewStats(rows){const result={};for(const side of ['w','b']){const own=rows.filter(r=>r.side===side),done=own.filter(r=>r.score!==null),counts=Object.fromEntries(CATEGORIES.map(c=>[c.key,own.filter(r=>r.key===c.key).length]));result[side]={total:own.length,done:done.length,accuracy:playerAccuracy(done),loss:done.length?done.reduce((a,r)=>a+r.loss,0)/done.length:null,counts};}return result;}
export function coachText(row,language='ar'){if(language!=='ar'){if(!row)return 'Review your game one move at a time.';const n=row.node;if(row.key==='book')return n.move.san+' · Book. A documented opening move. Develop your pieces and study the plan.';if(row.key==='pending')return 'Analyze this position and the preceding one before judging this move.';return n.move.san+' · '+(CATEGORIES.find(c=>c.key===row.key)?.name||'Move')+'. '+(n.move.san.includes('#')?'Checkmate.':n.move.captured?'This move captures a piece.':'Compare the engine’s best continuation.')+' '+(row.loss!==null?'Chance-index loss: '+row.loss.toFixed(1)+' points.':'');}if(!row)return 'راجع المباراة بهدوء، نقلة واحدة في كل مرة.';const n=row.node;if(row.key==='book')return n.move.san+' موجودة في أحد خطوط قاعدة الافتتاحات المحلية. تابع كيف تتطور القطع والسيطرة على المركز.';if(row.key==='pending')return 'هذه النقلة تحتاج تحليل وضعيتها والوضعية السابقة قبل الحكم عليها.';return explanation(n)+' '+tacticalFacts(n).join(' ');}
