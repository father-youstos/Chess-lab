// Pinned, full NNUE single-thread build. Cache API failure must not prevent use.
const BASE='https://cdn.jsdelivr.net/npm/stockfish@19.0.1/bin/stockfish-19-single';
const CACHE='thomas-stockfish-19-full-v1';
export async function fullEngineFiles({signal,onProgress=()=>{},fetcher=fetch,cacheStorage=globalThis.caches,cachedOnly=false}={}){
 let cache;try{cache=await cacheStorage?.open(CACHE)}catch{}
 const files=[];
 for(const ext of ['js','wasm']){
  const url=BASE+'.'+ext;
  let response;try{response=await cache?.match(url)}catch{}
  const cached=!!response;
  if(!response){if(cachedOnly)return null;response=await fetcher(url,{signal});if(!response.ok)throw Error('تعذّر تنزيل ملف '+ext+' ('+response.status+')');}
  const total=Number(response.headers.get('content-length'))||0,parts=[];let loaded=0;
  if(response.body){const reader=response.body.getReader();try{while(true){signal?.throwIfAborted();const {done,value}=await reader.read();if(done)break;parts.push(value);loaded+=value.byteLength;onProgress({ext,loaded,total,cached});}}finally{reader.releaseLock()}}
  else parts.push(await response.arrayBuffer());
  signal?.throwIfAborted();
  const blob=new Blob(parts,{type:ext==='js'?'application/javascript':'application/wasm'});
  if(!cached&&cache){try{await cache.put(url,new Response(blob,{headers:{'Content-Type':blob.type}}))}catch{}}
  files.push(blob);
 }
 return {js:files[0],wasm:files[1]};
}
