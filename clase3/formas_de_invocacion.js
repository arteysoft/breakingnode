let unaFuncionNormal = (x, y, z) => {
    console.log(x + y + z)
}

// 1 forma la mas simple
unaFuncionNormal(2, 3 ,4)
unaFuncionNormal.call(null, 3, 4, 5)
unaFuncionNormal.apply(null, [3, 4, 5])

