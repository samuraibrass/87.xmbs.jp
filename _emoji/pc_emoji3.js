var tag1 = "<font color=#ff00ff>";
var tag2 = "</font>";
var countup = (tag1.length + tag2.length);

function emoji(bgcolor){
// 	n = document.body.all.length;
	var bgcol = bgcolor;
	for(var i = 0 ; i < document.body.all.length ; i++){
	 		var body=document.body.all(i)
			var col=body.getAttribute("color");
// 			alert(body.tagName);
		if (col || bgcol)
		{	
			replace(body,"BeforeBegin",col,bgcol);
			replace(body,"AfterEnd",col,bgcol);
		}
		else
		{
// 			replace(body,"BeforeBegin");
// 			replace(body,"AfterEnd");
			if (replace(body,"BeforeBegin")) i++;
			if (replace(body,"AfterEnd")) i++;
		}
// 		alert(i);
 		try{
 			if(body.tagName != "TEXTAREA" && body.tagName != "INPUT" && body.tagName != "OPTION" && body.tagName != "SUBMIT"){
// 			var col=body.getAttribute("color");
// 			alert(body.tagName);
				if (col || bgcol)
				{
// 					alert("aaa");
					replace(body,"AfterBegin",col,bgcol);
					replace(body,"BeforeEnd",col,bgcol);
				}
				else
				{
// 					replace(body,"AfterBegin");
// 					replace(body,"BeforeEnd");
					if (replace(body,"AfterBegin")) i++;
					if (replace(body,"BeforeEnd")) i++;
				}
			}
		}catch (e){}
	}
// 	alert(i);
}
function replace(body,t,col,bgcolor){
	var str = body.getAdjacentText(t);
	var str1;
	var bgcol = bgcolor;
// 	alert(str+"1");
	var i = 0;
	var ch = 0;
	var cha;
	if (str)
	{
		while(isFinite(cc = str.charCodeAt(i++))){
		
			if((cc >= 57345 && cc <= 59223) || (cc >= 63647 && cc <= 63996)){
				var sj = cc.toString(16);
				var hhh = change_sjis(sj,col,bgcol);
				if (hhh) {
					str = str.slice(0,i-1)+(hhh)+str.slice(i);
					ch ++;
					if (hhh.search(/<font color/) != -1) i += countup;
				}
			}
			
		}
// 		alert(str);
		if(ch){
			body.replaceAdjacentText(t,"");
			body.insertAdjacentHTML(t,str);
// 			body.replaceAdjacentText("BeforeEnd","");
// 			body.insertAdjacentHTML("BeforeEnd",str);
		}
	}
// 	if(t=="BeforeBegin")replace(body,"AfterEnd");
// 	else if(t=="AfterBegin")replace(body,"BeforeEnd");
	if (ch) return(1);
}

