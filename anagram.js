function anagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input / Not Anagram');
       return
    }
    let str1 = a.split('').sort().join('');
    console.log(str1)
    let str2 = b.split('').sort().join('');
    console.log(str1)

    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 anagram("indian","ndianii")