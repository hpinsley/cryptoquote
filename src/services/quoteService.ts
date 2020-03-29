import quotes1 from '../data/sample-puzzles/puzzles-01'
import quotes2 from '../data/sample-puzzles/puzzles-02'
import { Quotation } from '../models/gameModels';


export function GetRandomQuote(): Quotation {
    const quotes = getAllQuotes();
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
}

export function encrypt(plainText: string) : string
{
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  const shuffled = shuffle(Array.from(alphabet));
  const letterArray = Array.from(alphabet);

  const letterMap = new Map<string,string>();
  for (let i = 0; i < letterArray.length; ++i)
  {
    letterMap.set(letterArray[i], shuffled[i])
  }

  const plainChars = Array.from(plainText.toUpperCase());
  const mappedChars = plainChars.map(c => letterMap.has(c) ? letterMap.get(c) : c);
  const encryptedText = mappedChars.join("");
  console.log(`Plain text: ${plainText}`);
  console.log(`Encrypted: ${encryptedText}`);

  return encryptedText;
}

export function getKnownQuotationCount() : number
{
  return getAllQuotes().length;
}

function getAllQuotes() : Quotation[]
{
  const quotes = [...quotes1, ...quotes2];
  return quotes;
}

function shuffle(array: string[]) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};