let n = { 
    name : 'Инокентий'
    },
    o = {
        name : "Ivan",
        surname : 'Durak',
        age : 33,
        isMale : true,
        edication : null,
        father : {
            name : 'Ivan',
            surname : 'Durak-old',
            age : 55,
            isMale : true,
            education : 'basic'
        },
        achivements : ["Убить дракона", "Поцеловать лягушку", "Пройти кипяток, масло, молоко", "Лежать на печи", "И так сойдёт!"],
        friend : n
};

n.surname = "Пожарский";

console.log(o);
console.log(typeof o);