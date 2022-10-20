// Dirbti su šiuo masyvu:
// [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

let array = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];
// let sort = array.sort((array, current) => array - current)

// 1.1. Pašalinti pirmą masyvo narį.
console.log(array)
array.shift()
console.log(array)

// 1.2. Pašalinti paskutinį masyvo narį.
array.pop()
console.log(array)

// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
let medianIndex = Math.floor(array.length / 2)
array.splice(medianIndex, 1)

console.log(array)
// 1. Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas užduotis. Naudoti metodus: pop, push, shift, unshift, splice.

// 1.4. Pašalinti priešpaskutinį masyvo narį.
array.splice(-2, 1)
console.log(array)

// 1.5. Pašalinti antrą masyvo narį.
array.splice(1, 1)
console.log(array)

// 1.6. Pašalinti 7 ir 8 masyvo narius.
array.splice(6, 2)
console.log(array)

// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
array.splice(-6, 3)
console.log(array)

// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
array.splice(2, 1, 888)
console.log(array)

// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
array.splice(9, 1, 33, 789, 6543)
console.log(array)
// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
array.pop()
array.push(321, 654, 987)
console.log(array)

// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
array.splice(1, 0, 11)
console.log(array)

// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
array.splice(13, 0, 1)
console.log(array)

// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
array.splice(-1, 0, -1)
console.log(array)

// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
array.unshift(1, 2, 3)
console.log(array)

// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
array.push(-333, -321, -312)
console.log(array)

// 1.16. Į masyvo vidurį pridėti skaičių 0.
medianIndex = Math.floor(array.length / 2)
array.splice(medianIndex, 0, 0)

console.log(array)
// 1.17. Pašalinti pirmą masyvo narį.
array.shift()
console.log(array)

// 1.18. Pašalinti paskutinį masyvo narį.
array.pop()
console.log(array)

// 1.19. Į masyvo pradžią pridėti žodį "start".
array.unshift("start")
console.log(array)
// 1.20. Į masyvo pabaigą pridėti žodį "end".
array.push("end")
console.log(array)
// Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:
// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

// // 2. Tęsiant darbą su šiuo masyvu atlikti šias užduotis naudojant slice metodą.

// Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę,

// kurią grąžina slice metodas, ir šį kintamąjį išvesti į konsolę:

// 2.1. Gauti pirmą masyvo narį.
arraySlice = array.slice(0, 1)
console.log(arraySlice)

// 2.2. Gauti paskutinį masyvo narį.
arraySlice1 = array.slice(-1)
console.log(arraySlice1)
// 2.3. Gauti antrą masyvo narį.
arraySlice2 = array.slice(1, 2)
console.log(arraySlice2)
// 2.4. Gauti priešpaskutinį masyvo narį.
arraySlice3 = array.slice(-2, -1)
console.log(arraySlice3)
// 2.5. Gauti aštuntą masyvo narį.
arraySlice4 = array.slice(7, 8)
console.log(arraySlice4)
// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
arraySlice5 = array.slice(-8, -7)
console.log(arraySlice5)
// 2.7. Gauti vidurinį masyvo narį.
medianIndex = Math.floor(array.length / 2)
arraySlice6 = array.slice(medianIndex, medianIndex + 1)
console.log(arraySlice6)
// 2.8. Gauti pirmus tris masyvo narius.
arraySlice7 = array.slice(0, 3)
console.log(arraySlice7)
// 2.9. Gauti paskutinius tris masyvo narius.
arraySlice8 = array.slice(-3)
console.log(arraySlice8)
// 2.10. Gauti pirmus 10 masyvo narius.
arraySlice9 = array.slice(0, 10)
console.log(arraySlice9)
// 2.11. Gauti paskutinius 10 masyvo narius.
arraySlice10 = array.slice(-10)
console.log(arraySlice10)
// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
arraySlice11 = array.slice(2, 8)
console.log(arraySlice11)
// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
arraySlice12 = array.slice(-9, -4)
console.log(arraySlice12)
// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
arraySlice13 = array.slice(10, 19)
console.log(arraySlice13)
// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
arraySlice14 = array.slice(-17, -8)
console.log(arraySlice14)
// 2.16. Gauti visus masyvo narius išskyrus pirmą.
arraySlice15 = array.slice(1)
console.log(arraySlice15)
// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
arraySlice16 = array.slice(0, -1)
console.log(arraySlice16)
// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
arraySlice17 = array.slice(5)
console.log(arraySlice17)
// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
arraySlice18 = array.slice(0, -5)
console.log(arraySlice18)
// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
medianIndex = Math.floor(array.length / 2)
arraySlice19 = array.slice(0, medianIndex)
console.log(arraySlice19)
// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
medianIndex = Math.floor(array.length / 2)
arraySlice20 = array.slice(medianIndex + 1)
console.log(arraySlice20)
// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
arraySlice21 = array.slice(1, -1)
console.log(arraySlice21)
// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
arraySlice22 = array.slice(5, -3)
console.log(arraySlice22)
// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
arraySlice22 = array.slice(1, -8)
console.log(arraySlice22)
// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
arraySlice22 = array.slice(7, -1)
console.log(arraySlice22)
// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
arraySlice22 = array.slice(9, -12)
console.log(arraySlice22)
// 2.27. Gauti 9 narius skaičiuojant nuo 11.2.
arraySlice22 = array.slice(10, 10 + 9)
console.log(arraySlice22)
// 28. Gauti 12 narių skaičiuojant nuo 8.2.
arraySlice22 = array.slice(7, 7 + 12)
console.log(arraySlice22)
// 29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.2.
arraySlice29 = array.slice(0, 5)
arraySlice29_1 = array.slice(-6)
arraySliceContact = [...arraySlice29, ...arraySlice29_1]
console.log(arraySliceContact)

