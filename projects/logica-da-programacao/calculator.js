const compare = (x, y) => {
   let msg;

      
    if (x > y) {
        msg = `O número ${x} é maior que o número ${y}.`;
    } else if (x < y) {
        msg = `O número ${x} é menor que o número ${y}.`;
} else {
    msg = `os dois números são iguais!`;
}

    console. log(msg);
}

export default compare;

compare(5, 2);
compare(3, 5);
compare(105, 2);
compare(5, 5);