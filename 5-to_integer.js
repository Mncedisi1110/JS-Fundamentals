const List = ['I', 'was','born', 'in', '1985', '22', 'August'];

List.forEach(list=> {
    console.log(Number(list));
    if (!(Number(list))) {
        console.log(`${list} not a number`);
    }

});