// 30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
arraySlice29 = array.slice(2, 5)
arraySlice29_1 = array.slice(14, 17)
arraySliceContact = [...arraySlice29, ...arraySlice29_1]
console.log(arraySliceContact)


// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:
// 3.1. Gauti tik teigiamus skaičius.
arrayFilter1 = array.filter(arr => arr >= 0)
console.log(arrayFilter1)
// 3.2. Gauti tik neigiamus skaičius.
arrayFilter2 = array.filter(arr => arr < 0)
console.log(arrayFilter2)
// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
arrayFilter3 = array.filter(arr => arr % 2 === 0)
console.log(arrayFilter3)
// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.
arrayFilter4 = array.filter(arr => arr % 3 === 0)
console.log(arrayFilter4)
// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.
arrayFilter5 = array.filter(arr => arr % 5 === 0)
console.log(arrayFilter5)
// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.
arrayFilter6 = array.filter(arr => arr % 11 === 0)
console.log(arrayFilter6)
// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.
arrayFilter7 = array.filter(arr => arr % 31 === 0)
console.log(arrayFilter7)
// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
arrayFilter8 = array.filter(arr => arr % 2 === 0 && arr % 3 === 0)
console.log(arrayFilter8)
// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
arrayFilter9 = array.filter(arr => arr % 3 === 0 && arr % 7 === 0)
console.log(arrayFilter9)
// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
arrayFilter10 = array.filter(arr => arr % 5 === 0 && arr % 9 === 0)
console.log(arrayFilter10)
// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
arrayFilter11 = array.filter(arr => arr % 5 === 0 && arr % 11 === 0)
console.log(arrayFilter11)
// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
arrayFilter12 = array.filter(arr => arr % 2 === 0 && arr % 8 === 0 && arr % 12 === 0)
console.log(arrayFilter12)
// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
arrayFilter13 = array.filter(arr => arr % 2 === 0 || arr % 3 === 0)
console.log(arrayFilter13)
// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
arrayFilter14 = array.filter(arr => arr % 3 === 0 || arr % 5 === 0)
console.log(arrayFilter14)
// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
arrayFilter15 = array.filter(arr => arr % 5 === 0 || arr % 6 === 0)
console.log(arrayFilter15)
// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
arrayFilter16 = array.filter(arr => arr % 7 === 0 || arr % 8 === 0)
console.log(arrayFilter16)
// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
arrayFilter17 = array.filter(arr => arr % 9 === 0 || arr % 13 === 0)
console.log(arrayFilter17)
// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.
arrayFilter18 = array.filter(arr => arr % 2 === 0 || arr % 3 === 0 || arr % 5 === 0)
console.log(arrayFilter18)
// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
arrayFilter19 = array.filter(arr => arr % 5 === 0 || arr % 7 === 0 || arr % 9 === 0)
console.log(arrayFilter19)
// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
arrayFilter20 = array.filter(arr => arr % 7 === 0 || arr % 8 === 0 || arr % 11 === 0)
console.log(arrayFilter20)
// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
arrayFilter21 = array.filter(arr => arr % 9 === 0 || arr % 12 === 0 || arr % 13 === 0)
console.log(arrayFilter21)
// 3.22. Gauti tik skaičius, kurie yra didesni už 100.
arrayFilter22 = array.filter(arr => arr > 100)
console.log(arrayFilter22)
// 3.23. Gauti tik skaičius, kurie yra didesni už 555.
arrayFilter23 = array.filter(arr => arr > 555)
console.log(arrayFilter23)
// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
arrayFilter24 = array.filter(arr => arr >= 888)
console.log(arrayFilter24)
// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
arrayFilter25 = array.filter(arr => arr >= 6789)
console.log(arrayFilter25)
// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
arrayFilter26 = array.filter(arr => arr < 50)
console.log(arrayFilter26)
// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
arrayFilter27 = array.filter(arr => arr < 1000)
console.log(arrayFilter27)
// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
arrayFilter28 = array.filter(arr => arr <= -1)
console.log(arrayFilter28)
// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
arrayFilter29 = array.filter(arr => arr < -5564)
console.log(arrayFilter29)
// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
arrayFilter30 = array.filter(arr => arr < 1000 && arr > 500)
console.log(arrayFilter30)
// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
arrayFilter31 = array.filter(arr => arr < 100 && arr > 0)
console.log(arrayFilter31)
// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
arrayFilter32 = array.filter(arr => arr < 0 && arr > -50)
console.log(arrayFilter32)
// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
arrayFilter33 = array.filter(arr => arr <= 0 && arr > -100)
console.log(arrayFilter33)
// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
arrayFilter34 = array.filter(arr => arr >= 0 && arr < 55)
console.log(arrayFilter34)
// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
arrayFilter35 = array.filter(arr => arr >= 444 && arr <= 654)
console.log(arrayFilter35)
// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
arrayFilter36 = array.filter(arr => arr >= 0 && arr % 2 === 0)
console.log(arrayFilter36)
// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
arrayFilter37 = array.filter(arr => arr >= 0 && arr % 3 === 0)
console.log(arrayFilter37)
// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
arrayFilter38 = array.filter(arr => arr < 0 && arr % 4 === 0)
console.log(arrayFilter38)
// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
arrayFilter39 = array.filter(arr => arr < 0 && arr % 111 === 0)
console.log(arrayFilter39)
// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
arrayFilter40 = array.filter(arr => arr > 500 && arr % 2 === 0)
console.log(arrayFilter40)
// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
arrayFilter41 = array.filter(arr => arr > 1000 && arr % 3 === 0)
console.log(arrayFilter41)
// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
arrayFilter42 = array.filter(arr => arr < 1000 && arr % 6 === 0)
console.log(arrayFilter42)
// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
arrayFilter43 = array.filter(arr => arr < 500 && arr % 2 === 0)
console.log(arrayFilter43)
// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
arrayFilter44 = array.filter(arr => arr >= 33 && arr % 6 === 0)
console.log(arrayFilter44)
// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
arrayFilter45 = array.filter(arr => arr >= 444 && arr % 12 === 0)
console.log(arrayFilter45)
// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
arrayFilter46 = array.filter(arr => arr <= 155 && arr % 5 === 0)
console.log(arrayFilter46)
// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
arrayFilter47 = array.filter(arr => arr <= -333 && arr % 9 === 0)
console.log(arrayFilter47)
// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
arrayFilter48 = array.filter(arr => arr > 100 && arr < 500 && arr % 5 === 0)
console.log(arrayFilter48)
// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
arrayFilter49 = array.filter(arr => arr >= 888 && arr < 1000 && arr % 2 === 0)
console.log(arrayFilter49)
// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
arrayFilter50 = array.filter(arr => arr <= 888 && arr >= -333 && arr % 3 === 0 && arr !== 0)
console.log(arrayFilter50)

