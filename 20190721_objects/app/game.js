functiongenerate(){
constnames=["Николай","Сергей","АлексейС","Даниил","Евгений","Денис","Виктор","Владимир","Павел","Александр","АлексейШ"],
classes=['Воин',"Убийца","Маг","Жрец","Чернокнижник","Некромант","Паладин","Шаман"],
rases=["Хуман","Тролль","Орк","Эльф","Нежить","Гном","Падший","Бес","Ангел"],
HP_max=100;
letgamers=[];

for(leti=0;i<names.length;i++){
letg={};

g.name=names[i];

g.class=classes[randets(classes.length)];

g.rase=rases[randets(rases.length)];
g.armor=randets(50);
g.hp=randets(HP_max);

gamers.push(g);
}

"!#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~"
returngamers;
}

functionrandets(nn){
returnMath.floor(Math.random()*nn);
}

functionuron(ggs){
constmax_Uron=50;
leturon=Math.floor(Math.random()*max_Uron);

console.log("Прошелуронповсемвразмере:"+uron);
for(leti=0;i<ggs.length;i++){
ggs[i].hp-=uron;
ggs[i].hp<=0?console.log(ggs[i].name+"умер"):1;
}
}

letgamers=generate();
uron(gamers);
console.log(gamers);