function change_sjis(c,col,bgcolor){
	var code  = c;
	var bgcol = bgcolor;

	emoji['e63e'] = "<font color=#ff0000>ø</font>";
	emoji['e63f'] = "<font color=#0000ff>ø </font>";
	emoji['e640'] = "<font color=#0000ff>ø¡</font>";
	emoji['e641'] = "<font color=#0000ff>ø¢</font>";
	emoji['e642'] = "<font color=#ffa500>ø£</font>";
	emoji['e643'] = "<font color=#ff0000>ø¤</font>";
	emoji['e644'] = "<font color=#0000ff>ø¥</font>";
	emoji['e645'] = "<font color=#0000ff>ø¦</font>";
	emoji['e646'] = "<font color=#ff0000>ø§</font>";
	emoji['e647'] = "<font color=#ffa500>ø¨</font>";
	emoji['e648'] = "<font color=#00ff00>ø©</font>";
	emoji['e649'] = "<font color=#0000ff>øª</font>";
	emoji['e64a'] = "<font color=#ff0000>ø«</font>";
	emoji['e64b'] = "<font color=#ffa500>ø¬</font>";
	emoji['e64c'] = "<font color=#00ff00>ø­</font>";
	emoji['e64d'] = "<font color=#0000ff>ø®</font>";
	emoji['e64e'] = "<font color=#ff0000>ø¯</font>";
	emoji['e64f'] = "<font color=#ffa500>ø°</font>";
	emoji['e650'] = "<font color=#00ff00>ø±</font>";
	emoji['e651'] = "<font color=#0000ff>ø²</font>";
	emoji['e652'] = "<font color=#ff00ff>ø³</font>";
	emoji['e653'] = "<font color=#000000>ø´</font>";
	emoji['e654'] = "<font color=#0000ff>øµ</font>";
	emoji['e655'] = "<font color=#00ff00>ø¶</font>";
	emoji['e656'] = "<font color=#000000>ø·</font>";
	emoji['e657'] = "<font color=#0000ff>ø¸</font>";
	emoji['e658'] = "<font color=#ffa500>ø¹</font>";
	emoji['e659'] = "<font color=#000000>øº</font>";
	emoji['e65a'] = "<font color=#ff00ff>ø»</font>";
	emoji['e65b'] = "<font color=#00ff00>ø¼</font>";
	emoji['e65c'] = "<font color=#ffa500>ø½</font>";
	emoji['e65d'] = "<font color=#0000ff>ø¾</font>";
	emoji['e65e'] = "<font color=#000000>ø¿</font>";
	emoji['e65f'] = "<font color=#00ff00>øÀ</font>";
	emoji['e660'] = "<font color=#ff0000>øÁ</font>";
	emoji['e661'] = "<font color=#0000ff>øÂ</font>";
	emoji['e662'] = "<font color=#0000ff>øÃ</font>";
	emoji['e663'] = "<font color=#ff0000>øÄ</font>";
	emoji['e664'] = "<font color=#0000ff>øÅ</font>";
	emoji['e665'] = "<font color=#ff0000>øÆ</font>";
	emoji['e666'] = "<font color=#000000>øÇ</font>";
	emoji['e667'] = "<font color=#ff00ff>øÈ</font>";
	emoji['e668'] = "<font color=#ff0000>øÉ</font>";
	emoji['e669'] = "<font color=#00ff00>øÊ</font>";
	emoji['e66a'] = "<font color=#0000ff>øË</font>";
	emoji['e66b'] = "<font color=#ff00ff>øÌ</font>";
	emoji['e66c'] = "<font color=#0000ff>øÍ</font>";
	emoji['e66d'] = "<font color=#000000>øÎ</font>";
	emoji['e66e'] = "<font color=#000000>øÏ</font>";
	emoji['e66f'] = "<font color=#000000>øÐ</font>";
	emoji['e670'] = "<font color=#00ff00>øÑ</font>";
	emoji['e671'] = "<font color=#ff00ff>øÒ</font>";
	emoji['e672'] = "<font color=#ffa500>øÓ</font>";
	emoji['e673'] = "<font color=#ffa500>øÔ</font>";
	emoji['e674'] = "<font color=#ff0000>øÕ</font>";
	emoji['e675'] = "<font color=#0000ff>øÖ</font>";
	emoji['e676'] = "<font color=#000000>ø×</font>";
	emoji['e677'] = "<font color=#000000>øØ</font>";
	emoji['e678'] = "<font color=#000000>øÙ</font>";
	emoji['e679'] = "<font color=#ffa500>øÚ</font>";
	emoji['e67a'] = "<font color=#0000ff>øÛ</font>";
	emoji['e67b'] = "<font color=#ff00ff>øÜ</font>";
	emoji['e67c'] = "<font color=#000000>øÝ</font>";
	emoji['e67d'] = "<font color=#ff0000>øÞ</font>";
	emoji['e67e'] = "<font color=#000000>øà</font>";
	emoji['e67f'] = "<font color=#ffa500>øß</font>";
	emoji['e680'] = "<font color=#ff0000>øá</font>";
	emoji['e681'] = "<font color=#000000>øâ</font>";
	emoji['e682'] = "<font color=#ff0000>øã</font>";
	emoji['e683'] = "<font color=#ffa500>øä</font>";
	emoji['e684'] = "<font color=#ff0000>øå</font>";
	emoji['e685'] = "<font color=#ff0000>øæ</font>";
	emoji['e686'] = "<font color=#ff0000>øç</font>";
	emoji['e687'] = "<font color=#000000>øè</font>";
	emoji['e688'] = "<font color=#000000>øé</font>";
	emoji['e689'] = "<font color=#ffa500>øê</font>";
	emoji['e68a'] = "<font color=#0000ff>øë</font>";
	emoji['e68b'] = "<font color=#000000>øì</font>";
	emoji['e68c'] = "<font color=#0000ff>øí</font>";
	emoji['e68d'] = "<font color=#ff0000>øî</font>";
	emoji['e68e'] = "<font color=#000000>øï</font>";
	emoji['e68f'] = "<font color=#ff0000>øð</font>";
	emoji['e690'] = "<font color=#000000>øñ</font>";
	emoji['e691'] = "<font color=#000000>øò</font>";
	emoji['e692'] = "<font color=#ffa500>øó</font>";
	emoji['e693'] = "<font color=#ffa500>øô</font>";
	emoji['e694'] = "<font color=#ffa500>øõ</font>";
	emoji['e695'] = "<font color=#ffa500>øö</font>";
	emoji['e696'] = "<font color=#000000>ø÷</font>";
	emoji['e697'] = "<font color=#000000>øø</font>";
	emoji['e698'] = "<font color=#ffa500>øù</font>";
	emoji['e699'] = "<font color=#000000>øú</font>";
	emoji['e69a'] = "<font color=#000000>øû</font>";
	emoji['e69b'] = "<font color=#0000ff>øü</font>";
	emoji['e69c'] = "<font color=#000000>ù@</font>";
	emoji['e69d'] = "<font color=#000000>ùA</font>";
	emoji['e69e'] = "<font color=#000000>ùB</font>";
	emoji['e69f'] = "<font color=#000000>ùC</font>";
	emoji['e6a0'] = "<font color=#000000>ùD</font>";
	emoji['e6a1'] = "<font color=#ffa500>ùE</font>";
	emoji['e6a2'] = "<font color=#ffa500>ùF</font>";
	emoji['e6a3'] = "<font color=#0000ff>ùG</font>";
	emoji['e6a4'] = "<font color=#00ff00>ùH</font>";
	emoji['e6a5'] = "<font color=#000000>ùI</font>";
	emoji['e6ce'] = "<font color=#000000>ùr</font>";
	emoji['e6cf'] = "<font color=#000000>ùs</font>";
	emoji['e6d0'] = "<font color=#000000>ùt</font>";
	emoji['e6d1'] = "<font color=#ffa500>ùu</font>";
	emoji['e6d2'] = "<font color=#ffa500>ùv</font>";
	emoji['e6d3'] = "<font color=#000000>ùw</font>";
	emoji['e6d4'] = "<font color=#000000>ùx</font>";
	emoji['e6d5'] = "<font color=#000000>ùy</font>";
	emoji['e6d6'] = "<font color=#ff0000>ùz</font>";
	emoji['e6d7'] = "<font color=#ff0000>ù{</font>";
	emoji['e6d8'] = "<font color=#ff0000>ù|</font>";
	emoji['e6d9'] = "<font color=#ff0000>ù}</font>";
	emoji['e6da'] = "<font color=#ff0000>ù~</font>";
	emoji['e6db'] = "<font color=#ff0000>ù</font>";
	emoji['e6dc'] = "<font color=#0000ff>ù</font>";
	emoji['e6dd'] = "<font color=#ff0000>ù</font>";
	emoji['e6de'] = "<font color=#ff0000>ù</font>";
	emoji['e6df'] = "<font color=#000000>ù</font>";
	emoji['e6e0'] = "<font color=#000000>ù</font>";
	emoji['e6e1'] = "<font color=#000000>ù</font>";
	emoji['e6e2'] = "<font color=#000000>ù</font>";
	emoji['e6e3'] = "<font color=#000000>ù</font>";
	emoji['e6e4'] = "<font color=#000000>ù</font>";
	emoji['e6e5'] = "<font color=#000000>ù</font>";
	emoji['e6e6'] = "<font color=#000000>ù</font>";
	emoji['e6e7'] = "<font color=#000000>ù</font>";
	emoji['e6e8'] = "<font color=#000000>ù</font>";
	emoji['e6e9'] = "<font color=#000000>ù</font>";
	emoji['e6ea'] = "<font color=#000000>ù</font>";
	emoji['e6eb'] = "<font color=#000000>ù</font>";
	emoji['e70b'] = "<font color=#ff0000>ù°</font>";
	emoji['e6ec'] = "<font color=#ff0000>ù</font>";
	emoji['e6ed'] = "<font color=#ff0000>ù</font>";
	emoji['e6ee'] = "<font color=#ff0000>ù</font>";
	emoji['e6ef'] = "<font color=#ff0000>ù</font>";
	emoji['e6f0'] = "<font color=#ff00ff>ù</font>";
	emoji['e6f1'] = "<font color=#ff0000>ù</font>";
	emoji['e6f2'] = "<font color=#0000ff>ù</font>";
	emoji['e6f3'] = "<font color=#00ff00>ù</font>";
	emoji['e6f4'] = "<font color=#0000ff>ù</font>";
	emoji['e6f5'] = "<font color=#ff0000>ù</font>";
	emoji['e6f6'] = "<font color=#ff0000>ù</font>";
	emoji['e6f7'] = "<font color=#ff0000>ù</font>";
	emoji['e6f8'] = "<font color=#ff00ff>ù</font>";
	emoji['e6f9'] = "<font color=#ff0000>ù</font>";
	emoji['e6fa'] = "<font color=#ffa500>ù</font>";
	emoji['e6fb'] = "<font color=#ffa500>ù </font>";
	emoji['e6fc'] = "<font color=#000000>ù¡</font>";
	emoji['e6fd'] = "<font color=#ff0000>ù¢</font>";
	emoji['e6fe'] = "<font color=#000000>ù£</font>";
	emoji['e6ff'] = "<font color=#ff0000>ù¤</font>";
	emoji['e700'] = "<font color=#0000ff>ù¥</font>";
	emoji['e701'] = "<font color=#0000ff>ù¦</font>";
	emoji['e702'] = "<font color=#ff0000>ù§</font>";
	emoji['e703'] = "<font color=#ff00ff>ù¨</font>";
	emoji['e704'] = "<font color=#ff0000>ù©</font>";
	emoji['e705'] = "<font color=#ff0000>ùª</font>";
	emoji['e706'] = "<font color=#000000>ù«</font>";
	emoji['e707'] = "<font color=#000000>ù¬</font>";
	emoji['e708'] = "<font color=#000000>ù­</font>";
	emoji['e709'] = "<font color=#000000>ù®</font>";
	emoji['e70a'] = "<font color=#000000>ù¯</font>";
	emoji['e6ac'] = "<font color=#000000>ùP</font>";
	emoji['e6ad'] = "<font color=#000000>ùQ</font>";
	emoji['e6ae'] = "<font color=#000000>ùR</font>";
	emoji['e6b1'] = "<font color=#000000>ùU</font>";
	emoji['e6b2'] = "<font color=#000000>ùV</font>";
	emoji['e6b3'] = "<font color=#000000>ùW</font>";
	emoji['e6b7'] = "<font color=#000000>ù[</font>";
	emoji['e6b8'] = "<font color=#000000>ù\</font>";
	emoji['e6b9'] = "<font color=#000000>ù]</font>";
	emoji['e6ba'] = "<font color=#000000>ù^</font>";
	emoji['e70c'] = "<font color=#ffa500>ù±</font>";
	emoji['e70d'] = "<font color=#ffa500>ù²</font>";
	emoji['e70e'] = "<font color=#0000ff>ù³</font>";
	emoji['e70f'] = "<font color=#000000>ù´</font>";
	emoji['e710'] = "<font color=#ff0000>ùµ</font>";
	emoji['e711'] = "<font color=#000080>ù¶</font>";
	emoji['e712'] = "<font color=#0000ff>ù·</font>";
	emoji['e713'] = "<font color=#ffa500>ù¸</font>";
	emoji['e714'] = "<font color=#a52a2a>ù¹</font>";
	emoji['e715'] = "<font color=#a52a2a>ùº</font>";
	emoji['e716'] = "<font color=#000000>ù»</font>";
	emoji['e717'] = "<font color=#ff0000>ù¼</font>";
	emoji['e718'] = "<font color=#000000>ù½</font>";
	emoji['e719'] = "<font color=#00ff00>ù¾</font>";
	emoji['e71a'] = "<font color=#ffa500>ù¿</font>";
	emoji['e71b'] = "<font color=#ff00ff>ùÀ</font>";
	emoji['e71c'] = "<font color=#000000>ùÁ</font>";
	emoji['e71d'] = "<font color=#000000>ùÂ</font>";
	emoji['e71e'] = "<font color=#00ff00>ùÃ</font>";
	emoji['e71f'] = "<font color=#000000>ùÄ</font>";
	emoji['e720'] = "<font color=#00ff00>ùÅ</font>";
	emoji['e721'] = "<font color=#ff00ff>ùÆ</font>";
	emoji['e722'] = "<font color=#0000ff>ùÇ</font>";
	emoji['e723'] = "<font color=#0000ff>ùÈ</font>";
	emoji['e724'] = "<font color=#ff0000>ùÉ</font>";
	emoji['e725'] = "<font color=#a52a2a>ùÊ</font>";
	emoji['e726'] = "<font color=#ff00ff>ùË</font>";
	emoji['e727'] = "<font color=#ffa500>ùÌ</font>";
	emoji['e728'] = "<font color=#ff0000>ùÍ</font>";
	emoji['e729'] = "<font color=#ff00ff>ùÎ</font>";
	emoji['e72a'] = "<font color=#ff00ff>ùÏ</font>";
	emoji['e72b'] = "<font color=#000000>ùÐ</font>";
	emoji['e72c'] = "<font color=#ffa500>ùÑ</font>";
	emoji['e72d'] = "<font color=#0000ff>ùÒ</font>";
	emoji['e72e'] = "<font color=#0000ff>ùÓ</font>";
	emoji['e72f'] = "<font color=#ff0000>ùÔ</font>";
	emoji['e730'] = "<font color=#0000ff>ùÕ</font>";
	emoji['e731'] = "<font color=#000000>ùÖ</font>";
	emoji['e732'] = "<font color=#000000>ù×</font>";
	emoji['e733'] = "<font color=#000000>ùØ</font>";
	emoji['e734'] = "<font color=#ff0000>ùÙ</font>";
	emoji['e735'] = "<font color=#00ff00>ùÚ</font>";
	emoji['e736'] = "<font color=#000000>ùÛ</font>";
	emoji['e737'] = "<font color=#ffa500>ùÜ</font>";
	emoji['e738'] = "<font color=#ff0000>ùÝ</font>";
	emoji['e739'] = "<font color=#0000ff>ùÞ</font>";
	emoji['e73a'] = "<font color=#ff0000>ùß</font>";
	emoji['e73b'] = "<font color=#ff0000>ùà</font>";
	emoji['e73c'] = "<font color=#000000>ùá</font>";
	emoji['e73d'] = "<font color=#000000>ùâ</font>";
	emoji['e73e'] = "<font color=#00ff00>ùã</font>";
	emoji['e73f'] = "<font color=#0000ff>ùä</font>";
	emoji['e740'] = "<font color=#0000ff>ùå</font>";
	emoji['e741'] = "<font color=#00ff00>ùæ</font>";
	emoji['e742'] = "<font color=#ff0000>ùç</font>";
	emoji['e743'] = "<font color=#ff0000>ùè</font>";
	emoji['e744'] = "<font color=#ffa500>ùé</font>";
	emoji['e745'] = "<font color=#ff0000>ùê</font>";
	emoji['e746'] = "<font color=#00ff00>ùë</font>";
	emoji['e747'] = "<font color=#ff0000>ùì</font>";
	emoji['e748'] = "<font color=#ff00ff>ùí</font>";
	emoji['e749'] = "<font color=#000000>ùî</font>";
	emoji['e74a'] = "<font color=#ff0000>ùï</font>";
	emoji['e74b'] = "<font color=#a52a2a>ùð</font>";
	emoji['e74c'] = "<font color=#ffa500>ùñ</font>";
	emoji['e74d'] = "<font color=#a52a2a>ùò</font>";
	emoji['e74e'] = "<font color=#a52a2a>ùó</font>";
	emoji['e74f'] = "<font color=#ffa500>ùô</font>";
	emoji['e750'] = "<font color=#000080>ùõ</font>";
	emoji['e751'] = "<font color=#0000ff>ùö</font>";
	emoji['e752'] = "<font color=#ffa500>ù÷</font>";
	emoji['e753'] = "<font color=#ffa500>ùø</font>";
	emoji['e754'] = "<font color=#a52a2a>ùù</font>";
	emoji['e755'] = "<font color=#ffa500>ùú</font>";
	emoji['e756'] = "<font color=#800080>ùû</font>";
	emoji['e757'] = "<font color=#800080>ùü</font>";

	
	emoji['e481'] ='<font color=#ffa500>ùÜ</font>';//I                             D
	emoji['e482'] ='<font color=#ff0000>ù§</font>';//I                             D
	emoji['e483'] ='<font color=#ff00ff>ù¨</font>';//H
	emoji['e52c'] ='<font color=#000000>ù</font>';//H
	emoji['e52d'] ='<font color=#000000></font>';//¶ü«OpP
	emoji['e52e'] ='<font color=#000000></font>';//Eü«OpP
	emoji['e52f'] ='<font color=#000000></font>';//¶ü«OpQ
	emoji['e530'] ='<font color=#000000></font>';//Eü«OpQ
	emoji['e531'] ='<font color=#ffa500>¡</font>';//¬lpP
	emoji['e532'] ='<font color=#00cc00>¡</font>';//¬lpQ
	emoji['e533'] ='<font color=#000000>i</font>';//CtH[VV{
	emoji['e4c1'] ='<font color=#800080>ùû</font>';//COX                   D
	emoji['e511'] ='<font color=#000000>Q</font>';//Xs[J
	emoji['e579'] ='<font color=#a52a2a>ùº</font>';//h                           D
	emoji['e486'] ='<font color=#000000>ùC</font>';//P                           D
	emoji['e487'] ='<font color=#ffa500>ø£</font>';//¢È¸Ü                       D
	emoji['e534'] ='<font color=#ffa500>¡</font>';//lpP
	emoji['e535'] ='<font color=#00cc00>¡</font>';//lpQ
	emoji['e536'] ='<font color=#ffa500></font>';//¬H`P
	emoji['e537'] ='<font color=#0033ff></font>';//¬H`Q
	emoji['e538'] ='<font color=#ffa500>¡</font>';//ålpP
	emoji['e539'] ='<font color=#00cc00>¡</font>';//ålpP
	emoji['e53a'] ='<font color=#ff0000></font>';//¬ÛP
	emoji['e53b'] ='<font color=#0000ff></font>';//¬Û2
	emoji['e57a'] ='<font color=#000000>ùÄ</font>';//rv                         D
	emoji['e53c'] ='<font color=#000000>{</font>';//vX
	emoji['e53d'] ='<font color=#000000>|</font>';//}CiX
	emoji['e53e'] ='<font color=#000000></font>';//¯P
	emoji['e53f'] ='<font color=#000000>ª</font>';//ãîóP
	emoji['e540'] ='<font color=#000000>«</font>';//ºîóP
	emoji['e541'] ='<font color=#ff0000>ùÝ</font>';//ÛÉÎßü
	emoji['e542'] ='<font color=#ff00ff>¥</font>';//ºOpP
	emoji['e543'] ='<font color=#ff00ff>£</font>';//ãOpP
	emoji['e544'] ='<font color=#ff00ff>¥</font>';//ºOpQ
	emoji['e545'] ='<font color=#ff00ff>£</font>';//ãOpQ
	emoji['e546'] ='<font color=#ffa500></font>';//åH`P
	emoji['e547'] ='<font color=#0033ff></font>';//åH`Q
	emoji['e548'] ='<font color=#ffa500>¡</font>';//ÁålpP
	emoji['e549'] ='<font color=#00cc00>¡</font>';//ÁålpQ
	emoji['e54a'] ='<font color=#ff0000></font>';//åÛP
	emoji['e54b'] ='<font color=#0000ff></font>';//åÛQ
	emoji['e54c'] ='<font color=#000000>øø</font>';//ãîóQ
	emoji['e54d'] ='<font color=#000000>ø÷</font>';//ºîóQ
	emoji['e488'] ='<font color=#ff0000>ø</font>';//¾z                           D
	emoji['e4ba'] ='<font color=#000000>ø´</font>';//ì{[                     D
	emoji['e594'] ='<font color=#000000>ù^</font>';//v                           D
	emoji['e489'] ='<font color=#000000>ùC</font>';//QiçÂ«j
	emoji['e512'] ='<font color=#ffa500>ù¸</font>';//x                           D
	emoji['e560'] ='<font color=#000000>Ó</font>';//vbVsiæej
	emoji['e4fa'] ='<font color=#ff00ff>ù</font>';//¬ç
	emoji['e595'] ='<font color=#ff0000>ù</font>';//n[g                         D
	emoji['e4c2'] ='<font color=#ff00ff>øÒ</font>';//}eB[jiJNeOXj   D
	emoji['e513'] ='<font color=#00ff00>ùæ</font>';//lÂt                         D
	emoji['e54e'] ='<font color=#000000>ù×</font>';//g[h}[NiTMj           D
	emoji['e54f'] ='<font color=#000000>~</font>';//©¯é
	emoji['e561'] ='<font color=#ffa500>øê</font>';//¶P                         D
	emoji['e57b'] ='<font color=#000000>ùÁ</font>';//»vP
	emoji['e47c'] ='<font color=#000000>ùÁ</font>';//»vQ                       D
	emoji['e562'] ='<font color=#0000ff>øí</font>';//tbs[fBXNP
	emoji['e48a'] ='<font color=#ff00ff>ù</font>';//áÌ»
	emoji['e550'] ='<font color=#000000>~</font>';//ocP
	emoji['e551'] ='<font color=#000000>~</font>';//ocQ
	emoji['e552'] ='<font color=#000000>¨</font>';//EîóP
	emoji['e553'] ='<font color=#000000>©</font>';//¶îóP 
	emoji['e4c3'] ='<font color=#ffa500>øÓ</font>';//}OJbv                     D
	emoji['e554'] ='<font color=#000000></font>';//é
	emoji['e563'] ='<font color=#ffa500>øê</font>';//J_[
	emoji['e4fb'] ='<font color=#ff00ff>ù</font>';//X}CtFCX
	emoji['e48b'] ='<font color=#ffff00></font>';//¯Q
	emoji['e555'] ='<font color=#000000>øÙ</font>';//EîóQ                       D
	emoji['e556'] ='<font color=#000000>ùI</font>';//¶îóQ                       D
	emoji['e514'] ='<font color=#ff00ff>ùÀ</font>';//WG[                     D
	emoji['e557'] ='<font color=#000000>ùR</font>';//`FbN}[NP
	emoji['e4df'] ='<font color=#ffa500>ùE</font>';//¢iv[hj
	emoji['e468'] ='<font color=#ffcc00></font>';//¯R
	emoji['e46c'] ='<font color=#ffa500>ù</font>';//Xp[N
	emoji['e476'] ='<font color=#ffa500>ù </font>';//d                           D
	emoji['e4e0'] ='<font color=#ffa500>ùô</font>';//¹                             D
	emoji['e58f'] ='<font color=#ffa500>øê</font>';//tH_PiÂj
	emoji['e4fc'] ='<font color=#ff00ff>ù</font>';//çP
	emoji['e558'] ='<font color=#000000>ùÖ</font>';//Rs[Cg}[N             D
	emoji['e559'] ='<font color=#000000>ùÛ</font>';//WX^[h}[N             D
	emoji['e49c'] ='<font color=#ff0000>øã</font>';//u[tP[X(nhobNj
	emoji['e590'] ='<font color=#ffa500>øê</font>';//tH_QiJj
	emoji['e596'] ='<font color=#000000>øè</font>';//dbPivbVzj         D
	emoji['e4fd'] ='<font color=#000000>Q</font>';//«oµRg
	emoji['e57c'] ='<font color=#ffa500>øß</font>';//NWbgJ[h
	emoji['e55a'] ='<font color=#ff0000>£</font>';//ãOpR
	emoji['e55b'] ='<font color=#ff0000>¥</font>';//ºOpR
	emoji['e573'] ='<font color=#ff0000>ù</font>';//tr`
	emoji['e49d'] ='<font color=#ffa500>øä</font>';//m[gR
	emoji['e564'] ='<font color=#ffa500>øê</font>';//Nbv{[h
	emoji['e597'] ='<font color=#00ff00>øÑ</font>';//Jbv                         D
	emoji['e515'] ='<font color=#000000>øâ</font>';//J                         D
	emoji['e48c'] ='<font color=#0000ff>ø¡</font>';//J                             D
	emoji['e4bb'] ='<font color=#000000>Q</font>';//tbg{[
	emoji['e565'] ='<font color=#ffa500>øä</font>';//{P
	emoji['e484'] ='<font color=#ff0000>ùÝ</font>';//§¿üèÖ~
	emoji['e46a'] ='<font color=#000000>øÎ</font>';//M                           D
	emoji['e566'] ='<font color=#ffa500>øä</font>';//{Q
	emoji['e567'] ='<font color=#ffa500>øä</font>';//{R
	emoji['e568'] ='<font color=#ffa500>øä</font>';//{S
	emoji['e569'] ='<font color=#ffa500>øê</font>';//¶Q
	emoji['e516'] ='<font color=#0000ff>øÖ</font>';//Í³Ý                         D
	emoji['e56a'] ='<font color=#ffa500>øê</font>';//Ðß­èJ_[
	emoji['e49e'] ='<font color=#ffa500>øß</font>';//`PbgELbv               D
	emoji['e48d'] ='<font color=#0000ff>ø </font>';//­àè                         D
	emoji['e521'] ='<font color=#000000>ùw</font>';//
	emoji['e57d'] ='<font color=#ff0000>ùz</font>';//¬ØèiCHECKj                D
	emoji['e517'] ='<font color=#000000>øØ</font>';//rfIJ                   D
	emoji['e57e'] ='<font color=#000000>øØ</font>';//nfBJ
	emoji['e4ab'] ='<font color=#ff0000>øÄ</font>';//Æ                             D
	emoji['e4e4'] ='<font color=#ff0000>ùè</font>';//Ô                             D
	emoji['e57f'] ='<font color=#0000ff>øÖ</font>';//iCt
	emoji['e580'] ='<font color=#000000>øØ</font>';//rfIe[v
	emoji['e4fe'] ='<font color=#000000>øû</font>';//ßªË                         D
	emoji['e55c'] ='<font color=#000000>¨</font>';//ñèîóP
	emoji['e55d'] ='<font color=#ff0000>ù~</font>';//ñèîóQ                     D
	emoji['e518'] ='<font color=#0000ff>ù</font>';//ÞµßªË                     D
	emoji['e519'] ='<font color=#ff0000>ù}</font>';//®                             D
	emoji['e56b'] ='<font color=#ffa500>øä</font>';//m[gP
	emoji['e49f'] ='<font color=#ffa500>øä</font>';//m[gQiJj                 D
	emoji['e581'] ='<font color=#000000>Q</font>';//{gibg
	emoji['e51a'] ='<font color=#ff0000>øÕ</font>';//­Â                           D
	emoji['e4b1'] ='<font color=#000000>ø¿</font>';//Ô                             D
	emoji['e582'] ='<font color=#0000ff>øí</font>';//tbs[Q
	emoji['e574'] ='<font color=#ff0000>ø¯</font>';//`[gi_Otj
	emoji['e575'] ='<font color=#ff0000>ø¯</font>';//OtPiÜêüOtj
	emoji['e51b'] ='<font color=#ff0000>øÆ</font>';//[{bNX
	emoji['e583'] ='<font color=#ffa500>ù </font>';//ùd
	emoji['e56c'] ='<font color=#ffa500>øä</font>';//Roldex
	emoji['e55e'] ='<font color=#000000>Q</font>';//`FbN}[NQ
	emoji['e4ce'] ='<font color=#ff0000>ùì</font>';//ÍÁÏ                         D
	emoji['e4e1'] ='<font color=#ffa500>ùE</font>';//Â¢                           D
	emoji['e584'] ='<font color=#000000>Q</font>';//dr
	emoji['e55f'] ='<font color=#000000>ù¯</font>';//XN[
	emoji['e56d'] ='<font color=#000000>Ó</font>';//ªÑå¤
	emoji['e51c'] ='<font color=#ff0000>ù}</font>';//ùO
	emoji['e585'] ='<font color=#a52a2a>ùº</font>';//hD
	emoji['e4ff'] ='<font color=#000000>©</font>';//w·µmF¶
	emoji['e500'] ='<font color=#000000>¨</font>';//w·µmFE
	emoji['e56e'] ='<font color=#ffa500>øä</font>';//ä 
	emoji['e4a0'] ='<font color=#0000ff>ùÕ</font>';//Nbv                       D
	emoji['e4cf'] ='<font color=#ff0000>øæ</font>';//v[g                     D
	emoji['e51d'] ='<font color=#ffa500>øß</font>';//¼D
	emoji['e4ac'] ='<font color=#000000>øÐ</font>';//SnP                       D
	emoji['e56f'] ='<font color=#ffa500>øä</font>';//¡{
	emoji['e4b2'] ='<font color=#00ff00>øÀ</font>';//gbN
	emoji['e4a1'] ='<font color=#00ff00>ù¾</font>';//Gsc                       D
	emoji['e586'] ='<font color=#000000>Q</font>';//SiocbÐj
	emoji['e591'] ='<font color=#000000>ùs</font>';//Q
	emoji['e587'] ='<font color=#000000>ù½</font>';//`                         D
	emoji['e592'] ='<font color=#000000>ùw</font>';//Manw
	emoji['e593'] ='<font color=#000000>ùw</font>';//óManw
	emoji['e51e'] ='<font color=#000000>øè</font>';//dbQ
	emoji['e4ad'] ='<font color=#0000ff>øÅ</font>';//HêE¨                     D
	emoji['e570'] ='<font color=#000000>Q</font>';//èKP
	emoji['e4a2'] ='<font color=#000000>Q</font>';//èKQ
	emoji['e576'] ='<font color=#ff0000>ø¯</font>';//OtQ
	emoji['e4c4'] ='<font color=#000000>øÐ</font>';//HQ
	emoji['e588'] ='<font color=#000000>øé</font>';//dbR                         D
	emoji['e589'] ='<font color=#000000>Q</font>';//RZg
	emoji['e501'] ='<font color=#000000>øÏ</font>';//Æ°
	emoji['e58a'] ='<font color=#000000>ù¯</font>';//N
	emoji['e51f'] ='<font color=#ff0000>øæ</font>';//pbP[W
	emoji['e520'] ='<font color=#000000>ùt</font>';//e`w
	emoji['e48e'] ='<font color=#ff0000>ø</font>';//Æ«Ç«Üè
	emoji['e4b3'] ='<font color=#0000ff>øÃ</font>';//òs@                         D
	emoji['e4b4'] ='<font color=#0000ff>ùG</font>';//{[g(Dj                    D
	emoji['e4c8'] ='<font color=#000000>¡</font>';//TCR
	emoji['e58b'] ='<font color=#ffa500>øê</font>';//V·
	emoji['e4b5'] ='<font color=#00ff00>ø¼</font>';//dÔ                           D
	emoji['e58c'] ='<font color=#000000>Q</font>';//SuN
	emoji['e58d'] ='<font color=#000000>_</font>';//¼ªuN
	emoji['e58e'] ='<font color=#000000>_</font>';//4ªÌPuN
	emoji['e47d'] ='<font color=#000000>øà</font>';//i                           D
	emoji['e47e'] ='<font color=#ff0000>øá</font>';//Ö                           D
	emoji['e47f'] ='<font color=#0000ff>øü</font>';//ÔÖq                         D
	emoji['e480'] ='<font color=#ffa500>øä</font>';//át}[N
	emoji['e522'] ='<font color=#000000>ù</font>';//lpP                     D
	emoji['e523'] ='<font color=#000000>ù</font>';//lp2                      D
	emoji['e524'] ='<font color=#000000>ù</font>';//lp3                      D
	emoji['e525'] ='<font color=#000000>ù</font>';//lp4                      D
	emoji['e526'] ='<font color=#000000>ù</font>';//lp5                      D
	emoji['e527'] ='<font color=#000000>ù</font>';//lp6                      D
	emoji['e528'] ='<font color=#000000>ù</font>';//lp7                      D
	emoji['e529'] ='<font color=#000000>ù</font>';//lp8                      D
	emoji['e52a'] ='<font color=#000000>ù</font>';//lp9                      D
	emoji['e52b'] ='<font color=#000000>ùù</font>';//lp10
	emoji['e469'] ='<font color=#ff0000>ø¤</font>';//ä                           D
	emoji['e485'] ='<font color=#0000ff>ø¢</font>';//ä«¾éÜ                     D
	emoji['e48f'] ='<font color=#ff0000>ø§</font>';//¯Ài¨ÐÂ¶Àj             D
	emoji['e490'] ='<font color=#ffa500>ø¨</font>';//¯Ài¨¤µÀj               D
	emoji['e491'] ='<font color=#00ff00>ø©</font>';//¯ÀioqÀj                 D
	emoji['e492'] ='<font color=#0000ff>øª</font>';//¯Ài©ÉÀj                 D
	emoji['e493'] ='<font color=#ff0000>ø«</font>';//¯ÀiµµÀj                 D
	emoji['e494'] ='<font color=#ffa500>ø¬</font>';//¯Ài¨ÆßÀj               D
	emoji['e495'] ='<font color=#00ff00>ø­</font>';//¯ÀiVÀj                 D
	emoji['e496'] ='<font color=#0000ff>ø®</font>';//¯Ài³»èÀj               D
	emoji['e497'] ='<font color=#ff0000>ø¯</font>';//¯Ài¢ÄÀj                 D
	emoji['e498'] ='<font color=#ffa500>ø°</font>';//¯Àiâ¬Àj                 D
	emoji['e499'] ='<font color=#00ff00>ø±</font>';//¯ÀirÀj                 D
	emoji['e49a'] ='<font color=#0000ff>ø²</font>';//¯Ài¤¨Àj                 D
	emoji['e49b'] ='<font color=#000000>Q</font>';//¯ÀiÖÑÂ©¢Àj
	emoji['e4a3'] ='<font color=#ff0000>øÉ</font>';//`sl                         D
	emoji['e4a4'] ='<font color=#0000ff>øË</font>';//QSHOURSiRrj)           D
	emoji['e4a5'] ='<font color=#000000>øÏ</font>';//gC                         D
	emoji['e4a6'] ='<font color=#0000ff>øÍ</font>';//p[LO                     D
	emoji['e4a7'] ='<font color=#ff0000>ù</font>';//oXâ
	emoji['e4a8'] ='<font color=#ff0000>ø¤</font>';//±ÝÃÅiÊuîñÏ°¸j
	emoji['e4a9'] ='<font color=#0000ff>øÂ</font>';//`i¢©è}[Nj
	emoji['e4aa'] ='<font color=#ff00ff>øÈ</font>';//âs                           D
	emoji['e571'] ='<font color=#ff00ff>øÌ</font>';//KXX^h                   D
	emoji['e572'] ='<font color=#000000>Q</font>';//n}
	emoji['e4ae'] ='<font color=#000000>ùÂ</font>';//©]Ô                         D
	emoji['e4af'] ='<font color=#ff0000>øÁ</font>';//oX                           D
	emoji['e4b0'] ='<font color=#0000ff>ø¾</font>';//V²ü                         D
	emoji['e46b'] ='<font color=#000000>ùØ</font>';//}\                       D
	emoji['e4b6'] ='<font color=#000000>ø·</font>';//TbJ[                       D
	emoji['e4b7'] ='<font color=#00ff00>ø¶</font>';//ejX                         D
	emoji['e4b8'] ='<font color=#0000ff>ù·</font>';//Xm[{[h                   D
	emoji['e4b9'] ='<font color=#000000>øº</font>';//`FbJ[tOi[^[X   D
	emoji['e46d'] ='<font color=#ff0000>øÞ</font>';//Vn
	emoji['e4bc'] ='<font color=#ff0000>ù</font>';//·ò                           D
	emoji['e4bd'] ='<font color=#a52a2a>ùð</font>';//ð®iÔ¿å¤¿ñj
	emoji['e4be'] ='<font color=#000000>ùP</font>';//fæi©¿ñ±j               D
	emoji['e4bf'] ='<font color=#000000>ùW</font>';//éÌ´
	emoji['e4c0'] ='<font color=#000000>Q</font>';//^[
	emoji['e46e'] ='<font color=#000000>Q</font>';//XbgiVVVj
	emoji['e46f'] ='<font color=#000000>ùB</font>';//­·ÊiA^Ì­·Êj
	emoji['e4c5'] ='<font color=#ff0000></font>';//I|î
	emoji['e4c6'] ='<font color=#000000>øì</font>';//Q[ÌRg[           D
	emoji['e4c7'] ='<font color=#a52a2a>ùº</font>';//Üà                           D
	emoji['e4c9'] ='<font color=#00ff00>ùH</font>';//NX}Xc[               D
	emoji['e4ca'] ='<font color=#ff00ff>ùí</font>';//Ô©(³­çj                  D
	emoji['e4cb'] ='<font color=#800080>ùü</font>';//¨»¯
	emoji['e4cc'] ='<font color=#ff0000>ù</font>';//øijúEúÌÛj
	emoji['e4cd'] ='<font color=#ff0000>ùê</font>';//XCJ
	emoji['e4d0'] ='<font color=#ff0000>ùï</font>';//P[L                         D
	emoji['e4d1'] ='<font color=#000000>ùî</font>';//tCpiÚÊÄ«j
	emoji['e4d2'] ='<font color=#ff0000>ùç</font>';//³­çñÚ                     D
	emoji['e4d3'] ='<font color=#0000ff>ùö</font>';//Ó®
	emoji['e4d4'] ='<font color=#ff0000>ùç</font>';//C`S
	emoji['e4d5'] ='<font color=#000000>ùî</font>';//¨É¬è                       D
	emoji['e4d6'] ='<font color=#ffa500>øÔ</font>';//no[K[it@[Xgt[   D
	emoji['e470'] ='<font color=#0000ff>ùö</font>';//­¶ç
	emoji['e4d7'] ='<font color=#ffa500>ùE</font>';//¤³¬
	emoji['e4d8'] ='<font color=#a52a2a>ùù</font>';//¤Ü                           D
	emoji['e4d9'] ='<font color=#ffa500>ùF</font>';//³é
	emoji['e4da'] ='<font color=#ff00ff>ùø</font>';//©¦é
	emoji['e4db'] ='<font color=#ffa500>ùF</font>';//L                             D
	emoji['e4dc'] ='<font color=#000080>ùõ</font>';//yM                       D
	emoji['e4dd'] ='<font color=#a52a2a>ùó</font>';// è
	emoji['e4de'] ='<font color=#ffa500>ùú</font>';//Ô½                           D
	emoji['e4e2'] ='<font color=#ff0000>ø§</font>';//âµÌ«
	emoji['e4e3'] ='<font color=#00ff00>ùæ</font>';//ÐÜíè
	emoji['e471'] ='<font color=#ff00ff>ù</font>';//çPi¤êµ¢JIj           D
	emoji['e472'] ='<font color=#ff0000>ù</font>';//çQi¨±Á½JIj           D
	emoji['e473'] ='<font color=#0000ff>ùÒ</font>';//çRi©Èµ¢JIj           D
	emoji['e474'] ='<font color=#000000>ùÐ</font>';//çSiÂ©ê½JIj
	emoji['e475'] ='<font color=#0000ff>ù¦</font>';//°¢iyyycj               D
	emoji['e4e5'] ='<font color=#000000>ù¡</font>';//{èiJbj                 D
	emoji['e4e6'] ='<font color=#000000>ù¬</font>';//´iÜE¾j                   D
	emoji['e4e7'] ='<font color=#ff0000>ùÍ</font>';//©ç©¤i Á©ñ×¦j       D
	emoji['e477'] ='<font color=#ff0000>ù</font>';//n[gQiíêÄ¢éj         D
	emoji['e478'] ='<font color=#ff0000>ù</font>';//n[gRiå«¢¬³¢j     D
	emoji['e479'] ='<font color=#ffa500>ù</font>';//Xp[NQiL}[Nj
	emoji['e47a'] ='<font color=#000000>ù£</font>';//e                           D
	emoji['e47b'] ='<font color=#ff0000>Q</font>';//
	emoji['e4e8'] ='<font color=#800080>ùü</font>';//{õiSOSj
	emoji['e4e9'] ='<font color=#ffa500>ùÌ</font>';//Í±Ô
	emoji['e4ea'] ='<font color=#ff0000>ù</font>';//n[gTiîª³³ÁÄ¢éj
	emoji['e4eb'] ='<font color=#ff0000>ù</font>';//LX}[N                     D
	emoji['e4ec'] ='<font color=#800080>ùü</font>';//Fl
	emoji['e4ed'] ='<font color=#ff0000>ø¤</font>';//ÈéÆ
	emoji['e4ee'] ='<font color=#ffa500>øù</font>';//«Õi¢j
	emoji['e4ef'] ='<font color=#800080>ùü</font>';//«
	emoji['e4f0'] ='<font color=#ff0000>ø¤</font>';//ÔÛ
	emoji['e4f1'] ='<font color=#ff0000>ùÙ</font>';//Ûé                           D
	emoji['e4f2'] ='<font color=#000000>Q</font>';//100__ù¶ùù¶
	emoji['e4f3'] ='<font color=#ff0000>ù¢</font>';//p`                         D
	emoji['e4f4'] ='<font color=#000000>ù­</font>';//_bV                       D
	emoji['e4f5'] ='<font color=#cc6600>Q</font>';//E`}[N
	emoji['e4f6'] ='<font color=#ffa500>ùÌ</font>';//l·µwTC
	emoji['e4f7'] ='<font color=#000000>Q</font>';//}¾
	emoji['e4f8'] ='<font color=#800080>ùü</font>';//Ç­ë
	emoji['e4f9'] ='<font color=#ffa500>ùÌ</font>';//¨âäÑTC                 D
	emoji['e502'] ='<font color=#0000ff>øë</font>';//er                         D
	emoji['e503'] ='<font color=#000000>ø×</font>';//}CN                         D
	emoji['e504'] ='<font color=#000000>ù´</font>';//àz                           D
	emoji['e505'] ='<font color=#ff0000>ù¤</font>';//fB                       D
	emoji['e506'] ='<font color=#ff0000>ù¤</font>';//M^[iGLj
	emoji['e507'] ='<font color=#ff0000>ù¤</font>';//oCIiNbVbNj
	emoji['e508'] ='<font color=#0000ff>øÛ</font>';//wbhtH                   D
	emoji['e509'] ='<font color=#ff0000>ùµ</font>';//ûg                           D
	emoji['e50a'] ='<font color=#000000>ù£</font>';//ANVisXgj
	emoji['e50b'] ='<font color=#ff00ff>ùÆ</font>';//GXe
	emoji['e577'] ='<font color=#000000>Q</font>';//EZ}[N
	emoji['e578'] ='<font color=#ff0000>ù{</font>';//³¿ieqddj               D
	emoji['e50c'] ='<font color=#0000ff>øí</font>';//CD/DVD                         D
	emoji['e50d'] ='<font color=#0000ff>ù³</font>';//wl
	emoji['e50e'] ='<font color=#800080>ùü</font>';//UFO
	emoji['e50f'] ='<font color=#ff0000>ù</font>';//XVitoIj
	emoji['e510'] ='<font color=#000000>Q</font>';//Ëíij
	emoji['e598'] ='<font color=#0000ff>ø¥</font>';//¶                             D
	emoji['e599'] ='<font color=#0000ff>øµ</font>';//St                         D
	emoji['e59a'] ='<font color=#ffa500>ø¹</font>';//oXPbg{[               D
	emoji['e59b'] ='<font color=#ff00ff>ø»</font>';//|Pbgx                   D
	emoji['e59c'] ='<font color=#ff00ff>øÜ</font>';//A[g                         D
	emoji['e59d'] ='<font color=#000000>øÝ</font>';//
	emoji['e59e'] ='<font color=#ff0000>øÞ</font>';//Cxg                       D
	emoji['e59f'] ='<font color=#ff0000>øå</font>';//{                         D
	emoji['e5a0'] ='<font color=#ff0000>øç</font>';//o[Xf[                     D
	emoji['e5a1'] ='<font color=#000000>øï</font>';//Xy[h                       D
	emoji['e5a2'] ='<font color=#ff0000>øð</font>';//_C                         D
	emoji['e5a3'] ='<font color=#000000>øñ</font>';//Nu                         D
	emoji['e5a4'] ='<font color=#000000>øò</font>';//Ú                             D
	emoji['e5a5'] ='<font color=#ffa500>øó</font>';//¨                             D
	emoji['e5a6'] ='<font color=#ffa500>øõ</font>';//èi`Lj                   D
	emoji['e5a7'] ='<font color=#ffa500>øö</font>';//èip[j                     D
	emoji['e5a8'] ='<font color=#000000>ù@</font>';//V                           D
	emoji['e5a9'] ='<font color=#000000>ùA</font>';//ââ¯                     D
	emoji['e5aa'] ='<font color=#000000>ùB</font>';//¼                           D
	emoji['e5ab'] ='<font color=#ff0000>ù</font>';//NA                         D
	emoji['e5ac'] ='<font color=#000000>ù</font>';//lp0                      D
	emoji['e5ad'] ='<font color=#ff0000>ù°</font>';//è                           D
	emoji['e5ae'] ='<font color=#0000ff>ù</font>';//ÓçÓç                       D
	emoji['e5af'] ='<font color=#ff0000>ù</font>';//©í¢¢
	emoji['e5b0'] ='<font color=#ff0000>ùª</font>';//ÇñÁiÕj                 D
	emoji['e5b1'] ='<font color=#000000>ù«</font>';// ¹ ¹iòÑUé¾j         D
	emoji['e5b2'] ='<font color=#000000>Q</font>';//C[W[vX
	emoji['e5b3'] ='<font color=#0000ff>ù@</font>';//n
	emoji['e5b4'] ='<font color=#ffa500>ùñ</font>';//[                       D
	emoji['e5c8'] ='<font color=#ff0000>ù</font>';//NEW                            D
	emoji['e5c9'] ='<font color=#0000ff>ù³</font>';//am                         D
	emoji['e5ca'] ='<font color=#000000>øú</font>';//amC
	emoji['e5cb'] ='<font color=#000000>ù»</font>';//p\R                       D
	emoji['e5cc'] ='<font color=#0000ff>øë</font>';//WI
	emoji['e5cd'] ='<font color=#ff0000>ùè</font>';//o
	emoji['e5ce'] ='<font color=#00ff00>øÊ</font>';//`y
	emoji['e5cf'] ='<font color=#ffa500>ø½</font>';//nºS                         D
	emoji['e5d0'] ='<font color=#0000ff>ùå</font>';//xmR                         D
	emoji['e5d1'] ='<font color=#ff0000>ù</font>';//ªª¹                       D
	emoji['e5d2'] ='<font color=#ff00ff>ùÏ</font>';//Vg
	emoji['e5d3'] ='<font color=#ffa500>ùF</font>';//g
	emoji['e5d4'] ='<font color=#ffa500>ùE</font>';//­Ü
	emoji['e5d5'] ='<font color=#ffa500>ùE</font>';//Ë¸Ý
	emoji['e5d6'] ='<font color=#ff00ff>ùÎ</font>';//ECN                       D
	emoji['e5d7'] ='<font color=#ff00ff>ùË</font>';//Úªn[g                     D
	emoji['e5d8'] ='<font color=#800080>ùü</font>';//VbLO                   D
	emoji['e5d9'] ='<font color=#0000ff>ùÈ</font>';//¢è                           D
	emoji['e5da'] ='<font color=#0000ff>ùö</font>';//½±
	emoji['e5db'] ='<font color=#000000>Q</font>';//Pbg
	emoji['e5dc'] ='<font color=#ffa500>ù¿</font>';//¤¥                           D
	emoji['e5dd'] ='<font color=#ff0000>ù</font>';//`[
	emoji['e5de'] ='<font color=#000000>ù½</font>';//n}[
	emoji['e5df'] ='<font color=#000000>ùW</font>';//Å¿ã°ÔÎ
		emoji['e234'] ='<font color=#ff0000>ùì</font>';//Íêt
		emoji['e235'] ='<font color=#ff0000>øã</font>';//d©Îñ
		emoji['e236'] ='<font color=#ff0000>ø§</font>';//¬
		emoji['e237'] ='<font color=#ff0000>øÄ</font>';//Lv
		emoji['e238'] ='<font color=#000000>Q</font>';//
		emoji['e239'] ='<font color=#000000>Q</font>';//urio[TXj
		emoji['e23a'] ='<font color=#ffa500>ù¿</font>';//gtB[
		emoji['e23b'] ='<font color=#a52a2a>ùó</font>';//J
		emoji['e23c'] ='<font color=#ff0000>ù</font>';//XyCø
		emoji['e23d'] ='<font color=#ff0000>ù</font>';//VAø
		emoji['e23e'] ='<font color=#ff0000>ùÝ</font>';//H
		emoji['e23f'] ='<font color=#ff0000>ù</font>';//C
		emoji['e240'] ='<font color=#ff0000>ù</font>';//jú}[N
		emoji['e241'] ='<font color=#000000>ùW</font>';//[ûXÀÝ
		emoji['e242'] ='<font color=#ffa500>ùô</font>';//è
		emoji['e243'] ='<font color=#ff0000>ø¯</font>';//¿
		emoji['e244'] ='<font color=#0000ff>øÅ</font>';//|X
		emoji['e245'] ='<font color=#ff0000>øÆ</font>';//XÖÇ                         D
		emoji['e246'] ='<font color=#000000>øÇ</font>';//a@                           D
		emoji['e247'] ='<font color=#00ff00>ùã</font>';//wZ                           D
		emoji['e248'] ='<font color=#00ff00>øÊ</font>';//ze                         D
		emoji['e249'] ='<font color=#0000ff>øÂ</font>';//D                             D
		emoji['e24a'] ='<font color=#ff0000>ùÝ</font>';//18Ö
		emoji['e24b'] ='<font color=#000000>ùr</font>';//à
		emoji['e24c'] ='<font color=#ff0000>ù</font>';//COOL!
		emoji['e24d'] ='<font color=#000000></font>';//}[N
		emoji['e24e'] ='<font color=#000000>U</font>';//UE}[N
		emoji['e24f'] ='<font color=#ff0000>ù|</font>';//hc}[N                     D
		emoji['e250'] ='<font color=#ff0000>ùà</font>';//}[N                       D
		emoji['e251'] ='<font color=#0000ff>ùÞ</font>';//ó}[N                       D
		emoji['e252'] ='<font color=#000000>w</font>';//wè}[N
		emoji['e253'] ='<font color=#000000>c</font>';//cÆ}[N
		emoji['e254'] ='<font color=#000000>ª</font>';//ãw·µ
		emoji['e255'] ='<font color=#000000>«</font>';//ºw·µ
		emoji['e256'] ='<font color=#0000ff>ù</font>';//è¢
		emoji['e257'] ='<font color=#ff0000>øî</font>';//}i[[h
		emoji['e258'] ='<font color=#000000>Q</font>';//d¹OFF
		emoji['e259'] ='<font color=#ffa500>øê</font>';//·é
		emoji['e25a'] ='<font color=#000000>Q</font>';//lN^C
		emoji['e25b'] ='<font color=#ff0000>ùè</font>';//nCrXJX
		emoji['e25c'] ='<font color=#ff00ff>ùí</font>';//Ô©
		emoji['e25d'] ='<font color=#00ff00>ùë</font>';//T{e
		emoji['e25e'] ='<font color=#a52a2a>ùð</font>';//¨¶qt                     D
		emoji['e25f'] ='<font color=#ffa500>øÓ</font>';//£t
		emoji['e260'] ='<font color=#000000>j</font>';//j}[N
		emoji['e261'] ='<font color=#000000>øÇ</font>';//×ò
		emoji['e262'] ='<font color=#ff0000>ù</font>';//D
		emoji['e263'] ='<font color=#000000>ù£</font>';//NbJ[
		emoji['e264'] ='<font color=#000000>Q</font>';//eznavigation
		emoji['e265'] ='<font color=#000000>øÝ</font>';//Xq
		emoji['e266'] ='<font color=#ff0000>øÕ</font>';//Ou[c
		emoji['e267'] ='<font color=#ffa500>øö</font>';//lC
		emoji['e268'] ='<font color=#0000ff>øÖ</font>';//üe@
		emoji['e269'] ='<font color=#0000ff>øÖ</font>';//°®
		emoji['e26a'] ='<font color=#0000ff>ù³</font>';//¨
		emoji['e26b'] ='<font color=#ff00ff>ø³</font>';//rLj
		emoji['e26c'] ='<font color=#ff0000>øî</font>';//n[gigvj             D
		emoji['e26d'] ='<font color=#ff0000>ù</font>';//õén[g
		emoji['e26e'] ='<font color=#ff0000>ù</font>';//Ân[g
		emoji['e26f'] ='<font color=#ff0000>ù</font>';//În[g
		emoji['e270'] ='<font color=#ff0000>ù</font>';//©n[g
		emoji['e271'] ='<font color=#ff0000>ù</font>';//n[g
		emoji['e272'] ='<font color=#ffa500>ù</font>';//«ç«ç                       D
		emoji['e273'] ='<font color=#0000ff>ø¸</font>';//XL[                         D
		emoji['e274'] ='<font color=#000000>ùD</font>';//
		emoji['e275'] ='<font color=#00ff00>ùÃ</font>';//ú{                         D
		emoji['e276'] ='<font color=#a52a2a>ùò</font>';//Hp                         D
		emoji['e277'] ='<font color=#ffa500>ù÷</font>';//\tgN[
		emoji['e278'] ='<font color=#ffa500>ù÷</font>';//|eg
		emoji['e279'] ='<font color=#ffa500>ù÷</font>';//¾ñ²
		emoji['e27a'] ='<font color=#000000>ùî</font>';//¨¹ñ×¢
		emoji['e27b'] ='<font color=#000000>ùî</font>';//²Íñ
		emoji['e27c'] ='<font color=#ffa500>ù÷</font>';//XpQbeB
		emoji['e27d'] ='<font color=#ffa500>ùñ</font>';//J[
		emoji['e27e'] ='<font color=#ffa500>ù÷</font>';//¨Åñ
		emoji['e27f'] ='<font color=#000000>ùî</font>';//õi
		emoji['e280'] ='<font color=#ff0000>ùê</font>';//èñ²                         D
		emoji['e281'] ='<font color=#ff0000>ùê</font>';//Ý©ñ
		emoji['e282'] ='<font color=#ff0000>ùê</font>';//g}g
		emoji['e283'] ='<font color=#ff0000>ùê</font>';//È·
		emoji['e284'] ='<font color=#000000>ùî</font>';//Ù
		emoji['e285'] ='<font color=#ffa500>ùñ</font>';//ç
		emoji['e286'] ='<font color=#ffa500>ùÑ</font>';//ÓÁ                           D
		emoji['e287'] ='<font color=#0000ff>ù</font>';//µåÚè                       D
		emoji['e288'] ='<font color=#ffa500>ùÑ</font>';//¿Öè
		emoji['e289'] ='<font color=#000000>ùÐ</font>';//¸s                           D
		emoji['e28a'] ='<font color=#00ff00>ù</font>';//í©çñ                       D
		emoji['e28b'] ='<font color=#0000ff>ù¦</font>';//°¢
		emoji['e28c'] ='<font color=#ff00ff>ùÆ</font>';//ÄêÄê                       D
		emoji['e28d'] ='<font color=#800080>ùü</font>';//Â´ß
		emoji['e28e'] ='<font color=#800080>ùü</font>';//×Ð«
		emoji['e28f'] ='<font color=#800080>ùü</font>';//M
		emoji['e290'] ='<font color=#a52a2a>ùÊ</font>';//¡Ú                           D
		emoji['e291'] ='<font color=#0000ff>ù</font>';//ÑÁ­è
		emoji['e292'] ='<font color=#0000ff>ùÈ</font>';// ¹è
		emoji['e293'] ='<font color=#ff0000>ù¤</font>';//y
		emoji['e294'] ='<font color=#ff00ff>ù</font>';//É±É±
		emoji['e295'] ='<font color=#000000>Q</font>';//`[Q
		emoji['e296'] ='<font color=#000000>Q</font>';//`b
		emoji['e297'] ='<font color=#000000>@</font>';//@
		emoji['e298'] ='<font color=#ff0000>ù</font>';//û
		emoji['e299'] ='<font color=#0000ff>ùÓ</font>';//S^¨è¢
		emoji['e29a'] ='<font color=#ffa500>øö</font>';//è
		emoji['e29b'] ='<font color=#ff0000>ù°</font>';//njI
		emoji['e29c'] ='<font color=#0000ff>ù¥</font>';//u[CO
		emoji['e29d'] ='<font color=#ffa500>øö</font>';//oCoC
		emoji['e29e'] ='<font color=#ff0000>ùÔ</font>';//mf
		emoji['e29f'] ='<font color=#ff0000>ù°</font>';//njIQ
		emoji['e2a0'] ='<font color=#0000ff>ùÓ</font>';//½Óè
		emoji['e2a1'] ='<font color=#ff0000>ù</font>';//Jbv
		emoji['e2a2'] ='<font color=#000000>øÏ</font>';//oj[
		emoji['e2a3'] ='<font color=#FF0000>ù¤</font>';//gybg
		emoji['e2a4'] ='<font color=#000000>ùD</font>';//r[h
		emoji['e2a5'] ='<font color=#0000ff>ùä</font>';//j
		emoji['e2a6'] ='<font color=#00ff00>øÀ</font>';//ÁhÔ
		emoji['e2a7'] ='<font color=#00ff00>øÀ</font>';//~}Ô
		emoji['e2a8'] ='<font color=#000000>ø¿</font>';//pgJ[
		emoji['e2a9'] ='<font color=#0000ff>ø¾</font>';//WFbgR[X^[
		emoji['e2aa'] ='<font color=#00ff00>ùH</font>';//å¼
		emoji['e2ab'] ='<font color=#000000>øÏ</font>';//Õè
		emoji['e2ac'] ='<font color=#000000>²</font>';//²Æ®
		emoji['e2ad'] ='<font color=#ff00ff>ùí</font>';//üw®
		emoji['e2ae'] ='<font color=#0000ff>ùö</font>';//±¢ÌÚè
		emoji['e2af'] ='<font color=#0000ff>ø¦</font>';//P                             D
		emoji['e2b0'] ='<font color=#ff00ff>ùÏ</font>';//ÔÅ
		emoji['e2b1'] ='<font color=#ff00ff>ù</font>';//©«X
		emoji['e2b2'] ='<font color=#000000>ùW</font>';//üÔÎ
		emoji['e2b3'] ='<font color=#ff0000>ø¤</font>';//ª«L
		emoji['e2b4'] ='<font color=#000000>Q</font>';//é
		emoji['e2b5'] ='<font color=#ff0000>ùê</font>';//nEB
		emoji['e2b6'] ='<font color=#000000>ùW</font>';//¨©
		emoji['e2b7'] ='<font color=#00ff00>ùH</font>';//T^
		emoji['e2b8'] ='<font color=#000000>ùW</font>';//é^¬ê¯                     D
		emoji['e2b9'] ='<font color=#ff0000>ø</font>';//ø
		emoji['e2ba'] ='<font color=#00ff00>øÊ</font>';//zeQ
		emoji['e2bb'] ='<font color=#ff0000>ø</font>';//úÌo
		emoji['e2bc'] ='<font color=#000000>øÝ</font>';//VNnbg                   D
		emoji['e2bd'] ='<font color=#0000ff>øÅ</font>';//fp[g
		emoji['e2be'] ='<font color=#000000>é</font>';//éiú{j
		emoji['e2bf'] ='<font color=#000000>é</font>';//éi[bpj
		emoji['e2c0'] ='<font color=#0000ff>øÅ</font>';//HêQ
		emoji['e2c1'] ='<font color=#ff0000>ù</font>';//tXø
		emoji['e5b5'] ='<font color=#000000>Q</font>';//I[vEF[u
		emoji['e5b6'] ='<font color=#ff0000>ù}</font>';//bNmF
		emoji['e5b7'] ='<font color=#000000>A</font>';//å¶
		emoji['e5b8'] ='<font color=#000000>a</font>';//¬¶
		emoji['e5b9'] ='<font color=#000000>1</font>';//
		emoji['e5ba'] ='<font color=#000000></font>';//L
		emoji['e5bb'] ='<font color=#000000>Â</font>';//ANZvg
		emoji['e5bc'] ='<font color=#000000>Q</font>';//`FbN{bNX
		emoji['e5bd'] ='<font color=#000000>ùR</font>';//GfBbg                     D
		emoji['e5be'] ='<font color=#000000></font>';//WI{^
		emoji['e5bf'] ='<font color=#0000ff>ù</font>';//©é
		emoji['e5c0'] ='<font color=#ff0000>ù~</font>';//ßé
		emoji['e5c1'] ='<font color=#ffa500>ù</font>';//¨CÉüè
		emoji['e5c2'] ='<font color=#000000>ùr</font>';//I¹
		emoji['e5c3'] ='<font color=#ff0000>øÄ</font>';//z[
		emoji['e5c4'] ='<font color=#ff0000>øÆ</font>';//óM P
		emoji['e5c5'] ='<font color=#ffa500>øê</font>';//}[N
		emoji['e5c6'] ='<font color=#ff0000>ù}</font>';//Âl
		emoji['e5c7'] ='<font color=#00ff00>ùÚ</font>';//ÄÇÝÝ
		emoji['e2c2'] ='<font color=#ff0000>ù</font>';//hCcø
		emoji['e2c3'] ='<font color=#ff0000>ù</font>';//C^Aø
		emoji['e2c4'] ='<font color=#ff0000>ù</font>';//CMXø
		emoji['e2c5'] ='<font color=#ff0000>ù</font>';//ø
		emoji['e2c6'] ='<font color=#ff0000>ù</font>';//Øø
		emoji['e2c7'] ='<font color=#ff00ff>ù</font>';//l
		emoji['e2c8'] ='<font color=#ff0000>ù</font>';//l
		emoji['e2c9'] ='<font color=#a52a2a>ùÊ</font>';//Chl
		emoji['e2ca'] ='<font color=#ffa500>ùÑ</font>';//¨¶¢³ñ
		emoji['e2cb'] ='<font color=#ff00ff>ùÆ</font>';//¨Î ³ñ
		emoji['e2cc'] ='<font color=#ff00ff>ùÍ</font>';//Ô¿áñ
		emoji['e2cd'] ='<font color=#ff00ff>ù</font>';//H»êÌl
		emoji['e2ce'] ='<font color=#ff00ff>ùÆ</font>';//¨Pl
		emoji['e2cf'] ='<font color=#0000ff>ùö</font>';//CJ
		emoji['e2d0'] ='<font color=#ff0000>ù¤</font>';//_X
		emoji['e2d1'] ='<font color=#0000ff>ùö</font>';//MÑ
		emoji['e2d2'] ='<font color=#f52a2a>ùó</font>';//°¶°¶
		emoji['e2d3'] ='<font color=#a52a2a>ùù</font>';//Û
		emoji['e2d4'] ='<font color=#ffa500>ùE</font>';//RA
		emoji['e2d5'] ='<font color=#a52a2a>ùù</font>';//zX^C
		emoji['e2d6'] ='<font color=#000000>ù®</font>';//wr
		emoji['e2d7'] ='<font color=#ffa500>ùô</font>';//{
		emoji['e2d8'] ='<font color=#ffa500>ùú</font>';//¤èÚ¤
		emoji['e2d9'] ='<font color=#a52a2a>ùù</font>';//Ó½±Ôç­¾
		emoji['e2da'] ='<font color=#000000>A</font>';//`^
		emoji['e2db'] ='<font color=#000000>B</font>';//a^
		emoji['e2dc'] ='<font color=#000000>O</font>';//n^
		emoji['e2dd'] ='<font color=#000000>Q</font>';//`a^
		emoji['e2de'] ='<font color=#ffa500>øù</font>';//«Õ                           D
		emoji['e2df'] ='<font color=#000000>øú</font>';//Xj[J[                     D
		emoji['e2e0'] ='<font color=#ff0000>ù</font>';//ø                             D
		emoji['e2e1'] ='<font color=#ff0000>ù</font>';//ãü«J[uîó               D
		emoji['e2e2'] ='<font color=#0000ff>ù¥</font>';//ºü«J[uîó               D
		emoji['e2e3'] ='<font color=#ff00ff>ù¨</font>';//uIHv                       D
		emoji['e2e4'] ='<font color=#ff0000>ù©</font>';//uIIv                       D
		emoji['e2e5'] ='<font color=#000000>ù¯</font>';//­éè                         D
		emoji['e2e6'] ='<font color=#ff0000>ùê</font>';//
		emoji['e2e7'] ='<font color=#ff0000>ø§</font>';//pCibv
		emoji['e2e8'] ='<font color=#ff0000>ùç</font>';//ÔÇ¤
		emoji['e2e9'] ='<font color=#ffa500>ùé</font>';//oii                         D
		emoji['e2ea'] ='<font color=#00ff00>ùë</font>';//Æ¤àë±µ
		emoji['e2eb'] ='<font color=#00ff00>ùë</font>';//«Ì±
		emoji['e2ec'] ='<font color=#ff0000>ùê</font>';//I
		emoji['e2ed'] ='<font color=#ff0000>ùê</font>';//
		emoji['e2ee'] ='<font color=#ffa500>ù÷</font>';//â«¢à
		emoji['e2ef'] ='<font color=#ffa500>ù÷</font>';//sU
		emoji['e2f0'] ='<font color=#ffa500>ùô</font>';//^[L[
		emoji['e2f1'] ='<font color=#00ff00>ùH</font>';//µ[ùüè
		emoji['e2f2'] ='<font color=#ff00ff>øÒ</font>';//gsJhN
		emoji['e2f3'] ='<font color=#ffa500>ø£</font>';//C
		emoji['e2f4'] ='<font color=#ff0000>ù¤</font>';//sAm
		emoji['e2f5'] ='<font color=#0000ff>ù·</font>';//T[tB
		emoji['e2f6'] ='<font color=#0000ff>ùö</font>';//Þè
		emoji['e2f7'] ='<font color=#000000>ùD</font>';//{[O
		emoji['e2f8'] ='<font color=#000000>Q</font>';//ÈÜÍ°
		emoji['e2f9'] ='<font color=#000000>Q</font>';//Vç
		emoji['e2fa'] ='<font color=#ffa500>ùE</font>';//p_
		emoji['e2fb'] ='<font color=#ff0000>ùÍ</font>';// ©ñ×[
		emoji['e2fc'] ='<font color=#ffa500>ùú</font>';//Ô½Ì@
		emoji['e2fd'] ='<font color=#ff0000>ùè</font>';//Ô
		emoji['e2fe'] ='<font color=#ff00ff>øÒ</font>';//ACXN[
		emoji['e2ff'] ='<font color=#000000>ùD</font>';//h[ic
		emoji['e300'] ='<font color=#000000>ùD</font>';//NbL[
		emoji['e301'] ='<font color=#ffa500>øß</font>';//`R
		emoji['e302'] ='<font color=#ff0000>øå</font>';//LfBiÂÂÝj
		emoji['e303'] ='<font color=#ff0000>øå</font>';//LfBiØëØëj
		emoji['e304'] ='<font color=#000000>Q</font>';//©´é
		emoji['e305'] ='<font color=#000000>Q</font>';//¾í´é
		emoji['e306'] ='<font color=#000000>Q</font>';//·©´é
		emoji['e307'] ='<font color=#0000ff>ùå</font>';//ÎR
		emoji['e308'] ='<font color=#ff0000>øî</font>';//{ª¯Ìn[g
		emoji['e309'] ='<font color=#000000>Q</font>';//pêu`abv
		emoji['e30a'] ='<font color=#000000>Q</font>';//v
		emoji['e30b'] ='<font color=#000000>Q</font>';//~co`
		emoji['e30c'] ='<font color=#a52a2a>ùó</font>';//egEV
		emoji['e30d'] ='<font color=#000000>ùQ</font>';//I¨|bg
		emoji['e30e'] ='<font color=#ff0000>ùê</font>';//Âèñ²
		emoji['e30f'] ='<font color=#a52a2a>ùº</font>';//HÌÍ¦½¨D
		emoji['e310'] ='<font color=#0000ff>ù</font>';//ÚªÜíéÌL
		emoji['e311'] ='<font color=#ff0000>ùÉ</font>';//Õ[i©í¢­{j             D
		emoji['e312'] ='<font color=#ff0000>ùÉ</font>';//Ô[i©í¢­{jilRj
		emoji['e313'] ='<font color=#000000>ùW</font>';//VÌì
		emoji['e314'] ='<font color=#000000>Q</font>';//`[ilRj
		emoji['e315'] ='<font color=#ff00ff>ù</font>';//É±ilRj
		emoji['e316'] ='<font color=#000000>ùs</font>';//[·é                     D
		emoji['e317'] ='<font color=#ff00ff>ùÏ</font>';//«Î¢ilRj
		emoji['e318'] ='<font color=#ff00ff>ùÏ</font>';//«Î¢
		emoji['e319'] ='<font color=#ff00ff>ùË</font>';//Úªn[gilRj
		emoji['e31a'] ='<font color=#00ff00>ù</font>';//Ù¦[ilRj
		emoji['e31b'] ='<font color=#00ff00>ù</font>';//Ù¦[
		emoji['e31c'] ='<font color=#0000ff>ùÓ</font>';//ÜÛëèilRj
		emoji['e31d'] ='<font color=#0000ff>ùÓ</font>';//ÜÛëè                       D
		emoji['e31e'] ='<font color=#ffa500>ùø</font>';//«èèilRj
		emoji['e31f'] ='<font color=#0000ff>ù³</font>';//hX
		emoji['e320'] ='<font color=#000000>Q</font>';//C
		emoji['e321'] ='<font color=#00ff00>ø¼</font>';//w
		emoji['e322'] ='<font color=#000000>Q</font>';//ÔD
		emoji['e323'] ='<font color=#000000>Q</font>';//W[J[
		emoji['e324'] ='<font color=#000000>øÐ</font>';//GrtC
		emoji['e325'] ='<font color=#000000>ùw</font>';//[ACR
		emoji['e326'] ='<font color=#000000>ùØ</font>';//à­l
		emoji['e327'] ='<font color=#000000>ø¿</font>';//pgJ[Ìv
		emoji['e328'] ='<font color=#000000>Q</font>';//ezmovie
		emoji['e329'] ='<font color=#ff0000>ù</font>';//hLhLµÄ¢én[g         D
		emoji['e32a'] ='<font color=#ffa500>ùô</font>';//³Êü«ÌÐæ±
		emoji['e32b'] ='<font color=#000080>ù¶</font>';//W[Y                       D
		emoji['e32c'] ='<font color=#ff0000>ù¼</font>';//n[gÂ«[               D
		emoji['e32d'] ='<font color=#00ff00>ùÚ</font>';//zÂîó                       D
		emoji['e32e'] ='<font color=#000000>ùá</font>';//¶E¼ûüîó                 D
		emoji['e32f'] ='<font color=#000000>ùâ</font>';//ãº¼ûüîó                 D
		emoji['e330'] ='<font color=#0000ff>ùä</font>';//rg                           D
		emoji['e331'] ='<font color=#00ff00>ùë</font>';//ot                           D
		emoji['e332'] ='<font color=#a52a2a>ùó</font>';//©½ÂÞè                     D
		emoji['e333'] ='<font color=#ffa500>ùø</font>';//¤ÁµÁµilRj
		emoji['e334'] ='<font color=#ffa500>ùø</font>';//¤ÁµÁµ                     D
		emoji['e335'] ='<font color=#000000>ùw</font>';//C[ACR
		emoji['e336'] ='<font color=#00ff00>ùæ</font>';//n[u
		emoji['e337'] ='<font color=#ffa500>øô</font>';//O[                           D
		emoji['e338'] ='<font color=#000000>ù</font>';//                             D
		emoji['e339'] ='<font color=#ffa500>øö</font>';//LN^[ièj     
		emoji['e33a'] ='<font color=#ffa500>øö</font>';//LN^[iÎj
		emoji['e33b'] ='<font color=#00ff00>ù</font>';//LN^[iµåñÚèj
		emoji['e33c'] ='<font color=#ff0000>ùÉ</font>';//LN^[i©í¢­{éj
	if (col) return(emoji[code].substring(20,21));
// 	if (col) return("a");
	else if (bgcol)
	{
		var bg = bgcol.toLowerCase();
		var fcol = emoji[code].substring(12,19);
		if (bg.search(fcol) == -1)
		{
			return(emoji[code].substring(20,21));
// 			return("b");
		}
		else
		{
			return(emoji[code]);
// 			return("c");
		}
	}
	else return(emoji[code].substring(20,21));
// 	else return("d");
}