// 3.51. Gauti tik skaičius.
arrayString2 = array.filter(arr => !isNaN(arr))
console.log(arrayString2)
// 3.52. Gauti tik tekstus (string).
arrayString3 = array.filter(arr => isNaN(arr))
console.log(arrayString3)
// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
arrayString = array.filter(arr => isNaN(arr) && arr.length > 5)
console.log(arrayString)
// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
arrayString = array.filter(arr => isNaN(arr) && arr.length >= 5)
console.log(arrayString)
// 3.55. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
arrayString = array.filter(arr => isNaN(arr) && arr.length <= 5)
console.log(arrayString)
// 3.56. Gauti tik tekstus (string), kurie turi raidę t.
arrayString = array.filter(arr => isNaN(arr) && arr.includes("t"))
console.log(arrayString)
// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
arrayString = array.filter(arr => isNaN(arr) && arr.includes("y"))
console.log(arrayString)
// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
arrayString = array.filter(arr => isNaN(arr) && (arr.includes("e") || arr.includes("a")))
console.log(arrayString)
// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
arrayString = array.filter(arr => isNaN(arr) && (arr.includes("t") && arr.includes("i")))
console.log(arrayString)
// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
arrayString = array.filter(arr => isNaN(arr) && (arr.includes("t") && !arr.includes("k")))
console.log(arrayString)
// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
arrayString = array.filter(arr => isNaN(arr) && (arr.includes("a") && !arr.includes("s")))
console.log(arrayString)
// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
arrayString = array.filter(arr => isNaN(arr) && (arr.match(/t/g) || []).length > 1)
console.log(arrayString)
// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
arrayString = array.filter(arr => isNaN(arr) && (arr.includes("st")))
console.log(arrayString)
// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
arrayString = array.filter(arr => isNaN(arr) && (arr.includes("nd")))
console.log(arrayString)
// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
arrayString = array.filter(arr => isNaN(arr) && (!arr.includes("s")))
console.log(arrayString)
// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
arrayString = array.filter(arr => isNaN(arr) && (!arr.includes("t")))
console.log(arrayString)
// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
arrayString = array.filter(arr => isNaN(arr) && (!arr.includes("r") && !arr.includes("l")))
console.log(arrayString)
// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
arrayString = array.filter(arr => isNaN(arr) && !isNaN(arr[0]))
console.log(arrayString)
// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
arrayString = array.filter(arr => isNaN(arr) && arr[0].includes("s"))
console.log(arrayString)
// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
arrayString = array.filter(arr => isNaN(arr) && arr[0].includes("o"))
console.log(arrayString)
// 3.70. Gauti tik tekstus (string), kurie baigiasi raide d.
arrayString = array.filter(arr => isNaN(arr) && arr.endsWith("d"))
console.log(arrayString)
// 3.71. Gauti tik tekstus (string), kurie baigiasi raide s.
arrayString = array.filter(arr => isNaN(arr) && arr.endsWith("s"))
console.log(arrayString)
// 3.72. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
arrayString = array.filter(arr => isNaN(arr) && arr.length > 4 && arr.includes("o"))
console.log(arrayString)
// 3.73. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
arrayString = array.filter(arr => isNaN(arr) && arr.length >= 5 && arr.includes("a"))
console.log(arrayString)
// 3.74. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
arrayString = array.filter(arr => isNaN(arr) && arr.length <= 5 && arr.includes("a"))
console.log(arrayString)
// 3.75. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
arrayString = array.filter(arr => isNaN(arr) && arr.length % 2 === 0)
console.log(arrayString)
// 3.76. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
arrayString = array.filter(arr => isNaN(arr) && arr.length % 2 !== 0 && arr.includes("s"))
console.log(arrayString)
// 3.77. Gauti tik tekstus (string), kurių trečia simbolis yra a.
arrayString = array.filter(arr => isNaN(arr) && arr[2] === 'a')

