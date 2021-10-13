import { useState } from 'react';
import '../../App.scss'

function Error() {
    var title1 = String.raw`
  _______________
 /               \------*****
|    BOMB         |
|                 |
 \_______________/
    `;
var title2 = String.raw`
  _______________
 /               \------****
|    BOMB         |
|                 |
 \_______________/
    `;
var title3 = String.raw`
_______________
/               \------***
|    BOMB         |
|                 |
\_______________/
      `;
var title4 = String.raw`
 _______________
/               \------**
|    BOMB        |
|                |
\_______________/
        `;
var title5 = String.raw`
 _______________
/               \------*
|    BOMB        |
|                |
\_______________/
`;
var title6 = String.raw`
 _______________
/               \------
|    BOMB        |
|                |
\_______________/
        `;
var title7 = String.raw`
 _______________
/               \---
|    BOMB        |
|                |
\_______________/
          `;
var title8 = String.raw`
 _______________
/               \
|    BOMB        |
|                |
\_______________/
            `;
var title9 = String.raw`
   01010101010001
1010101010110101010
00000111111000000000
0010101100000001101010
1000101010101010101010
1010101010101010101
 10101001010101010
              `;
// var title10 = String.raw`
// 10101001010101010
// `;
var bombs = [title1, title2, title3, title4, title5, title6, title7, title8, title9]
    const [count, setCount] = useState(0);
    const [currentBomb, setCurrentBomb] = useState(bombs[0]);
setInterval(function () {
        setCount(count + 1)
        setCurrentBomb(bombs[count])
    }, 1300);
  return (
    <div className="Subtitle">
        Ohhhhh no! You really messed up! You set off the bomb! Well, haha you probably mistyped something. I mean you did set off the bomb too, so you might wanna get your sober friend to help you defuse it...      
        <pre className="Subtitle">
            {currentBomb}
        </pre>
    </div>
    
  )
}

export default Error;