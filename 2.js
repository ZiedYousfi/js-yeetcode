/**
 * Definition for singly-linked list.
 * @typedef {Object} ListNode
 * @property {number} val
 * @property {ListNode | null} next
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  /** @type {String} */
  let l1String = listToString(l1).split('').reverse().join('');
  let l2String = listToString(l2).split('').reverse().join('');
  console.log(l2String);

  let resultString = (BigInt(l1String) + BigInt(l2String)).toString();

  return stringToList(resultString.split('').reverse().join(''))
};

/**
 *
 * @param {ListNode} head
 * @returns {String}
 */
function listToString(head) {
  /** @type {String}  */
  let result = '';
  let curr = head;

  while (curr !== null) {
    /** @type {String} */
    const currValAsString = curr.val.toString() ?? '';
    result += currValAsString;

    curr = curr.next;
  }

  return result;
}

/**
 *
 * @param {String} s
 * @return {ListNode} head
 */
function stringToList(s) {
  /** @type {ListNode} */
  let head = {val: 0, next: null};

  /** @type {ListNode} */
  let curr = head;

  const sw = s.split('');

  for (let i = 0; i < sw.length; i++) {
    const element = sw[i];

    if (i === 0) {
      curr.val = parseInt(element);
      continue;
    }

    curr.next = {val: 0, next: null};
    curr = curr.next;
    curr.val = parseInt(element);
  }

  return head;
}

console.log(
    listToString(addTwoNumbers(stringToList('243'), stringToList('564'))));
console.log(listToString(addTwoNumbers(stringToList('0'), stringToList('0'))));
console.log(listToString(addTwoNumbers(
    stringToList('1000000000000000000000000000001'), stringToList('564'))));