// arrayString = array.filter(arr => isNaN(arr) && arr[2].includes("a"))
console.log(arrayString)
// 3.78. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
arrayString = array.filter(arr => isNaN(arr) && arr[3] === 'l')
console.log(arrayString)
// 3.79. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
arrayString = array.filter(arr => isNaN(arr) && arr[3] !== 't' && arr.length > 4)
console.log(arrayString)
// 3.80. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.
arrayString = array.filter(arr => isNaN(arr) && arr[0] !== 'e' && arr.length < 6 && isNaN(arr[0]))
console.log(arrayString)



// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map metodą. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:

// 4.1. Tik skaičius (number tipo duomenis).\
let string = []
let result = []
for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {
        result.push(array[i])
    }
}
console.log(result)
result = []
array.map(num => {
    if (!isNaN(num)) {
        result.push(num)
    }
})
console.log(result)
// 4.2. Tik tekstą (string tipo duomenis).
result = []
for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
        result.push(array[i])
    }
}
console.log(result)
result = []
array.map(word => {
    if (isNaN(word)) {
        result.push(word)
    }
})
console.log(result)
// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
result = []
for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {
        let raisedDegree = array[i]
        raisedDegree = raisedDegree ** 4
        result.push(raisedDegree)
    }
}
console.log(result)
result = []
array.map(num => {
    if (!isNaN(num)) {
        let raisedDegree = num
        raisedDegree = raisedDegree ** 4
        result.push(raisedDegree)
    }
})
console.log(result)
// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
result = []
for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {
        let raisedDegree = array[i]
        raisedDegree = raisedDegree + 55
        result.push(raisedDegree)
    }
}
console.log(result)
result = []
array.map(num => {
    if (!isNaN(num)) {
        let raisedDegree = num
        raisedDegree = raisedDegree + 55
        result.push(raisedDegree)
    }
})
console.log(result)
// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
result = []
for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {
        let raisedDegree = array[i]
        raisedDegree = raisedDegree / 2
        result.push(raisedDegree)
    }
}
console.log(result)
result = []
array.map(num => {
    if (!isNaN(num)) {
        let raisedDegree = num
        raisedDegree = raisedDegree / 2
        result.push(raisedDegree)
    }
})
console.log(result)
// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
result = []
for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {
        result.push("Number: " + array[i])
    }
}
console.log(result)
result = []
array.map(num => {
    if (!isNaN(num)) {
        result.push("Number: " + num)
    }
})
console.log(result)
// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
// "Index: 0, Number: 2"
// "Index: 1, Number: 3"
// "Index: 2, Number: 5"
// Ir t.t.
result = []
for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {
        result.push(`Index: ${i}, Number: ${array[i]}`)
    }
}
console.log(result)
result = []
array.map((num, index) => {
    if (!isNaN(num)) {
        result.push(`Index: ${index}, Number: ${num}`)
    }
})
console.log(result)
// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.
result = []
for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {
        let raisedDegree = array[i]
        raisedDegree = raisedDegree * i
        result.push(raisedDegree)
    }
}
console.log(result)
result = []
array.map((num, index) => {
    if (!isNaN(num)) {
        let raisedDegree = num
        raisedDegree = raisedDegree * index
        result.push(raisedDegree)
    }
})
console.log(result)
// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
// - Pirmo skaičiaus dauginti nereikia.
// - Antrą skaičių dauginti iš pirmo.
// - Trečią skaičių dauginti iš antro.
// - Ketvirta skaičių dauginti iš trečio.
// - Penktą skaičių dauginti iš ketvirto.
// Ir t.t.

