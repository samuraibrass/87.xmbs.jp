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

	emoji['e63e'] = "<font color=#ff0000>��</font>";
	emoji['e63f'] = "<font color=#0000ff>��</font>";
	emoji['e640'] = "<font color=#0000ff>��</font>";
	emoji['e641'] = "<font color=#0000ff>��</font>";
	emoji['e642'] = "<font color=#ffa500>��</font>";
	emoji['e643'] = "<font color=#ff0000>��</font>";
	emoji['e644'] = "<font color=#0000ff>��</font>";
	emoji['e645'] = "<font color=#0000ff>��</font>";
	emoji['e646'] = "<font color=#ff0000>��</font>";
	emoji['e647'] = "<font color=#ffa500>��</font>";
	emoji['e648'] = "<font color=#00ff00>��</font>";
	emoji['e649'] = "<font color=#0000ff>��</font>";
	emoji['e64a'] = "<font color=#ff0000>��</font>";
	emoji['e64b'] = "<font color=#ffa500>��</font>";
	emoji['e64c'] = "<font color=#00ff00>��</font>";
	emoji['e64d'] = "<font color=#0000ff>��</font>";
	emoji['e64e'] = "<font color=#ff0000>��</font>";
	emoji['e64f'] = "<font color=#ffa500>��</font>";
	emoji['e650'] = "<font color=#00ff00>��</font>";
	emoji['e651'] = "<font color=#0000ff>��</font>";
	emoji['e652'] = "<font color=#ff00ff>��</font>";
	emoji['e653'] = "<font color=#000000>��</font>";
	emoji['e654'] = "<font color=#0000ff>��</font>";
	emoji['e655'] = "<font color=#00ff00>��</font>";
	emoji['e656'] = "<font color=#000000>��</font>";
	emoji['e657'] = "<font color=#0000ff>��</font>";
	emoji['e658'] = "<font color=#ffa500>��</font>";
	emoji['e659'] = "<font color=#000000>��</font>";
	emoji['e65a'] = "<font color=#ff00ff>��</font>";
	emoji['e65b'] = "<font color=#00ff00>��</font>";
	emoji['e65c'] = "<font color=#ffa500>��</font>";
	emoji['e65d'] = "<font color=#0000ff>��</font>";
	emoji['e65e'] = "<font color=#000000>��</font>";
	emoji['e65f'] = "<font color=#00ff00>��</font>";
	emoji['e660'] = "<font color=#ff0000>��</font>";
	emoji['e661'] = "<font color=#0000ff>��</font>";
	emoji['e662'] = "<font color=#0000ff>��</font>";
	emoji['e663'] = "<font color=#ff0000>��</font>";
	emoji['e664'] = "<font color=#0000ff>��</font>";
	emoji['e665'] = "<font color=#ff0000>��</font>";
	emoji['e666'] = "<font color=#000000>��</font>";
	emoji['e667'] = "<font color=#ff00ff>��</font>";
	emoji['e668'] = "<font color=#ff0000>��</font>";
	emoji['e669'] = "<font color=#00ff00>��</font>";
	emoji['e66a'] = "<font color=#0000ff>��</font>";
	emoji['e66b'] = "<font color=#ff00ff>��</font>";
	emoji['e66c'] = "<font color=#0000ff>��</font>";
	emoji['e66d'] = "<font color=#000000>��</font>";
	emoji['e66e'] = "<font color=#000000>��</font>";
	emoji['e66f'] = "<font color=#000000>��</font>";
	emoji['e670'] = "<font color=#00ff00>��</font>";
	emoji['e671'] = "<font color=#ff00ff>��</font>";
	emoji['e672'] = "<font color=#ffa500>��</font>";
	emoji['e673'] = "<font color=#ffa500>��</font>";
	emoji['e674'] = "<font color=#ff0000>��</font>";
	emoji['e675'] = "<font color=#0000ff>��</font>";
	emoji['e676'] = "<font color=#000000>��</font>";
	emoji['e677'] = "<font color=#000000>��</font>";
	emoji['e678'] = "<font color=#000000>��</font>";
	emoji['e679'] = "<font color=#ffa500>��</font>";
	emoji['e67a'] = "<font color=#0000ff>��</font>";
	emoji['e67b'] = "<font color=#ff00ff>��</font>";
	emoji['e67c'] = "<font color=#000000>��</font>";
	emoji['e67d'] = "<font color=#ff0000>��</font>";
	emoji['e67e'] = "<font color=#000000>��</font>";
	emoji['e67f'] = "<font color=#ffa500>��</font>";
	emoji['e680'] = "<font color=#ff0000>��</font>";
	emoji['e681'] = "<font color=#000000>��</font>";
	emoji['e682'] = "<font color=#ff0000>��</font>";
	emoji['e683'] = "<font color=#ffa500>��</font>";
	emoji['e684'] = "<font color=#ff0000>��</font>";
	emoji['e685'] = "<font color=#ff0000>��</font>";
	emoji['e686'] = "<font color=#ff0000>��</font>";
	emoji['e687'] = "<font color=#000000>��</font>";
	emoji['e688'] = "<font color=#000000>��</font>";
	emoji['e689'] = "<font color=#ffa500>��</font>";
	emoji['e68a'] = "<font color=#0000ff>��</font>";
	emoji['e68b'] = "<font color=#000000>��</font>";
	emoji['e68c'] = "<font color=#0000ff>��</font>";
	emoji['e68d'] = "<font color=#ff0000>��</font>";
	emoji['e68e'] = "<font color=#000000>��</font>";
	emoji['e68f'] = "<font color=#ff0000>��</font>";
	emoji['e690'] = "<font color=#000000>��</font>";
	emoji['e691'] = "<font color=#000000>��</font>";
	emoji['e692'] = "<font color=#ffa500>��</font>";
	emoji['e693'] = "<font color=#ffa500>��</font>";
	emoji['e694'] = "<font color=#ffa500>��</font>";
	emoji['e695'] = "<font color=#ffa500>��</font>";
	emoji['e696'] = "<font color=#000000>��</font>";
	emoji['e697'] = "<font color=#000000>��</font>";
	emoji['e698'] = "<font color=#ffa500>��</font>";
	emoji['e699'] = "<font color=#000000>��</font>";
	emoji['e69a'] = "<font color=#000000>��</font>";
	emoji['e69b'] = "<font color=#0000ff>��</font>";
	emoji['e69c'] = "<font color=#000000>�@</font>";
	emoji['e69d'] = "<font color=#000000>�A</font>";
	emoji['e69e'] = "<font color=#000000>�B</font>";
	emoji['e69f'] = "<font color=#000000>�C</font>";
	emoji['e6a0'] = "<font color=#000000>�D</font>";
	emoji['e6a1'] = "<font color=#ffa500>�E</font>";
	emoji['e6a2'] = "<font color=#ffa500>�F</font>";
	emoji['e6a3'] = "<font color=#0000ff>�G</font>";
	emoji['e6a4'] = "<font color=#00ff00>�H</font>";
	emoji['e6a5'] = "<font color=#000000>�I</font>";
	emoji['e6ce'] = "<font color=#000000>�r</font>";
	emoji['e6cf'] = "<font color=#000000>�s</font>";
	emoji['e6d0'] = "<font color=#000000>�t</font>";
	emoji['e6d1'] = "<font color=#ffa500>�u</font>";
	emoji['e6d2'] = "<font color=#ffa500>�v</font>";
	emoji['e6d3'] = "<font color=#000000>�w</font>";
	emoji['e6d4'] = "<font color=#000000>�x</font>";
	emoji['e6d5'] = "<font color=#000000>�y</font>";
	emoji['e6d6'] = "<font color=#ff0000>�z</font>";
	emoji['e6d7'] = "<font color=#ff0000>�{</font>";
	emoji['e6d8'] = "<font color=#ff0000>�|</font>";
	emoji['e6d9'] = "<font color=#ff0000>�}</font>";
	emoji['e6da'] = "<font color=#ff0000>�~</font>";
	emoji['e6db'] = "<font color=#ff0000>��</font>";
	emoji['e6dc'] = "<font color=#0000ff>��</font>";
	emoji['e6dd'] = "<font color=#ff0000>��</font>";
	emoji['e6de'] = "<font color=#ff0000>��</font>";
	emoji['e6df'] = "<font color=#000000>��</font>";
	emoji['e6e0'] = "<font color=#000000>��</font>";
	emoji['e6e1'] = "<font color=#000000>��</font>";
	emoji['e6e2'] = "<font color=#000000>��</font>";
	emoji['e6e3'] = "<font color=#000000>��</font>";
	emoji['e6e4'] = "<font color=#000000>��</font>";
	emoji['e6e5'] = "<font color=#000000>��</font>";
	emoji['e6e6'] = "<font color=#000000>��</font>";
	emoji['e6e7'] = "<font color=#000000>��</font>";
	emoji['e6e8'] = "<font color=#000000>��</font>";
	emoji['e6e9'] = "<font color=#000000>��</font>";
	emoji['e6ea'] = "<font color=#000000>��</font>";
	emoji['e6eb'] = "<font color=#000000>��</font>";
	emoji['e70b'] = "<font color=#ff0000>��</font>";
	emoji['e6ec'] = "<font color=#ff0000>��</font>";
	emoji['e6ed'] = "<font color=#ff0000>��</font>";
	emoji['e6ee'] = "<font color=#ff0000>��</font>";
	emoji['e6ef'] = "<font color=#ff0000>��</font>";
	emoji['e6f0'] = "<font color=#ff00ff>��</font>";
	emoji['e6f1'] = "<font color=#ff0000>��</font>";
	emoji['e6f2'] = "<font color=#0000ff>��</font>";
	emoji['e6f3'] = "<font color=#00ff00>��</font>";
	emoji['e6f4'] = "<font color=#0000ff>��</font>";
	emoji['e6f5'] = "<font color=#ff0000>��</font>";
	emoji['e6f6'] = "<font color=#ff0000>��</font>";
	emoji['e6f7'] = "<font color=#ff0000>��</font>";
	emoji['e6f8'] = "<font color=#ff00ff>��</font>";
	emoji['e6f9'] = "<font color=#ff0000>��</font>";
	emoji['e6fa'] = "<font color=#ffa500>��</font>";
	emoji['e6fb'] = "<font color=#ffa500>��</font>";
	emoji['e6fc'] = "<font color=#000000>��</font>";
	emoji['e6fd'] = "<font color=#ff0000>��</font>";
	emoji['e6fe'] = "<font color=#000000>��</font>";
	emoji['e6ff'] = "<font color=#ff0000>��</font>";
	emoji['e700'] = "<font color=#0000ff>��</font>";
	emoji['e701'] = "<font color=#0000ff>��</font>";
	emoji['e702'] = "<font color=#ff0000>��</font>";
	emoji['e703'] = "<font color=#ff00ff>��</font>";
	emoji['e704'] = "<font color=#ff0000>��</font>";
	emoji['e705'] = "<font color=#ff0000>��</font>";
	emoji['e706'] = "<font color=#000000>��</font>";
	emoji['e707'] = "<font color=#000000>��</font>";
	emoji['e708'] = "<font color=#000000>��</font>";
	emoji['e709'] = "<font color=#000000>��</font>";
	emoji['e70a'] = "<font color=#000000>��</font>";
	emoji['e6ac'] = "<font color=#000000>�P</font>";
	emoji['e6ad'] = "<font color=#000000>�Q</font>";
	emoji['e6ae'] = "<font color=#000000>�R</font>";
	emoji['e6b1'] = "<font color=#000000>�U</font>";
	emoji['e6b2'] = "<font color=#000000>�V</font>";
	emoji['e6b3'] = "<font color=#000000>�W</font>";
	emoji['e6b7'] = "<font color=#000000>�[</font>";
	emoji['e6b8'] = "<font color=#000000>�\</font>";
	emoji['e6b9'] = "<font color=#000000>�]</font>";
	emoji['e6ba'] = "<font color=#000000>�^</font>";
	emoji['e70c'] = "<font color=#ffa500>��</font>";
	emoji['e70d'] = "<font color=#ffa500>��</font>";
	emoji['e70e'] = "<font color=#0000ff>��</font>";
	emoji['e70f'] = "<font color=#000000>��</font>";
	emoji['e710'] = "<font color=#ff0000>��</font>";
	emoji['e711'] = "<font color=#000080>��</font>";
	emoji['e712'] = "<font color=#0000ff>��</font>";
	emoji['e713'] = "<font color=#ffa500>��</font>";
	emoji['e714'] = "<font color=#a52a2a>��</font>";
	emoji['e715'] = "<font color=#a52a2a>��</font>";
	emoji['e716'] = "<font color=#000000>��</font>";
	emoji['e717'] = "<font color=#ff0000>��</font>";
	emoji['e718'] = "<font color=#000000>��</font>";
	emoji['e719'] = "<font color=#00ff00>��</font>";
	emoji['e71a'] = "<font color=#ffa500>��</font>";
	emoji['e71b'] = "<font color=#ff00ff>��</font>";
	emoji['e71c'] = "<font color=#000000>��</font>";
	emoji['e71d'] = "<font color=#000000>��</font>";
	emoji['e71e'] = "<font color=#00ff00>��</font>";
	emoji['e71f'] = "<font color=#000000>��</font>";
	emoji['e720'] = "<font color=#00ff00>��</font>";
	emoji['e721'] = "<font color=#ff00ff>��</font>";
	emoji['e722'] = "<font color=#0000ff>��</font>";
	emoji['e723'] = "<font color=#0000ff>��</font>";
	emoji['e724'] = "<font color=#ff0000>��</font>";
	emoji['e725'] = "<font color=#a52a2a>��</font>";
	emoji['e726'] = "<font color=#ff00ff>��</font>";
	emoji['e727'] = "<font color=#ffa500>��</font>";
	emoji['e728'] = "<font color=#ff0000>��</font>";
	emoji['e729'] = "<font color=#ff00ff>��</font>";
	emoji['e72a'] = "<font color=#ff00ff>��</font>";
	emoji['e72b'] = "<font color=#000000>��</font>";
	emoji['e72c'] = "<font color=#ffa500>��</font>";
	emoji['e72d'] = "<font color=#0000ff>��</font>";
	emoji['e72e'] = "<font color=#0000ff>��</font>";
	emoji['e72f'] = "<font color=#ff0000>��</font>";
	emoji['e730'] = "<font color=#0000ff>��</font>";
	emoji['e731'] = "<font color=#000000>��</font>";
	emoji['e732'] = "<font color=#000000>��</font>";
	emoji['e733'] = "<font color=#000000>��</font>";
	emoji['e734'] = "<font color=#ff0000>��</font>";
	emoji['e735'] = "<font color=#00ff00>��</font>";
	emoji['e736'] = "<font color=#000000>��</font>";
	emoji['e737'] = "<font color=#ffa500>��</font>";
	emoji['e738'] = "<font color=#ff0000>��</font>";
	emoji['e739'] = "<font color=#0000ff>��</font>";
	emoji['e73a'] = "<font color=#ff0000>��</font>";
	emoji['e73b'] = "<font color=#ff0000>��</font>";
	emoji['e73c'] = "<font color=#000000>��</font>";
	emoji['e73d'] = "<font color=#000000>��</font>";
	emoji['e73e'] = "<font color=#00ff00>��</font>";
	emoji['e73f'] = "<font color=#0000ff>��</font>";
	emoji['e740'] = "<font color=#0000ff>��</font>";
	emoji['e741'] = "<font color=#00ff00>��</font>";
	emoji['e742'] = "<font color=#ff0000>��</font>";
	emoji['e743'] = "<font color=#ff0000>��</font>";
	emoji['e744'] = "<font color=#ffa500>��</font>";
	emoji['e745'] = "<font color=#ff0000>��</font>";
	emoji['e746'] = "<font color=#00ff00>��</font>";
	emoji['e747'] = "<font color=#ff0000>��</font>";
	emoji['e748'] = "<font color=#ff00ff>��</font>";
	emoji['e749'] = "<font color=#000000>��</font>";
	emoji['e74a'] = "<font color=#ff0000>��</font>";
	emoji['e74b'] = "<font color=#a52a2a>��</font>";
	emoji['e74c'] = "<font color=#ffa500>��</font>";
	emoji['e74d'] = "<font color=#a52a2a>��</font>";
	emoji['e74e'] = "<font color=#a52a2a>��</font>";
	emoji['e74f'] = "<font color=#ffa500>��</font>";
	emoji['e750'] = "<font color=#000080>��</font>";
	emoji['e751'] = "<font color=#0000ff>��</font>";
	emoji['e752'] = "<font color=#ffa500>��</font>";
	emoji['e753'] = "<font color=#ffa500>��</font>";
	emoji['e754'] = "<font color=#a52a2a>��</font>";
	emoji['e755'] = "<font color=#ffa500>��</font>";
	emoji['e756'] = "<font color=#800080>��</font>";
	emoji['e757'] = "<font color=#800080>��</font>";

	
	emoji['e481'] ='<font color=#ffa500>��</font>';//�I                             D
	emoji['e482'] ='<font color=#ff0000>��</font>';//�I                             D
	emoji['e483'] ='<font color=#ff00ff>��</font>';//�H
	emoji['e52c'] ='<font color=#000000>��</font>';//�H
	emoji['e52d'] ='<font color=#000000>��</font>';//�������O�p�P
	emoji['e52e'] ='<font color=#000000>��</font>';//�E�����O�p�P
	emoji['e52f'] ='<font color=#000000>��</font>';//�������O�p�Q
	emoji['e530'] ='<font color=#000000>��</font>';//�E�����O�p�Q
	emoji['e531'] ='<font color=#ffa500>��</font>';//���l�p�P
	emoji['e532'] ='<font color=#00cc00>��</font>';//���l�p�Q
	emoji['e533'] ='<font color=#000000>i</font>';//�C���t�H���[�V�����V���{��
	emoji['e4c1'] ='<font color=#800080>��</font>';//���C���O���X                   D
	emoji['e511'] ='<font color=#000000>�Q</font>';//�X�s�[�J
	emoji['e579'] ='<font color=#a52a2a>��</font>';//�h��                           D
	emoji['e486'] ='<font color=#000000>�C</font>';//���P                           D
	emoji['e487'] ='<font color=#ffa500>��</font>';//���Ȃ���                       D
	emoji['e534'] ='<font color=#ffa500>��</font>';//���l�p�P
	emoji['e535'] ='<font color=#00cc00>��</font>';//���l�p�Q
	emoji['e536'] ='<font color=#ffa500>��</font>';//���H�`�P
	emoji['e537'] ='<font color=#0033ff>��</font>';//���H�`�Q
	emoji['e538'] ='<font color=#ffa500>��</font>';//��l�p�P
	emoji['e539'] ='<font color=#00cc00>��</font>';//��l�p�P
	emoji['e53a'] ='<font color=#ff0000>��</font>';//���ۂP
	emoji['e53b'] ='<font color=#0000ff>��</font>';//����2
	emoji['e57a'] ='<font color=#000000>��</font>';//�r���v                         D
	emoji['e53c'] ='<font color=#000000>�{</font>';//�v���X
	emoji['e53d'] ='<font color=#000000>�|</font>';//�}�C�i�X
	emoji['e53e'] ='<font color=#000000>��</font>';//���P
	emoji['e53f'] ='<font color=#000000>��</font>';//����P
	emoji['e540'] ='<font color=#000000>��</font>';//�����P
	emoji['e541'] ='<font color=#ff0000>��</font>';//�ۂɎ΂ߐ�
	emoji['e542'] ='<font color=#ff00ff>��</font>';//���O�p�P
	emoji['e543'] ='<font color=#ff00ff>��</font>';//��O�p�P
	emoji['e544'] ='<font color=#ff00ff>��</font>';//���O�p�Q
	emoji['e545'] ='<font color=#ff00ff>��</font>';//��O�p�Q
	emoji['e546'] ='<font color=#ffa500>��</font>';//��H�`�P
	emoji['e547'] ='<font color=#0033ff>��</font>';//��H�`�Q
	emoji['e548'] ='<font color=#ffa500>��</font>';//����l�p�P
	emoji['e549'] ='<font color=#00cc00>��</font>';//����l�p�Q
	emoji['e54a'] ='<font color=#ff0000>��</font>';//��ۂP
	emoji['e54b'] ='<font color=#0000ff>��</font>';//��ۂQ
	emoji['e54c'] ='<font color=#000000>��</font>';//����Q
	emoji['e54d'] ='<font color=#000000>��</font>';//�����Q
	emoji['e488'] ='<font color=#ff0000>��</font>';//���z                           D
	emoji['e4ba'] ='<font color=#000000>��</font>';//�싅�{�[��                     D
	emoji['e594'] ='<font color=#000000>�^</font>';//���v                           D
	emoji['e489'] ='<font color=#000000>�C</font>';//���Q�i����j
	emoji['e512'] ='<font color=#ffa500>��</font>';//�x��                           D
	emoji['e560'] ='<font color=#000000>��</font>';//�v�b�V���s���i��e�j
	emoji['e4fa'] ='<font color=#ff00ff>��</font>';//����
	emoji['e595'] ='<font color=#ff0000>��</font>';//�n�[�g                         D
	emoji['e4c2'] ='<font color=#ff00ff>��</font>';//�}�e�B�[�j�i�J�N�e���O���X�j   D
	emoji['e513'] ='<font color=#00ff00>��</font>';//�l�t                         D
	emoji['e54e'] ='<font color=#000000>��</font>';//�g���[�h�}�[�N�iTM�j           D
	emoji['e54f'] ='<font color=#000000>�~</font>';//������
	emoji['e561'] ='<font color=#ffa500>��</font>';//�����P                         D
	emoji['e57b'] ='<font color=#000000>��</font>';//�����v�P
	emoji['e47c'] ='<font color=#000000>��</font>';//�����v�Q                       D
	emoji['e562'] ='<font color=#0000ff>��</font>';//�t���b�s�[�f�B�X�N�P
	emoji['e48a'] ='<font color=#ff00ff>��</font>';//��̌���
	emoji['e550'] ='<font color=#000000>�~</font>';//�o�c�P
	emoji['e551'] ='<font color=#000000>�~</font>';//�o�c�Q
	emoji['e552'] ='<font color=#000000>��</font>';//�E���P
	emoji['e553'] ='<font color=#000000>��</font>';//�����P 
	emoji['e4c3'] ='<font color=#ffa500>��</font>';//�}�O�J�b�v                     D
	emoji['e554'] ='<font color=#000000>��</font>';//����
	emoji['e563'] ='<font color=#ffa500>��</font>';//�J�����_�[
	emoji['e4fb'] ='<font color=#ff00ff>��</font>';//�X�}�C���t�F�C�X
	emoji['e48b'] ='<font color=#ffff00>��</font>';//���Q
	emoji['e555'] ='<font color=#000000>��</font>';//�E���Q                       D
	emoji['e556'] ='<font color=#000000>�I</font>';//�����Q                       D
	emoji['e514'] ='<font color=#ff00ff>��</font>';//�W���G���[                     D
	emoji['e557'] ='<font color=#000000>�R</font>';//�`�F�b�N�}�[�N�P
	emoji['e4df'] ='<font color=#ffa500>�E</font>';//���i�v�[�h���j
	emoji['e468'] ='<font color=#ffcc00>��</font>';//���R
	emoji['e46c'] ='<font color=#ffa500>��</font>';//�X�p�[�N
	emoji['e476'] ='<font color=#ffa500>��</font>';//�d��                           D
	emoji['e4e0'] ='<font color=#ffa500>��</font>';//��                             D
	emoji['e58f'] ='<font color=#ffa500>��</font>';//�t�H���_�P�i�j
	emoji['e4fc'] ='<font color=#ff00ff>��</font>';//��P
	emoji['e558'] ='<font color=#000000>��</font>';//�R�s�[���C�g�}�[�N             D
	emoji['e559'] ='<font color=#000000>��</font>';//���W�X�^�[�h�}�[�N             D
	emoji['e49c'] ='<font color=#ff0000>��</font>';//�u���[�t�P�[�X(�n���h�o�b�N�j
	emoji['e590'] ='<font color=#ffa500>��</font>';//�t�H���_�Q�i�J�j
	emoji['e596'] ='<font color=#000000>��</font>';//�d�b�P�i�v�b�V���z���j         D
	emoji['e4fd'] ='<font color=#000000>�Q</font>';//�����o���R�����g
	emoji['e57c'] ='<font color=#ffa500>��</font>';//�N���W�b�g�J�[�h
	emoji['e55a'] ='<font color=#ff0000>��</font>';//��O�p�R
	emoji['e55b'] ='<font color=#ff0000>��</font>';//���O�p�R
	emoji['e573'] ='<font color=#ff0000>��</font>';//�t�r�`
	emoji['e49d'] ='<font color=#ffa500>��</font>';//�m�[�g�R
	emoji['e564'] ='<font color=#ffa500>��</font>';//�N���b�v�{�[�h
	emoji['e597'] ='<font color=#00ff00>��</font>';//�J�b�v                         D
	emoji['e515'] ='<font color=#000000>��</font>';//�J����                         D
	emoji['e48c'] ='<font color=#0000ff>��</font>';//�J                             D
	emoji['e4bb'] ='<font color=#000000>�Q</font>';//�t�b�g�{�[��
	emoji['e565'] ='<font color=#ffa500>��</font>';//�{�P
	emoji['e484'] ='<font color=#ff0000>��</font>';//��������֎~
	emoji['e46a'] ='<font color=#000000>��</font>';//�M��                           D
	emoji['e566'] ='<font color=#ffa500>��</font>';//�{�Q
	emoji['e567'] ='<font color=#ffa500>��</font>';//�{�R
	emoji['e568'] ='<font color=#ffa500>��</font>';//�{�S
	emoji['e569'] ='<font color=#ffa500>��</font>';//�����Q
	emoji['e516'] ='<font color=#0000ff>��</font>';//�͂���                         D
	emoji['e56a'] ='<font color=#ffa500>��</font>';//�Ђ߂���J�����_�[
	emoji['e49e'] ='<font color=#ffa500>��</font>';//�`�P�b�g�E�L�b�v               D
	emoji['e48d'] ='<font color=#0000ff>��</font>';//������                         D
	emoji['e521'] ='<font color=#000000>�w</font>';//����
	emoji['e57d'] ='<font color=#ff0000>�z</font>';//���؎�iCHECK�j                D
	emoji['e517'] ='<font color=#000000>��</font>';//�r�f�I�J����                   D
	emoji['e57e'] ='<font color=#000000>��</font>';//�n���f�B�J��
	emoji['e4ab'] ='<font color=#ff0000>��</font>';//��                             D
	emoji['e4e4'] ='<font color=#ff0000>��</font>';//��                             D
	emoji['e57f'] ='<font color=#0000ff>��</font>';//�i�C�t
	emoji['e580'] ='<font color=#000000>��</font>';//�r�f�I�e�[�v
	emoji['e4fe'] ='<font color=#000000>��</font>';//�߂���                         D
	emoji['e55c'] ='<font color=#000000>��</font>';//�����P
	emoji['e55d'] ='<font color=#ff0000>�~</font>';//�����Q                     D
	emoji['e518'] ='<font color=#0000ff>��</font>';//�ނ��߂���                     D
	emoji['e519'] ='<font color=#ff0000>�}</font>';//��                             D
	emoji['e56b'] ='<font color=#ffa500>��</font>';//�m�[�g�P
	emoji['e49f'] ='<font color=#ffa500>��</font>';//�m�[�g�Q�i�J�j                 D
	emoji['e581'] ='<font color=#000000>�Q</font>';//�{���g���i�b�g
	emoji['e51a'] ='<font color=#ff0000>��</font>';//����                           D
	emoji['e4b1'] ='<font color=#000000>��</font>';//��                             D
	emoji['e582'] ='<font color=#0000ff>��</font>';//�t���b�s�[�Q
	emoji['e574'] ='<font color=#ff0000>��</font>';//�`���[�g�i�_�O���t�j
	emoji['e575'] ='<font color=#ff0000>��</font>';//�O���t�P�i�܂���O���t�j
	emoji['e51b'] ='<font color=#ff0000>��</font>';//���[���{�b�N�X
	emoji['e583'] ='<font color=#ffa500>��</font>';//�����d��
	emoji['e56c'] ='<font color=#ffa500>��</font>';//Roldex
	emoji['e55e'] ='<font color=#000000>�Q</font>';//�`�F�b�N�}�[�N�Q
	emoji['e4ce'] ='<font color=#ff0000>��</font>';//�͂���                         D
	emoji['e4e1'] ='<font color=#ffa500>�E</font>';//��                           D
	emoji['e584'] ='<font color=#000000>�Q</font>';//�d�r
	emoji['e55f'] ='<font color=#000000>��</font>';//�X�N���[��
	emoji['e56d'] ='<font color=#000000>��</font>';//���т傤
	emoji['e51c'] ='<font color=#ff0000>�}</font>';//���O
	emoji['e585'] ='<font color=#a52a2a>��</font>';//�h���D
	emoji['e4ff'] ='<font color=#000000>��</font>';//�w�����m�F��
	emoji['e500'] ='<font color=#000000>��</font>';//�w�����m�F�E
	emoji['e56e'] ='<font color=#ffa500>��</font>';//�䒠
	emoji['e4a0'] ='<font color=#0000ff>��</font>';//�N���b�v                       D
	emoji['e4cf'] ='<font color=#ff0000>��</font>';//�v���[���g                     D
	emoji['e51d'] ='<font color=#ffa500>��</font>';//���D
	emoji['e4ac'] ='<font color=#000000>��</font>';//�S�n���P                       D
	emoji['e56f'] ='<font color=#ffa500>��</font>';//�����{
	emoji['e4b2'] ='<font color=#00ff00>��</font>';//�g���b�N
	emoji['e4a1'] ='<font color=#00ff00>��</font>';//�G���s�c                       D
	emoji['e586'] ='<font color=#000000>�Q</font>';//���S�i�o�c�b�Ёj
	emoji['e591'] ='<font color=#000000>�s</font>';//�����Q
	emoji['e587'] ='<font color=#000000>��</font>';//�����`                         D
	emoji['e592'] ='<font color=#000000>�w</font>';//���M�a�n�w
	emoji['e593'] ='<font color=#000000>�w</font>';//��M�a�n�w
	emoji['e51e'] ='<font color=#000000>��</font>';//�d�b�Q
	emoji['e4ad'] ='<font color=#0000ff>��</font>';//�H��E����                     D
	emoji['e570'] ='<font color=#000000>�Q</font>';//��K�P
	emoji['e4a2'] ='<font color=#000000>�Q</font>';//��K�Q
	emoji['e576'] ='<font color=#ff0000>��</font>';//�O���t�Q
	emoji['e4c4'] ='<font color=#000000>��</font>';//�H���Q
	emoji['e588'] ='<font color=#000000>��</font>';//�d�b�R                         D
	emoji['e589'] ='<font color=#000000>�Q</font>';//�R���Z���g
	emoji['e501'] ='<font color=#000000>��</font>';//�Ƒ�
	emoji['e58a'] ='<font color=#000000>��</font>';//�����N
	emoji['e51f'] ='<font color=#ff0000>��</font>';//�p�b�P�[�W
	emoji['e520'] ='<font color=#000000>�t</font>';//�e�`�w
	emoji['e48e'] ='<font color=#ff0000>��</font>';//�Ƃ��ǂ��܂�
	emoji['e4b3'] ='<font color=#0000ff>��</font>';//��s�@                         D
	emoji['e4b4'] ='<font color=#0000ff>�G</font>';//�{�[�g(�D�j                    D
	emoji['e4c8'] ='<font color=#000000>��</font>';//�T�C�R��
	emoji['e58b'] ='<font color=#ffa500>��</font>';//�V��
	emoji['e4b5'] ='<font color=#00ff00>��</font>';//�d��                           D
	emoji['e58c'] ='<font color=#000000>�Q</font>';//�S���u�����N
	emoji['e58d'] ='<font color=#000000>_</font>';//�����u�����N
	emoji['e58e'] ='<font color=#000000>_</font>';//4���̂P�u�����N
	emoji['e47d'] ='<font color=#000000>��</font>';//�i��                           D
	emoji['e47e'] ='<font color=#ff0000>��</font>';//�։�                           D
	emoji['e47f'] ='<font color=#0000ff>��</font>';//�Ԉ֎q                         D
	emoji['e480'] ='<font color=#ffa500>��</font>';//��t�}�[�N
	emoji['e522'] ='<font color=#000000>��</font>';//�l�p�����P                     D
	emoji['e523'] ='<font color=#000000>��</font>';//�l�p����2                      D
	emoji['e524'] ='<font color=#000000>��</font>';//�l�p����3                      D
	emoji['e525'] ='<font color=#000000>��</font>';//�l�p����4                      D
	emoji['e526'] ='<font color=#000000>��</font>';//�l�p����5                      D
	emoji['e527'] ='<font color=#000000>��</font>';//�l�p����6                      D
	emoji['e528'] ='<font color=#000000>��</font>';//�l�p����7                      D
	emoji['e529'] ='<font color=#000000>��</font>';//�l�p����8                      D
	emoji['e52a'] ='<font color=#000000>��</font>';//�l�p����9                      D
	emoji['e52b'] ='<font color=#000000>����</font>';//�l�p����10
	emoji['e469'] ='<font color=#ff0000>��</font>';//�䕗                           D
	emoji['e485'] ='<font color=#0000ff>��</font>';//�䂫�����                     D
	emoji['e48f'] ='<font color=#ff0000>��</font>';//�����i���Ђ����j             D
	emoji['e490'] ='<font color=#ffa500>��</font>';//�����i���������j               D
	emoji['e491'] ='<font color=#00ff00>��</font>';//�����i�o�q���j                 D
	emoji['e492'] ='<font color=#0000ff>��</font>';//�����i���ɍ��j                 D
	emoji['e493'] ='<font color=#ff0000>��</font>';//�����i�������j                 D
	emoji['e494'] ='<font color=#ffa500>��</font>';//�����i���Ƃߍ��j               D
	emoji['e495'] ='<font color=#00ff00>��</font>';//�����i�V�����j                 D
	emoji['e496'] ='<font color=#0000ff>��</font>';//�����i��������j               D
	emoji['e497'] ='<font color=#ff0000>��</font>';//�����i���č��j                 D
	emoji['e498'] ='<font color=#ffa500>��</font>';//�����i�€���j                 D
	emoji['e499'] ='<font color=#00ff00>��</font>';//�����i���r���j                 D
	emoji['e49a'] ='<font color=#0000ff>��</font>';//�����i�������j                 D
	emoji['e49b'] ='<font color=#000000>�Q</font>';//�����i�ւт������j
	emoji['e4a3'] ='<font color=#ff0000>��</font>';//�`�s�l                         D
	emoji['e4a4'] ='<font color=#0000ff>��</font>';//�Q�SHOURS�i�R���r�j)           D
	emoji['e4a5'] ='<font color=#000000>��</font>';//�g�C��                         D
	emoji['e4a6'] ='<font color=#0000ff>��</font>';//�p�[�L���O                     D
	emoji['e4a7'] ='<font color=#ff0000>��</font>';//�o�X��
	emoji['e4a8'] ='<font color=#ff0000>��</font>';//���Łi�ʒu���ϰ��j
	emoji['e4a9'] ='<font color=#0000ff>��</font>';//�`�i������}�[�N�j
	emoji['e4aa'] ='<font color=#ff00ff>��</font>';//��s                           D
	emoji['e571'] ='<font color=#ff00ff>��</font>';//�K�X�X�^���h                   D
	emoji['e572'] ='<font color=#000000>�Q</font>';//�n�}
	emoji['e4ae'] ='<font color=#000000>��</font>';//���]��                         D
	emoji['e4af'] ='<font color=#ff0000>��</font>';//�o�X                           D
	emoji['e4b0'] ='<font color=#0000ff>��</font>';//�V����                         D
	emoji['e46b'] ='<font color=#000000>��</font>';//�}���\��                       D
	emoji['e4b6'] ='<font color=#000000>��</font>';//�T�b�J�[                       D
	emoji['e4b7'] ='<font color=#00ff00>��</font>';//�e�j�X                         D
	emoji['e4b8'] ='<font color=#0000ff>��</font>';//�X�m�[�{�[�h                   D
	emoji['e4b9'] ='<font color=#000000>��</font>';//�`�F�b�J�[�t���O�i���[�^�[�X   D
	emoji['e46d'] ='<font color=#ff0000>��</font>';//�V���n
	emoji['e4bc'] ='<font color=#ff0000>��</font>';//����                           D
	emoji['e4bd'] ='<font color=#a52a2a>��</font>';//�������i�Ԃ��傤����j
	emoji['e4be'] ='<font color=#000000>�P</font>';//�f��i�����񂱁j               D
	emoji['e4bf'] ='<font color=#000000>�W</font>';//��̋�
	emoji['e4c0'] ='<font color=#000000>�Q</font>';//�����^���[
	emoji['e46e'] ='<font color=#000000>�Q</font>';//�X���b�g�i�V�V�V�j
	emoji['e46f'] ='<font color=#000000>�B</font>';//�����ʁi�A�^���̂����ʁj
	emoji['e4c5'] ='<font color=#ff0000>��</font>';//���I�|��
	emoji['e4c6'] ='<font color=#000000>��</font>';//�Q�[���̃R���g���[��           D
	emoji['e4c7'] ='<font color=#a52a2a>��</font>';//�܋�                           D
	emoji['e4c9'] ='<font color=#00ff00>�H</font>';//�N���X�}�X�c���[               D
	emoji['e4ca'] ='<font color=#ff00ff>��</font>';//�Ԍ�(������j                  D
	emoji['e4cb'] ='<font color=#800080>��</font>';//������
	emoji['e4cc'] ='<font color=#ff0000>��</font>';//���i�j���E���̊ہj
	emoji['e4cd'] ='<font color=#ff0000>��</font>';//�X�C�J
	emoji['e4d0'] ='<font color=#ff0000>��</font>';//�P�[�L                         D
	emoji['e4d1'] ='<font color=#000000>��</font>';//�t���C�p���i�ڋʏĂ��j
	emoji['e4d2'] ='<font color=#ff0000>��</font>';//��������                     D
	emoji['e4d3'] ='<font color=#0000ff>��</font>';//�ӂ�
	emoji['e4d4'] ='<font color=#ff0000>��</font>';//�C�`�S
	emoji['e4d5'] ='<font color=#000000>��</font>';//���ɂ���                       D
	emoji['e4d6'] ='<font color=#ffa500>��</font>';//�n���o�[�K�[�i�t�@�[�X�g�t�[   D
	emoji['e470'] ='<font color=#0000ff>��</font>';//������
	emoji['e4d7'] ='<font color=#ffa500>�E</font>';//������
	emoji['e4d8'] ='<font color=#a52a2a>��</font>';//����                           D
	emoji['e4d9'] ='<font color=#ffa500>�F</font>';//����
	emoji['e4da'] ='<font color=#ff00ff>��</font>';//������
	emoji['e4db'] ='<font color=#ffa500>�F</font>';//�L                             D
	emoji['e4dc'] ='<font color=#000080>��</font>';//�y���M��                       D
	emoji['e4dd'] ='<font color=#a52a2a>��</font>';//����
	emoji['e4de'] ='<font color=#ffa500>��</font>';//�Ԃ�                           D
	emoji['e4e2'] ='<font color=#ff0000>��</font>';//�₵�̂�
	emoji['e4e3'] ='<font color=#00ff00>��</font>';//�Ђ܂��
	emoji['e471'] ='<font color=#ff00ff>��</font>';//��P�i���ꂵ���J�I�j           D
	emoji['e472'] ='<font color=#ff0000>��</font>';//��Q�i���������J�I�j           D
	emoji['e473'] ='<font color=#0000ff>��</font>';//��R�i���Ȃ����J�I�j           D
	emoji['e474'] ='<font color=#000000>��</font>';//��S�i���ꂽ�J�I�j
	emoji['e475'] ='<font color=#0000ff>��</font>';//�����i�y�y�y�c�j               D
	emoji['e4e5'] ='<font color=#000000>��</font>';//�{��i���J�b�j                 D
	emoji['e4e6'] ='<font color=#000000>��</font>';//���i�܁E���j                   D
	emoji['e4e7'] ='<font color=#ff0000>��</font>';//���炩���i��������ׂ��j       D
	emoji['e477'] ='<font color=#ff0000>��</font>';//�n�[�g�Q�i���Ă���j         D
	emoji['e478'] ='<font color=#ff0000>��</font>';//�n�[�g�R�i�傫�����������j     D
	emoji['e479'] ='<font color=#ffa500>��</font>';//�X�p�[�N�Q�i�L�����}�[�N�j
	emoji['e47a'] ='<font color=#000000>��</font>';//���e                           D
	emoji['e47b'] ='<font color=#ff0000>�Q</font>';//��
	emoji['e4e8'] ='<font color=#800080>��</font>';//�{���iSOS�j
	emoji['e4e9'] ='<font color=#ffa500>��</font>';//�͂���
	emoji['e4ea'] ='<font color=#ff0000>��</font>';//�n�[�g�T�i��������Ă���j
	emoji['e4eb'] ='<font color=#ff0000>��</font>';//�L�X�}�[�N                     D
	emoji['e4ec'] ='<font color=#800080>��</font>';//�F���l
	emoji['e4ed'] ='<font color=#ff0000>��</font>';//�Ȃ��
	emoji['e4ee'] ='<font color=#ffa500>��</font>';//���Ձi���j
	emoji['e4ef'] ='<font color=#800080>��</font>';//����
	emoji['e4f0'] ='<font color=#ff0000>��</font>';//�Ԋ�
	emoji['e4f1'] ='<font color=#ff0000>��</font>';//�۔�                           D
	emoji['e4f2'] ='<font color=#000000>�Q</font>';//100�_���_������
	emoji['e4f3'] ='<font color=#ff0000>��</font>';//�p���`                         D
	emoji['e4f4'] ='<font color=#000000>��</font>';//�_�b�V��                       D
	emoji['e4f5'] ='<font color=#cc6600>�Q</font>';//�E���`�}�[�N
	emoji['e4f6'] ='<font color=#ffa500>��</font>';//�l�����w�T�C��
	emoji['e4f7'] ='<font color=#000000>�Q</font>';//�}����
	emoji['e4f8'] ='<font color=#800080>��</font>';//�ǂ���
	emoji['e4f9'] ='<font color=#ffa500>��</font>';//�����уT�C��                 D
	emoji['e502'] ='<font color=#0000ff>��</font>';//�e���r                         D
	emoji['e503'] ='<font color=#000000>��</font>';//�}�C�N                         D
	emoji['e504'] ='<font color=#000000>��</font>';//���z                           D
	emoji['e505'] ='<font color=#ff0000>��</font>';//�����f�B                       D
	emoji['e506'] ='<font color=#ff0000>��</font>';//�M�^�[�i�G���L�j
	emoji['e507'] ='<font color=#ff0000>��</font>';//�o�C�I�����i�N���b�V�b�N�j
	emoji['e508'] ='<font color=#0000ff>��</font>';//�w�b�h�t�H��                   D
	emoji['e509'] ='<font color=#ff0000>��</font>';//���g                           D
	emoji['e50a'] ='<font color=#000000>��</font>';//�A�N�V�����i�s�X�g���j
	emoji['e50b'] ='<font color=#ff00ff>��</font>';//�G�X�e
	emoji['e577'] ='<font color=#000000>�Q</font>';//EZ�}�[�N
	emoji['e578'] ='<font color=#ff0000>�{</font>';//�����i�e�q�d�d�j               D
	emoji['e50c'] ='<font color=#0000ff>��</font>';//CD/DVD                         D
	emoji['e50d'] ='<font color=#0000ff>��</font>';//�w�l��
	emoji['e50e'] ='<font color=#800080>��</font>';//UFO
	emoji['e50f'] ='<font color=#ff0000>��</font>';//�X�V�i�t�o�I�j
	emoji['e510'] ='<font color=#000000>�Q</font>';//���ˊ�i���j
	emoji['e598'] ='<font color=#0000ff>��</font>';//��                             D
	emoji['e599'] ='<font color=#0000ff>��</font>';//�S���t                         D
	emoji['e59a'] ='<font color=#ffa500>��</font>';//�o�X�P�b�g�{�[��               D
	emoji['e59b'] ='<font color=#ff00ff>��</font>';//�|�P�b�g�x��                   D
	emoji['e59c'] ='<font color=#ff00ff>��</font>';//�A�[�g                         D
	emoji['e59d'] ='<font color=#000000>��</font>';//����
	emoji['e59e'] ='<font color=#ff0000>��</font>';//�C�x���g                       D
	emoji['e59f'] ='<font color=#ff0000>��</font>';//���{��                         D
	emoji['e5a0'] ='<font color=#ff0000>��</font>';//�o�[�X�f�[                     D
	emoji['e5a1'] ='<font color=#000000>��</font>';//�X�y�[�h                       D
	emoji['e5a2'] ='<font color=#ff0000>��</font>';//�_�C��                         D
	emoji['e5a3'] ='<font color=#000000>��</font>';//�N���u                         D
	emoji['e5a4'] ='<font color=#000000>��</font>';//��                             D
	emoji['e5a5'] ='<font color=#ffa500>��</font>';//��                             D
	emoji['e5a6'] ='<font color=#ffa500>��</font>';//��i�`���L�j                   D
	emoji['e5a7'] ='<font color=#ffa500>��</font>';//��i�p�[�j                     D
	emoji['e5a8'] ='<font color=#000000>�@</font>';//�V��                           D
	emoji['e5a9'] ='<font color=#000000>�A</font>';//��⌇����                     D
	emoji['e5aa'] ='<font color=#000000>�B</font>';//����                           D
	emoji['e5ab'] ='<font color=#ff0000>��</font>';//�N���A                         D
	emoji['e5ac'] ='<font color=#000000>��</font>';//�l�p����0                      D
	emoji['e5ad'] ='<font color=#ff0000>��</font>';//����                           D
	emoji['e5ae'] ='<font color=#0000ff>��</font>';//�ӂ�ӂ�                       D
	emoji['e5af'] ='<font color=#ff0000>��</font>';//���킢��
	emoji['e5b0'] ='<font color=#ff0000>��</font>';//�ǂ���i�Ռ��j                 D
	emoji['e5b1'] ='<font color=#000000>��</font>';//���������i��юU�銾�j         D
	emoji['e5b2'] ='<font color=#000000>�Q</font>';//�C�[�W�[�v���X
	emoji['e5b3'] ='<font color=#0000ff>�@</font>';//�n��
	emoji['e5b4'] ='<font color=#ffa500>��</font>';//���[����                       D
	emoji['e5c8'] ='<font color=#ff0000>��</font>';//NEW                            D
	emoji['e5c9'] ='<font color=#0000ff>��</font>';//�a�m��                         D
	emoji['e5ca'] ='<font color=#000000>��</font>';//�a�m�C
	emoji['e5cb'] ='<font color=#000000>��</font>';//�p�\�R��                       D
	emoji['e5cc'] ='<font color=#0000ff>��</font>';//���W�I
	emoji['e5cd'] ='<font color=#ff0000>��</font>';//�o��
	emoji['e5ce'] ='<font color=#00ff00>��</font>';//�`���y��
	emoji['e5cf'] ='<font color=#ffa500>��</font>';//�n���S                         D
	emoji['e5d0'] ='<font color=#0000ff>��</font>';//�x�m�R                         D
	emoji['e5d1'] ='<font color=#ff0000>��</font>';//��������                       D
	emoji['e5d2'] ='<font color=#ff00ff>��</font>';//�V�g
	emoji['e5d3'] ='<font color=#ffa500>�F</font>';//�g��
	emoji['e5d4'] ='<font color=#ffa500>�E</font>';//����
	emoji['e5d5'] ='<font color=#ffa500>�E</font>';//�˂���
	emoji['e5d6'] ='<font color=#ff00ff>��</font>';//�E�C���N                       D
	emoji['e5d7'] ='<font color=#ff00ff>��</font>';//�ڂ��n�[�g                     D
	emoji['e5d8'] ='<font color=#800080>��</font>';//�V���b�L���O                   D
	emoji['e5d9'] ='<font color=#0000ff>��</font>';//����                           D
	emoji['e5da'] ='<font color=#0000ff>��</font>';//����
	emoji['e5db'] ='<font color=#000000>�Q</font>';//���P�b�g
	emoji['e5dc'] ='<font color=#ffa500>��</font>';//����                           D
	emoji['e5dd'] ='<font color=#ff0000>��</font>';//�`���[
	emoji['e5de'] ='<font color=#000000>��</font>';//�n���}�[
	emoji['e5df'] ='<font color=#000000>�W</font>';//�ł��グ�ԉ�
		emoji['e234'] ='<font color=#ff0000>��</font>';//�͂�t
		emoji['e235'] ='<font color=#ff0000>��</font>';//�d�����΂�
		emoji['e236'] ='<font color=#ff0000>��</font>';//����
		emoji['e237'] ='<font color=#ff0000>��</font>';//�L�����v
		emoji['e238'] ='<font color=#000000>�Q</font>';//����
		emoji['e239'] ='<font color=#000000>�Q</font>';//�u�r�i�o�[�T�X�j
		emoji['e23a'] ='<font color=#ffa500>��</font>';//�g���t�B�[
		emoji['e23b'] ='<font color=#a52a2a>��</font>';//�J��
		emoji['e23c'] ='<font color=#ff0000>��</font>';//�X�y�C������
		emoji['e23d'] ='<font color=#ff0000>��</font>';//���V�A����
		emoji['e23e'] ='<font color=#ff0000>��</font>';//�H����
		emoji['e23f'] ='<font color=#ff0000>��</font>';//���C
		emoji['e240'] ='<font color=#ff0000>��</font>';//�j���}�[�N
		emoji['e241'] ='<font color=#000000>�W</font>';//�[���X����
		emoji['e242'] ='<font color=#ffa500>��</font>';//������
		emoji['e243'] ='<font color=#ff0000>��</font>';//����
		emoji['e244'] ='<font color=#0000ff>��</font>';//�|���X
		emoji['e245'] ='<font color=#ff0000>��</font>';//�X�֋�                         D
		emoji['e246'] ='<font color=#000000>��</font>';//�a�@                           D
		emoji['e247'] ='<font color=#00ff00>��</font>';//�w�Z                           D
		emoji['e248'] ='<font color=#00ff00>��</font>';//�z�e��                         D
		emoji['e249'] ='<font color=#0000ff>��</font>';//�D                             D
		emoji['e24a'] ='<font color=#ff0000>��</font>';//18��
		emoji['e24b'] ='<font color=#000000>�r</font>';//����
		emoji['e24c'] ='<font color=#ff0000>��</font>';//COOL!
		emoji['e24d'] ='<font color=#000000>��</font>';//���}�[�N
		emoji['e24e'] ='<font color=#000000>�U</font>';//�U�E�}�[�N
		emoji['e24f'] ='<font color=#ff0000>�|</font>';//�h�c�}�[�N                     D
		emoji['e250'] ='<font color=#ff0000>��</font>';//���}�[�N                       D
		emoji['e251'] ='<font color=#0000ff>��</font>';//��}�[�N                       D
		emoji['e252'] ='<font color=#000000>�w</font>';//�w��}�[�N
		emoji['e253'] ='<font color=#000000>�c</font>';//�c�ƒ��}�[�N
		emoji['e254'] ='<font color=#000000>��</font>';//��w����
		emoji['e255'] ='<font color=#000000>��</font>';//���w����
		emoji['e256'] ='<font color=#0000ff>��</font>';//�肢
		emoji['e257'] ='<font color=#ff0000>��</font>';//�}�i�[���[�h
		emoji['e258'] ='<font color=#000000>�Q</font>';//�d��OFF
		emoji['e259'] ='<font color=#ffa500>��</font>';//��������
		emoji['e25a'] ='<font color=#000000>�Q</font>';//�l�N�^�C
		emoji['e25b'] ='<font color=#ff0000>��</font>';//�n�C�r�X�J�X
		emoji['e25c'] ='<font color=#ff00ff>��</font>';//�ԑ�
		emoji['e25d'] ='<font color=#00ff00>��</font>';//�T�{�e��
		emoji['e25e'] ='<font color=#a52a2a>��</font>';//�����q���t                     D
		emoji['e25f'] ='<font color=#ffa500>��</font>';//���t
		emoji['e260'] ='<font color=#000000>�j</font>';//�j�}�[�N
		emoji['e261'] ='<font color=#000000>��</font>';//���ז�
		emoji['e262'] ='<font color=#ff0000>��</font>';//���D
		emoji['e263'] ='<font color=#000000>��</font>';//�N���b�J�[
		emoji['e264'] ='<font color=#000000>�Q</font>';//eznavigation
		emoji['e265'] ='<font color=#000000>��</font>';//�X�q
		emoji['e266'] ='<font color=#ff0000>��</font>';//�����O�u�[�c
		emoji['e267'] ='<font color=#ffa500>��</font>';//�l�C��
		emoji['e268'] ='<font color=#0000ff>��</font>';//���e�@
		emoji['e269'] ='<font color=#0000ff>��</font>';//����
		emoji['e26a'] ='<font color=#0000ff>��</font>';//����
		emoji['e26b'] ='<font color=#ff00ff>��</font>';//�r�L�j
		emoji['e26c'] ='<font color=#ff0000>��</font>';//�n�[�g�i�g�����v�j             D
		emoji['e26d'] ='<font color=#ff0000>��</font>';//����n�[�g
		emoji['e26e'] ='<font color=#ff0000>��</font>';//�n�[�g
		emoji['e26f'] ='<font color=#ff0000>��</font>';//�΃n�[�g
		emoji['e270'] ='<font color=#ff0000>��</font>';//���n�[�g
		emoji['e271'] ='<font color=#ff0000>��</font>';//���n�[�g
		emoji['e272'] ='<font color=#ffa500>��</font>';//���炫��                       D
		emoji['e273'] ='<font color=#0000ff>��</font>';//�X�L�[                         D
		emoji['e274'] ='<font color=#000000>�D</font>';//��
		emoji['e275'] ='<font color=#00ff00>��</font>';//���{��                         D
		emoji['e276'] ='<font color=#a52a2a>��</font>';//�H�p��                         D
		emoji['e277'] ='<font color=#ffa500>��</font>';//�\�t�g�N���[��
		emoji['e278'] ='<font color=#ffa500>��</font>';//�|�e�g
		emoji['e279'] ='<font color=#ffa500>��</font>';//����
		emoji['e27a'] ='<font color=#000000>��</font>';//������ׂ�
		emoji['e27b'] ='<font color=#000000>��</font>';//���͂�
		emoji['e27c'] ='<font color=#ffa500>��</font>';//�X�p�Q�b�e�B
		emoji['e27d'] ='<font color=#ffa500>��</font>';//�J���[
		emoji['e27e'] ='<font color=#ffa500>��</font>';//���ł�
		emoji['e27f'] ='<font color=#000000>��</font>';//���i
		emoji['e280'] ='<font color=#ff0000>��</font>';//���                         D
		emoji['e281'] ='<font color=#ff0000>��</font>';//�݂���
		emoji['e282'] ='<font color=#ff0000>��</font>';//�g�}�g
		emoji['e283'] ='<font color=#ff0000>��</font>';//�Ȃ�
		emoji['e284'] ='<font color=#000000>��</font>';//�ٓ�
		emoji['e285'] ='<font color=#ffa500>��</font>';//��
		emoji['e286'] ='<font color=#ffa500>��</font>';//�ӂ�                           D
		emoji['e287'] ='<font color=#0000ff>��</font>';//����ڂ�                       D
		emoji['e288'] ='<font color=#ffa500>��</font>';//�����ւ�
		emoji['e289'] ='<font color=#000000>��</font>';//���s                           D
		emoji['e28a'] ='<font color=#00ff00>��</font>';//�킩���                       D
		emoji['e28b'] ='<font color=#0000ff>��</font>';//����
		emoji['e28c'] ='<font color=#ff00ff>��</font>';//�Ă�Ă�                       D
		emoji['e28d'] ='<font color=#800080>��</font>';//����
		emoji['e28e'] ='<font color=#800080>��</font>';//���ׂЂ�
		emoji['e28f'] ='<font color=#800080>��</font>';//�M
		emoji['e290'] ='<font color=#a52a2a>��</font>';//����                           D
		emoji['e291'] ='<font color=#0000ff>��</font>';//�т�����
		emoji['e292'] ='<font color=#0000ff>��</font>';//������
		emoji['e293'] ='<font color=#ff0000>��</font>';//�y��
		emoji['e294'] ='<font color=#ff00ff>��</font>';//�ɂ��ɂ�
		emoji['e295'] ='<font color=#000000>�Q</font>';//�`���[�Q
		emoji['e296'] ='<font color=#000000>�Q</font>';//�`���b
		emoji['e297'] ='<font color=#000000>�@</font>';//�@
		emoji['e298'] ='<font color=#ff0000>��</font>';//��
		emoji['e299'] ='<font color=#0000ff>��</font>';//�S�����^���肢
		emoji['e29a'] ='<font color=#ffa500>��</font>';//����
		emoji['e29b'] ='<font color=#ff0000>��</font>';//�n�j�I
		emoji['e29c'] ='<font color=#0000ff>��</font>';//�u�[�C���O
		emoji['e29d'] ='<font color=#ffa500>��</font>';//�o�C�o�C
		emoji['e29e'] ='<font color=#ff0000>��</font>';//�m�f
		emoji['e29f'] ='<font color=#ff0000>��</font>';//�n�j�I�Q
		emoji['e2a0'] ='<font color=#0000ff>��</font>';//���ӂ�
		emoji['e2a1'] ='<font color=#ff0000>��</font>';//�J�b�v��
		emoji['e2a2'] ='<font color=#000000>��</font>';//�o�j�[
		emoji['e2a3'] ='<font color=#FF0000>��</font>';//�g�����y�b�g
		emoji['e2a4'] ='<font color=#000000>�D</font>';//�r�����[�h
		emoji['e2a5'] ='<font color=#0000ff>��</font>';//���j
		emoji['e2a6'] ='<font color=#00ff00>��</font>';//���h��
		emoji['e2a7'] ='<font color=#00ff00>��</font>';//�~�}��
		emoji['e2a8'] ='<font color=#000000>��</font>';//�p�g�J�[
		emoji['e2a9'] ='<font color=#0000ff>��</font>';//�W�F�b�g�R�[�X�^�[
		emoji['e2aa'] ='<font color=#00ff00>�H</font>';//�叼
		emoji['e2ab'] ='<font color=#000000>��</font>';//���Ղ�
		emoji['e2ac'] ='<font color=#000000>��</font>';//���Ǝ�
		emoji['e2ad'] ='<font color=#ff00ff>��</font>';//���w��
		emoji['e2ae'] ='<font color=#0000ff>��</font>';//�����̂ڂ�
		emoji['e2af'] ='<font color=#0000ff>��</font>';//�P                             D
		emoji['e2b0'] ='<font color=#ff00ff>��</font>';//�ԉ�
		emoji['e2b1'] ='<font color=#ff00ff>��</font>';//�����X
		emoji['e2b2'] ='<font color=#000000>�W</font>';//�����ԉ�
		emoji['e2b3'] ='<font color=#ff0000>��</font>';//�����L
		emoji['e2b4'] ='<font color=#000000>�Q</font>';//����
		emoji['e2b5'] ='<font color=#ff0000>��</font>';//�n���E�B��
		emoji['e2b6'] ='<font color=#000000>�W</font>';//������
		emoji['e2b7'] ='<font color=#00ff00>�H</font>';//�T���^
		emoji['e2b8'] ='<font color=#000000>�W</font>';//��^���ꐯ                     D
		emoji['e2b9'] ='<font color=#ff0000>��</font>';//��
		emoji['e2ba'] ='<font color=#00ff00>��</font>';//�z�e���Q
		emoji['e2bb'] ='<font color=#ff0000>��</font>';//���̏o
		emoji['e2bc'] ='<font color=#000000>��</font>';//�V���N�n�b�g                   D
		emoji['e2bd'] ='<font color=#0000ff>��</font>';//�f�p�[�g
		emoji['e2be'] ='<font color=#000000>��</font>';//��i���{�j
		emoji['e2bf'] ='<font color=#000000>��</font>';//��i���[���b�p�j
		emoji['e2c0'] ='<font color=#0000ff>��</font>';//�H��Q
		emoji['e2c1'] ='<font color=#ff0000>��</font>';//�t�����X����
		emoji['e5b5'] ='<font color=#000000>�Q</font>';//�I�[�v���E�F�[�u
		emoji['e5b6'] ='<font color=#ff0000>�}</font>';//���b�N�m�F
		emoji['e5b7'] ='<font color=#000000>A</font>';//�啶��
		emoji['e5b8'] ='<font color=#000000>a</font>';//������
		emoji['e5b9'] ='<font color=#000000>1</font>';//����
		emoji['e5ba'] ='<font color=#000000>��</font>';//�L��
		emoji['e5bb'] ='<font color=#000000>��</font>';//�A�N�Z�v�g
		emoji['e5bc'] ='<font color=#000000>�Q</font>';//�`�F�b�N�{�b�N�X
		emoji['e5bd'] ='<font color=#000000>�R</font>';//�G�f�B�b�g                     D
		emoji['e5be'] ='<font color=#000000>��</font>';//���W�I�{�^��
		emoji['e5bf'] ='<font color=#0000ff>��</font>';//����
		emoji['e5c0'] ='<font color=#ff0000>�~</font>';//�߂�
		emoji['e5c1'] ='<font color=#ffa500>��</font>';//���C�ɓ���
		emoji['e5c2'] ='<font color=#000000>�r</font>';//�I��
		emoji['e5c3'] ='<font color=#ff0000>��</font>';//�z�[��
		emoji['e5c4'] ='<font color=#ff0000>��</font>';//��M���P
		emoji['e5c5'] ='<font color=#ffa500>��</font>';//�}�[�N
		emoji['e5c6'] ='<font color=#ff0000>�}</font>';//�l
		emoji['e5c7'] ='<font color=#00ff00>��</font>';//�ēǂݍ���
		emoji['e2c2'] ='<font color=#ff0000>��</font>';//�h�C�c����
		emoji['e2c3'] ='<font color=#ff0000>��</font>';//�C�^���A����
		emoji['e2c4'] ='<font color=#ff0000>��</font>';//�C�M���X����
		emoji['e2c5'] ='<font color=#ff0000>��</font>';//��������
		emoji['e2c6'] ='<font color=#ff0000>��</font>';//�؍�����
		emoji['e2c7'] ='<font color=#ff00ff>��</font>';//���l
		emoji['e2c8'] ='<font color=#ff0000>��</font>';//�����l
		emoji['e2c9'] ='<font color=#a52a2a>��</font>';//�C���h�l
		emoji['e2ca'] ='<font color=#ffa500>��</font>';//����������
		emoji['e2cb'] ='<font color=#ff00ff>��</font>';//���΂�����
		emoji['e2cc'] ='<font color=#ff00ff>��</font>';//�Ԃ����
		emoji['e2cd'] ='<font color=#ff00ff>��</font>';//�H������̐l
		emoji['e2ce'] ='<font color=#ff00ff>��</font>';//���P�l
		emoji['e2cf'] ='<font color=#0000ff>��</font>';//�C���J
		emoji['e2d0'] ='<font color=#ff0000>��</font>';//�_���X
		emoji['e2d1'] ='<font color=#0000ff>��</font>';//�M�ы�
		emoji['e2d2'] ='<font color=#f52a2a>��</font>';//��������
		emoji['e2d3'] ='<font color=#a52a2a>��</font>';//��
		emoji['e2d4'] ='<font color=#ffa500>�E</font>';//�R�A��
		emoji['e2d5'] ='<font color=#a52a2a>��</font>';//�z���X�^�C��
		emoji['e2d6'] ='<font color=#000000>��</font>';//�w�r
		emoji['e2d7'] ='<font color=#ffa500>��</font>';//�{
		emoji['e2d8'] ='<font color=#ffa500>��</font>';//����ڂ�
		emoji['e2d9'] ='<font color=#a52a2a>��</font>';//�ӂ����Ԃ炭��
		emoji['e2da'] ='<font color=#000000>A</font>';//�`�^
		emoji['e2db'] ='<font color=#000000>B</font>';//�a�^
		emoji['e2dc'] ='<font color=#000000>O</font>';//�n�^
		emoji['e2dd'] ='<font color=#000000>�Q</font>';//�`�a�^
		emoji['e2de'] ='<font color=#ffa500>��</font>';//����                           D
		emoji['e2df'] ='<font color=#000000>��</font>';//�X�j�[�J�[                     D
		emoji['e2e0'] ='<font color=#ff0000>��</font>';//��                             D
		emoji['e2e1'] ='<font color=#ff0000>��</font>';//������J�[�u���               D
		emoji['e2e2'] ='<font color=#0000ff>��</font>';//�������J�[�u���               D
		emoji['e2e3'] ='<font color=#ff00ff>��</font>';//�u�I�H�v                       D
		emoji['e2e4'] ='<font color=#ff0000>��</font>';//�u�I�I�v                       D
		emoji['e2e5'] ='<font color=#000000>��</font>';//�����                         D
		emoji['e2e6'] ='<font color=#ff0000>��</font>';//������
		emoji['e2e7'] ='<font color=#ff0000>��</font>';//�p�C�i�b�v��
		emoji['e2e8'] ='<font color=#ff0000>��</font>';//�Ԃǂ�
		emoji['e2e9'] ='<font color=#ffa500>��</font>';//�o�i�i                         D
		emoji['e2ea'] ='<font color=#00ff00>��</font>';//�Ƃ����낱��
		emoji['e2eb'] ='<font color=#00ff00>��</font>';//���̂�
		emoji['e2ec'] ='<font color=#ff0000>��</font>';//�I
		emoji['e2ed'] ='<font color=#ff0000>��</font>';//��
		emoji['e2ee'] ='<font color=#ffa500>��</font>';//�₫����
		emoji['e2ef'] ='<font color=#ffa500>��</font>';//�s�U
		emoji['e2f0'] ='<font color=#ffa500>��</font>';//�^�[�L�[
		emoji['e2f1'] ='<font color=#00ff00>�H</font>';//���[������
		emoji['e2f2'] ='<font color=#ff00ff>��</font>';//�g���s�J���h�����N
		emoji['e2f3'] ='<font color=#ffa500>��</font>';//�C
		emoji['e2f4'] ='<font color=#ff0000>��</font>';//�s�A�m
		emoji['e2f5'] ='<font color=#0000ff>��</font>';//�T�[�t�B��
		emoji['e2f6'] ='<font color=#0000ff>��</font>';//�ނ�
		emoji['e2f7'] ='<font color=#000000>�D</font>';//�{�[�����O
		emoji['e2f8'] ='<font color=#000000>�Q</font>';//�Ȃ܂͂�
		emoji['e2f9'] ='<font color=#000000>�Q</font>';//�V��
		emoji['e2fa'] ='<font color=#ffa500>�E</font>';//�p���_
		emoji['e2fb'] ='<font color=#ff0000>��</font>';//������ׁ[
		emoji['e2fc'] ='<font color=#ffa500>��</font>';//�Ԃ��̕@
		emoji['e2fd'] ='<font color=#ff0000>��</font>';//��
		emoji['e2fe'] ='<font color=#ff00ff>��</font>';//�A�C�X�N���[��
		emoji['e2ff'] ='<font color=#000000>�D</font>';//�h�[�i�c
		emoji['e300'] ='<font color=#000000>�D</font>';//�N�b�L�[
		emoji['e301'] ='<font color=#ffa500>��</font>';//�`���R
		emoji['e302'] ='<font color=#ff0000>��</font>';//�L�����f�B�i�݁j
		emoji['e303'] ='<font color=#ff0000>��</font>';//�L�����f�B�i�؂�؂�j
		emoji['e304'] ='<font color=#000000>�Q</font>';//������
		emoji['e305'] ='<font color=#000000>�Q</font>';//���킴��
		emoji['e306'] ='<font color=#000000>�Q</font>';//��������
		emoji['e307'] ='<font color=#0000ff>��</font>';//�ΎR
		emoji['e308'] ='<font color=#ff0000>��</font>';//���{�������̃n�[�g
		emoji['e309'] ='<font color=#000000>�Q</font>';//�p��u�`�a�b�v
		emoji['e30a'] ='<font color=#000000>�Q</font>';//�v����
		emoji['e30b'] ='<font color=#000000>�Q</font>';//�~�c�o�`
		emoji['e30c'] ='<font color=#a52a2a>��</font>';//�e���g�E���V
		emoji['e30d'] ='<font color=#000000>�Q</font>';//�I���|�b�g
		emoji['e30e'] ='<font color=#ff0000>��</font>';//���
		emoji['e30f'] ='<font color=#a52a2a>��</font>';//�H�̂͂������D
		emoji['e310'] ='<font color=#0000ff>��</font>';//�ڂ��܂�鎞�̋L��
		emoji['e311'] ='<font color=#ff0000>��</font>';//�Ձ[�i���킢���{�j             D
		emoji['e312'] ='<font color=#ff0000>��</font>';//�ԁ[�i���킢���{�j�i�l�R�j
		emoji['e313'] ='<font color=#000000>�W</font>';//�V�̐�
		emoji['e314'] ='<font color=#000000>�Q</font>';//�`���[�i�l�R�j
		emoji['e315'] ='<font color=#ff00ff>��</font>';//�ɂ��i�l�R�j
		emoji['e316'] ='<font color=#000000>�s</font>';//���[������                     D
		emoji['e317'] ='<font color=#ff00ff>��</font>';//�����΂��i�l�R�j
		emoji['e318'] ='<font color=#ff00ff>��</font>';//�����΂�
		emoji['e319'] ='<font color=#ff00ff>��</font>';//�ڂ��n�[�g�i�l�R�j
		emoji['e31a'] ='<font color=#00ff00>��</font>';//�ق��[�i�l�R�j
		emoji['e31b'] ='<font color=#00ff00>��</font>';//�ق��[
		emoji['e31c'] ='<font color=#0000ff>��</font>';//�܂ۂ��i�l�R�j
		emoji['e31d'] ='<font color=#0000ff>��</font>';//�܂ۂ��                       D
		emoji['e31e'] ='<font color=#ffa500>��</font>';//�����i�l�R�j
		emoji['e31f'] ='<font color=#0000ff>��</font>';//�h���X
		emoji['e320'] ='<font color=#000000>�Q</font>';//�����C��
		emoji['e321'] ='<font color=#00ff00>��</font>';//�w
		emoji['e322'] ='<font color=#000000>�Q</font>';//�ԎD
		emoji['e323'] ='<font color=#000000>�Q</font>';//�W���[�J�[
		emoji['e324'] ='<font color=#000000>��</font>';//�G�r�t���C
		emoji['e325'] ='<font color=#000000>�w</font>';//�����[���A�C�R��
		emoji['e326'] ='<font color=#000000>��</font>';//�����l
		emoji['e327'] ='<font color=#000000>��</font>';//�p�g�J�[�̃����v
		emoji['e328'] ='<font color=#000000>�Q</font>';//ezmovie
		emoji['e329'] ='<font color=#ff0000>��</font>';//�h�L�h�L���Ă���n�[�g         D
		emoji['e32a'] ='<font color=#ffa500>��</font>';//���ʌ����̂Ђ悱
		emoji['e32b'] ='<font color=#000080>��</font>';//�W�[���Y                       D
		emoji['e32c'] ='<font color=#ff0000>��</font>';//�n�[�g�����[��               D
		emoji['e32d'] ='<font color=#00ff00>��</font>';//�z���                       D
		emoji['e32e'] ='<font color=#000000>��</font>';//���E���������                 D
		emoji['e32f'] ='<font color=#000000>��</font>';//�㉺���������                 D
		emoji['e330'] ='<font color=#0000ff>��</font>';//�r�g                           D
		emoji['e331'] ='<font color=#00ff00>��</font>';//�o�t                           D
		emoji['e332'] ='<font color=#a52a2a>��</font>';//�����ނ�                     D
		emoji['e333'] ='<font color=#ffa500>��</font>';//�����������i�l�R�j
		emoji['e334'] ='<font color=#ffa500>��</font>';//����������                     D
		emoji['e335'] ='<font color=#000000>�w</font>';//C���[���A�C�R��
		emoji['e336'] ='<font color=#00ff00>��</font>';//�n�[�u
		emoji['e337'] ='<font color=#ffa500>��</font>';//�O�[                           D
		emoji['e338'] ='<font color=#000000>��</font>';//��                             D
		emoji['e339'] ='<font color=#ffa500>��</font>';//�L�����N�^�[�i����j     
		emoji['e33a'] ='<font color=#ffa500>��</font>';//�L�����N�^�[�i���΁j
		emoji['e33b'] ='<font color=#00ff00>��</font>';//�L�����N�^�[�i�����ڂ�j
		emoji['e33c'] ='<font color=#ff0000>��</font>';//�L�����N�^�[�i���킢���{��j
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
