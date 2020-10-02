function countWords(){
    var word = document.getElementById('wordText').value;
    console.log(word);
    var lengthOfWord = word.length;
    console.log(lengthOfWord);
    document.getElementById('wordLength').style.display = 'block';
    document.getElementById('wordLength').innerHTML = lengthOfWord;
}