result = []
for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {
        string.push(array[i])
    }
}
for (let i = 0; i < string.length; i++) {
        if (string.length -1 === i){
            
        } else {
            result.push(`${string[i + 1]} * ${string[i]} = ${string[i] * string[i + 1]}`)
        }

}
console.log(result)
result = []
string = []
array.map(num => {
    if (!isNaN(num)) {
       string.push(num)
    }
})
string.map((num, index) => {
    if (string.length - 1 === index){

    } else {
        result.push(`${string[index + 1]} * ${num} = ${num * string[index + 1]}`)
    }
})

console.log(result)
// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.
result = []
for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {
        let raisedDegree = array[i]
        raisedDegree = raisedDegree * 5
        if (raisedDegree > 350) result.push(raisedDegree)
    }
}
console.log(result)
result = []
array.map(num => {
    if (!isNaN(num)) {
        let raisedDegree = num
        raisedDegree = raisedDegree * 5
        if (raisedDegree > 350) result.push(raisedDegree)
    }
})
console.log(result)
// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".
result = []
for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
        result.push(`${array[i]} has ${array[i].length} symbols`)
    }
}
console.log(result)
result = []
array.map(word => {
    if (isNaN(word)) {
        result.push(`${word} has ${word.length} symbols`)
    }
})
console.log(result)
// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".
result = []
string = []
for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
        for (let j = 0; j < array[i].length; j++) {
            string.push(array[i][j]);
        }
        result.push(string.join("-").toUpperCase())
        string = []
    }
}
// console.log(string.join("-"))
console.log(result)
result = []

