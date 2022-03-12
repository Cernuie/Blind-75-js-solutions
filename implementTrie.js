var TrieNode = function() {
    this.children = new Map();
    this.isEnd = false;
}
var Trie = function() {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */

Trie.prototype.insert = function(word) {
    let cur = this.root;
    
    for (letter of word) {
        if(!cur.children.has(letter)){
            cur.children.set(letter, new TrieNode());
        }
        cur = cur.children.get(letter)
    }
    cur.isEnd = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let cur = this.root;
    for (letter of word) {
        if(!cur.children.has(letter)){
            return false
        }
        cur = cur.children.get(letter)
    }
    return cur.isEnd
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let cur = this.root;
    for (letter of prefix) {
        if(!cur.children.has(letter)){
            return false
        }
        cur = cur.children.get(letter)
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */