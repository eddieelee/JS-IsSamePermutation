function isSamePermutation(str1, str2) {
    //compare two strings
    return str1.split('').sort().join('') == str2.split('').sort().join('');
}

isSamePermutation('apple', 'elppa'); //true
isSamePermutation('apple', 'abble'); //false