array.map(word => {
    if (isNaN(word)) {
        let string = word.split("")
        result.push(string.join("-").toUpperCase())
    }
})
console.log(result)
// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
result = []

for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
        for (let j = 0; j < array[i].length; j++) {
            if (j === 0) {
                string.push("_")
            } else if (j === 2) {
                string.push("_")
            } else {
                string.push(array[i][j]);
            }
        }
        result.push(string.join(""))
        string = []
    }
}
// console.log(string.join("-"))
console.log(result)
result = []

array.map(word => {
    if (isNaN(word)) {
        string = word.split("")
        string[0] = "_"
        string[2] = "_"
        result.push(string.join(""))
    }
})
console.log(result)
// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
result = []
for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
        string = array[i].split('')
        string.reverse()
        result.push(string.join(""))

    }
}
console.log(result)
result = []
array.map(word => {
    if (isNaN(word)) {
        string = word.split('')
        string.reverse()
        result.push(string.join(""))
    }
})
console.log(result)
// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obulys is between -5564 and -51 in the array".
result = []
string = []
for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
        string.push(array[i])
    }
}
for (let i = 0; i < string.length; i++) {
    if(i === 0){
        result.push(`Word: (${string[i]}) obulys is between (${string[i + 1]}) in the array`)
        
    } else if (i === string.length - 1){
        result.push(`Word: (${string[i-1]}) obulys is between (${string[i]}) in the array`)
    } else {
        result.push(`Word: (${string[i]}) obulys is between (${string[i -1]}) and (${string[i + 1]}) in the array`)
    }
}
console.log(result)
result = []
string = []
array.map(word => {
    if (isNaN(word)) {
        string.push(word)
    }
})
string.map((word, index) => {
    
    if(0 === index){
        result.push(`Word: (${word}) obulys is between (${string[1]}) in the array`)
        
        
    } else if (index === string.length - 1){
        result.push(`Word: (${string[index - 1]}) obulys is between (${word}) in the array`)
    } else {
        
        result.push(`Word: (${word}) obulys is between (${string[index -1]}) and (${string[index + 1]}) in the array`)
    }
})
console.log(result)



// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
// - Pirmo skaičiaus dauginti nereikia.
// - Antrą skaičių dauginti iš pirmo.
// - Trečią skaičių dauginti iš antro.
// - Ketvirta skaičių dauginti iš trečio.
// - Penktą skaičių dauginti iš ketvirto.
// Ir t.t.
// let count = 0
// result = []
// for (let i = 0; i < array.length; i++) {
//     if (!isNaN(array[i])) {
//         if (count === 0) {
            
//             result = array[i]
//             count++
//         } else {
//             result *= array[i]
//         }
//     }
// }
// console.log(result)
// result = []
// count = 0
// array.map(num => {
//     if (!isNaN(num)) {
//         if (count === 0) {
//             result = num
//             count++
//         } else {
//             result *= num
//         }
//     }
// })
// console.log(result)

