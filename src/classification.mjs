// ZOZA local classification v2; not Chess.com categories or calibration.
export function classifyEvidence({winBefore,winAfter,cpBefore=null,cpAfter=null,opponentWinLoss=null,opponentCpLoss=null,top=false,book=false,gap=null,sacrifice=false,recapture=false}){
 if(book)return 'book';if(!Number.isFinite(winBefore)||!Number.isFinite(winAfter))return null;
 const loss=Math.round(Math.max(0,winBefore-winAfter)*1e9)/1e9,cpLoss=Number.isFinite(cpBefore)&&Number.isFinite(cpAfter)?Math.max(0,cpBefore-cpAfter):null;
 if(top&&sacrifice&&winAfter>=48)return 'brilliant';
 if(top&&winBefore>=20&&winBefore<=78&&gap!==null&&gap>=220&&!recapture)return 'great';
 if(top)return 'best'; // Close alternatives stay Excellent/Good, not fabricated top choices.
 if(((opponentWinLoss!==null&&opponentWinLoss>=9)||(opponentCpLoss!==null&&opponentCpLoss>=110))&&winBefore>=55&&(loss>=7.5||(cpLoss!==null&&cpLoss>=95)))return 'miss';
 if(loss>=18||(cpLoss!==null&&cpLoss>=240&&winBefore>=15))return 'blunder';
 if(loss>=9.5||(cpLoss!==null&&cpLoss>=115&&winBefore>=12))return 'mistake';
 if(loss>=5||(cpLoss!==null&&cpLoss>=60))return 'inaccuracy';
 if(loss<=2.2&&(cpLoss===null||cpLoss<=28))return 'excellent';return 'good';
}
